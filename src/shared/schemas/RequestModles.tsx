import { RefObject } from "react";

export interface IFeedbackForm {
    mode: number
    feedback: RefObject<HTMLTextAreaElement> 
    positiv: boolean
    negativ: boolean 
}

export interface IFeedbackRequest {
    status: string | undefined
    comment: string | undefined
}