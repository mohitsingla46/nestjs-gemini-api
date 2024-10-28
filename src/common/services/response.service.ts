import { Injectable } from '@nestjs/common';
import { ResponseDto } from '../dto/response.dto';

@Injectable()
export class ResponseService {
    // This method uses generic type T to maintain type safety
    success<T>(data: T, message = 'Success'): ResponseDto<T> {
        return {
            status: 200,
            data,    // data will be of type T
            message,
        };
    }

    error(error: string, status = 400): ResponseDto<null> {
        return {
            status,
            error,
        };
    }
}