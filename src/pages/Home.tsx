import React from "react";
import {Button, Card, Container, Form, FormControl, Jumbotron, NavLink} from "react-bootstrap";
import logo from '../assets/logo.png';
import appstore from '../assets/appstore.png';
import playstore from '../assets/playstore.png';
import {ICity} from "../shared/schemas/Datamodels";
import {Link} from "react-router-dom";

export interface IHomeProps {
    cities: ICity[] | undefined
}

export default function Home(props: IHomeProps) {
    const {cities} = props

    return (
        <div>
            <Jumbotron fluid>
                <Container className="py-5">
                    <h1 className="display-4">Finde dein Parkhaus</h1>
                    <p className="lead">
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <hr className="my-4"/>
                    <Form>
                        <div className="row">
                            <div className="col">
                                <FormControl type="text" placeholder="Parkhaus suchen"/>
                            </div>
                            <div className="col">
                                <Button variant="outline-dark">Search</Button>
                            </div>
                        </div>
                    </Form>
                </Container>
            </Jumbotron>
            <Container className="py-5">
                    <div className="row">
                        <div className="col">
                            <h3>Parken in:</h3>
                        </div>
                    </div>
                {cities ? <>
                    <div className="row mb-5 mt-3">
                        {cities.map(city =>
                        <div className="col-4" key={city._id}>
                            {city.showInUI ?
                            <Link to={`/city/${city._id}`}>
                                <Card>
                                    <Card.Img variant="top" src={`../assets/${city.image}`} alt={city.name}/>
                                    <Card.ImgOverlay><h5 className="card-title text-white">${city.name}</h5></Card.ImgOverlay>
                                </Card>
                            </Link>
                                : <></>}
                        </div>
                        )}
                    </div>
                </> : <p className="mt-3 mb-5">Städte konnten nicht geladen werden.</p>}
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
