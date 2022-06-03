import { NextApiRequest, NextApiResponse } from 'next';

export class RoomController {
  getAllRoom(req: NextApiRequest, res: NextApiResponse) {
    res.status(200);
    res.json({
      statusCode: 'SUCCESS',
      message: 'Get all rooms',
    });
  }
}
