import React, {useEffect, useState} from "react";
import {getCity} from "../services/city-service";
import {ICity, IParking} from "../shared/schemas/Datamodels";
import {Table} from "react-bootstrap";

export default function CityOverview(props: any) {
    const [city, setCity] = useState<ICity>();
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchCity() {
            getCity()
                .then((res: ICity) => setCity(res))
                .catch((ex: string) => console.warn("Could not load load Cities: " + ex))
                .finally(() => setLoading(false))
        }
        fetchCity();
    }, []);

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h1>{city?.name}</h1>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Parkhaus</th>
                            <th>Freie Plätze</th>
                            <th>Prozent frei</th>
                        </tr>
                        </thead>
                        <tbody>
                        {city?.parkings.map((parking: IParking) =>
                            <tr key={parking._id}>
                                <td>{parking.name}</td>
                                <td>{parking.free}</td>
                                <td>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
