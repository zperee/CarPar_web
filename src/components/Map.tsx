import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {ICity, ILocation, IParking} from "../shared/schemas/Datamodels";

export interface IMapProps {
    city: ICity | undefined
    specialMarker?: ILocation | undefined
    setSelectedParking: (parking: IParking) => void
}

function Map(props: IMapProps) {
    const {city, specialMarker, setSelectedParking} = props

    const containerStyle = {
        width: '100%',
        height: '700px'
    };
    const defaultMapOptions = {
        fullscreenControl: false,
    };
    const parkingIcon =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png";

    return (
        city ?
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY ? process.env.REACT_APP_GOOGLE_MAP_KEY : ""}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                    lat: city?.location?.coordinates[0],
                    lng: city?.location?.coordinates[1]
                }}
                zoom={13}
                options={defaultMapOptions}
            >
                <>
                    {specialMarker ?
                        <Marker position={{lat: specialMarker.coordinates[0],
                            lng: specialMarker.coordinates[1]}}/> : <></>
                    }
                </>
                <>
                    {city.parkings.map(parking =>
                    <Marker position={{lat: parking.location.coordinates[0],
                        lng: parking.location.coordinates[1]}} icon={parkingIcon} onClick={() => setSelectedParking(parking)}/>
                        )
                    }</>
            </GoogleMap>
        </LoadScript> : <></>
    )
}

export default React.memo(Map)
