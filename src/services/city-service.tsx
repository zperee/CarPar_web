import {ICity} from "../shared/schemas/Datamodels";

export async function getCities(): Promise<ICity[]> {
    return fetch(`${process.env.REACT_APP_API_URL}/api/city`)
        .then(response => response.json());
}

export async function getCity(): Promise<ICity> {
    return fetch(`${process.env.REACT_APP_API_URL}/api/city/id/5f997d496f014fa38c79c083`)
        .then(response => response.json());
}
