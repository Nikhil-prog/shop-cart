import express from 'express';
import data from './data';

const app = express();

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product)
        res.send(product);
    else
        res.status(404).send({ msg: "Not Found" })
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(3000, () => { console.log("Server at http://Nikhil-prog.github.io/Shop-Cart:5000") });