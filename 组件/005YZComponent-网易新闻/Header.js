import React, {Component} from 'react';
import  {
    View,
    StyleSheet,
    Text
} from 'react-native';


let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        width: ScreenWidth,
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    base: {
        fontSize: 30,
        fontWeight: 'bold'
    },

});


class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={[styles.base, {color: 'red'}]}>網易</Text>
                <Text style={[styles.base, {color: 'white',backgroundColor:'red'}]}>新闻</Text>
                <Text style={[styles.base, {}]}>有态度</Text>
            </View>
        )
    }
}

export default Header;














