import React, { Component, PropTypes, View, Text, Image } from 'react-native';

import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeScene = (name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: name
        });
        navigator.replace({name})
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;

        return (
            <Drawer theme='light' primary="paperTeal">

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: 'HomePage',
                        active: true,
                        onPress: () => this.changeScene('HomePage'),
                        onLongPress: () => this.changeScene('HomePage')
                    }]}
                />

                <Drawer.Section
                    title="Components"
                    items={[{
                        icon: 'face',
                        value: 'Other One',
                        label: '12',
                        active: route === 'avatars',
                        onPress: () => this.changeScene('other'),
                        onLongPress: () => this.changeScene('other')
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};
