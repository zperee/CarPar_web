import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoins, faEuroSign, faCreditCard, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faApplePay, faCcMastercard, faCcAmex, faCcVisa} from '@fortawesome/free-brands-svg-icons'

export interface IPayIcon {
    iconType: number
}

export default function PayIcon(props: IPayIcon) {
    const {iconType} = props

    const icons: any = {};
    icons[1] = faCoins;
    icons[2] = faEuroSign;
    icons[5] = faCcMastercard;
    icons[6] = faCcVisa;
    icons[7] = faCcAmex;
    icons[9] = faApplePay;

    return(
        <FontAwesomeIcon icon={icons[iconType]} style={{margin:5, fontSize:28}}/>
    )
}
