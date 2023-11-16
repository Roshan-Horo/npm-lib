import { Post, Comment } from "./models";

export interface Response {
    status: string;
    body?: unknown;
    headers?: Record<string, unknown>;
}

export interface ErrorResponse extends Response {
    status: "400" | "404" | "500";
    body: {
        errorCode: string;
        message: string;
    }
}

export interface AddPost201Response extends Response {
    status: "201";
    body?: never;
}

export interface ListPosts200Response extends Response {
    status: "200";
    body: Post[];
}

export interface UpdatePost201Response extends Response {
    status: "201";
    body?: never;
}

export interface GetPost200Response extends Response {
    status: "201";
    body: Post;
}

export interface DeletePost200Response extends Response {
    status: "200";
    body?: never;
}

export interface ListComments200Response extends Response {
    status: "200";
    body: Comment[];
}