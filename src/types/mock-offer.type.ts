import { City, Conveniences, HouseTypeEnum , User } from './index.js';

export type MockOffer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  preview: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rate: number;
  houseType: HouseTypeEnum;
  room: number;
  guest: number;
  price: number;
  conveniences: Conveniences[];
  user: Omit<User, 'password'>;
  commentsCount: number;
  coords: [string, string];
}