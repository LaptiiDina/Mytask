import React from 'react';
import {  useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { PATH_QIESTIONS, totalCountOfQuestions } from '../config/router-config';
import { State } from '../types';

const Container = styled.div`
display:flex;
width: 100%;
height:400px;
background-color:#FBEFF5;
margin-top:5%;
justify-content:space-around;
`
const StyleButton = styled.button`
color:black;
width: 100px;
height:100px;
margin-top:140px;
background-color:#E6E6E6;
font-size:1.5em;
cursor:pointer;
border-radius:5px;
border-color: #BDBDBD;
`
const StyleH1 = styled.h1`
color:#848484;
font-size:5.5em;
margin-left:35%;
`
const FirstPage = ({ setId }: { setId: React.Dispatch<React.SetStateAction<number>> }) => {

    const createbutton = () => {
        const array = [];

        for (let index = 0; index < totalCountOfQuestions; index++) {
            array.push(<StyleButton key={index} value={index + 1} onClick={(e) => {
                setId(index + 1)

            }}>{index + 1} id</StyleButton>)
        }
        return array;
    }
    const state = useSelector<State, State>(state => state)
    if (state.questionnaires) {
        return <Navigate to={PATH_QIESTIONS} />
    }

    return (
        <div>
            <StyleH1>Choose a profile</StyleH1>
            <Container>

                {createbutton()}
            </Container>
        </div>
    )
}

export default FirstPage