function a() {
    debugger;
    b();
    console.log("A");
}

function b() {
    debugger;
    c();
    console.log("B")
}

function c() {
    debugger;
    console.log("C")
}

debugger;
a();