import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Popup from './popup/PopUp';
import WriteForm from './WriteForm';
import KeyCode from '../utils/KeyCode.js';

import './Contents.scss';

class Contents extends Component {

    componentDidMount() {
        let header = document.getElementsByClassName('header')[0];
        let writePopup = document.getElementById('bgModal');
        header.parentNode.insertBefore(writePopup, header);
        this.writePopup = writePopup;

        window.onkeydown = function(e){
            let keyCode = new KeyCode(e.keyCode);
            if(keyCode.isEscKey()){
                let writePopup = document.getElementById('bgModal');
                writePopup.style.display = "none";
            }
        };
    }

    showPopup() {
        let popup = <Popup onClose={this.closePopup} >
            <WriteForm onClose={this.closePopup}/>
        </Popup>;
        ReactDOM.render(popup, document.getElementById('writePopupWrapper'));
        this.writePopup.style.display = "block";
    }

    render() {
        return (
            <div className="content">
                <div id="bgModal"><div id="writePopupWrapper"/></div>
                <div className="buttonArea">
                    <Button onClick={this.handleWriteFormClick.bind(this)}>
                        글쓰기
                    </Button>
                </div>
                <div className="contentArea">
                </div>
            </div>
        );
    }

    closePopup = () => {
        this.writePopup.style.display = "none";
    };

    handleWriteFormClick = (e) => {
        e.preventDefault();
        this.showPopup();
    }

}

export default Contents;