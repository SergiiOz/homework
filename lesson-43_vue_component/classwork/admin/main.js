let defaultProduct = {
    title: '',
    price: 0,
    description: '',
    image: '',
}

//Vue framework
var app = new Vue({

    el: '#app',
    data: {

        //Our list products
        list: [],


        newProduct: {
            title: '',
            price: 0,
            description: '',
            image: '',
        },

        //display Cart 
        isShowList: false,

    },

    methods: {

        addItemsToList: function () {
            //let cloneObj = Object.assign({}, this.newProduct);
            //this.list.push(cloneObj);

            this.list.push(this.newProduct);
            // this.newProduct = {
            //     title: '',
            //     price: 0,
            //     description: '',
            //     image: '',
            // }; //clear newProduct

            this.newProduct = defaultProduct; //write above, clear newProduct 
        }

    },



});
