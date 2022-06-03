import { BaseController } from 'app/controllers';
import { RoomModel } from 'app/models';
import { NextApiRequest, NextApiResponse } from 'next';

export class RoomController extends BaseController {
  async getAllRooms(req: NextApiRequest, res: NextApiResponse) {
    try {
      const rooms = await RoomModel.find();

      res.status(200);
      res.json({
        statusCode: 'SUCCESS',
        data: rooms,
      });
    } catch (error) {
      console.error((error as Error).message);

      res.status(400);
      res.json({
        statusCode: 'ERROR',
        message: (error as Error).message,
      });
    }
  }

  async getRoomDetail({ query }: NextApiRequest, res: NextApiResponse) {
    try {
      const room = await RoomModel.findById(query.id);
      if (!room) {
        res.status(404);
        res.json({
          statusCode: 'NOT_FOUND',
          message: 'Room not found with this ID',
          data: null,
        });
        return;
      }

      res.status(200);
      res.json({
        statusCode: 'SUCCESS',
        data: room,
      });
    } catch (error) {
      console.error((error as Error).message);

      res.status(400);
      res.json({
        statusCode: 'ERROR',
        message: (error as Error).message,
      });
    }
  }

  async createNewRoom({ body }: NextApiRequest, res: NextApiResponse) {
    try {
      const room = await RoomModel.create(body);

      res.status(200);
      res.json({
        statusCode: 'SUCCESS',
        data: room,
      });
    } catch (error) {
      console.error((error as Error).message);

      res.status(400);
      res.json({
        statusCode: 'ERROR',
        message: (error as Error).message,
      });
    }
  }
}
