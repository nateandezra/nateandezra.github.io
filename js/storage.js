(function () {

    // Support Node and browser with selective export to modules or window
    var ShoppingCartItem = (function () {

        /**
         * Constructor
         * @param id
         * @param name
         * @param main_image
         * @param price
         * @param quantity
         * @constructor
         */
        function ShoppingCartItem(id, name, main_image, price, quantity) {
            this.id = id;
            this.name = name;
            this.main_image = main_image;
            this.price = price;
            this.quantity = quantity;
        };

        /**
         * Get a new ShoppingCartItem instance from a database representation
         * @param o
         * @returns {ShoppingCartItem}
         */
        ShoppingCartItem.fromObject = function (o) {
            return new ShoppingCartItem(o.id, o.name, o.main_image, o.price, o.quantity);
        };

        /**
         * Get a database representation of this ShoppingCartItem instance
         * @returns {object}
         */
        ShoppingCartItem.prototype.toObject = function () {
            return JSON.parse(JSON.stringify(this));
        };

        /**
         * Get a string representation of this ShoppingCartItem instance
         * @returns {boolean}
         */
        ShoppingCartItem.prototype.toString = function () {
            return [
                this.id,
                this.name,
                this.main_image,
                this.price,
                this.quantity
            ].join(', ');
        };

        ShoppingCartItem.prototype.getTotal = function () {
            return Number.parseFloat(Number(this.price) * Number(this.quantity)).toFixed(2);
        }

        return ShoppingCartItem;


    })();

    // Export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = ShoppingCartItem;
    } else {
        window.ShoppingCartItem = ShoppingCartItem;
    }

})();

(function () {

    // Support Node and browser with selective export to modules or window
    var Customer = (function () {

        /**
         * Constructor
         * @param country
         * @param first_name
         * @param last_name
         * @param address
         * @param second_address
         * @param city
         * @param state
         * @param zip
         * @param email
         * @param phone
         * @constructor
         */
        function Customer(country, first_name, last_name, address, second_address, city, state, zip, email, phone) {
            this.country = country;
            this.first_name = first_name;
            this.last_name = last_name;
            this.address = address;
            this.second_address = second_address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.email = email;
            this.phone = phone;

        };

        /**
         * Get a new Customer instance from a database representation
         * @param o
         * @returns {Customer}
         */
        Customer.fromObject = function (o) {
            return new Customer(o.country, o.first_name, o.last_name, o.address, o.second_address, o.city, o.state, o.zip, o.email, o.phone);
        };

        /**
         * Get a database representation of this Customer instance
         * @returns {object}
         */
        Customer.prototype.toObject = function () {
            return JSON.parse(JSON.stringify(this));
        };

        /**
         * Get a string representation of this Customer instance
         * @returns {boolean}
         */
        Customer.prototype.toString = function () {
            return [
                this.country = country,
                this.first_name = first_name,
                this.last_name = last_name,
                this.address = address,
                this.second_address = second_address,
                this.city = city,
                this.state = state,
                this.zip = zip,
                this.email = email,
                this.phone = phone,
            ].join(', ');
        };

        return Customer;

    })();

    // Export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = Customer;
    } else {
        window.Customer = Customer;
    }

})();

(function () {

    // Support Node and browser with selective export to modules or window
    var ShoppingCart = (function () {

        /**
         * Constructor
         * @param shoppingCartItems
         * @param customer
         * @constructor
         */
        function ShoppingCart(shoppingCartItems, customer) {
            this.shoppingCartItems = shoppingCartItems || [];
            this.customer = customer;

        };

        /**
         * Get a new ShoppingCart instance from a database representation
         * @param o
         * @returns {ShoppingCart}
         */
        ShoppingCart.fromObject = function (o) {
            return new ShoppingCart(o.shoppingCartItems, o.customer);
        };

        /**
         * Get a database representation of this ShoppingCart instance
         * @returns {object}
         */
        ShoppingCart.prototype.toObject = function () {
            return JSON.parse(JSON.stringify(this));
        };

        /**
         * Get a string representation of this ShoppingCart instance
         * @returns {boolean}
         */
        ShoppingCart.prototype.toString = function () {
            if (this.customer == null) {
                return [
                    this.shoppingCartItems,
                    '',
                ].join(', ');
            } else {
                return [
                    this.shoppingCartItems,
                    this.customer.toString(),
                ].join(', ');
            }
        };

        ShoppingCart.prototype.addShoppingCartItem = function (shoppingCartItem) {
            if (shoppingCartItem instanceof ShoppingCartItem) {
                for (var i = 0; i < this.shoppingCartItems.length; i++) {
                    if (shoppingCartItem.id == this.shoppingCartItems[i].id) {
                        console.log(shoppingCartItem.quantity);
                        this.shoppingCartItems[i].quantity = parseInt(this.shoppingCartItems[i].quantity) + parseInt(shoppingCartItem.quantity);
                        return shoppingCartItem;
                    }
                }
                this.shoppingCartItems.push(shoppingCartItem)
                return shoppingCartItem;
            }
        };

        ShoppingCart.prototype.removeShoppingCartItem = function (shoppingCartItem) {
            console.log({ shoppingCartItem })
            console.log("this.shoppingCartItems.length", this.shoppingCartItems.length)
            if (shoppingCartItem instanceof ShoppingCartItem) {
                for (var i = 0; i < this.shoppingCartItems.length; i++) {
                    if (shoppingCartItem.id == this.shoppingCartItems[i].id) {
                        this.shoppingCartItems.splice(i, 1);
                        break;
                    }

                }
            }
            console.log("this.shoppingCartItems.length", this.shoppingCartItems.length)
            saveToStorage(this)
        };

        ShoppingCart.prototype.updateShoppingCartItem = function (shoppingCartItem) {
            console.log({ shoppingCartItem })
            console.log("this.shoppingCartItems.length", this.shoppingCartItems.length)
            if (shoppingCartItem instanceof ShoppingCartItem) {
                for (var i = 0; i < this.shoppingCartItems.length; i++) {
                    if (shoppingCartItem.id == this.shoppingCartItems[i].id) {
                        this.shoppingCartItems[i] = shoppingCartItem;
                        break;
                    }

                }
            }
            console.log("this.shoppingCartItems.length", this.shoppingCartItems.length)
            saveToStorage(this)
        };

        ShoppingCart.prototype.getTotal = function () {
            let cartTotal = 0.00;
            for (var i = 0; i < this.shoppingCartItems.length; i++) {
                //console.log(Number(this.shoppingCartItems[i].price))
                let t = parseFloat(this.shoppingCartItems[i].price) * parseFloat(this.shoppingCartItems[i].quantity);
                cartTotal = cartTotal + t;

            }
            console.log("cartTotal", cartTotal);
            return Number.parseFloat(cartTotal).toFixed(2);
        };

        ShoppingCart.prototype.calculateShipping = function () {
            let totalQuantity = 0;
            let shippingTotal = 0.00;
            for (var i = 0; i < this.shoppingCartItems.length; i++) {
                console.log(parseInt(this.shoppingCartItems[i].quantity))
                totalQuantity = totalQuantity + parseInt(this.shoppingCartItems[i].quantity);
            }

            if (totalQuantity > 0 && totalQuantity <= 3) {
                shippingTotal = 2.00;
            } else if (totalQuantity > 3 && totalQuantity < 7) {
                shippingTotal = 6.00;
            } else if (totalQuantity > 7) {
                shippingTotal = 15.00;
            }
            //console.log('totalQuantity ', totalQuantity)
            //console.log('shippingTotal ', shippingTotal);
            return Number.parseFloat(shippingTotal).toFixed(2);
        };

        ShoppingCart.prototype.totalWithShipping = function () {
            let withShipping = parseFloat(this.getTotal()) + parseFloat(this.calculateShipping()) - (this.getDiscount());
            //console.log('shipping check',withShipping)
            return Number.parseFloat(withShipping).toFixed(2);
        };

        ShoppingCart.prototype.getDiscount = function () {
           const discountCode= 'GET50';
           let a = parseFloat(0.00).toFixed(2);
           let inputDiscount = sessionStorage.getItem('discount')
           console.log('inputDiscount',inputDiscount)
            if (this.getTotal() >= 30.00 && inputDiscount == discountCode) {
                console.log('it works')
                a = parseFloat(this.calculateShipping()/2).toFixed(2);
            }
            console.log('discountCode', discountCode, 'a', a)
            return Number.parseFloat(a).toFixed(2);
        };




        return ShoppingCart;

    })();

    // Export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = ShoppingCart;
    } else {
        window.ShoppingCart = ShoppingCart;
    }

})();


function getCartFromStorage() {
    let cartInSession = sessionStorage.getItem("cart")
    if (cartInSession == null) {
        let globalShoppingCart = new ShoppingCart([], null)
        saveToStorage(globalShoppingCart)
        return globalShoppingCart
    }

    return ShoppingCart.fromObject(JSON.parse(cartInSession))
}

function saveToStorage(shoppingCart) {
    sessionStorage.setItem("cart", JSON.stringify(shoppingCart))
}

function saveCartItem(shoppingCartItem) {
    let cart = getCartFromStorage()
    cart.addShoppingCartItem(shoppingCartItem)
    saveToStorage(cart)
    console.log(cart)
}

//function deleteFromCart(itemId) {
//    let deleteFromCart = cart.getCartFromStorage.find(shoppingCartItem => shoppingCartItem.name === 'id');

//}

//let deleteFromCart = cart.getCartFromStorage.find(shoppingCartItem => shoppingCartItem.name === 'id');

function openDetailPage(url) {
    window.open(url, '_self', false)
}


//	Object.keys(detailViewData).forEach(function (key) {
//		var docElement = document.getElementById(key.concat('-price'));
//		console.log(docElement)
//		while (docElement.firstChild) {
//			docElement.removeChild(docElement.firstChild);
//		}
//		docElement.appendChild(document.createTextNode(detailViewData[key]["price"]));
//	})

