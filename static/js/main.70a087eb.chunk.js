(this.webpackJsonphue_rose=this.webpackJsonphue_rose||[]).push([[0],{23:function(t,e,a){},24:function(t,e,a){},30:function(t,e,a){"use strict";a.r(e);var n=a(4),r=a(0),c=a.n(r),i=a(15),h=a.n(i),o=(a(23),a(13)),s=(a(24),a(16)),l=a.n(s),d=a(32),u=a(33),j=a(17),g=a(12),b=a(34),f=a(35),O=a(8),m=a(7),x=function(t){for(var e=new Uint8ClampedArray(4*t.data.length),a=0;a<t.data.length;a++)e[4*a+0]=255*t.data[a][0],e[4*a+1]=255*t.data[a][1],e[4*a+2]=255*t.data[a][2],e[4*a+3]=255;return new ImageData(e,t.width,t.height)},v=function(t,e){for(var a=new Array(t.data.length),n=0;n<a.length;n++)a[n]=e(t.data[n]);return Object(O.a)(Object(O.a)({},t),{},{data:a})},p=function(t){for(var e=new Array(t.data.length),a=0,n=0;n<e.length;n++)a=Math.max(a,t.data[n][1]);for(var r=0;r<e.length;r++)e[r]=[t.data[r][1]/a,t.data[r][1]/a,t.data[r][1]/a];return Object(O.a)(Object(O.a)({},t),{},{data:e})},w=function(t){for(var e=new Array(t.data.length),a=0;a<e.length;a++)e[a]=[t.data[a][0],100,50];return v(Object(O.a)(Object(O.a)({},t),{},{data:e}),m.hsluvToRgb)},y=function(t,e){for(var a=new Array(t.data.length),n=0,r=0;r<a.length;r++)n=Math.max(n,e.data[r][1]);for(var c=0;c<a.length;c++)a[c]=[t.data[c][0],100,100*e.data[c][1]/n];return v(Object(O.a)(Object(O.a)({},t),{},{data:a}),m.hsluvToRgb)},A=function(t,e,a){for(var n=new Array(a).fill(0),r=0;r<t.data.length;r++){var c=Math.round(t.data[r][0]/360*(a-1)),i=e.data[r][1];n[c]+=i}return n},C="/hue_rose/mm5a7753.jpg",T=function(t){var e=t.img,a=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=a.current;t.width=e.width,t.height=e.height;var n=t.getContext("bitmaprenderer");createImageBitmap(e,0,0,e.width,e.height).then((function(t){n.transferFromImageBitmap(t)}))})),Object(n.jsx)("canvas",{ref:a})},M=function(t){var e=t.areas.length,a=Array.from({length:e},(function(t,a){return[360*a/e,100,50]})),c=Array.from(a,(function(t,e){var a=Object(m.hsluvToRgb)(t),n=Math.round(255*a[0]),r=Math.round(255*a[1]),c=Math.round(255*a[2]);return"rgba(".concat(n,", ").concat(r,", ").concat(c,", 1)")})),i=Array.from(a,(function(t,e){return Object(m.hsluvToHex)(t)})),h=Array.from(t.areas,(function(t,e){return Math.sqrt(t)})),o=h.reduce((function(t,e){return t+e}),0),s={datasets:[{data:Array.from(h,(function(t,e){return Math.round(100*t/o)})),backgroundColor:c,borderColor:c,borderWidth:1}],labels:i},d=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=d.current.getContext("2d");new l.a(t,{data:s,type:"polarArea",options:{layout:{padding:{left:0,right:0,top:0,bottom:0}},legend:{display:!1},scale:{display:!1},maintainAspectRatio:!1}})})),Object(n.jsx)("canvas",{ref:d})};var I=function(){var t=Object(r.useState)(C),e=Object(o.a)(t,2),a=e[0],c=e[1],i=Object(r.useState)(!1),h=Object(o.a)(i,2),s=h[0],l=h[1],O=new Image;O.src=a,O.onload=function(t){l(!0)};var I=s?function(t){for(var e=new Array(t.data.length/4),a=0;a<e.length;a++)e[a]=[t.data[4*a+0]/255,t.data[4*a+1]/255,t.data[4*a+2]/255];return{data:e,width:t.width,height:t.height}}(function(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var a=e.getContext("2d");return a.drawImage(t,0,0,e.width,e.height),a.getImageData(0,0,e.width,e.height)}(O)):null,R=I?v(I,m.rgbToLch):null,F=I?v(I,m.rgbToHsluv):null;return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(d.a,{children:[Object(n.jsxs)(u.a,{className:"primary",children:[Object(n.jsx)(j.a,{children:Object(n.jsx)(g.a,{src:a,fluid:!0})}),Object(n.jsx)(j.a,{children:F&&R?Object(n.jsx)(M,{areas:A(F,R,20),height:O.height}):null})]}),Object(n.jsx)(u.a,{className:"align-items-center",children:Object(n.jsx)(j.a,{children:Object(n.jsx)(b.a.File,{custom:!0,label:"Analyze another image",onChange:function(t){l(!1),null!==t.target.files?c(URL.createObjectURL(t.target.files[0])):c(C)}})})}),Object(n.jsxs)(u.a,{className:"secondary",children:[Object(n.jsx)(j.a,{children:Object(n.jsxs)(f.a,{children:[R?Object(n.jsx)(T,{img:x(p(R))}):null,Object(n.jsxs)(f.a.Caption,{children:["The ",Object(n.jsx)("b",{children:"chroma"})," is used to give more weight to some pixels than others"]})]})}),Object(n.jsx)(j.a,{children:Object(n.jsxs)(f.a,{children:[F?Object(n.jsx)(T,{img:x(w(F))}):null,Object(n.jsxs)(f.a.Caption,{children:["The ",Object(n.jsx)("b",{children:"hue"})," is not always obvious from the image."]})]})}),Object(n.jsx)(j.a,{children:Object(n.jsxs)(f.a,{children:[F&&R?Object(n.jsx)(T,{img:x(y(F,R))}):null,Object(n.jsxs)(f.a.Caption,{children:["What the algorithm ",Object(n.jsx)("em",{children:'"sees"'}),"."]})]})})]})]})})},R=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))};h.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),R()}},[[30,1,2]]]);
//# sourceMappingURL=main.70a087eb.chunk.js.map