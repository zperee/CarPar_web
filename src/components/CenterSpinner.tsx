import React from "react";
import {Spinner} from "react-bootstrap";

export default function CenterSpinner() {
    return(
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
    }}>
            <Spinner animation="border" role="status" variant="primary" data-test="emrOverviewSpinner">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}
