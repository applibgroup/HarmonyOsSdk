export interface Callback<T> {
    (data: T): void;
}

export interface ErrorCallback<T extends Error = BusinessError> {
    (err: T): void;
}

export interface AsyncCallback<T> {
    (err: BusinessError, data: T): void;
}

export interface BusinessError extends Error {
    code: number;
}
