import React, {Component, View, Text, Navigator, DrawerLayoutAndroid} from 'react-native'
import { Provider } from 'react-redux';

import store from './store';
import Toolbar from './navigation/components/toolbar'
import HomePage from './home/HomePage';
import Navigation from './navigation/navigation'


class Root extends Component {
  static childContextTypes = {
		drawer: React.PropTypes.object,
		navigator: React.PropTypes.object
	};

	constructor(props) {
		super(props);
		this.state = {
			drawer: null,
			navigator: null
		};
	}

	getChildContext = () => {
		return {
			drawer: this.state.drawer,
			navigator: this.state.navigator
		}
	};

	setDrawer = (drawer) => {
		this.setState({
			drawer
		});
	};

	setNavigator = (navigator) => {
		this.setState({
			navigator
		});
	};

  render() {
    const { drawer, navigator } = this.state;
		const navView = React.createElement(Navigation);
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <Provider store={store}>
       <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {
          if(drawer && navigator){
            return navView
          }
          return null
        }}
        ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
        >
          {
            drawer &&
            <Navigator
            initialRoute={{name: 'HomePage', index:0}}
            navigationBar={<Toolbar onIconPress={drawer.openDrawer}/>}
            ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
            renderScene={(route,navigator) => {
              if(route.name === 'HomePage'){
                return <HomePage />
              } else {
                return <View><Text>Anotha one</Text></View>
              }
            }}
            />
          }
        </DrawerLayoutAndroid>
      </Provider>
      );
    }
}

export default Root;
