(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(43)},28:function(e,t,a){},30:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(28),a(30),{products:[{_id:"1",image:"/shop-cart/images/electronics/mac.jpg",name:"MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8\u2011core CPU and 8\u2011core GPU, 8GB RAM, 256GB SSD) - Space Grey",brand:"Apple",price:130999,countInStock:10,category:"electronics"},{_id:"2",image:"/shop-cart/images/electronics/Headphones.jpg",name:"Bassheads 900 Wired On Ear Headphones with Mic",brand:"Boat",price:2599,countInStock:0,category:"electronics"},{_id:"3",image:"/shop-cart/images/electronics/Nikon_camera.jpg",name:"Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",brand:"Nikon",price:35179,countInStock:15,category:"electronics"},{_id:"4",image:"/shop-cart/images/electronics/Vintage_telephone.jpg",name:"ICWT4002 Antique Wooden Landline Working Telephone",brand:'MALIK"S Crafts',price:4299,countInStock:15,category:"electronics"},{_id:"5",image:"/shop-cart/images/electronics/drone.jpg",name:"Drone with Dual Camera HD Wide Angle Lens | Visual Hovering with 1800Mah Battery WiFi FPV 4-Axis Dual Camera with Dual",brand:"HILLSTAR Foldable",price:7999,countInStock:50,category:"electronics"},{_id:"6",image:"/shop-cart/images/electronics/rasperry.jpg",name:"Raspberry Pi 4 8GB RAM | All New Raspberry Pi Desktop Computer",brand:"Digital Electronics",price:9385,countInStock:18,category:"electronics"},{_id:"7",image:"/shop-cart/images/furnitures/side table.jpg",name:"Beautiful Antique Wooden Fold-able Side Table/End Table/Plant Stand/Stool Living Room Kids Play Furniture Table Round Shape",brand:"UHUD CRAFTS ",price:1099,countInStock:25,category:"furnitures"},{_id:"8",image:"/shop-cart/images/furnitures/seating set.jpg",name:"Outdoor Garden Patio Seating Set 1+4 4 Chairs and Table Set Balcony Furniture (Brown)",brand:"Dreamline",price:13885,countInStock:18,category:"furnitures"},{_id:"9",image:"/shop-cart/images/furnitures/bean_bag.jpg",name:"HIAH Classy Bean Bags with Beans Filled (Bean Bag Beans/Bean Bag Fillers) (Red,XXXL)",brand:"Generic",price:3559,countInStock:18,category:"furnitures"},{_id:"10",image:"/shop-cart/images/kitchen/steamer.jpg",name:"Stainless Steel Induction Bottom Steamer/Modak/Momo Maker with Glass Lid (2 litres)",brand:"Generic",price:799,countInStock:28,category:"kitchen_products"},{_id:"11",image:"/shop-cart/images/kitchen/tawa.jpg",name:"Non-Stick Tawa with 2-Way Non-Stick Coating, 26cm (Induction and Gas Stove Compatible), Aluminium, Black",brand:"solimo",price:1099,countInStock:50,category:"kitchen_products"},{_id:"12",image:"/shop-cart/images/kitchen/knife.jpg",name:"Stainless Steel Chef's Knife, Silver",brand:"Generic",price:499,countInStock:56,category:"kitchen_products"}]}),l=a(3);var s=function(e){var t=e.match.params.categories?i.products.filter(function(t){return t.category===e.match.params.categories}):i.products.filter(function(e){return"electronics"===e.category});return r.a.createElement("ul",{className:"products"},t.map(function(e){return r.a.createElement("ul",{key:e._id},r.a.createElement("li",null,r.a.createElement("div",{className:"product"},r.a.createElement(l.b,{to:"/shop-cart/product/"+e._id},r.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),r.a.createElement("div",{className:"product-name"},r.a.createElement(l.b,{to:"/shop-cart/product/"+e._id},e.name)),r.a.createElement("div",{className:"product-brand"},e.brand),r.a.createElement("div",{className:"product-price"},"\u20b9 ",e.price))))}))},u=a(9),m=a(22);var d=function(e){var t=Object(n.useState)(1),a=Object(m.a)(t,2),c=a[0],o=a[1],l=i.products.find(function(t){return t._id===e.match.params.id});return r.a.createElement("div",null,r.a.createElement("div",{className:"information"},r.a.createElement("div",{className:"information-img"},r.a.createElement("img",{src:l.image,alt:l.name})),r.a.createElement("div",{className:"information-detail"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h2",null,l.name)),r.a.createElement("li",null,r.a.createElement("h4",null,l.brand)),r.a.createElement("li",null,r.a.createElement("h4",null," \u20b9 ",l.price)),r.a.createElement("li",null,"Qty:    ",r.a.createElement("select",{value:c,onChange:function(e){o(e.target.value)}},Object(u.a)(Array(l.countInStock).keys()).map(function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)}))),r.a.createElement("li",null,l.countInStock>0?r.a.createElement("button",{className:"add-to-cart-button",onClick:function(){e.history.push("/shop-cart/cart/"+e.match.params.id+"?qty="+c)}},"Add to Cart"):r.a.createElement("div",{class:"outOfStock-label"},"Out of stock"))))))},p=a(1),g=a(11),h=a(16),E=a.n(h),f=a(20),b="CART_ADD_ITEM",S="CART_REMOVE_ITEM",v=function(e){return function(t,a){t({type:S,payload:e})}},y=function(e,t){return function(){var a=Object(f.a)(E.a.mark(function a(n){var r;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{r=i.products.find(function(t){return t._id===e}),n({type:b,payload:{product:r._id,name:r.name,image:r.image,price:r.price,countInStock:r.countInStock,qty:t}})}catch(c){}case 1:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()};var k=function(e){var t=Object(g.c)(function(e){return e.cart}).cartItems,a=e.match.params.id,c=e.location.search?Number(e.location.search.split("=")[1]):1,o=Object(g.b)();return Object(n.useEffect)(function(){a&&o(y(a,c))},[]),r.a.createElement("div",{className:"cart"},r.a.createElement("div",null,r.a.createElement(l.b,{to:"/shop-cart",class:"homeButton"},"Add More")),r.a.createElement("div",{className:"cart-list"},r.a.createElement("ul",{className:"cart-list-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Shopping Cart"),r.a.createElement("div",null,"Price")),0===t.length?r.a.createElement("div",null,"Cart is Empty"):t.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"cart-image"},r.a.createElement("img",{src:e.image,alt:e.name})),r.a.createElement("div",{className:"cart-name"},r.a.createElement("div",null,r.a.createElement(l.b,{to:"/shop-cart/product/"+e.product},e.name)),r.a.createElement("div",null,"Qty:",r.a.createElement("select",{value:e.qty,onChange:function(t){return o(y(e.product,t.target.value))}},Object(u.a)(Array(e.countInStock).keys()).map(function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})),r.a.createElement("button",{type:"button",onClick:function(){return t=e.product,void o(v(t));var t}},"Remove"))),r.a.createElement("div",{className:"cart-price"},"\u20b9 ",e.price))}))),r.a.createElement("div",{className:"cart-action"},r.a.createElement("h3",null,"Total Amount : \u20b9 ",t.reduce(function(e,t){return e+t.price*t.qty},0)),r.a.createElement("button",{className:"checkoutButton",disabled:0===t.length},"Proceed To CheckOut")))};var I=function(){return r.a.createElement(l.a,{basename:"/app"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"brand"},r.a.createElement("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")}},"\u2630"),r.a.createElement(l.b,{to:"/shop-cart/"},"Shop Cart")),r.a.createElement("div",{className:"header-links"},r.a.createElement(l.b,{to:"/shop-cart/cart/"},"Cart"),r.a.createElement("a",{href:"signin.html"},"Sign in"))),r.a.createElement("aside",{className:"sidebar"},r.a.createElement("h2",{className:"sidebar-heading"},"Categories"),r.a.createElement("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")}},"x"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/shop-cart/category/electronics"},"Electronics")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/shop-cart/category/furnitures"},"Furnitures")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/shop-cart/category/kitchen_products"}," Kitchen Products")))),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement(p.a,{path:"/shop-cart",exact:!0,component:s}),r.a.createElement(p.a,{path:"/shop-cart/category/:categories?",component:s}),r.a.createElement(p.a,{path:"/shop-cart/product/:id",component:d}),r.a.createElement(p.a,{path:"/shop-cart/cart/:id?",component:k}))),r.a.createElement("footer",{className:"footer"},"All rights reserved.")))},C=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,44)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)})},_=a(12),N="PRODUCT_LIST_REQUEST",T="PRODUCT_LIST_SUCCESS",A="PRODUCT_LIST_FAIL",O="PRODUCT_DETAILS_REQUEST",j="PRODUCT_DETAILS_SUCCESS",B="PRODUCT_DETAILS_FAIL";var D=a(21);var w=Object(_.b)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case T:return{loading:!1,products:t.payload};case A:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0};case j:return{loading:!1,product:t.payload};case B:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var a=t.payload,n=e.cartItems.find(function(e){return e.product===a.product});return n?{cartItems:e.cartItems.map(function(e){return e.product===n.product?a:e})}:{cartItems:[].concat(Object(u.a)(e.cartItems),[a])};case S:return{cartItems:e.cartItems.filter(function(e){return e.product!==t.payload})};default:return e}}}),L=Object(_.d)(w,{},Object(_.c)(Object(_.a)(D.a)));o.a.render(r.a.createElement(g.a,{store:L},r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(I,null)))),document.getElementById("root")),C()}},[[23,3,2]]]);
//# sourceMappingURL=main.0b32982b.chunk.js.map