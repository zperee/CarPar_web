export interface ICity {
    _id: string;
    name: string;
    parkings: IParking[];
    image: string;
    showInUI: boolean;
    location: ILocation;
}

export interface IParkingInfo {
    totalParking: number;
    electroParking: number;
    disabledParking: number;
    familyParking?: number;
    womenParking?: number;
    xlParking?: number;
}

export interface IGeo {
    lat: number;
    lon: number;
}

export interface IAddress {
    street: string;
    city: string;
    zip: string;
}

export interface IOpenHour {
    day: string;
    dayTo: string;
    open: string;
}

export interface IParking {
    _id: string;
    name: string;
    city: string;
    website?: string;
    parking: IParkingInfo;
    geo: IGeo;
    address: IAddress;
    openHours?: IOpenHour[];
    payment?: number[];
    apiId: string;
    free: number;
    percentFree: String;
    updatedAt: Date;
    createdAt: Date;
}

export interface ILocation {
    type: string;
    coordinates: number[];
}
