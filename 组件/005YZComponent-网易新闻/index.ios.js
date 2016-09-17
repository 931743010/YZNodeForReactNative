/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';


import {
    AppRegistry,
    View,
    StyleSheet,
    Text,
} from 'react-native';


import Header from './Header';
import List from './List';
import Box from './Box';

class App extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Header />
                <List content="宇航员在太空宣布三体获奖"/>
                <List content="宇航员在太空宣布三体获奖"/>
                <List content="宇航员在太空宣布三体获奖"/>
                <List content="宇航员在太空宣布三体获奖"/>
                <List content="宇航员在太空宣布三体获奖"/>
                <List content="宇航员在太空宣布三体获奖"/>
                <Text style={{
                    fontSize: 30,
                    color: 'red',
                    margin: 15,
                    fontWeight: 'bold'
                }}>今日要闻</Text>
                <Box>
                    <Text>1.育知同创</Text>
                    <Text>2.匠心品质</Text>
                    <Text>3.良心教育</Text>
                    <Text>4.www.52learn.wang</Text>
                    <Text>5.谢霆锋</Text>
                </Box>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});




AppRegistry.registerComponent('YZComponent', () => App);











