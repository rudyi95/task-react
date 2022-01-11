import React from 'react'
import Home from 'layout/Home/Home'
import Question from 'layout/Question/Question'
import Tasks from 'layout/Tasks/Tasks'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from './constants'

const useRoutes = () => (
  <Routes>
    <Route path={ROUTES.home} element={<Home />} />
    <Route path={ROUTES.question} element={<Question />} />
    <Route path={ROUTES.tasks} element={<Tasks />} />
    {/* <Route path={ROUTES.userAuthSignUp} component={SignUpField} />
    <Route path={ROUTES.userAauthLogIn} component={LogInField} /> */}
    {/* <Navigate to="/" replace /> */}
  </Routes>
)

export default useRoutes
