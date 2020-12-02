import React from "react";
import {Card} from "react-bootstrap";
import elia from '../assets/elia.png';
import jessica from '../assets/jessica.png';
import daria from '../assets/daria.png';

export default function About() {
    return (
        <div className="container py-5">
            <div className="row ">
                <div className="col-4 heightFixed">
                    <Card>
                        <Card.Img variant="top" src={daria} alt="Image Daria"/>
                        <Card.Body>
                            <Card.Title>Daria Gloor</Card.Title>
                            <Card.Text>
                                Arbeitet in der Informatik am Kantonspital Graubünden und studiert digital Business Management
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 heightFixed">
                    <Card>
                        <Card.Img variant="top" src={jessica} alt="Image Jessica"/>
                        <Card.Body>
                            <Card.Title>Jessica Nigg</Card.Title>
                            <Card.Text className="heightFixed">
                                Arbeitet bei The Prosperity Company und studiert digital Business Management
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 heightFixed">
                    <Card>
                        <Card.Img variant="top" src={elia} alt="Image Elia"/>
                        <Card.Body>
                            <Card.Title>Elia Perenzin</Card.Title>
                            <Card.Text>
                                Arbeitet als Junior Software Engineer bei der aimedic AG und studiert digital Business Management
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
