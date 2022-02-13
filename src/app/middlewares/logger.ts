import { Request, Response, NextFunction } from "express";

/**
 * Logger middleware
 *
 * @param req
 * @param res
 * @param next
 *
 * @returns {void}
 */
const logger = (req: Request, res: Response, next: NextFunction): void => {
  // record the time the request was made
  const start = Date.now();
  // log the request with start time
  console.log(
    `:: ${req.method} ${req.originalUrl} [Started ${new Date(
      start
    ).toLocaleString()}]`
  );
  res.on("finish", () => {
    // count the duration of the request
    const duration = Date.now() - start; // in milliseconds
    // log the request with duration
    console.log(
      `:: ${req.method} ${req.originalUrl} ${res.statusCode} [Finished in ${duration}ms]`
    );
  });
  // call next middleware/function
  next();
};

export default logger;
