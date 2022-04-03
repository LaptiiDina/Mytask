import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { firstQuestions, thirdQuestions } from '../constants/constants';
import { State } from '../types';
import BasicTextFields from './InputsComponent';
import ControlledRadioButtonsGroup from './RadioButtonComponent';
const BigBlock = styled.div`
position:relative;
background-color:#FAFAFA;
width: 80%;
height:230px;
margin-left:90px;
border-radius:20px;
`
const Question = styled.p`
font-weight:600;
font-size:15px;
margin-left:10px;
margin-top:5px;
`
const ConteinerChoice = styled.div`
margin-left:10px;
`
const ConteinerInputs = styled.div<{ propsLeftMov: string, propsTopMov: string, propsSize: string }>`
position:absolute;
top:${props => props.propsTopMov};
 left:${props => props.propsLeftMov};
 width:${props => props.propsSize};
`


const ChoiceComponent = ({  addComponents, error, error2 }: {
    
    addComponents: string,
    error: string,
    error2: string,
    

}) => {
    const state = useSelector<State, State>(state => state)
if(state.questionnaires){
    if (!addComponents) {
        return (
            <BigBlock>
                <Question> {state.questionnaires?.questions[firstQuestions]} <span style={{ color: 'red' }}>*</span></Question>
                <span style={{ color: 'red', marginLeft: '10px' }}>{error}</span>
                <ConteinerChoice>
                    <ControlledRadioButtonsGroup label={state.questionnaires?.['choice for question1']} type='first' />
                </ConteinerChoice>
            </BigBlock>
        )
    }

    else {
        return (
            <BigBlock>
                <Question> {state.questionnaires?.questions[thirdQuestions]} <span style={{ color: 'red' }}>*</span></Question>
                <span style={{ color: 'red', marginLeft: '10px' }}>{error2}</span>
                <ConteinerChoice>
                    <ControlledRadioButtonsGroup label={state.questionnaires?.['choice for question3']} type='second' />
                    <ConteinerInputs propsTopMov='75%' propsLeftMov='11%' propsSize='80%'>
                        <BasicTextFields label='' />
                    </ConteinerInputs>
                </ConteinerChoice>
            </BigBlock>)
    }
}
else{
    return(
        <>
        </>
    )
}
}
export default ChoiceComponent