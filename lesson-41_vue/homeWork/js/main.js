//Vue framework
var app = new Vue({

    el: '#app',
    data: {


        list: [
            { photo: 'img', name: 'asics', price: 44, count: 0, isAdded: false },
            { photo: 'img', name: 'nike', price: 43, count: 0, isAdded: false },
            { photo: 'img', name: 'adidas', price: 72, count: 0, isAdded: false },
            { photo: 'img', name: 'soucony', price: 56, count: 0, isAdded: false },
        ],

        totalPrice: 0,

        sumItem: 0,

        //my Cart list
        cartList: [],

        //display Cart 
        isShowCart: false,
    },

    methods: {

        increment: function (item) { //task-04
            item.count = item.count + 1;
            this.totalSumPricing();

        },

        decrement: function (item) { //task-04
            if (item.count > 0) {
                item.count = item.count - 1;
                this.totalSumPricing();
            }
        },

        onSumItems() {

            let sum = 0;

            this.list.forEach(item => {
                if (item.isAdded) {
                    sum = sum + 1;
                }
            })
            // for (var i = 0; i < this.list.length; i++) {
            //     if (this.list[i].isAdded) {
            //         sum = sum + 1;
            //     }
            // }

            this.sumItem = sum;
        },

        // change item key isAdded to true and sum Items
        isAddedChange: function (item) {
            item.isAdded = true;
            this.onSumItems();
        },

        clearCart: function () {
            this.sumItem = 0;
            this.cartList = [];
            this.totalPrice = 0;
        },

        isChangeShowCart: function () {
            this.isShowCart = true;
            this.createCartList();
            this.totalSumPricing();
            //change isAdded to false
            this.list.forEach(person => {
                if (person.isAdded === true){
                    person.isAdded = false;
                }
            });
        },

        //create list added to cart
        createCartList: function () {
            this.cartList = this.list.filter(item => {
                if (item.isAdded === true) {
                    return true;
                }
            });
        },

        //total sum 
        totalSumPricing: function () {
            this.totalPrice = this.cartList.reduce((total, item) => {
                return (total + (item.count * item.price));
            }, 0);
        }
    },



});