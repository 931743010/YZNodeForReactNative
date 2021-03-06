/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text
}  from 'react-native';

var Header = require('./header');


var List = React.createClass({
  render: function(){
    return (
        <View style={styles.list_item}>
          <Text style={styles.list_item_font}>{this.props.title}</Text>
        </View>
    );
  }
});

var ImportantNews = React.createClass({
  show: function(title){
    alert(title);
  },
  render: function(){

    return (
        <View style={{marginTop: 20}}>
          {
            React.Children.map(this.props.children, (text) => {
              return (
                  <Text
                      style={{marginTop: 10}}
                      onPress={(title) => this.show("您好")}
                  >{text}</Text>
              )
            })
          }
        </View>
    );
  }
});

var App = React.createClass({
  render: function(){
    return (
        <View style={styles.flex}>
          <Header></Header>
          <List title='宇航员在太空宣布“三体”获奖'></List>
          <List title='NASA发短片纪念火星征程50年'></List>
          <List title='男生连续做一周苦瓜吃吐女友'></List>
          <List title='女童遭鲨鱼袭击又下海救伙伴'></List>
          <Text style={styles.news_title}>今日要闻</Text>
          <ImportantNews>
            <Text>1、刘慈欣《三体》获“雨果奖”为中国作家首次</Text>
            <Text>2、京津冀协同发展定位明确：北京无经济中心表述</Text>
            <Text>3、好奇宝宝第一次淋雨，父亲用镜头记录了下来</Text>
            <Text>4、京津冀协同发展定位明确：:北京无经济中心表述+好奇宝宝第一次淋雨，父亲用镜头记录了下来</Text>
          </ImportantNews>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex:1
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font:{
    fontSize:16
  },
  news_title:{
    fontSize:20,
    fontWeight:'bold',
    color: '#CD1D1C',
    marginLeft:10,
    marginTop:15,
  },
  news_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:20,
  }
});


AppRegistry.registerComponent('YZComponent', () => App);
