import React from "react";
import {ICity, IParking} from "../shared/schemas/Datamodels";
import BootstrapTable from 'react-bootstrap-table-next';
import CenterSpinner from "./CenterSpinner";

export interface ICityOverviewProps {
    city: ICity | undefined
    isLoading: boolean
    setSelectedParking: (parking: IParking) => void
}

export default function CityOverview(props: ICityOverviewProps) {
    const {city, isLoading, setSelectedParking} = props

    city?.parkings.map(parking => parking.percentFree = Math.round(100/parking.parking.totalParking*parking.free) + '%')

    function dateFormatter(cell: any) {
        return new Intl.DateTimeFormat("de", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }).format(new Date(cell))
    }

    const columns = [{
        dataField: 'name',
        text: 'Parkhaus',
        sort: true
    }, {
        dataField: 'free',
        text: 'Freie Plätze',
        sort: true
    }, {
        dataField: 'percentFree',
        text: 'Prozent frei',
        sort: true
    }, {
        dataField: "updatedAt",
        text: "Aktualisiert am",
        sort: true,
        formatter: dateFormatter },
    ];

    const rowEvents = {
        onClick: (e: any, row: any, rowIndex: number) => {
            setSelectedParking(row);
        }
    };

    const NoDataIndication = () => (
        <div>
            {isLoading ? (
                <CenterSpinner/>
            ) : (<div data-test="emrOverviewNoData">
                Keine Daten verfügbar.
            </div>)}</div>
    );

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
                    <BootstrapTable
                        striped
                        bordered
                        keyField="_id"
                        data={!isLoading ? (city?.parkings || []) : ([])}
                        columns={columns}
                        rowEvents={ rowEvents }
                        noDataIndication={() => <NoDataIndication />}/>
                </div>
            </div>
        </div>
    )
}
