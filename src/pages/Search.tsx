import React, {useEffect, useState} from "react";

import {useLocation} from "react-router";
import {ICity, IParking} from "../shared/schemas/Datamodels";
import {searchParking} from "../services/city-service";
import ParkingDetail from "../components/ParkingDetail";
import CityOverview from "../components/CityOverview";
import Map from "../components/Map";
import ParkingSearchForm from "../components/ParkingSearchForm";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
export default function Search() {
    const query = useQuery().get("q");

    const [foundParkings, setFoundParkings] = useState<ICity>();
    const [selectedParking, setSelectedParking] = useState<IParking>();
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        async function search() {
            query ?
            searchParking(query)
                .then((res: ICity) => setFoundParkings(res))
                .catch((ex: string) => console.warn("Could not load load City: " + ex))
                .finally(() => setLoading(false)) : console.log("error")
        }
        search();
    }, []);

    return (
        <>
            <div className="container py-5">
               <div className="mb-4">
                <ParkingSearchForm searchValue={query??''}/>
                </div>
                {selectedParking ?
                    <ParkingDetail parking={selectedParking} setSelectedParking={setSelectedParking}/> :
                    <CityOverview city={foundParkings} isLoading={isLoading} setSelectedParking={setSelectedParking}/>}
            </div>
            <Map city={foundParkings} specialMarker={foundParkings?.location} setSelectedParking={setSelectedParking}/>
        </>
    )
}
