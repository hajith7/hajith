
function store() {
    this.products = [
         new product("Accuchek", "Accuchek", 12, 90, 0, 2, 0, 1, 2),
        new product("Charak", "Charak", 16, 90, 0, 1, 1, 1, 2),
        new product("Depura", "Depura", 4, 120, 0, 2, 1, 2, 2),
        new product("CTP", "Cantaloupe", 3, 50, 4, 4, 1, 2, 0),
        new product("Digine", "Digine", 10, 100, 0, 0, 0, 1, 2),
        new product("ecosprin-75mg", "ecosprin-75mg", 11, 50, 4, 4, 1, 1, 1),
        new product("Everherb", "Everherb", 8, 100, 0, 3, 0, 1, 1),
        new product("Hansaplast", "Hansaplast", 8, 50, 4, 4, 0, 1, 2),
        new product("Kapiva", "Kapiva", 14, 90, 1, 4, 0, 2, 2),
        new product("Liveasy", "Liveasy", 18, 125, 1, 4, 0, 2, 2),
        new product("Revital", "Revital", 8, 70, 3, 4, 0, 1, 1),
        new product("Seacod", "Seacod", 9, 70, 1, 4, 2, 1, 2),
        new product("SUGARFREE", "SUGARFREE", 5, 60, 3, 4, 2, 2, 2),
        new product("Volini", "Volini",  19, 70, 1, 2, 0, 1, 2),
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
