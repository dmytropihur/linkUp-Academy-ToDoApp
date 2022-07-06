import Status from '../types';

type IpGeo = {
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
};

export type IpGeoSliceState = {
  ipGeo: IpGeo;
  status: Status;
};
