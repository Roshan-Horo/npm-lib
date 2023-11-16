import { CreatePostOptions, DeletePostOptions, GetPostOptions, ListPostOptions } from "./requestOptions";
import { ListPosts200Response , ErrorResponse, AddPost201Response, DeletePost200Response, GetPost200Response, ListComments200Response } from "./responses";


export interface PostLibrary {
    "/posts": {
        get: (input?: ListPostOptions) => Promise<ListPosts200Response | ErrorResponse>;
        post: (input: CreatePostOptions) => Promise<AddPost201Response | ErrorResponse>;
    },
    "/posts/{postId}": {
        delete: (input?: DeletePostOptions) => Promise<DeletePost200Response | ErrorResponse>;
        get: (input?: GetPostOptions) => Promise<GetPost200Response | ErrorResponse>;
    };
    "/posts/{postId}/comments": {
        get: (input?: ListPostOptions) => Promise<ListComments200Response | ErrorResponse>;
    }
}

type PathParameter<TPath extends string> = 
    TPath extends `${infer Head}/{${infer Parameter}}${infer Tail}` 
        ? [pathParameter: string, ...params: PathParameter<Tail>]
        : [];

export type Path = <TPath extends keyof PostLibrary>(
    path: TPath,
    ...pathParam: PathParameter<TPath>
    ) => PostLibrary[TPath];

export declare function PostsClient(baseUrl: string): {
    path: Path;
};