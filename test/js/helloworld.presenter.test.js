const assert = require('chai').assert;
const sinon = require('sinon');
const HelloWorldPresenter = require('../../src/js/helloworld.presenter').HelloWorldPresenter;
const HelloWorldView = require('../../src/js/helloworld.view').HelloWorldView;

describe('HelloWorldPresenter', function () {
    var view;
    var presenter;

    beforeEach(function () {
        view = new HelloWorldView();
        presenter = new HelloWorldPresenter(view);
    });

    it('should greet with a name when specified', function () {
        const name = 'pluto';
        let viewMock = expectMessage('Hello ' + name);
        presenter.greetings(name);

        viewMock.verify();
    });

    it('should greet the world then a name is not specified', function () {
        let viewMock = expectMessage('Hello World');
        presenter.greetings();

        viewMock.verify();
    });

    function expectMessage(message) {
        let viewMock = sinon.mock(view);
        viewMock.expects('showMessage').withArgs(message);
        return viewMock;
    }
});