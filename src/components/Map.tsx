import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {ICity, IParking} from "../shared/schemas/Datamodels";

export interface IMapProps {
    city: ICity | undefined
    specificParking?: IParking | undefined
    setSelectedParking: (parking: IParking) => void
}

function Map(props: IMapProps) {
    const {city, specificParking, setSelectedParking} = props

    const containerStyle = {
        width: '100%',
        height: '700px'
    };

    const defaultMapOptions = {
        fullscreenControl: false,
    };

    return (
        city ?
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY ? process.env.REACT_APP_GOOGLE_MAP_KEY : ""}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                    lat: city?.location.coordinates[0],
                    lng: city?.location.coordinates[1]
                }}
                zoom={13}
                options={defaultMapOptions}
            >
                <> {specificParking ? <Marker position={{lat: specificParking.geo.lat,
                        lng: specificParking.geo.lon}}  onClick={() => setSelectedParking(specificParking)}/> :
                    city.parkings.map(parking =>
                    <Marker position={{lat: parking.geo.lat,
                        lng: parking.geo.lon}}  onClick={() => setSelectedParking(parking)}/>
                )} </>
            </GoogleMap>
        </LoadScript> : <></>
    )
}

export default React.memo(Map)
