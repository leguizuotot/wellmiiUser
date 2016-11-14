import React, { Component, PropTypes } from 'react';
import Drawer from 'react-native-drawer'
import { Actions, DefaultRenderer } from 'react-native-router-flux'

import SideDrawerContent from './SideDrawerContent'
import Home from '../Home';

const propTypes = {
  navigationState: PropTypes.object,
};

class SideDrawer extends Component {
 
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                onOpen={() => {
                    Actions.refresh({ key: state.key, open: true })
                }}
                onClose={() => {
                    Actions.refresh({ key: state.key, open: false })
                }}
                type="overlay"
                content={<SideDrawerContent />}
                tapToClose
                openDrawerOffset={0.3}
                panCloseMask={0.2}
                negotiatePan
                tweenHandler={(ratio) => ({
                  main: { opacity: Math.max(0.54, 1 - ratio) },
                })}
              >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

SideDrawer.propTypes = propTypes;

export default SideDrawer;

