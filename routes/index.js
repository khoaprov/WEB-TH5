var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
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
