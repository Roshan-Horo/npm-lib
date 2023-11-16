import { Post } from './models'

export interface RequestOptions {
    body?: unknown;
    headers?: Record<string, string>;
    queryParameters?: Record<string, string>;
}

export interface ListPostOptions extends RequestOptions {
    body?: never;
}

export interface CreatePostOptions extends RequestOptions {
    body: {title: string, body: string, userId: number};
}

export interface UpdatePostOptions extends RequestOptions {
    body: {title: string, body: string, userId: number};
    headers?: {etag?: string}
}

export interface GetPostOptions extends RequestOptions {
    body?: never;
}

export interface DeletePostOptions extends RequestOptions {
    body?: never;
}