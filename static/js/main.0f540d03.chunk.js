(this.webpackJsonppresenter_picker=this.webpackJsonppresenter_picker||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},105:function(e,t,n){e.exports=n.p+"static/media/sound_2.74756796.gif"},106:function(e,t,n){e.exports=n.p+"static/media/sound_3.ce634a6f.gif"},107:function(e,t,n){e.exports=n.p+"static/media/sound_4.7b4404f5.gif"},108:function(e,t,n){e.exports=n.p+"static/media/sound_5.8a17bddf.gif"},109:function(e,t,n){e.exports=n.p+"static/media/sound_6.acf57c98.gif"},110:function(e,t,n){e.exports=n.p+"static/media/sound_7.e1ee14a3.gif"},111:function(e,t,n){e.exports=n.p+"static/media/sound_8.393a3ea0.gif"},112:function(e,t,n){e.exports=n.p+"static/media/sound_9.dac03de3.gif"},113:function(e,t,n){e.exports=n.p+"static/media/sound_10.7cf87f5e.gif"},114:function(e,t,n){e.exports=n.p+"static/media/sound_11.dfcbbd55.gif"},115:function(e,t,n){e.exports=n.p+"static/media/sound_12.e7e688e5.gif"},116:function(e){e.exports=JSON.parse('{"1":"Paul Filmalter","2":"Lu Ouyang","3":"Tanvi Parikh","4":"Harman Ahluwalia","5":"Yofetahe Habtu","6":"Wendy Wang","7":"Qazi Zaahirah","8":"Aditya Lakshmi","9":"Kaiser Iqbal"}')},132:function(e,t,n){e.exports=n(253)},137:function(e,t,n){},138:function(e,t,n){},141:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),i=(n(137),n(138),n(139),n(69)),s=n.n(i),l=n(103),u=n(19),d=n(48),m=n(104),p=n.n(m),f=(n(141),n(18)),y=n(254),v=n(263),b=n(264),g=n(70),h=n.n(g),E=n(105),k=n.n(E),S=n(106),N=n.n(S),w=n(107),x=n.n(w),O=n(108),q=n.n(O),j=n(109),_=n.n(j),B=n(110),L=n.n(B),A=n(111),M=n.n(A),P=n(112),C=n.n(P),H=n(113),T=n.n(H),W=n(114),z=n.n(W),D=n(115),J=n.n(D),I=h.a,F=[h.a,k.a,N.a,x.a,q.a,_.a,L.a,M.a,C.a,T.a,z.a,J.a],K=n(116),Q=Object.values(K),Y=Object(d.a)(Q),Z=F,$=function(){var e=Object(a.useState)(Q),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(Y),i=Object(u.a)(o,2),m=i[0],g=i[1],h=Object(a.useState)(I),E=Object(u.a)(h,2),k=E[0],S=E[1],N=Object(a.useState)(Z),w=Object(u.a)(N,2),x=w[0],O=w[1],q=Object(a.useState)("none"),j=Object(u.a)(q,2),_=j[0],B=j[1],L=Object(a.useState)("block"),A=Object(u.a)(L,2),M=A[0],P=A[1],C=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(),t=m[Math.floor(Math.random()*m.length)],n=Math.floor(Math.random()*x.length),a=x[n],e.next=6,W(500);case 6:document.querySelector("#sound").style.display="block",document.querySelector("#participantName").innerHTML=t,c=m.filter((function(e){return e!==t})),void 0===t&&(document.querySelector("#selectBtn").style.display="none",document.querySelector("#participantName").innerHTML="<span style='font-size: 16px'>Now it is time for parking lot. Have a good day!!!</span>"),g(c),S(a),r=x.filter((function(e,t){return t!==n})),O(r),T();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){document.querySelector("#spinner").style.display="block",document.querySelector("#sound").style.display="none",document.querySelector("#selectBtn").disabled=!0,document.querySelector("#participantName").innerHTML=""},T=function(){document.querySelector("#spinner").style.display="none",document.querySelector("#selectBtn").disabled=!1,document.querySelector("#selectBtn").style.textAlign="center"},W=function(e){return new Promise((function(t){return setTimeout(t,e)}))};return c.a.createElement("div",{className:"selectorBlock"},c.a.createElement("div",{className:"resultBlock"},c.a.createElement("div",{className:"result"},c.a.createElement("img",{id:"spinner",src:p.a,className:"App-logo",alt:"logo",style:{display:"none"}}),c.a.createElement("img",{id:"sound",src:k,alt:"sound",style:{display:"none"}}),c.a.createElement("div",{id:"participantName",className:"selectedName"},"Let's start!"))),c.a.createElement("div",{className:"btn"},c.a.createElement(f.a,{id:"selectBtn",size:"large",name:"chevron circle right",onClick:C})),c.a.createElement("div",{className:"participantList"},c.a.createElement("div",{style:{display:M}},m.map((function(e,t){return c.a.createElement("div",{key:t,className:"participant"}," ",c.a.createElement(f.a,{color:"teal",name:"user"}),e)}))),c.a.createElement(y.a,{icon:!0,onClick:function(){B("none"===_?"block":"none"),P("none"===_?"none":"block")}},c.a.createElement(f.a,{name:"none"===_?"angle double up":"angle double down"})),c.a.createElement("div",{className:"allParticipantList",style:{display:_}},n.sort((function(e,t){return e>t?1:e<t?-1:0})).map((function(e,t){return c.a.createElement("div",{key:t,className:"participant"},c.a.createElement(f.a,{id:"part_"+t,color:"blue",name:"check square",onClick:function(n){return function(e,t,n){if(e.preventDefault(),m.some((function(e){return e===n}))){var a=m.filter((function(e){return e!==n}));g(a),document.querySelector("#part_"+t).setAttribute("class","red close icon")}else{var c=m.concat(n);g(c),document.querySelector("#part_"+t).setAttribute("class","blue check square icon")}}(n,t,e)}})," ",e)})),c.a.createElement(v.a,null),c.a.createElement("div",null,c.a.createElement(b.a,{placeholder:"Participant Name",id:"newParticipant"}),c.a.createElement(f.a,{id:"selectBtn",name:"add",onClick:function(e){return function(e){e.preventDefault();var t=document.querySelector("#newParticipant").value;if(0!==t.length&&!m.some((function(e){return e.toLowerCase()===t.toLowerCase()}))){var a=[].concat(Object(d.a)(m),[t]);g(a);var c=[].concat(Object(d.a)(n),[t]);r(c),document.querySelector("#newParticipant").value=""}}(e)}}),c.a.createElement(f.a,{name:"save",disabled:!0,onClick:function(e){return e.preventDefault(),void console.log("save logic need to implement")}})))))};var G=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement($,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){e.exports=n.p+"static/media/sound_1.f4ddfc1d.gif"}},[[132,1,2]]]);
//# sourceMappingURL=main.0f540d03.chunk.js.map