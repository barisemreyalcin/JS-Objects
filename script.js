/*
1. Store the Orders Information in an Object.
2. Evaluate the total price with VAT for each order seperately.
3. Evaluate the total price with VAt for all orders.

    Order ID: 101
    Order Date: 31.12.2023
    Payment Method: Credit Card
    Customer Address: Esenlik Mah. Antakya Hatay
    Purchased Products: 
        Product ID: 5
        Product Title: iPhone 13 Pro
        Product URL: http://abc.com/iphone-13-pro
        Product Price: 35000

        Product ID: 6
        Product Title: iPhone 13 Pro Max
        Product URL: http://abc.com/iphone-13-pro-max
        Product Price: 42000

    Customer:
        Customer ID: 12
        
    Seller:
        Firm ID: 34
        Firm Name: Apple Turkey

    Order ID: 102
    Order Date: 30.12.2023
    Payment Method: Credit Card
    Customer Address: Altınçay Mah. Antakya Hatay
    Purchased Products: 

        Product ID: 6
        Product Title: iPhone 13 Pro Max
        Product URL: http://abc.com/iphone-13-pro-max
        Product Price: 42000

    Customer:
        Customer ID: 12
        
    Seller:
        Firm ID: 34
        Firm Name: Apple Turkey
*/

let order_1 = {
    "order_id": 101,
    "order_date": "31.12.2023",
    "payment_method": "Credit Card",
    "customer_address": {
        "neighborhood": "Esenlik Mahallesi",
        "district": "Antakya",
        "city": "Hatay"
    },
    "products": [
        {
            "product_id": 5,
            "product_title": "iPhone 13 Pro",
            "product_url": "http://abc.com/iphone-13-pro",
            "product_price": 35000
        },
        {
            "product_id": 6,
            "product_title": "iPhone 13 Pro Max",
            "product_url": "http://abc.com/iphone-13-pro-max",
            "product_price": 42000
        }
    ]
};
let order_2 = {
    "order_id": 102,
    "order_date": "30.12.2023",
    "payment_method": "Credit Card",
    "customer_address": {
        "neighborhood": "Altınçay Mahallesi",
        "district": "Antakya",
        "city": "Hatay"
    },
    "products": [
        {
            "product_id": 6,
            "product_title": "iPhone 13 Pro Max",
            "product_url": "http://abc.com/iphone-13-pro-max",
            "product_price": 42000
        }
    ]
};

let totalPrice1 = (order_1.products[0].product_price + order_1.products[1].product_price) * 1.18;
let totalPrice2 = (order_1.products[0].product_price) * 1.18;

let totalPrice = totalPrice1 + totalPrice2;

console.log("Total price of order 1: " + totalPrice1);
console.log("Total price of order 2: " + totalPrice2);
console.log("Total price of all orders: " + totalPrice);
