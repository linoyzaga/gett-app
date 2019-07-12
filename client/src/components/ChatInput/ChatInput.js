import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './ChatInput.module.css';

const { TextArea } = Input;

const ChatInput = ({ addMessage, form}) => {
    const { getFieldDecorator } = form;

    return (
        <div className={styles["form"]}>
            <Form
                layout="inline">
                <Form.Item >
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'Please input your Message!' }],
                    })(
                        <TextArea
                            type="text"
                            placeholder="Message"
                            rows={4}
                            className={styles["form-input"]}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        onClick={() => {addMessage(form)}}
                        className={styles["form-button"]}>
                        Send
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

const WrappedForm = Form.create({ name: 'normal_form' })(ChatInput);
export default WrappedForm;
