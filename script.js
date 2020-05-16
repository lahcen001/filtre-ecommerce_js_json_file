$(document).ready(function () {
    $('.col-md-3').load('./components/filter.html', function(){
        $("#byType").load('./components/filterByType.html');
        $("#bySize").load('./components/filterBySize.html');
        $("#byColor").load('./components/filterByColor.html');
        $("#byBrand").load('./components/filterByBrand.html');
        $("#byPrice").load('./components/filterByPrice.html');
    })
    $.getJSON('./products.json', function (data) {
        $.each(data, function (i, product) {
            $('#products').append("<div class='card col-md-3 pl-1 pb-1 border-0' style='width: 18rem;'><img src='" + product.Image + "' class='card-img-top' alt='...'><div class='card-body p-1'><ul class='p-0 m-0'><li class='itm'>Type : " + product.ProductType + "</li><hr><li class='itm'>Brand : " + product.Brand + "</li><hr><li class='itm'>Color : " + product.Couleur + "</li><hr><li class='itm'>Size : " + product.Taille + "</li><hr><li class='itm'>Price : " + product.Prix + "</li></ul></div></div>");
        });
    });

});
