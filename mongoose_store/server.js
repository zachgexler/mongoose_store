const express = require('express');
const app = express();
const pokemon = require("./models/product")
const port = 3000;
const methodOverride = require("method-override");
const product = require('./models/product');

app.use(methodOverride("_method"));

app.use((req, res, next) => {
    next()
})
app.get("/product", function (req, res) {
    res.render("index.ejs", {
        allProduct: product
    })
});

app.post("/product", (req, res) => {
    console.log(req.body)
    res.send("data received")
})

app.get("/product/new", function (req, res) {
    res.render("new.ejs")
})

app.get("/product/:indexOfProductArray", function (req, res) {
    res.render("show.ejs", {
        product: product[req.params.indexOfProductArray]
    })
})

app.delete("/prodcut:indexOfProductArray", (req, res) => {
    product.splice(req.params.indexOfProductArray) //remove the item from the array
    res.redirect("/product") //redirect back to index route
})

app.get("/product/id"), function (res, req) {
    res.render("show.ejs", {
        productId: product[req.params.id]
    }
    )
}


// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, () => {
    console.log(`listening on port `, port)
});