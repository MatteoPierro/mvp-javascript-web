const $ = require('jquery');
const HelloWorldPresenter = require('./src/helloworld.presenter').HelloWorldPresenter


let view = {
    showMessage: function (message) {
        $('h1').text(message);
    }
};
let helloWorldPresenter = new HelloWorldPresenter(view);

let greetingsCallback = function () {
    let name = $('#name').val();
    helloWorldPresenter.greetings(name);
};
$('#greetings').click(greetingsCallback);