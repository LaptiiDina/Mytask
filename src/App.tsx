import React, { useEffect, useState } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPageComponent';
import { useDispatch } from 'react-redux';
import Questionnaire from './components/Questionnaire';
import { getQuestionnaireById } from './action/Actions';
import { firsPage, questionnaire } from './constants/constants';

function App() {
  const [id, setId] = useState<number>(0)
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getQuestionnaireById(id))
    }
  }, [id])


  return (
    <Routes>
      <Route path={firsPage} element={<FirstPage setId={setId} />} />
      <Route path={questionnaire} element={<Questionnaire />} />
    </Routes>
  );
}

export default App;
