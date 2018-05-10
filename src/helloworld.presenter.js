const HelloWorldPresenter = function (view) {
    this.greetings = function (name) {
        view.showMessage("Hello " + name);
    }
}

module.exports = {
    HelloWorldPresenter: HelloWorldPresenter
}