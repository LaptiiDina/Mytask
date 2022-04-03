export interface State {
    questionnaires?: Questionnaire

}
export interface Questionnaire {

    "id": number,
    "questions": string[],
    "choice for question1": string[],
    "choice for question3": string[]

}
export type Dispatch = ({ type, payload }: { type: string, payload: any }) => void