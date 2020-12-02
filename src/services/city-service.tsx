import {ICity, IParking} from "../shared/schemas/Datamodels";

export async function getCities(): Promise<ICity[]> {
    return fetch(`${process.env.REACT_APP_API_URL}/api/city`)
        .then(response => response.json());
}

export async function getCity(cityId: String): Promise<ICity> {
    return fetch(`${process.env.REACT_APP_API_URL}/api/city/id/${cityId}`)
        .then(response => response.json());
}

export async function searchParking(q: string): Promise<ICity> {
    return fetch(`${process.env.REACT_APP_API_URL}/api/city/search?q=${encodeURI(q)}`)
        .then(response => response.json());
}
