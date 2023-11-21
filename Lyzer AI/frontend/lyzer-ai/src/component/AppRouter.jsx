import React from "react";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Register";
import PrivateRoutesLayout from "../ProtectedRoutes/PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import { auth } from "../utils/init-firebase";

const AppRouter = () => {
  console.log(auth.currentUser);

  return (
    <div>
      <Router>
        <Routes>
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />
          
          <Route exact path='/' element={<PrivateRoutesLayout/>}>
            <Route exact path='/' element={<Home />}/>
          </Route>
          <Route exact path='/data' element={<PrivateRoutesLayout/>}>
            <Route exact path='/data' element={<Dashboard />}/>
          </Route>
          <Route exact path='/text' element={<PrivateRoutesLayout/>}>
            <Route exact path='/text' element={<Dashboard />}/>
          </Route>
          <Route exact path='/query' element={<PrivateRoutesLayout/>}>
            <Route exact path='/query' element={<Dashboard />}/>
          </Route>
          <Route exact path='/website' element={<PrivateRoutesLayout/>}>
            <Route exact path='/website' element={<Dashboard />}/>
          </Route>

        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
