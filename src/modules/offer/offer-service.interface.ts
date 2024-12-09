import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { Types } from 'mongoose';
import { CreateOfferDto } from './dto/create-offer.dto.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';


export interface OfferService {
  create(dto: CreateOfferDto, salt: string): Promise<DocumentType<OfferEntity>>;
  findById(id: Types.ObjectId): Promise<DocumentType<OfferEntity> | null>;
  updateById(id:Types.ObjectId, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  deleteById(id:Types.ObjectId):Promise<DocumentType<OfferEntity> | null>;
  find(count?: number): Promise<{offers:Array<DocumentType<OfferEntity>>}>;
  incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  findPremiumByCityName(city: string): Promise<DocumentType<OfferEntity>[] | null>;
}