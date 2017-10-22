import React, {Component} from 'react';
import Button from './Button';
import './WriteForm.scss';
// import { URLSearchParams } from 'url';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class WriteForm extends Component {
    props: {
        onClose: func
    };

    state = {
        title: '',
        content: ''
    };

    closeWriteForm() {
        this.setState({
            title: '',
            content: '',
        });
        this.props.onClose();
    };

    render() {
        return (
            <div className="writeForm">
                <input placeholder="제목을 입력해주세요." onBlur={this.handleChangeTitle.bind(this)}/>
                <textarea placeholder="내용을 입력해주세요." onBlur={this.handleChangeContent.bind(this)}/>
                <Button onClick={this.handleCloseBtn.bind(this)}>닫기</Button>
                <Button onClick={this.handleClickSaveBtn.bind(this)}>저장</Button>
            </div>
        );
    };

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    handleChangeContent = (event) => {
        this.setState({
            content: event.target.value
        })
    };

    handleClickSaveBtn = () => {
        const {title, content} = this.state;

        // Why does not this work?
        // const params = new URLSearchParams();
        // params.append('title', title);
        // params.append('content', content);

        let body = {
            id: null,
            title,
            content,
        };

        window.fetch('http://localhost:8080/post/save',
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {'Content-Type': 'application/json'}
            })
            .then(() => {
                alert('저장되었습니다.');
                this.closeWriteForm();
            })
            .catch(err => console.error(err));

    };

    handleCloseBtn = () => {
        this.closeWriteForm();
    };


}

export default WriteForm;