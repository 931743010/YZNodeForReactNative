import React, {Component} from 'react';
import  {
    StyleSheet,
    Text,
    View,
} from 'react-native';


let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({

    list: {
        height: 35,
        width: ScreenWidth,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
});


class List extends Component {

    render(){
        return (
            <View style={{width: ScreenWidth, height: 36}}>
                <View style={styles.list}>
                    <Text style={{margin: 10}}>{this.props.content}</Text>
                    <View style={{
                        width: ScreenWidth - 20,
                        height: 1,
                        backgroundColor: 'gray',
                        position: 'absolute',
                        left: 10
                    }}/>
                </View>
            </View>


        )
    }
}

export default List;












