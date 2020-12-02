import React, {RefObject} from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {useHistory} from "react-router-dom";

export interface IParkingSearchForm {
    searchValue?: string
}
export default function ParkingSearchForm(props: IParkingSearchForm) {
    const {searchValue} = props

    let searchParking: RefObject<HTMLInputElement> = React.createRef();

    const history = useHistory();
    return(
        <Form onSubmit={e => { e.preventDefault(); }}>
            <div className="row">
                <div className="col">
                    <FormControl type="text" placeholder={searchValue?.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} ref={searchParking}/>
                </div>
                <div className="col">
                    <Button variant="outline-dark" onClick={() => history.push(`/search?q=${encodeURI(searchParking?.current?.value??'')}`)}>Search</Button>
                </div>
            </div>
        </Form>
    )
}
