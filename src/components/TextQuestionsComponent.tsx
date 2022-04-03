import React, { useContext } from 'react'
import styled from 'styled-components';
import { ValueContextForForm } from '../constants/constants';
import BasicTextFields from './InputsComponent';

const LittleBlock = styled.div<{ propsBorder: string }>`
position:relative;
border-top: ${props => props.propsBorder};
background-color:#FAFAFA;
width: 80%;
height:130px;
margin-left:90px;
border-radius:20px;
`
const TextH1 = styled.h1`
font-size:30px;
margin-left:10px;
`
const TextP = styled.p<{ propsColor: string }>`
font-weight:900;
font-size:10px;
margin-left:10px;
margin-top:5px;
color:${props => props.propsColor};
`
const Question = styled.p`
font-weight:600;
font-size:15px;
margin-left:10px;
margin-top:5px;
`
const ContainerInputs = styled.div<{ propsLeftMov: string, propsTopMov: string, propsSize: string }>`
position:absolute;
top:${props => props.propsTopMov};
 left:${props => props.propsLeftMov};
 width:${props => props.propsSize};
`

const TextQuestionsComponent = ({ type, question, stateOfForm, setError }: {
    type: string,
    question: string,
    stateOfForm: boolean,
    setError: React.Dispatch<React.SetStateAction<string>>
}) => {
    const { valueOfQuestion } = useContext(ValueContextForForm);
    const handkeClickInput = () => {
        if (!stateOfForm) {
            setError('Please answer the questions');
        }
        else {
            setError('');
        }
    }
    if (type === 'header') {
        return (
            <LittleBlock propsBorder='20px solid #A9BCF5'>
                <TextH1>Go Questionnaire</TextH1>
                <TextP propsColor='black'>Show me what you got!</TextP>
                <TextP propsColor='red'>Required*</TextP>
            </LittleBlock>
        )
    }
    if (type === 'additional question') {
        return (
            <LittleBlock propsBorder=''>
                <Question>{`Why you choose "${valueOfQuestion}"?`}</Question>
                <ContainerInputs propsTopMov='' propsLeftMov='10px' propsSize='40%'>
                    <BasicTextFields label='your answer' />
                </ContainerInputs>
            </LittleBlock>
        )

    }
    else {
        return (
            <LittleBlock propsBorder=''>
                <Question>{question}</Question>
                <ContainerInputs onClick={() => { handkeClickInput() }} propsTopMov='' propsLeftMov='10px' propsSize='40%'>
                    <BasicTextFields label='your answer' />
                </ContainerInputs>
            </LittleBlock>
        )
    }
}

export default TextQuestionsComponent