import { Container } from 'inversify';
import { Component } from '../../types/component.enum.js';
import { types } from '@typegoose/typegoose';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { DefaultCommentService } from './default-comment.service.js';
import { CommentService } from './comment-service.interface.js';

export const createCommentContainer = () => {
  const commentContainter = new Container();

  commentContainter.bind<CommentService>(Component.CommentService).to(DefaultCommentService).inSingletonScope();
  commentContainter.bind<types.ModelType<CommentEntity>>(Component.CommentModel).toConstantValue(CommentModel);
  return commentContainter;
};