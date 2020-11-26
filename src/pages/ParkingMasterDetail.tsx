import React, {useEffect, useState} from "react";
import {getCity} from "../services/city-service";
import {ICity, IParking} from "../shared/schemas/Datamodels";
import ParkingDetail from "../components/ParkingDetail";
import CityOverview from "../components/CityOverview";
import Map from "../components/Map";

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
        selectedParking ?
            <ParkingDetail parking={selectedParking} setSelectedParking={setSelectedParking}/> :
            <><CityOverview city={city} isLoading={isLoading} setSelectedParking={setSelectedParking}/>
            <Map city={city} setSelectedParking={setSelectedParking}></Map>
            </>
    )
}
