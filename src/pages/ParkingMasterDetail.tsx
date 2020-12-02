import React, {useEffect, useState} from "react";
import {getCity} from "../services/city-service";
import {ICity, IParking} from "../shared/schemas/Datamodels";
import ParkingDetail from "../components/ParkingDetail";
import CityOverview from "../components/CityOverview";
import Map from "../components/Map";

export default function ParkingMasterDetail(props: any) {
    const [city, setCity] = useState<ICity>();
    const [selectedParking, setSelectedParking] = useState<IParking>();
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchCity() {
            getCity(props.match.params.cityId)
                .then((res: ICity) => setCity(res))
                .catch((ex: string) => console.warn("Could not load load City: " + ex))
                .finally(() => setLoading(false))
        }
        fetchCity();
    }, []);

    return (
        <>
        <div className="container py-5">
        {selectedParking ?
            <ParkingDetail parking={selectedParking} setSelectedParking={setSelectedParking}/> :
            <CityOverview city={city} isLoading={isLoading} setSelectedParking={setSelectedParking}/>}
        </div>
        <Map city={city} setSelectedParking={setSelectedParking}/>
        </>
    )
}
