import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import HeaderNav from './Components/HeaderNav/HeaderNav';
import VolunteerLogin from './Components/VolunteerLogin/VolunteerLogin';
import VolunteerSignUp from './Components/VolunteerSignUp/VolunteerSignup';
import VolunteerAddCase from './Components/VolunteerAddCase/VolunteerAddCase'
import HomeScreenCases from './Components/HomeScreenCases/HomeScreenCases'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import FooterNav from './Components/FooterNav/FooterNav';
import VolunteerEditandDelete from './Components/VoluneteerEditandDelete/VolunteerEditandDelete'
import IndividualCase from './Components/IndividualCase/IndividualCase';
import FamilyAddData from './Components/FamilyAddData/FamilyAddData';

function App() {
  const [caseData, setCaseData] = useState([])

  useEffect(() => {
    axios
      .get('https://miracle-messages2019.herokuapp.com/api/cases')
      .then(res => {
        setCaseData(res.data)
      })
  }, [])

  return (
    <div className="App">
      <HeaderNav />
      <Switch>
        <Route exact path='/' component={HomeScreenCases} />
        <Route path="/individualcase/:id" component={IndividualCase} />
        <Route path='/login' component={VolunteerLogin} />
        <Route path='/signup' component={VolunteerSignUp} />
        <Route path='/:id/family-add-data' component={FamilyAddData} />
        <ProtectedRoute exact path='/volunteer-add-case'
          component={VolunteerAddCase}
          setCaseData={setCaseData}
          caseData={caseData}
        />

        <ProtectedRoute
          // <Route 
          exact path='/volunteer-edit-delete-case/:id'
          render={props => {
            return <VolunteerEditandDelete
              {...props}
              setCaseData={setCaseData}
              caseData={caseData} />
          }}
          component={VolunteerEditandDelete}
        />
      </Switch>
      <FooterNav />
    </div>
  );
}

export default App;

