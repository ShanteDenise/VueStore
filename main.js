
//Create a new instance of vue
//The root of a vue application
var app = new Vue({
    
    el: '#app', //element that connects to the div #app in html
    data:{ //the data that will display in app div
        product: 'Socks',
        image: '/assets/vmSocks-green.jpeg',
        inventory: 10,
        onSale: true,
        details:["80% cotton", "20% polyester", "Long-tubed"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: '/assets/vmSocks-green.jpeg',
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpeg'

            }
        ],
        sizes: ["S","M","L","XL","XXL"],
        cart:0,

    },
    methods: {
        addToCart(){
        this.cart += 1
        },
        updateProduct:function (variantImage){
            this.image = variantImage
        },
        removeFromCart(){
            this.cart -= 1
              
        }
}
})