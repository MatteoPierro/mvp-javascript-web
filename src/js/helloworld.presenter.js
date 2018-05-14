const HelloWorldPresenter = function (view) {
    this.greetings = function (name) {
        view.showMessage(`Hello ${subject(name)}`);
    }

    function subject(name) {
        return name === undefined || name === ''
            ? 'World'
            : name;
    }
}

module.exports = {
    HelloWorldPresenter: HelloWorldPresenter
}