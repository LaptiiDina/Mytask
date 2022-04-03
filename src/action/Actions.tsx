import { Dispatch, Questionnaire } from "../types"

export const getAllquestionnaires = () => {
    fetch('http://localhost:3000/questionnaires/')
}

export const logout= () => ({
    type: 'logout'
    
})

export const putQuestionnaireById = (questionnaire: Questionnaire) => ({
    type: 'putQuestionnaireById',
    payload: questionnaire
})

export const getQuestionnaireById = (id: number) => { 
    return (dispatch: Dispatch) => {
        fetch(`http://localhost:3000/questionnaires/${id}`)
            .then(response => response.json())
            .then(data => dispatch(putQuestionnaireById(data)))
            .catch(err => console.log(err))
    }
}