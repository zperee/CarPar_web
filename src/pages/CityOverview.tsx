import React from "react";
import {ICity, IParking} from "../shared/schemas/Datamodels";
import {Table} from "react-bootstrap";

export interface ICityOverview {
    city: ICity
    setSelectedParking: (parking: IParking) => void
}

export default function CityOverview(props: ICityOverview) {
    const {city, setSelectedParking} = props

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
                    <Table striped bordered hover className="my-3">
                        <thead>
                        <tr>
                            <th>Parkhaus</th>
                            <th>Freie Plätze</th>
                            <th>Prozent frei</th>
                        </tr>
                        </thead>
                        <tbody>
                        {city?.parkings.map((parking: IParking) =>
                            <tr key={parking._id} onClick={() => setSelectedParking(parking)}>
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
