(this.webpackJsonphue_rose=this.webpackJsonphue_rose||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),i=n.n(c),r=n(11),s=n.n(r),h=(n(18),n(9)),o=(n(19),n(25)),j=n(26),u=n(12),l=n(28),d=n(27),g="/hue_rose/mm5a7753.jpg",b=function(e){var t=e.img,n=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=n.current;e.width=t.width,e.height=t.height;var a=e.getContext("bitmaprenderer");createImageBitmap(t,0,0,t.width,t.height).then((function(e){a.transferFromImageBitmap(e)}))})),Object(a.jsx)("canvas",{ref:n})},m=function(e){for(var t=e.data.slice(),n=0;n<e.data.length;n+=4){var a=(e.data[n+0]+e.data[n+1]+e.data[n+2])/3;t[n+0]=a,t[n+1]=a,t[n+2]=a}return new ImageData(t,e.width,e.height)},f=function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var n=t.getContext("2d");return console.log(t.width),n.drawImage(e,0,0,t.width,t.height),n.getImageData(0,0,t.width,t.height)};var O=function(){var e=Object(c.useState)(g),t=Object(h.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(h.a)(r,2),O=s[0],x=s[1],v=new Image;return v.src=n,v.onload=function(e){x(!0)},Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(o.a,{children:[Object(a.jsxs)(j.a,{className:"align-items-center",children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(l.a.File,{custom:!0,label:"Analyze another image",onChange:function(e){x(!1),null!==e.target.files?i(URL.createObjectURL(e.target.files[0])):i(g)}})}),Object(a.jsx)(u.a,{children:Object(a.jsx)(d.a,{src:n,fluid:!0})})]}),Object(a.jsxs)(j.a,{className:"align-items-center",children:[Object(a.jsx)(u.a,{children:O?Object(a.jsx)(b,{img:m(f(v))}):null}),Object(a.jsx)(u.a,{})]})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[23,1,2]]]);
//# sourceMappingURL=main.041ba515.chunk.js.map