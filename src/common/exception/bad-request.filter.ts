import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class BadRequestFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    switch (exception.code) {
      //Mongodb Duplication error code
      case 11000:
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          error: exception.name,
          message: [
            `${Object.keys(exception.keyValue).join(', ')} already exists.`,
          ],
        });
      default:
        const error = {
          error: exception.response
            ? exception.response.error
            : exception.error,
          message: exception.response
            ? Array.isArray(exception.response.message)
              ? [...exception.response.message]
              : [exception.response.message]
            : [exception.message],
        };
        return response
          .status(exception?.status || HttpStatus.BAD_REQUEST)
          .json({
            ...error,
            statusCode: exception?.status || HttpStatus.BAD_REQUEST,
          });
    }
  }
}
