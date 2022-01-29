import React from 'react'
import {
  Home,
  Question,
  QuestionTheme,
  Study,
  Tasks,
  Words,
  WordsPages,
} from 'layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants'

const useRoutes = () => (
  <Routes>
    <Route path={ROUTES.home} element={<Home />}>
      {/* <Navigate to={ROUTES.home} /> */}
    </Route>
    <Route path={ROUTES.study} element={<Study />} />
    <Route path={ROUTES.questionTheme} element={<QuestionTheme />} />
    <Route path={`${ROUTES.questionTheme}/*`} element={<Question />} />
    <Route path={ROUTES.tasks} element={<Tasks />} />
    <Route path={`${ROUTES.wordsPages}`} element={<WordsPages />} />
    <Route path={`${ROUTES.wordsPages}/*`} element={<Words />} />
  </Routes>
)

export default useRoutes
