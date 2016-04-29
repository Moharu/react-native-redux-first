import React, { Component, PropTypes, Text, View } from 'react-native';
import { Toolbar as MaterialToolbar } from 'react-native-material-design';

export default class Toolbar extends Component {

    static contextTypes = {
        navigator: PropTypes.object
    };

    static propTypes = {
        onIconPress: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            title: 'TEST',
            theme: 'paperTeal'
        };
    }

    render() {
        const { navigator } = this.context;
        const { theme, counter } = this.state;
        const { onIconPress } = this.props;
        let route = navigator? navigator.getCurrentRoutes()[0].name : 'Test'
        return (
            <MaterialToolbar
                title={ route }
                primary={theme}
                icon={navigator && navigator.isChild ? 'keyboard-backspace' : 'menu'}
                onIconPress={() => navigator && navigator.isChild ? navigator.back() : onIconPress()}
            />
        );
    }
}
