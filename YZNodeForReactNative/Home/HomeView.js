import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    StyleSheet
} from 'react-native';

import Api from '../Api';
var RefreshableListView = require('react-native-refreshable-listview');

import TopicCell from './TopicCell';
import TopicView from '../Topic/TopicView';

class HomeView extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
            loaded: false
        };
      }
    componentDidMount () {
        this.fetchData();
    }

    fetchData () {
        fetch(Api.topics)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.data);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loaded: true
                });
            }).done();
    }
    render(){
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <Text style={styles.loadingText}>
                        数据加载中...
                    </Text>
                </View>
            );
        }

        return this.renderListView();
    }
    renderListView() {
        return (
            <RefreshableListView
                dataSource={this.state.dataSource}
                renderRow={(topic) => this.renderTopicCell(topic)}
                style={styles.topicListView}
                loadData={() => this.fetchData()}
                renderDescription="数据加载中..." />
        )
    }

    renderTopicCell (topic) {
        return (
            <TopicCell
                onSelect={() => this.selectTopic(topic)}
                topic={topic} />
        );
    }

    selectTopic (topic) {
        this.props.navigator.push({
            title: topic.title,
            component: TopicView,
            passProps: {
                topicId: topic.id
            }
        });
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
    },
    loadingText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 80,
        marginBottom: 10,
        marginRight: 10,
        color: '#999'
    },
    topicListView: {
        backgroundColor: '#F0F0F0',
        marginTop: 64
    }
});


export default HomeView














