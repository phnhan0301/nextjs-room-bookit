import { BaseController } from 'app/controllers';
import { RoomModel } from 'app/models';
import { ApiErrorHandler, catchAsyncError } from 'app/helpers';
import httpStatus from 'http-status';
import { NextApiRequest, NextApiResponse } from 'next';
import RoomApiHelper from 'app/helpers/roomApiHelper';
import { MAX_PER_PAGE, RES_PER_PAGE } from 'app/configs';

export class RoomController extends BaseController {
  getAllRooms = catchAsyncError(
    async ({ query }: NextApiRequest, res: NextApiResponse) => {
      const total = await RoomModel.countDocuments();
      const perOnPage = query.pageSize
        ? Number(query.pageSize) > MAX_PER_PAGE
          ? MAX_PER_PAGE
          : Number(query.pageSize)
        : RES_PER_PAGE;

      const roomApiHelper = new RoomApiHelper(RoomModel.find(), query)
        .search()
        .filter();

      let rooms = await (roomApiHelper as any).query;

      roomApiHelper.pagination(perOnPage);
      rooms = await (roomApiHelper as any).query.clone();
      const pageSize = rooms.length;

      res.status(httpStatus.OK);
      res.json({
        data: rooms,
        total,
        perOnPage,
        pageSize,
      });
    },
  );

  getRoomDetail = catchAsyncError(
    async (
      { query }: NextApiRequest,
      res: NextApiResponse,
      next: (args: ApiErrorHandler) => any,
    ) => {
      const room = await RoomModel.findById(query.id);
      if (!room) {
        return next(
          new ApiErrorHandler({
            statusCode: httpStatus.NOT_FOUND,
            message: 'Room not found with this ID',
          }),
        );
      }

      res.status(httpStatus.OK);
      res.json({
        data: room,
      });
    },
  );

  createNewRoom = catchAsyncError(
    async (
      { body }: NextApiRequest,
      res: NextApiResponse,
      next: (args: ApiErrorHandler) => any,
    ) => {
      const room = await RoomModel.create(body);

      res.status(httpStatus.CREATED);
      res.json({
        data: room,
      });
    },
  );

  updateRoom = catchAsyncError(
    async (
      { body, query }: NextApiRequest,
      res: NextApiResponse,
      next: (arg: ApiErrorHandler) => any,
    ) => {
      const room = await RoomModel.findByIdAndUpdate(query.id, body, {
        new: true,
        runValidators: true,
      });

      if (!room) {
        return next(
          new ApiErrorHandler({
            statusCode: httpStatus.NOT_FOUND,
            message: 'Room not found with this ID',
          }),
        );
      }

      res.status(httpStatus.OK);
      res.json({
        data: room,
      });
    },
  );

  destroyRoom = catchAsyncError(
    async (
      { query }: NextApiRequest,
      res: NextApiResponse,
      next: (args: ApiErrorHandler) => any,
    ) => {
      const room = await RoomModel.findById(query.id);

      if (!room) {
        return next(
          new ApiErrorHandler({
            statusCode: httpStatus.NOT_FOUND,
            message: 'Room not found with this ID',
          }),
        );
      }

      await room.remove();

      res.status(httpStatus.NO_CONTENT).end();
    },
  );
}
