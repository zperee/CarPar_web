import React from "react";
import {Button, Card, Container, Form, FormControl, Jumbotron} from "react-bootstrap";
import logo from '../assets/logo.png';
import appstore from '../assets/appstore.png';
import playstore from '../assets/playstore.png';

export default function Home(props: any) {
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
                <div className="row mb-5 mt-3">
                    <div className="col-4">
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.ImgOverlay><h5 className="card-title text-white">Test</h5></Card.ImgOverlay>
                        </Card>
                    </div>
                </div>
                <hr/>
                <div className="row my-5">
                    <div className="col-4">
                        <img className="img-fluid" src={logo}/>
                    </div>
                    <div className="col-8 pl-5">
                        <h5>Die beste Parking App</h5>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        <div className="row mt-5 justify-content-center">
                        <div className="col-3">
                            <img className="img-fluid" src={appstore}/>
                        </div>
                        <div className="col-3">
                            <img className="img-fluid" src={playstore}/>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
