import { BaseController } from 'app/controllers';
import { RoomModel } from 'app/models';
import { NextApiRequest, NextApiResponse } from 'next';

export class RoomController extends BaseController {
  async getAllRooms(req: NextApiRequest, res: NextApiResponse) {
    res.status(200);
    res.json({
      statusCode: 'SUCCESS',
      message: 'Get all rooms',
    });
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
