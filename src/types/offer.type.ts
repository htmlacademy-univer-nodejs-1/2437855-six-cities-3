import { City } from './city.enum.js';
import { Conveniences } from './conveniences.enum.js';
import { HouseTypeEnum } from './house-type.enum.js';
import { User } from './user.type.js';

export type Offer = {
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