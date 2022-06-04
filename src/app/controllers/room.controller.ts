import { BaseController } from 'app/controllers';
import { RoomModel } from 'app/models';
import { ApiErrorHandler, catchAsyncError } from 'app/helpers';
import httpStatus from 'http-status';
import { NextApiRequest, NextApiResponse } from 'next';

export class RoomController extends BaseController {
  getAllRooms = catchAsyncError(
    async (
      _: NextApiRequest,
      res: NextApiResponse,
      next: (args: ApiErrorHandler) => any,
    ) => {
      const rooms = await RoomModel.find();

      res.status(httpStatus.OK);
      res.json({
        data: rooms,
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
