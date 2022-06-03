import { NextApiRequest, NextApiResponse } from 'next';
import httpStatus from 'http-status';

const errorMiddleware = (err: any, _: NextApiRequest, res: NextApiResponse) => {
  const error = {
    ...err,
    statusCode: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    message: err.message,
  };

  res.status(error.statusCode);
  res.json({
    error,
    stack: error.stack,
  });
};

export default errorMiddleware;
