import { City } from "./city";

export type CityWithPexels = City & {
  photos?: string[];
}