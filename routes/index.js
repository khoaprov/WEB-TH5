var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
mongoose.connect('mongodb+srv://dikay3012:Khoakhung_3012@cluster0.mluan.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Danh sách sản phẩm'});
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Giỏ hàng' });
});

router.get('/product_title', function(req, res, next) {
  res.render('product_title', { title: 'Chi tiết sản phẩm' });
});

module.exports = router;
