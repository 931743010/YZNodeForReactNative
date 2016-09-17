import React, {Component} from 'react';
import  {
    StyleSheet,
    Text,
    View,
} from 'react-native';


let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;


class Box extends Component {

    click() {
        alert('点击事件被触发');
    }

    render(){
        return (
            <View>
                {
                    React.Children.map(this.props.children, (text) => {
                        return (
                            <Text style={{margin: 5}} onPress={()=>this.click()}>{text}</Text>
                        )
                    })
                }
            </View>
        )
    }
}

export default Box