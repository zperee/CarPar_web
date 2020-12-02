import React, {RefObject} from "react";
import {Button, Card, Container, Form, FormControl, Jumbotron} from "react-bootstrap";
import logo from '../assets/logo.png';
import appstore from '../assets/appstore.png';
import playstore from '../assets/playstore.png';
import luzernImage from '../assets/luzern.png';
import {ICity} from "../shared/schemas/Datamodels";
import {Link, useHistory} from "react-router-dom";
import CenterSpinner from "../components/CenterSpinner";
import IStyleSheet from "../shared/schemas/StyleSheet";
import ParkingSearchForm from "../components/ParkingSearchForm";

export interface IHomeProps {
    cities: ICity[] | undefined
    isLoading: boolean
}

export default function Home(props: IHomeProps) {
    const {cities, isLoading} = props
    const images: any = {};
    images['luzern'] = luzernImage;

    return (
        <div>
            <Jumbotron fluid>
                <Container className="py-5">
                    <h1 className="display-4">Finde dein Parkhaus</h1>
                    <p className="lead">
                        Mit dem zentralen Parkleitsystem der Schweiz.
                    </p>
                    <hr className="my-4"/>
                    <ParkingSearchForm/>
                </Container>
            </Jumbotron>
            <Container className="py-5">
                    <div className="row">
                        <div className="col">
                            <h3>Parken in:</h3>
                        </div>
                    </div>
                <div style={styles.heightFixed}>
                {cities ?
                    <div className="row mb-5 mt-3" style={styles.heightFixed}>
                        {cities.map(city =>
                        <div className="col-lg-4 col-12 my-3" key={city._id}>
                            {city.showInUI ?
                            <Link to={`/city/${city._id}`}>
                                <Card>
                                    <Card.Img variant="top" src={images[city.name.toLowerCase()]} alt={city.name}/>
                                    <Card.ImgOverlay><h5 className="card-title text-white">{city.name}</h5></Card.ImgOverlay>
                                </Card>
                            </Link>
                                : <></>}
                        </div>
                        )}
                    </div> :
                    isLoading?
                        <CenterSpinner/>:
                        <p className="mt-3 mb-5">Städte konnten nicht geladen werden.</p>}
                </div>
                <hr/>
                <div className="row my-5">
                    <div className="col-4">
                        <img className="img-fluid" src={logo} alt="CarPar Logo"/>
                    </div>
                    <div className="col-8 pl-5">
                        <h5>Die beste Parking App</h5>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet.</p>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-3">
                                <img className="img-fluid" src={appstore} alt="Download on the App Store"/>
                            </div>
                            <div className="col-3">
                                <img className="img-fluid" src={playstore} alt="Get it on Google Play"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const styles: IStyleSheet = {
    heightFixed: {
        minHeight: 250
    },
};

