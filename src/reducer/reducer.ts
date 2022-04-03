export const reducer = (state = {}, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'logout':
            return { ...state, questionnaires: null }
        case 'putQuestionnaireById':
            return { ...state, questionnaires: action.payload }
        default:
            return state;

    }
}