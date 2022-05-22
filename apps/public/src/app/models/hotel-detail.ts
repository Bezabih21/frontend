export interface Success {
  timeStamp: Date;
}

export interface ApplicationResults {
  status: string;
  success: Success[];
  warning: any[];
  error: any[];
}

export interface HotelInfo {
  name?: string;
  hotelCode?: string;
  codeContext?: string;
  hotelName?: string;
  chainCode?: string;
  chainName?: string;
  brandCode?: string;
  brandName?: string;
  status?: string;
  sabreRating?: string;
  type?: string;
  description?: string;
  amenities: any[];
  starRate: string;
  address: any;
}

export interface Text {
  type: string;
  value: string;
  language?: any;
}

export interface SearchedHotelDetail {
  pricePerDay: string | number;
  currency: string;
  totalDays: string;
  totalPrice: string | number;
}

export interface Policy {
  text: Text;
}

export interface Policies {
  policy: Policy[];
}

export interface PropertyQuality {
  code: string;
  description: string;
}

export interface PropertyQualityInfo {
  propertyQuality: PropertyQuality[];
}

export interface PropertyInfo {
  floors: string;
  rooms: string;
  policies: Policies;
  propertyQualityInfo: PropertyQualityInfo;
}

export interface CityName {
  cityCode: string;
  value: string;
}

export interface StateProv {
  stateCode: string;
  value: string;
}

export interface CountryName {
  code: string;
  value: string;
}

export interface Address {
  addressLine1: string;
  addressLine2: string;
  cityName: CityName;
  stateProv: StateProv;
  postalCode: string;
  countryName: CountryName;
}

export interface Contact {
  phone: string;
  fax: string;
}

export interface LocationInfo {
  latitude: number;
  longitude: number;
  address: Address;
  contact: Contact;
}

export interface Amenity {
  code: string;
  description: string;
}

export interface Amenities {
  amenity: Amenity[];
}

export interface Text2 {
  type: string;
  value: string;
  language?: any;
}

export interface Description {
  text: Text2;
}

export interface Descriptions {
  description: Description[];
}

export interface Airports {}

export interface HotelDescriptiveInfo {
  propertyInfo: PropertyInfo;
  locationInfo: LocationInfo;
  amenities: Amenities;
  descriptions: Descriptions;
  airports: Airports;
}

export interface Image {
  url: string;
  type: string;
  height: number;
  width: number;
}

export interface ImageItems {
  image: Image[];
}

export interface Text3 {
  type?: any;
  value: string;
  language: string;
}

export interface Description2 {
  text: Text3[];
}

export interface Category {
  categoryCode: number;
  description: Description2;
}

export interface Text4 {
  type?: any;
  value: string;
  language: string;
}

export interface Description3 {
  text: Text4[];
}

export interface Info {
  type: string;
  description: Description3;
}

export interface AdditionalInfo {
  info: Info[];
}

export interface MediaItem {
  id: string;
  ordinal: number;
  lastModifedDate: string;
  format: string;
  imageItems: ImageItems;
  category: Category;
  additionalInfo: AdditionalInfo;
}

export interface MediaItems {
  mediaItem: MediaItem[];
}

export interface HotelMediaInfo {
  mediaItems: MediaItems;
}

export interface Commission {
  percent: number;
  amount: number;
  currencyCode: string;
  type: string;
}

export interface RateInfo {
  startDate: string;
  endDate: string;
  amountBeforeTax: number;
  amountAfterTax: number;
  averageNightlyRate: number;
  currencyCode: string;
  additionalFeesInclusive: boolean;
  taxInclusive: boolean;
  rateSource: string;
  rateKey: string;
  commission: Commission;
  taxes?: any;
  cancelPenalties?: any;
  guarantee?: any;
}

export interface RateInfos {
  rateInfo: RateInfo[];
  convertedRateInfo: any[];
}

export interface RoomDescription {
  name: string;
  text: string[];
}

export interface RatePlanDescription {
  text: string;
}

export interface TaxDescription {
  text: string[];
}

export interface TaxGroup {
  code: number;
  amount: number;
  currencyCode: string;
  taxDescription: TaxDescription;
}

export interface TaxGroups {
  taxGroup: TaxGroup[];
}

export interface Taxes {
  amount: number;
  currencyCode: string;
  taxGroups: TaxGroups;
}

export interface CancelPenalty {
  refundable: boolean;
}

export interface CancelPenalties {
  cancelPenalty: CancelPenalty[];
}

export interface GuaranteeAccepted {
  guaranteeTypeCode: number;
}

export interface GuaranteesAccepted {
  guaranteeAccepted: GuaranteeAccepted[];
}

export interface Guarantee {
  guaranteeType: string;
  guaranteesAccepted: GuaranteesAccepted;
}

export interface RateInfo2 {
  startDate: string;
  endDate: string;
  amountBeforeTax: number;
  amountAfterTax: number;
  averageNightlyRate: number;
  currencyCode: string;
  additionalFeesInclusive: boolean;
  taxInclusive: boolean;
  rateSource?: any;
  rateKey?: any;
  commission?: any;
  taxes: Taxes;
  cancelPenalties: CancelPenalties;
  guarantee: Guarantee;
}

export interface RatePlan {
  ratePlanName: string;
  ratePlanType: string;
  prepaidIndicator: boolean;
  availableQuantity: number;
  rateSource: string;
  rateKey: string;
  ratePlanDescription: RatePlanDescription;
  rateInfo: RateInfo2;
  convertedRateInfo?: any;
}

export interface RatePlans {
  ratePlan: RatePlan[];
}

export interface Room {
  roomIndex: number;
  roomDescription: RoomDescription;
  ratePlans: RatePlans;
  roomType: string;
  roomTypeCode: string;
  guestRoomInfo: number;
  quantity: number;
}

export interface RoomSet {
  type: string;
  value: string;
  room: Room[];
}

export interface RoomSets {
  roomSet: RoomSet[];
}

export interface HotelRateInfo {
  rateInfos: RateInfos;
  roomSets: RoomSets;
}

export interface HotelDetailsInfo {
  hotel: HotelInfo;
  hotelDescriptiveInfo: HotelDescriptiveInfo;
  hotelMediaInfo: HotelMediaInfo;
  hotelRateInfo: HotelRateInfo;
  otherRooms: any;
}

export interface GetHotelDetailsRS {
  applicationResults: ApplicationResults;
  hotelDetailsInfo: HotelDetailsInfo;
}

export interface HotailDetail {
  getHotelDetailsRS: GetHotelDetailsRS;
}

export interface HotelDetailResult {
  hotelDetailInfo: HotelDetailsInfo;
  address: any;
  name: string;
  starRate: any;
  hotel: HotelInfo;
  otherRooms: any;
  searchedHotel: SearchedHotelDetail;
}
