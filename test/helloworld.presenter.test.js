const assert = require('chai').assert;
const sinon = require('sinon');
const HelloWorldPresenter = require('../src/helloworld.presenter').HelloWorldPresenter;
const HelloWorldView = require('../src/helloworld.view').HelloWorldView;

describe('HelloWorldPresenter', function () {
    it('should greet with a name when present', function () {
        let view = new HelloWorldView();
        let presenter = new HelloWorldPresenter(view);

        let viewMock = sinon.mock(view);
        viewMock.expects('showMessage').withArgs('Hello pluto');
        presenter.greetings('pluto');

        viewMock.verify();
    });
});