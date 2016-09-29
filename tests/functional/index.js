define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');
    var expect = require('intern/chai!expect');

    registerSuite({
        'Check if categories being loaded to the page': function () {
            return this.remote
                .get(require.toUrl('index.html'))
                .setFindTimeout(5000)
                .findByClassName('listCategories')
                .then(function () {
                    return true;
                });
        },
        'Check if products being loaded to the page': function () {
            return this.remote
                .get(require.toUrl('index.html'))
                .setFindTimeout(5000)
                .findByClassName('listProducts')
                .then(function () {
                    return true;
                });
        }
    });
});