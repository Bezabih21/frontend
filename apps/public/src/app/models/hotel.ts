export interface HotelDistance {
  distance: number;
  distanceUnit: string;
}

export interface Address {
  lines: string[];
  postalCode: string;
  cityName: string;
  countryCode: string;
}

export interface Contact {
  phone: string;
  fax: string;
}

export interface Description {
  text: string;
  lang: string;
}

export interface Medium {
  uri: string;
  category: string;
}

export interface Hotel {
  type: string;
  hotelId: string;
  chainCode: string;
  dupeId: string;
  rating: string;
  name: string;
  cityCode: string;
  latitude: number;
  longitude: number;
  hotelDistance: HotelDistance;
  address: Address;
  contact: Contact;
  description: Description;
  amenities: string[];
  media: Medium[];
}

export interface RateFamilyEstimated {
  code: string;
  type: string;
}

export interface TypeEstimated {
  category: string;
  beds: number;
  bedType: string;
}

export interface Description2 {
  text: string;
  lang?: any;
}

export interface Room {
  type: string;
  typeEstimated: TypeEstimated;
  description: Description2;
}

export interface Guests {
  adults: number;
}

export interface Average {
  base: string;
}

export interface Change {
  startDate: string;
  endDate: string;
  base?: any;
}

export interface Variations {
  average: Average;
  changes: Change[];
}

export interface Price {
  currency: string;
  base?: any;
  total: string;
  variations: Variations;
}

export interface Cancellation {
  numberOfNights: number;
  amount?: any;
  deadline: Date;
}

export interface Policies {
  holdTime?: any;
  guarantee?: any;
  paymentType: string;
  cancellation: Cancellation;
}

export interface Offer {
  id: string;
  checkInDate: string;
  checkOutDate: string;
  rateCode: string;
  rateFamilyEstimated: RateFamilyEstimated;
  room: Room;
  guests: Guests;
  price: Price;
  policies: Policies;
  self?: any;
}

export interface HotelDetail {
  type: string;
  hotel: Hotel;
  available: boolean;
  offers: Offer[];
  self: string;
}

export interface Rating {
  star: string;
  grade: number;
  remark?: any;
  reviews: number;
}

export interface Price {
  dollar: number;
  birr: number;
}

export interface HotelListItem {
  name: string;
  address?: any;
  image?: any;
  hotelCode: string;
  rating: Rating;
  roomType?: any;
  bedType: string;
  roomSpec: string;
  price: Price;
  inclusion: string[];
  currency?: string;
  description?: string;
  hotelId?: string;
  hotelName?: string;
  pricePerDay: 333;
  roomId?: string;
  roomName?: string;
  starRate?: number;
  totalDays?: number;
  totalPrice?: number;
}

export interface Success {
  timeStamp: Date;
}

export interface Message {
  code: string;
  value: string;
}

export interface SystemSpecificResult {
  message: Message[];
}

export interface Warning {
  type: string;
  timeStamp: Date;
  systemSpecificResults: SystemSpecificResult[];
}

export interface ApplicationResults {
  status: string;
  success: Success[];
  warning: Warning[];
}

export interface HotelInfo {
  hotelCode: string;
  codeContext: string;
  hotelName: string;
  chainCode: string;
  chainName: string;
  brandCode: string;
  brandName: string;
  status: string;
  sabreRating: string;
}

export interface Text {
  type: string;
  value: string;
  language?: any;
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

export interface Address2 {
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
  address: Address2;
  contact: Contact;
}

export interface Amenity {
  code: string;
  description: string;
}

export interface Amenities {
  amenity: Amenity[];
}

export interface Text {
  type: string;
  value: string;
  language?: any;
}

export interface Description4 {
  text: Text;
}

export interface Descriptions {
  description: Description4[];
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

export interface Description5 {
  text: Text3[];
}

export interface Category {
  categoryCode: number;
  description: Description5;
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

export interface HotelDetailsInfo {
  hotelInfo: HotelInfo;
  hotelDescriptiveInfo: HotelDescriptiveInfo;
  hotelMediaInfo: HotelMediaInfo;
}

export interface GetHotelDetailsRS {
  applicationResults: ApplicationResults;
  hotelDetailsInfo: HotelDetailsInfo;
}

export interface HotailDetail {
  getHotelDetailsRS: GetHotelDetailsRS;
}
