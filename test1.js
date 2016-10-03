function A() {
    var a = 1;
    B();
    console.log('Inside A');
}
function B() {
    bar b = 1;
    console.log('Inside B');
    console.trace();
}
A();
