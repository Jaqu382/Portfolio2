(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{172:function(e,t,n){"use strict";var r=n(0),a=n(268),i=n(269),c=n(9),o=n.n(c),s=n(2),l=n(12),u=n(3),j=n(24),b=n(1),d="D",f="4";function h(e){e.route;var t=e.navigation,n=Object(r.useState)(""),a=o()(n,2),i=a[0],c=a[1],s=Object(r.useState)(""),h=o()(s,2),x=h[0],g=h[1],O=Object(r.useState)(""),v=o()(O,2),m=v[0],p=v[1];return Object(b.jsxs)(u.a,{style:y.container,children:[Object(b.jsxs)(j.b,{children:[Object(b.jsx)(j.b.Title,{children:"Admin:"}),Object(b.jsx)(j.d,{label:"Username",onChangeText:function(e){g(e)}}),Object(b.jsx)(j.d,{label:"Password",secureTextEntry:"true",onChangeText:function(e){p(e)}}),Object(b.jsx)(l.a,{style:y.error,children:i}),Object(b.jsx)(j.b.Divider,{}),Object(b.jsx)(j.a,{title:"Login",onPress:function(){x==d&&m==f?t.navigate("Inventory",{username:x}):c("Your username or password is incorrect")}})]}),Object(b.jsxs)(l.a,{children:["Username: ",d,", Password: ",f]})]})}var y=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},error:{color:"red"}}),x=n(25);function g(e){var t=e.item,n=Object(r.useState)(""),a=o()(n,2),i=a[0],c=a[1];return Object(r.useEffect)((function(){t.sale&&c(t.price-t.price*t.discount)})),Object(b.jsxs)(j.b,{style:O.container,children:[Object(b.jsxs)(u.a,{children:[Object(b.jsx)(x.a,{source:t.image,style:O.Image}),Object(b.jsx)(j.b.Title,{children:t.bookName})]}),Object(b.jsxs)(u.a,{style:O.desc,children:[Object(b.jsxs)(l.a,{children:["Author: ",t.author]}),Object(b.jsxs)(l.a,{style:t.sale?O.onSale:void 0,children:["Price: $",t.price]}),Object(b.jsx)(l.a,{style:O.sale,children:i}),Object(b.jsxs)(l.a,{children:["remaining: ",t.qty]})]})]})}var O=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},Image:{width:100,height:100,alignSelf:"center"},sale:{color:"red"},onSale:{textDecorationLine:"line-through",textDecorationStyle:"solid"},desc:{alignItems:"center",fontSize:14},Button:{width:"fit-content"}}),v=n(56);function m(e){var t=e.inventory,n=e.username;return Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(l.a,{style:p.title,children:["Welcome, ",n]}),Object(b.jsx)(v.a,{data:t,keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;if(0!=t.qty)return Object(b.jsx)(g,{item:t})}})]})}var p=s.a.create({title:{marginTop:5,textAlign:"center",fontWeight:"bold",fontSize:20}}),I=[{bookName:"The Midnight Library",author:"Matt Haig",price:20,sale:!1,discount:.05,qty:5,image:n(236),id:0},{bookName:"The House On The Cerulean Sea",author:"TJ Klune",price:15,sale:!1,discount:.1,qty:4,image:n(237),id:1},{bookName:"The HitchHikers's Guide to the Galaxy",author:"Douglas Adams",price:15,sale:!0,discount:.15,qty:2,image:n(238),id:2},{bookName:"We Hunt the Flame",author:"Hafsah Faizel",price:20,sale:!1,discount:.1,qty:0,image:n(239),id:3},{bookName:"A Pho Love Story",author:"Loan le",price:20,sale:!1,discount:.05,qty:0,image:n(240),id:4}];function S(e){var t=e.route,n=e.navigation,a=t.params.username,i=Object(r.useState)([]),c=o()(i,2),s=c[0],l=c[1];return Object(b.jsxs)(u.a,{style:k.container,children:[Object(b.jsx)(m,{username:a,inventory:I}),Object(b.jsxs)(u.a,{style:k.navigator,children:[Object(b.jsx)(j.a,{style:k.Button,title:"Manage Stock",onPress:function(){return n.navigate("Stock",{inventory:I,newInventory:s,setNewInventory:l,username:a})}}),Object(b.jsx)(j.a,{style:k.Button,title:"Logout",onPress:function(){return n.navigate("Login")}})]})]})}var k=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},Button:{width:"fit-content"},navigator:{alignItems:"center"}});function w(e){var t=e.item,n=(e.inventory,e.newInventory,e.setNewInventory),a=Object(r.useState)(),i=o()(a,2),c=i[0],s=i[1],d=Object(r.useState)(),f=o()(d,2),h=f[0],y=f[1],g=Object(r.useState)(t.sale),O=o()(g,2),v=O[0],m=(O[1],Object(r.useCallback)((function(e){e.qty=e.qty+1,n(e)}))),p=Object(r.useCallback)((function(e){e.qty=e.qty-1,n(e)})),I=Object(r.useCallback)((function(e,t){var r;NaN==e||void 0==e?(r=20,t.price=r,n(t)):(r=parseInt(e),t.price=r,n(t))})),S=Object(r.useCallback)((function(e,t){var r;NaN==e?(r=5,t.discount=r/100,n(t)):void 0==c?(r=5,t.price=r/100,n(t)):(priceContainer=parseInt(c),t.price=r/100,n(t))})),k=Object(r.useCallback)((function(e){e.sale=!e.sale,n(e)}));return Object(b.jsxs)(j.b,{style:C.container,children:[Object(b.jsxs)(u.a,{children:[Object(b.jsx)(x.a,{source:t.image,style:C.Image}),Object(b.jsx)(j.b.Title,{children:t.bookName})]}),Object(b.jsxs)(u.a,{style:C.desc,children:[Object(b.jsxs)(l.a,{children:["Author: ",t.author]}),Object(b.jsxs)(l.a,{children:["Price: $",t.price]}),Object(b.jsx)(j.d,{label:"Set new price",placeholder:"20",onChangeText:function(e){return s(e)}}),Object(b.jsx)(j.a,{style:C.inventoryButton,title:"Set Price",onPress:function(){I(c,t)}}),Object(b.jsxs)(l.a,{children:["Sale: %",100*t.discount]}),Object(b.jsx)(j.a,{style:C.inventoryButton,title:"Set Discount",onPress:function(){S(h,t)}}),Object(b.jsx)(j.d,{label:"Set new discount",placeholder:"5",onChangeText:function(e){return y(e)}}),Object(b.jsx)(j.c,{title:"Is on Sale?",checked:v,onPress:function(){return k(t)}}),Object(b.jsxs)(l.a,{children:["Remaining inventory: ",t.qty]}),Object(b.jsx)(j.a,{style:C.inventoryButton,title:"Add Inventory",onPress:function(){m(t)}}),Object(b.jsx)(j.a,{style:C.inventoryButton,title:"Remove Inventory",onPress:function(){p(t)}})]})]})}var C=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},Image:{width:100,height:100,alignSelf:"center"},desc:{alignItems:"center",fontSize:14},inventoryButton:{width:100,alignSelf:"center"}});function N(e){var t=e.inventory,n=e.newInventory,r=e.setNewInventory;return Object(b.jsx)(u.a,{style:P.container,children:Object(b.jsx)(v.a,{data:t,keyExtractor:function(e){return e.id},renderItem:function(e){var a=e.item;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(w,{item:a,inventory:t,newInventory:n,setNewInventory:r})})}})})}var P=s.a.create({container:{backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},title:{marginTop:5,textAlign:"center",fontWeight:"bold",fontSize:20},Button:{width:"fit-content"}});function T(e){var t=e.route,n=e.navigation,r=t.params,a=r.inventory,i=r.newInventory,c=r.setNewInventory,o=r.username;return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(N,{inventory:a,newInventory:i,setNewInventory:c}),Object(b.jsxs)(u.a,{style:B.navigator,children:[Object(b.jsx)(j.a,{style:B.Button,title:"Inventory",onPress:function(){return n.navigate("Inventory",{username:o,inventory:a})}}),Object(b.jsx)(j.a,{style:B.Button,title:"Logout",onPress:function(){return n.navigate("Login")}})]})]})}var B=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},Button:{width:"fit-content"},navigator:{alignItems:"center"}}),q=Object(i.a)();t.a=function(){return Object(b.jsx)(a.a,{children:Object(b.jsxs)(q.Navigator,{children:[Object(b.jsx)(q.Screen,{name:"Login",component:h}),Object(b.jsx)(q.Screen,{name:"Inventory",component:S}),Object(b.jsx)(q.Screen,{name:"Stock",component:T})]})})}},178:function(e,t,n){n(179),e.exports=n(247)},236:function(e,t,n){e.exports=n.p+"static/media/midnightLibrary.65dfe4b2.jpg"},237:function(e,t,n){e.exports=n.p+"static/media/houseOnTheCeruleanSea.28fd9b03.jpg"},238:function(e,t,n){e.exports=n.p+"static/media/hitchhikers.e2d983ab.jpg"},239:function(e,t,n){e.exports=n.p+"static/media/weHuntTheFlame.5d4caf16.jpg"},240:function(e,t,n){e.exports=n.p+"static/media/aPhoLoveStory.68018e15.jpg"}},[[178,1,2]]]);
//# sourceMappingURL=app.dd36e5be.chunk.js.map