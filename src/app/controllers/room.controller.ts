import { BaseController } from 'app/controllers';
import { RoomModel } from 'app/models';
import { ApiErrorHandler } from 'app/helpers';
import httpStatus from 'http-status';
import { NextApiRequest, NextApiResponse } from 'next';

export class RoomController extends BaseController {
  async getAllRooms(
    _: NextApiRequest,
    res: NextApiResponse,
    next: (args: ApiErrorHandler) => any,
  ) {
    try {
      const rooms = await RoomModel.find();

      res.status(httpStatus.OK);
      res.json({
        data: rooms,
      });
    } catch (error) {
      return next(
        new ApiErrorHandler({
          statusCode: httpStatus.BAD_REQUEST,
          message: (error as Error).message,
        }),
      );
    }
  }

  async getRoomDetail(
    { query }: NextApiRequest,
    res: NextApiResponse,
    next: (args: ApiErrorHandler) => any,
  ) {
    try {
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
    } catch (error) {
      return next(
        new ApiErrorHandler({
          statusCode: httpStatus.BAD_REQUEST,
          message: (error as Error).message,
        }),
      );
    }
  }

  async createNewRoom(
    { body }: NextApiRequest,
    res: NextApiResponse,
    next: (args: ApiErrorHandler) => any,
  ) {
    try {
      const room = await RoomModel.create(body);

      res.status(httpStatus.CREATED);
      res.json({
        data: room,
      });
    } catch (error) {
      return next(
        new ApiErrorHandler({
          statusCode: httpStatus.BAD_REQUEST,
          message: (error as Error).message,
        }),
      );
    }
  }

  async updateRoom(
    { body, query }: NextApiRequest,
    res: NextApiResponse,
    next: (arg: ApiErrorHandler) => any,
  ) {
    try {
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
    } catch (error) {
      return next(
        new ApiErrorHandler({
          statusCode: httpStatus.BAD_REQUEST,
          message: (error as Error).message,
        }),
      );
    }
  }

  async destroyRoom(
    { query }: NextApiRequest,
    res: NextApiResponse,
    next: (args: ApiErrorHandler) => any,
  ) {
    try {
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
    } catch (error) {
      return next(
        new ApiErrorHandler({
          statusCode: httpStatus.BAD_REQUEST,
          message: (error as Error).message,
        }),
      );
    }
  }
}
