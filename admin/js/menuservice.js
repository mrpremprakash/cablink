(function() {
    
    angular.module('cablink').service('menuService', function() {
       var navigationLinks = [
           {name: "Dashboard", link: "/", color: "#2dc3e8 !important"},
           {name: "Categories", link: "categories", color: "#ffce55 !important"},
           {name: "Products", link: "products", color: '#fb6e52 !important'},
           {name: "Add Item", link: "additem", color: "#2dc3e8 !important"},
           {name: "Promo Item", link: "promo-item", color: "#fb6e52 !important"},
           //{name: "Add Category", link: "addcategory", color: "#ffce55 !important"},
       ]; 
        
        return {
            getMenus: getMenus
        };
        
        function getMenus() {
            return navigationLinks;
        }
    });
}());