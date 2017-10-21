const KEY_CODE = {
    ARROW: {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    },
    ENTER: 13,
    BACKSPACE: 8,
    ESC: 27
};

var KeyCode = function (keyCode) {
    this.keyCode = keyCode;
};

KeyCode.create = function (keyCode) {
    return new KeyCode(keyCode);
};

KeyCode.prototype = {
    isArrowUpKey: function () {
        return this.keyCode === KEY_CODE.ARROW.UP;
    },
    isArrowDownKey: function () {
        return this.keyCode === KEY_CODE.ARROW.DOWN;
    },
    isArrowKey: function () {
        for (var key in KEY_CODE.ARROW) {
            if (this.keyCode === KEY_CODE.ARROW[key]) {
                return true;
            }
        }
        return false;
    },
    isEnterKey: function () {
        return this.keyCode === KEY_CODE.ENTER;
    },
    isEscKey: function (){
        return this.keyCode === KEY_CODE.ESC;
    }
};

module.exports = KeyCode;
