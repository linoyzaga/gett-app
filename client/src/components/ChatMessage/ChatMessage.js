import React from 'react';
import { List } from 'antd';
import QueueAnim from 'rc-queue-anim';

const ChatMessage = ({message}) => {
    return (
        <React.Fragment>
            <QueueAnim
                component={List}
                componentProps={{
                    itemLayout: 'horizontal'
                }}
            >
                <List.Item>
                    <List.Item.Meta
                        title={message} />
                </List.Item>
            </QueueAnim>
        </React.Fragment>
    );
};

export default ChatMessage;
