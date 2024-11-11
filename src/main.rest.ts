import { createRestApplication } from './rest/rest.container.js';
import { createUserContainer } from './modules/user/index.js';
import { createOfferContainer } from './modules/offer/offer.container.js';
import { createCommentContainer } from './modules/comment/comment.container.js';
import { createFavoriteContainer } from './modules/favorite/favorite.container.js';
import 'reflect-metadata';
import {Container} from 'inversify';
import { RestApplication } from './rest/index.js';
import { Component } from './types/index.js';

const bootstrap = async () => {
    const appContainer = Container.merge(
        createRestApplication(),
        createUserContainer(),
        createOfferContainer(),
        createCommentContainer(),
        createFavoriteContainer()
    );
    const restApplication = appContainer.get<RestApplication>(Component.RestApplication);
    await restApplication.init();
};

bootstrap();