

//Object
let square = {

    leftTop: {
        x: 5,
        y: 5,
    },
    rightBottom: {
        x: 15,
        y: 10,
    },

    getPerimeter: function () {
        //return perimeter...
        result = (this.rightBottom.x - this.leftTop.x) * 2 + (this.rightBottom.y - this.leftTop.y) * 2;
        return result;
    },

    getSquare: function () {
        //return square...
        result = (this.rightBottom.x - this.leftTop.x) * (this.rightBottom.y - this.leftTop.y);
        return result;
    },

    changeWidth: function (n) {
        //return ...
        return this.rightBottom.x = this.rightBottom.x + n;
    },

    changeHeight: function (n) {
        return this.rightBottom.y = this.rightBottom.y + n;
    }

}

//run function
square.getPerimeter();

square.getSquare();

square.changeWidth(5);

square.changeHeight(3);
