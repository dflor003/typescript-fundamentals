(function () {

    /* A few functions */
    function sum(a, b) {
        return a + b;
    }

    function print(message) {
        console.log(message);
    }

    /* A JavaScript "class" */
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype = {

        add: function (x, y) {
            this.x += x;
            this.y += y;
        },

        flip: function() {
            var temp = this.x;
            this.x = this.y;
            this.y = temp;
        }
    };

})();