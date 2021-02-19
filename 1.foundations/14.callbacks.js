function callbackExample(name, callback) {
    console.log(callback(name));
}

var callback = function(name) {
    return "Hello " + name;
}

callbackExample("Vitalii Rysich", callback);