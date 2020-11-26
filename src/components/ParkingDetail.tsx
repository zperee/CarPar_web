import React from "react";
import {IOpenHour, IParking} from "../shared/schemas/Datamodels";
import PayIcon from "./PayIcon";
import {Card} from "react-bootstrap";

export interface IParkingOverview {
    parking: IParking
    setSelectedParking: (parking: undefined) => void
}

export default function ParkingDetail(props: IParkingOverview) {
    const {parking, setSelectedParking} = props

    return (
        <div className="container py-5">
            <button type="button" className="btn btn-link" onClick={() => setSelectedParking(undefined)}>&lt; Zurück</button>
            <h1>{parking.name}</h1>
            <hr/>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-6 my-3 heightFixed">
                    <Card className="widthFixed">
                        <Card.Body>
                            <Card.Title>Freie Parkplätze</Card.Title>
                            <Card.Text className="heightFixed">
                                <h2 className="card-text"><span className="badge badge-success">{parking.free}/{parking.parking.totalParking}</span>
                                <br/><span className="badge badge-success">{parking.percentFree}</span></h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6 my-3 heightFixed">
                    <Card className="widthFixed">
                        <Card.Body>
                            <Card.Title>Zahlungsmittel</Card.Title>
                            <Card.Text className="heightFixed">
                                <p className="card-text">
                                    {parking.payment?.map(pay => <PayIcon iconType={pay}/>)}
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6 my-3 heightFixed">
                    <Card className="widthFixed">
                        <Card.Body>
                            <Card.Title>Adresse</Card.Title>
                            <Card.Text className="heightFixed">
                                <p className="card-text">{parking.address.street}<br/>{parking.address.zip} {parking.address.city}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-4 col-6 my-3 heightFixed">
                    <Card className="widthFixed">
                        <Card.Body>
                            <Card.Title>Adresse</Card.Title>
                            <Card.Text>
                                <p className="card-text">
                                    {parking.openHours?.map((open: IOpenHour) => {
                                        return <p className="text-capitalize">{open.day} – {open.dayTo}: {open.open}</p>;
                                    })}
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
