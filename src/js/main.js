const $ = require('jquery');
const HelloWorldPresenter = require('./helloworld.presenter').HelloWorldPresenter;
const HelloWorldView = require('./helloworld.view').HelloWorldView;

let view = new HelloWorldView();
let presenter = new HelloWorldPresenter(view);

let greetingsCallback = function () {
    let name = $('#name').val();
    presenter.greetings(name);
};
$('#greetings').click(greetingsCallback);