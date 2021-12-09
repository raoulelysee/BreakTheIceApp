import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Locate from './components/Locate';
import SetupName from './components/SetupName';
import SetupGender from './components/SetupGender';
import SetupLocation from './components/SetEnableLocation';
import SetProfile from  './components/SetProfile';
import UserList2 from './components/UserList2';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar navTransparent={1}>

        <Scene key="auth">
            <Scene key="login" component={LoginForm} navTransparent={1} hideNavBar />
            <Scene key="signup" component={SignUpForm} navTransparent={1} />
        </Scene>


            <Scene
                hideNavBar
                navTransparent={1}
                key="setupname"
                component={SetupName}
              />

            <Scene
              hideNavBar
              navTransparent={1}
              key="setupgender"
              component={SetupGender}
            />

            <Scene
              hideNavBar
              navTransparent={1}
              key="setuplocation"
              component={SetupLocation}
            />

        <Scene key="main">
        <Scene
          hideNavBar
          navTransparent={1}
          key="setprofile"
          component={SetProfile}
        />
        <Scene
        hideNavBar
        navTransparent={1}
        key="userlist"
        component={UserList2}
        />
     </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
