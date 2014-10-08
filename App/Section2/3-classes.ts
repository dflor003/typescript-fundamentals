module foo.bar {

    export class MyFirstClass {
        fieldA = 42;
        fieldB: string;

        constructor(fieldB: string) {
            this.fieldB = fieldB;
        }

        getA(): number {
            return this.fieldA;
        }

        getB(): string {
            return this.fieldB;
        }
    }



    export class MySecondClass {
        private secretish = false;
        public notSecretAtAll = 'foo';
        defaultToPublic: MyFirstClass;

        constructor(firstClass: MyFirstClass) {
            this.defaultToPublic = firstClass;
        }

        public publicFunc(): void { }
        alsoPublicFunc(): void { }
        private privateishFunc(): void { }
    }

    var first = new MyFirstClass('baz');
    var second = new MySecondClass(first);
    second.notSecretAtAll = 'bar'; // Works
    second.secretish = true; // Nope...

    second.publicFunc(); // Fine
    second.alsoPublicFunc(); // Also fine
    second.privateishFunc(); // Nope...
}

module foo.bar {
    // Implementing an interface!
    export interface IPoint {
        x: number;
        y: number;
    }

    class Point implements IPoint {
        constructor(
            public x: number,
            public y: number) {
        }

        flip(): IPoint {
            return new Point(this.y, this.x);
        }

        add(other: Point): Point
        add(other: IPoint): IPoint;
        add(other: any): any { // Note: Order matters
            return new Point(this.x + other.x, this.y + other.y);
        }

        static origin(): Point {
            return new Point(0, 0);
        }
    }

    // Simple class behavior
    var first = new Point(10, 10),
        second = new Point(110, 210),
        sum = first.add(second);

    console.assert(sum.x === 110);
    console.assert(sum.y === 210);
    console.assert(typeof sum.add === 'function');

    // Static functions
    var coords = Point.origin().add({ x: -10, y: -25 });

    console.assert(coords.x === -10);
    console.assert(coords.y === -25);
}