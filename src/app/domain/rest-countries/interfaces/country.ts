export interface Country {
  altSpellings: AltSpellings;
  area: number;
  capital: string[];
  capitalInfo: CapitalInfo;
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: object;
  continents: string[];
  currencies: {
    [key: string]: Currency;
  };
  demonyms: {
    [key: string]: Demonym;
  };
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: Language;
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    nativeName: NativeName;
    official: string;
  };
  population: number;
  postalCode: PostalCode;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: Translations;
  unMember: boolean;
}

export interface AltSpellings {
  [key: string]: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Language {
  [key: string]: string;
}

export interface NativeName {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Translations {
  [key: string]: Translation;
}
