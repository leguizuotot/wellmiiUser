import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import {Router, Route, Scene, Actions, Schema, Reducer, Modal} from 'react-native-router-flux';


// ###################################### OWN CONFIG COMPONENTS
import SideDrawer from './Components/Widgets/SideDrawer';

// ###################################### OWN COMPONENTS
import Login from './Components/Login';
import LoginNewUser from './Components/LoginNewUser';
import LoginResetPassword from './Components/LoginResetPassword';
import LoginGoogle from './Components/LoginGoogle';
import LinkGoogle from './Components/LinkGoogle';
import LoginTwitter from './Components/LoginTwitter';
import LoginFacebook from './Components/LoginFacebook';

import AccountProfile from './Components/AccountProfile';
import AccountPaymentMethods from './Components/AccountPaymentMethods';
import AccountPaymentMethodsAdd from './Components/AccountPaymentMethodsAdd';

import Home from './Components/Home';
import Home2 from './Components/Home2';

// ###################################### CLASS


class App extends Component {

	render() {
		return (
			<Router>
                
    			  	<Scene key="root" hideNavBar>
    					<Scene key="Login" component={Login} title='Login' initial={true} />
    					<Scene key="LoginNewUser" component={LoginNewUser} title='LoginNewUser'/>
                        <Scene key="LoginResetPassword" component={LoginResetPassword} title='LoginResetPassword'/>
                        <Scene key="LoginGoogle" component={LoginGoogle} title='LoginGoogle'/>
                        <Scene key="LoginTwitter" component={LoginTwitter} title='LoginTwitter'/>
                        <Scene key="LoginFacebook" component={LoginFacebook} title='LoginFacebook'/>

                		<Scene key="SideDrawer" component={SideDrawer}>
                            <Scene key="main" tabs>
                                <Scene key='Home' hideNavBar component={Home}  title='Home'/>
                                
                                <Scene key='AccountProfile' hideNavBar component={AccountProfile}  title='AccountProfile'/>
                                <Scene key="LinkFacebook" hideNavBar component={LoginFacebook} title='LinkFacebook'/>
                                <Scene key="LinkGoogle" hideNavBar component={LinkGoogle} title='LinkGoogle'/>
                                <Scene key="LinkTwitter" hideNavBar component={LoginTwitter} title='LinkTwitter'/>
                                <Scene key='AccountPaymentMethods' hideNavBar component={AccountPaymentMethods}  title='AccountPaymentMethods'/>
                                <Scene key='AccountPaymentMethodsAdd' hideNavBar component={AccountPaymentMethodsAdd}  title='AccountPaymentMethodsAdd'/>

                                <Scene key='Home2' hideNavBar component={Home2} title='Home2'/>
                            </Scene>
                		</Scene>

    				</Scene>       
            
			</Router>
		);
	}
}

export default App;

/*
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar hideTabBar>
                    <Scene key="echo" clone component={EchoView} getTitle={(navState) => navState.key} />
                    <Scene key="switcher" component={Switch} selector={() => { return 'text1'; }}>
                        <Scene key="text1" text="text1" component={(props) => <SwitcherPage {...props} text={currentSwitchPage} />} />
                        <Scene key="text2" text="text2" component={(props) => <SwitcherPage {...props} text={currentSwitchPage} />} />
                    </Scene>
                    <Scene key="register" component={Register} title="Register" />
                    <Scene key="register2" component={Register} title="Register2" duration={1} />
                    <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE} />
                    <Scene key="launch" component={Launch} title="Launch" initial />
                    <Scene key="login" direction="vertical" >
                        <Scene key="loginModal" direction="vertical" component={Login} title="Login" />
                        <Scene key="loginModal2" hideNavBar component={Login2} title="Login2" panHandlers={null} duration={1} />
                        <Scene key="loginModal3" hideNavBar component={Login3} title="Login3" panHandlers={null} duration={1} />
                    </Scene>
                    <Scene key="tabbar" component={NavigationDrawer}>
                        <Scene key="main" tabs  >
                            <Scene key="tab1" title="Tab #1" icon={TabIcon} navigationBarStyle={{ backgroundColor: 'red' }} titleStyle={{ color: 'white' }} >
                                <Scene key="tab1_1" component={TabView1} title="Tab #1_1" onRight={() => alert('Right button')} rightTitle="Right" />
                                <Scene key="tab1_2" component={TabView} title="Tab #1_2" titleStyle={{ color: 'black' }} />
                            </Scene>
                            <Scene key="tab2" initial title="Tab #2" icon={TabIcon} >
                                <Scene key="tab2_1" component={TabView} title="Tab #2_1" renderRightButton={() => <Text>Right</Text>} />
                                <Scene key="tab2_2" component={TabView} title="Tab #2_2" hideBackImage onBack={() => alert('Left button!')} backTitle="Left" duration={1} panHandlers={null} />
                            </Scene>
                            <Scene key="tab3" component={TabView3} title="Tab #3" hideTabBar icon={TabIcon} />
                            <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar icon={TabIcon} />
                            <Scene key="tab5" component={TabView} title="Tab #5" hideTabBar icon={TabIcon} />
                        </Scene>
                    </Scene>
                </Scene>
                <Scene key="error" component={Error} />
            </Scene>
        </Router>
*/