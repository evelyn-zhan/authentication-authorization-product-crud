import express from 'express'
import Product from '../../models/product.js'

const router = express.Router()

router.get('/', (req, res) => {
    Product.findAll()
        .then((products) => {
            res.render('admin/product/index', { products, user: req.session.user || '' })
        })
})

router.get('/create', (req, res) => {
    res.render('admin/product/create', { user: req.session.user || '' })
})

router.get('/edit/:id', (req, res) => {
    Product.findOne({ where: { id: req.params.id } })
        .then((product) => {
            res.render('admin/product/edit', { product, user: req.session.user || '' })
        })
})

router.post('/api/product', (req, res) => {
    Product.create({ name: req.body.name, price: req.body.price })
        .then((results) => {
            res.json({ status: 200, error: null, response: results })
        })
        .catch((error) => {
            res.json({ status: 502, error })
        })
})

router.put('/api/product/:id', (req, res) => {
    Product.update({ name: req.body.name, price: req.body.price }, { where: { id: req.params.id } })
        .then((results) => {
            res.json({ status: 200, error: null, response: results })
        })
        .catch((error) => {
            res.json({ status: 502, error })
        })
})

router.delete('/api/product/:id', (req, res) => {
    Product.destroy({ where: { id: req.params.id } })
        .then((results) => {
            res.json({ status: 200, error: null, response: results })
        })
        .catch((error) => {
            res.json({ status: 500, error, response: {} })
        })
})

export default router