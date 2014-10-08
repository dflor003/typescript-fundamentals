﻿(function () {

    /* A few functions */
    function sum(a: number, b: number): number {
        return a + b;
    }

    function print(message: string): void {
        console.log(message);
    }

    /* With static typing */
    console.assert(sum(12, 12) === 24);
    console.assert(sum('a', 'b') === '???'); // Nope
    print("Hello world!");



    /* Some declarations */ 
    var myString: string = "Foo";
    console.assert(myString === "Foo"); 
    console.assert(myString === 42); // Type error

    myString = 42; // Error
    myString = <any>42; // Cast to "any"



    /* Anys */
    var dynamicVal: any;
    var anotherDynamic;
    dynamicVal = 10;
    dynamicVal = 'a';
    dynamicVal = /[A-Za-z0-9]+/gi;

    anotherDynamic = 42;
    anotherDynamic = 'The answer to life the universe and everything';



    /* Arrays */ 
    var numArray: number[];
    numArray = [1, 2, 3, 4]; // Works
    numArray = ['a', 'b', 'c']; // Error
    numArray.push('a', 'b'); // Fails! (Generics)
    numArray.push(42, 24, 16);

    var uberPolymorphicContainer: any[] = [];
    uberPolymorphicContainer.push(10);
    uberPolymorphicContainer.push('Foo');



    /* Objects */
    var myObj = { foo: 'bar', baz: 'yar' };
    console.assert(myObj.foo === 'bar');

    myObj = {}; // Where are my properties??



    /* Functions */
    function myNamedFunction(param1: string, param2: string): string {
        return param1 + param2;
    }
    var imAString = myNamedFunction('hello', 'world');
    console.log(imAString.toUpperCase());



    /* Spoilers */
    var lambda = (param1: string, param2: string) => param1 + param2;
    console.log(lambda('hello', 'world')); // Pretty awesome



    /* A JavaScript "class" */
    function Point(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    Point.prototype = {

        add: function (x: number, y: number) {
            this.x += x;
            this.y += y;
        },

        flip: function () {
            var temp = this.x;
            this.x = this.y;
            this.y = temp;
        }
    };

    // Where's my intellisense?!?
    var point = new Point(10, 10);
    point.add(10, 20); // Soon...
})();