import React, {Component, StyleSheet, View, Text, TouchableOpacity, PropTypes} from 'react-native';
// import Button from 'react-native-button';
import { Button, PRIMARY_COLORS, COLOR } from 'react-native-material-design';
import {container, content, button, label, footer} from 'commonStyles';

var styles = StyleSheet.create({
    container,
    content,
    button,
    label,
    footer
});

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    };

    render() {
        const {counter, increment, decrement} = this.props;
        return (
          <View style={styles.container}>
            <View style={styles.content}>
                <Button text="INCREASE"
                        overrides={{textColor: 'googleGreen'}}
                        raised={true}
                        onPress={increment}/>
                <Button text="DECREASE"
                        overrides={{textColor: 'googleRed'}}
                        raised={true}
                        onPress={decrement}/>
                <Text style={label}>Counter: {counter}</Text>
            </View>
          </View>

        )
    }
}

export default Counter;
