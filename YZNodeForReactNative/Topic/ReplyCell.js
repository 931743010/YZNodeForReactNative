'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class ReplyCell extends Component {
    render () {
        return (
            <View>
                <Text>{this.props.reply.content}</Text>
            </View>
        );
    }
}

export default ReplyCell