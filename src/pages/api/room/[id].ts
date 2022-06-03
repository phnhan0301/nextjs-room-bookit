import { RoomController } from 'app/controllers';
import { errorMiddleware } from 'app/middlewares';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const roomController = new RoomController();
const handler = nextConnect({
  onError: errorMiddleware,
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(405).send('Method Not Allowed');
  },
});

handler.get(roomController.getRoomDetail);
handler.put(roomController.updateRoom);
handler.delete(roomController.destroyRoom);

export default handler;
