module app.moduleA {

    var secret = '101010';

    export var exposed = 42;
}

module app.moduleB {

    var secret = Math.PI;

    export function add(a: number, b: number): number {
        return a + b;
    }
}



module app.moduleC {
    var first = app.moduleA.secret; // Nope
    var second = app.moduleB.secret; // And nope

    import myAdd = app.moduleB.add;
    import exposed = app.moduleA.exposed;

    console.assert(exposed === 42);

    console.assert(myAdd(1, 1) === 2);
    console.assert(app.moduleB.add(1, 1) === 2);
}