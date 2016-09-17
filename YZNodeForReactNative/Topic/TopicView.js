'use strict';
import React, {Component} from 'react';
import {
    Text,
    View,
    WebView
} from 'react-native';

import styles from './Style';

import Api from '../Api';

class TopicView extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            loaded: false
        };
      }

    componentDidMount() {
        this.fetchData();
    }

    render () {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <Text>数据加载中...</Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.topicTitle}</Text>
                <Text style={styles.tag}>{this.state.tag} | {this.state.author.loginname} | {this.state.date}</Text>
                <WebView
                    style={styles.webView}
                    ref={'webview'}
                    source={{html: this.state.topicContent}}
                    automaticallyAdjustContentInsets={false}
                />
            </View>
    );
    }

    fetchData() {
        fetch(Api.topic + '/' + this.props.topicId)
            .then((response) => response.json())
            .then((responseData) => {
                var data = responseData.data;
                this.setState({
                    loaded: true,
                    topicTitle: data.title,
                    topicContent: data.content,
                    date: data.create_at,
                    author: data.author,
                    tag: data.tab
                });
            }).done();
    }
}

export default TopicView;
