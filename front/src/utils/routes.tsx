import { Home, Question, Study, Tasks, Words } from 'layout'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants'

const useRoutes = () => (
  <Routes>
    <Route path={ROUTES.home} element={<Home />} />
    <Route path={ROUTES.study} element={<Study />} />
    <Route path={`${ROUTES.study}${ROUTES.question}`} element={<Question />} />
    <Route path={`${ROUTES.study}${ROUTES.tasks}`} element={<Tasks />} />
    <Route path={`${ROUTES.study}${ROUTES.words}`} element={<Words />} />
    {/* <Route path={ROUTES.userAuthSignUp} component={SignUpField} />
    <Route path={ROUTES.userAauthLogIn} component={LogInField} /> */}
    {/* <Navigate to="/" replace /> */}
  </Routes>
)

export default useRoutes
