import React, { Component } from 'react';
import Button from './Button';
import './WriteForm.scss';

class WriteForm extends Component {
    props: {
        onClose: func
    };

    render () {
        return (
            <div className="writeForm">
                <input placeholder="제목을 입력해주세요." />
                <textarea placeholder="내용을 입력해주세요." />
                <Button onClick={this.props.onClose}>닫기</Button>
            </div>
        );
    }
}

export default WriteForm;