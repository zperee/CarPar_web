import React from "react";
import {IParking} from "../shared/schemas/Datamodels";

export interface IParkingOverview {
    parking: IParking
}

export default function ParkingDetail(props: IParkingOverview) {
    const {parking} = props

    return (
        <>{parking.name}</>
    )
}
