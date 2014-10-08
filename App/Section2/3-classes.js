var foo;
(function (foo) {
    (function (bar) {
        var MyFirstClass = (function () {
            function MyFirstClass(fieldB) {
                this.fieldA = 42;
                this.fieldB = fieldB;
            }
            MyFirstClass.prototype.getA = function () {
                return this.fieldA;
            };

            MyFirstClass.prototype.getB = function () {
                return this.fieldB;
            };
            return MyFirstClass;
        })();
        bar.MyFirstClass = MyFirstClass;

        var MySecondClass = (function () {
            function MySecondClass(firstClass) {
                this.secretish = false;
                this.notSecretAtAll = 'foo';
                this.defaultToPublic = firstClass;
            }
            MySecondClass.prototype.publicFunc = function () {
            };
            MySecondClass.prototype.alsoPublicFunc = function () {
            };
            MySecondClass.prototype.privateishFunc = function () {
            };
            return MySecondClass;
        })();
        bar.MySecondClass = MySecondClass;

        var first = new MyFirstClass('baz');
        var second = new MySecondClass(first);
        second.notSecretAtAll = 'bar'; // Works
        second.secretish = true; // Nope...

        second.publicFunc(); // Fine
        second.alsoPublicFunc(); // Also fine
        second.privateishFunc(); // Nope...
    })(foo.bar || (foo.bar = {}));
    var bar = foo.bar;
})(foo || (foo = {}));

var foo;
(function (foo) {
    (function (bar) {
        

        var Point = (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype.flip = function () {
                return new Point(this.y, this.x);
            };

            Point.prototype.add = function (other) {
                return new Point(this.x + other.x, this.y + other.y);
            };

            Point.origin = function () {
                return new Point(0, 0);
            };
            return Point;
        })();

        // Simple class behavior
        var first = new Point(10, 10), second = new Point(110, 210), sum = first.add(second);

        console.assert(sum.x === 110);
        console.assert(sum.y === 210);
        console.assert(typeof sum.add === 'function');

        // Static functions
        var coords = Point.origin().add({ x: -10, y: -25 });

        console.assert(coords.x === -10);
        console.assert(coords.y === -25);
    })(foo.bar || (foo.bar = {}));
    var bar = foo.bar;
})(foo || (foo = {}));
//# sourceMappingURL=3-classes.js.map
