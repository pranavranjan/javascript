function A() {
    var a = 1;
    B();
    console.log('Inside A');
}
function B() {
    var b = 1;
    console.log('Inside B');
    C();
    console.trace();
}
function C() {
    var c = 3;
    console.trace();
}
A();
