import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styles from './Chat.module.css';
import ChatInput from '../components/ChatInput/ChatInput';
import ChatMessage from '../components/ChatMessage/ChatMessage';

const URL = 'ws://192.168.14.127:3030'

class Chat extends Component {
    constructor(props) {
        super(props);

        this.ws = new WebSocket(URL);

        this.state = {
            messages: []
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.ws.onmessage = evt => {
            this.setState(state => ({
                messages: [evt.data, ...state.messages]
            }))
        };

        this.ws.onclose = () => {
            this.ws = new WebSocket(URL)
        }
    }

    submitMessage(form) {
        form.validateFields((err, value) => {
            if (!err) {
                const message = { message: value };

                this.ws.send(JSON.stringify(message));
            }
        });
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle" className={styles["home-row"]}>
                    <Col span={9} className={styles["home-col"]}>
                        <ChatInput
                            addMessage={this.submitMessage}
                        />
                        {this.state.messages.map((message, index) => {
                                return (
                                    <ChatMessage
                                        key={index}
                                        message={JSON.parse(message).message.message}
                                    />
                                )
                            }
                        )}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Chat;
