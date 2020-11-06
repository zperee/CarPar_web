import React from "react";
import {Card} from "react-bootstrap";
import IStyleSheet from "../shared/schemas/StyleSheet";

export default function About(props: any) {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-4">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Daria Gloor</Card.Title>
                            <Card.Text style={styles.heightFixed}>
                                Arbeitet bei und studiert digital Business Management
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Jessica Nigg</Card.Title>
                            <Card.Text style={styles.heightFixed}>
                                Arbeitet bei und studiert digital Business Management
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Elia Perenzin</Card.Title>
                            <Card.Text style={styles.heightFixed}>
                                Arbeitet bei der aimedic AG und studiert digital Business Management
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

const styles: IStyleSheet = {
    heightFixed: {
        height: 70
    },
};