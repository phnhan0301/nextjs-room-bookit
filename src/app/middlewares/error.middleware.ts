import { NextApiRequest, NextApiResponse } from 'next';
import httpStatus from 'http-status';
import { ApiErrorHandler } from 'app/helpers';

const errorMiddleware = (err: any, _: NextApiRequest, res: NextApiResponse) => {
  let error = {
    ...err,
    statusCode: err.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
    message: err.message,
  };

  // Handle wrong mongoose object id error
  if (err.name === 'CastError') {
    error = {
      message: `Resource not found. Invalid: ${err.path}`,
      statusCode: 400,
    };
  }

  // Handling mongoose validation error
  if (err.name === 'ValidationError') {
    error = {
      message: Object.values(err.errors).map(
        (errorItem) => (errorItem as any).message,
      ),
      statusCode: 400,
    };
  }

  res.status(error.statusCode);
  res.json({
    error,
    stack: error.stack,
  });
};

export default errorMiddleware;
