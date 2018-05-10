const $ = require('jquery');

const HelloWorldView = function () {
    this.showMessage = function (message) {
        $('h1').text(message);
    }
}

module.exports = {
    HelloWorldView: HelloWorldView
}