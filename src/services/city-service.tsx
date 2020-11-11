import {ICity} from "../shared/schemas/Datamodels";

export async function getCities(): Promise<ICity[]> {
    return fetch(`${process.env.REACT_APP_API_URL}/api/city`)
        .then(response => response.json());
}
