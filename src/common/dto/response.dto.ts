// This declares a generic type parameter T in the ResponseDto class
export class ResponseDto<T> {
    status: number;
    data?: T;     // data can be of any type T
    message?: string;
    error?: string;
}