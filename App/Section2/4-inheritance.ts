module foo.bar {
    
    class BaseClass {
        private value: string;

        constructor(value: string) {
            this.value = value;
        }

        getValue(): string { return this.value; }
    }

    class DerivedClass extends BaseClass {
        appendValue = 'Extended'

        constructor(value: string) {
            super(value);
        }

        getValue(): string {
            return super.getValue() + ' ' + this.appendValue;
        }
    }

    // Polymorphism
    var baseClasses: BaseClass[] = [
        new BaseClass('foo'),
        new BaseClass('bar'),
        new DerivedClass('baz')
    ];

    console.log(baseClasses[0].getValue()); // Works
    console.log(baseClasses[2].appendedValue); // Nope

    // Iterate and use polymorphically
    for (var i = 0; i < baseClasses.length; i++) {
        console.log(baseClasses[i].getValue());
    }
    // Prints:
    // foo
    // bar
    // baz Extended
}