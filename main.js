const $ = require('jquery');
const HelloWorldPresenter = require('./src/helloworld.presenter').HelloWorldPresenter


let view = {
    showMessage: function (message) {
        $('h1').text(message);
    }
};
let helloworld = new HelloWorldPresenter(view);
helloworld.greetings("World");