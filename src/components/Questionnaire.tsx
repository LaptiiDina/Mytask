import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../types'
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { logout } from '../action/Actions';

import ChoiceComponent from './ChoiceComponent';
import TextQuestionsComponent from './TextQuestionsComponent';
import { secondQuestions, ValueContextForForm } from '../config/router-config';
const Container = styled.div<{ propsHeight: string }>`
display:flex;
position:relative;
width: 60%;
height:${props => props.propsHeight};
background-color:#FBEFF5;
margin:20px 15% 20px 20%; 
justify-content:space-around;
flex-direction:column;
`
const ContainerButtom = styled.div`
font-size:13px;
margin:10px 10px;
width: 60%;
`
const StyleButtonSend = styled.button`
position:absolute;
font-size:13px;
margin-left:690px;
margin-right:20px;
background-color:#A9BCF5;
width: 100px;
height:50px;
border-radius:8px;
buttom:20px;
`
const StyleButtonBack = styled.button`
font-size:13px;
margin-left:20px;
background-color:#A9BCF5;
width: 100px;
height:50px;
border-radius:8px;
`

const Questionnaire = () => {
    const dispatch = useDispatch();
    const state = useSelector<State, State>(state => state)
    const [error, setError] = useState<string>('');
    const [error2, setError2] = useState<string>('');
    const [stateOfForm, setStateofForm] = useState<boolean>(false);
    const [stateOfForm2, setStateofForm2] = useState<boolean>(false);
    const [valueOfQuestion, setValueOfQuestion] = useState<string>('');


    const handkebuttonSendClick = () => {

        if (!stateOfForm2) {
            setError2('Please answer the questions');
        }
        if (!stateOfForm) {
            setError('Please answer the questions');
        }
        if (stateOfForm && stateOfForm2) {
            alert('Your application has been sent')
        }
    }
    const handkeClickBack = () => {
        localStorage.clear();
        dispatch(logout())
    }
    useEffect(() => {
        if (stateOfForm2) {
            setError2('');
        }
        if (stateOfForm) {
            setError('');
        }
    }, [stateOfForm2, stateOfForm])

    if (!state.questionnaires) {
        return <Navigate to='/' />
    }
    if (stateOfForm) {
        return (
            <ValueContextForForm.Provider value={{ valueOfQuestion: valueOfQuestion, setValueOfQuestion: setValueOfQuestion, setStateofForm, setStateofForm2 }}>
                <Container propsHeight='1000px'>

                    <TextQuestionsComponent type='header' question='' stateOfForm={stateOfForm} setError={setError} />
                    <ChoiceComponent addComponents='' error={error} error2={error2} />

                    <TextQuestionsComponent type='additional question' question='' stateOfForm={stateOfForm} setError={setError} />

                    <TextQuestionsComponent type='question' question={`${state.questionnaires?.questions[secondQuestions]}`} stateOfForm={stateOfForm} setError={setError} />

                    <ChoiceComponent addComponents='add' error={error} error2={error2} />
                    <ContainerButtom>
                        <StyleButtonBack onClick={() => { handkeClickBack() }}>Back</StyleButtonBack>
                        <StyleButtonSend onClick={() => { handkebuttonSendClick() }}>Send</StyleButtonSend>
                    </ContainerButtom>

                </Container>
            </ValueContextForForm.Provider>
        )
    }
    return (
        <ValueContextForForm.Provider value={{ valueOfQuestion: valueOfQuestion, setValueOfQuestion: setValueOfQuestion, setStateofForm, setStateofForm2 }}>
            <Container propsHeight='850px'>

                <TextQuestionsComponent type='header' question='' stateOfForm={stateOfForm} setError={setError} />
                <ChoiceComponent addComponents='' error={error} error2={error2} />

                <TextQuestionsComponent type='question' question={`${state.questionnaires?.questions[secondQuestions]}`} stateOfForm={stateOfForm} setError={setError} />

                <ChoiceComponent addComponents='add' error={error} error2={error2} />
                <ContainerButtom>
                    <StyleButtonBack onClick={() => { handkeClickBack() }}>Back</StyleButtonBack>
                    <StyleButtonSend onClick={() => { handkebuttonSendClick() }}>Send</StyleButtonSend>
                </ContainerButtom>

            </Container>
        </ValueContextForForm.Provider>
    )
}

export default Questionnaire

