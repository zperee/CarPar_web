import React, {useEffect, useState} from "react";
import {getCity} from "../services/city-service";
import {ICity, IParking} from "../shared/schemas/Datamodels";
import ParkingDetail from "./ParkingDetail";
import CityOverview from "./CityOverview";

export default function ParkingMasterDetail() {
    const [city, setCity] = useState<ICity>();
    const [selectedParking, setSelectedParking] = useState<IParking>();
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchCity() {
            getCity()
                .then((res: ICity) => setCity(res))
                .catch((ex: string) => console.warn("Could not load load City: " + ex))
                .finally(() => setLoading(false))
        }
        fetchCity();
    }, []);

    return (
        selectedParking ? <ParkingDetail parking={selectedParking}/> :
            city? <CityOverview city={city} setSelectedParking={setSelectedParking}/> :
                <p>Could not load data.</p>
    )
}
