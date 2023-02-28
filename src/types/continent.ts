import { City } from "./city";

export type Continent = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  countriesAmount: number;
  languagesAmount: number;
  citiesMoreHundredAmount: number;
  imageURLBanner: string;
  imageURLSlide: string;
  citiesMoreHundred: City[];
  citiesMoreHundredEnglish: City[];
}