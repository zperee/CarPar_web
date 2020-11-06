// Electronical medical record (EMR) provided by the API
export interface IEmr {
    annaId: string;
    caseId: string;
    modelVersion: string;
    numberOfDiagnoses: number;
}

export interface ILabeledEmr {
    caseData: ICaseData;
    primaryDiagnosis: IDiagnoses;
    secondaryDiagnoses: IDiagnoses[];
}

export interface ICaseData {
    caseId: string;
    annaId: string;
    admissionDate?: string;
    dischargeDate?: string;
    patientAdmissionType?: string;
    patientDischargeType?: string;
    patientAdmissionReason?: string;
    dateOfBirth?: string;
    gender?: string;
    isNewBorn?: string;
    hospitalName?: string;
    patientAdmissionTypeId?: number;
    patientAdmissionReasonId?: number;
    patientDischargeTypeId?: number;
    clinicId?: number;
    clinicName?: string;
    clinicEntryDate?: string;
    clinicLeaveDate?: string;
}

export interface IDiagnoses {
    icd: string;
    description: String;
    confidenceScore: number;
}

export interface IFeatureContribution {
    featureName: string;
    featureValue: string;
    contributionScore: number;
}

export interface ITextFeatureContribution {
    word: string;
    originalWord: string;
    weight: number;
}

export interface ITaggedText {
    formName: string;
    fieldName: string;
    taggedText: string;
    showInUI: boolean;
}

export interface IPredictionExplanation {
    annaId: string;
    icd: string;
    featureContribution: IFeatureContribution[];
    textFeatureContribution: ITextFeatureContribution[];
    taggedText: ITaggedText[];
}

export interface IDataTableProps {
        page?: number,  // newest page
        sizePerPage?: number,  // newest sizePerPage
        //sortField?: any,  // newest sort field
        //sortOrder?: any,  // newest sort order
        //filters?: any, // an object which have current filter status per column
}

export interface IDataTableResult {
    last: boolean,
    totalPages: number,
    totalElements: number,
    numberOfElements: number,
    first: boolean,
    size: number,
    number: number,
    empty: boolean
    content: Array<any>
}