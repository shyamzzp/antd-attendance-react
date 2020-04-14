import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AttendanceController from './Attendance/AttendanceController';
import NotFound from './NotFound/NotFound';

export default () => 
<BrowserRouter>
<Switch>
    <Route path='/src'  component={AttendanceController} />  
    <Route path='/notfound'  component={NotFound} />  
    </Switch>
    </BrowserRouter>



