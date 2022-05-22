export interface HotelQuery {
  CityCode: string;
  CheckInDate?: Date;
  CheckOutDate?: Date;
  RoomQuantity?: number;
  Adults?: number;
  Children?: number;
  Sort?: string;
  BestRateOnly?: boolean;
  Radius?: number;
  RadiusUnit?: string;
  DailyPriceFrom: number;
  DailyPriceTo: number;
  StarRatingFrom: number;
  StarRatingTo: number;
  dateDiff: any;
}
