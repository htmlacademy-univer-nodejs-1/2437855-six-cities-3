import { Request } from 'express';
import { RequestBody } from '../../rest/index.js';
import { CreateCommentDto } from './dto/createComment.dto.js';
import { ParamsDictionary } from 'express-serve-static-core';

export type CreateByIdRequestParams = {id: string} | ParamsDictionary;
export type FindByIdRequestParams = {id: string} | ParamsDictionary;
export type CreateCommentRequest = Request<CreateByIdRequestParams, RequestBody, CreateCommentDto>;
