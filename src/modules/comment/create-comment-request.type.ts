import { Request } from 'express';
import { RequestBody, RequestParams } from '../../rest/index.js';
import { CreateCommentDto } from './dto/createComment.dto.js';

export type CreateCommentRequest = Request<RequestParams, RequestBody, CreateCommentDto>;
