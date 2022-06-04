import { NextApiRequest, NextApiResponse } from 'next';

const catchAsyncError =
  (func: any) => (req: NextApiRequest, res: NextApiResponse, next: any) =>
    Promise.resolve(func(req, res, next)).catch(next);

export default catchAsyncError;
