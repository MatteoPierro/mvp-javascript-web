const HelloWorldPresenter = function (view) {
    this.greetings = function (name) {
        if (name === undefined || name === '') {
            view.showMessage("Hello World");
            return;
        }
        view.showMessage("Hello " + name);
    }
}

module.exports = {
    HelloWorldPresenter: HelloWorldPresenter
}