import { City, HouseTypeEnum ,Conveniences} from '../../../types/index.js';

export class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public city?: City;
  public preview?: string;
  public images?: string[];
  public houseType?: HouseTypeEnum;
  public room?: number;
  public guest?: number;
  public price?: number;
  public conveniences?: Conveniences[];
  coords?: [string, string];
}