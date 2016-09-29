/**
 * Created by Alexander Sugianto on 2016-09-27.
 */

define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var script = require('src/script');

    registerSuite({
        categoriesAPIUrl: function () {
            assert.strictEqual(script.categoriesAPI, 'http://www.bestbuy.ca/api/v2/json/category/departments',
                'categoriesAPIUrl should return be set to http://www.bestbuy.ca/api/v2/json/category/departments');
        },
        productsCategoryAPI: function () {
            assert.strictEqual(script.productsCategoryAPI, 'http://www.bestbuy.ca/api/v2/json/search?categoryid=',
                'productsCategoryAPI should be set to http://www.bestbuy.ca/api/v2/json/search?categoryid=');
        },
        productDetailsAPI: function () {
            assert.strictEqual(script.productDetailsAPI, 'http://www.bestbuy.ca/api/v2/json/product/',
                'productsCategoryAPI should be set to http://www.bestbuy.ca/api/v2/json/product/');
        },
    });
});
