function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function fn () {
        console.log("Hi! I'm a named function");
      }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(" ");
    }
}