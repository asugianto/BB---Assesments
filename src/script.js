define([], function() {
    var BestBuy = {};

    BestBuy = {
        categoriesAPI: 'http://www.bestbuy.ca/api/v2/json/category/departments',
        productsCategoryAPI: 'http://www.bestbuy.ca/api/v2/json/search?categoryid=',
        productDetailsAPI: 'http://www.bestbuy.ca/api/v2/json/product/',
        API: {
            getCategoriesAPI: function() {
                $.ajax({
                    url: BestBuy.categoriesAPI,
                    dataType: 'jsonp',
                    success: function(result) {
                        $('#categoryWrapper').html(BestBuy.templateCategories(result.subCategories));
                        BestBuy.Click.bindCategoriesLink();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log('error loading categories');
                    }
                });
            },
            getProductsCategoryAPI: function(categoryid) {
                $.ajax({
                    url: BestBuy.productsCategoryAPI + categoryid,
                    dataType: 'jsonp',
                    success: function (result) {
                        $('#productWrapper').html(BestBuy.templateProducts(result.products));
                        BestBuy.Click.bindProductLink();
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log('error loading products');
                    }
                });
            },
            getProductDetailAPI: function(sku) {
                that = this;
                $.ajax({
                    url: BestBuy.productDetailsAPI + sku,
                    dataType: 'jsonp',
                    success: function(result) {
                        $('#productDetail').html(BestBuy.templateProductDetail(result));
                        $('#myModal').modal('show');
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log('error loading product detail');
                    }
                });
            }
        },
        Click: {
            bindCategoriesLink: function() {
                $('.listCategories li').each(function() {
                    $(this).on('click', function() {
                        BestBuy.API.getProductsCategoryAPI($(this).data('categoryid'));
                    });
                })
            },
            bindProductLink: function() {
                $('.listProducts li').each(function() {
                    $(this).on('click', function() {
                        BestBuy.API.getProductDetailAPI($(this).data('sku'));
                    });
                })
            }
        },
        Initialize: function() {
            this.API.getCategoriesAPI();
            this.API.getProductsCategoryAPI('departments');
        }
    }

    return BestBuy;
});