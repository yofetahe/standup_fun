(this.webpackJsonppresenter_picker=this.webpackJsonppresenter_picker||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/sound_2.74756796.gif"},101:function(e,t,n){e.exports=n.p+"static/media/sound_3.ce634a6f.gif"},102:function(e,t,n){e.exports=n.p+"static/media/sound_4.7b4404f5.gif"},103:function(e,t,n){e.exports=n.p+"static/media/sound_5.8a17bddf.gif"},104:function(e,t,n){e.exports=n.p+"static/media/sound_6.acf57c98.gif"},105:function(e,t,n){e.exports=n.p+"static/media/sound_7.e1ee14a3.gif"},106:function(e,t,n){e.exports=n.p+"static/media/sound_8.393a3ea0.gif"},107:function(e,t,n){e.exports=n.p+"static/media/sound_9.dac03de3.gif"},108:function(e,t,n){e.exports=n.p+"static/media/sound_10.7cf87f5e.gif"},109:function(e,t,n){e.exports=n.p+"static/media/sound_11.dfcbbd55.gif"},110:function(e,t,n){e.exports=n.p+"static/media/sound_12.e7e688e5.gif"},128:function(e,t,n){e.exports=n(250)},133:function(e,t,n){},134:function(e,t,n){},137:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),i=(n(133),n(134),n(135),n(65)),s=n(61),l=n.n(s),u=n(98),d=n(16),m=n(99),p=n.n(m),f=n(62),y=n.n(f),b=n(100),v=n.n(b),g=n(101),h=n.n(g),E=n(102),k=n.n(E),S=n(103),w=n.n(S),x=n(104),q=n.n(x),N=n(105),_=n.n(N),O=n(106),j=n.n(O),B=n(107),L=n.n(B),A=n(108),M=n.n(A),P=n(109),C=n.n(P),H=n(110),T=n.n(H),W=(n(137),n(22)),z=n(256),D=["Paul Filmalter","Lu Ouyang","Tanvi Parikh","Harman Ahluwalia","Yofetahe Habtu","Wendy Wang","Qazi Zaahirah","Aditya Lakshmi","Kaiser Iqbal"],I=[].concat(D),J=[y.a,v.a,h.a,k.a,w.a,q.a,_.a,j.a,L.a,M.a,C.a,T.a],F=function(){var e=Object(a.useState)(D),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(I),s=Object(d.a)(o,2),m=s[0],f=s[1],b=Object(a.useState)(y.a),v=Object(d.a)(b,2),g=v[0],h=v[1],E=Object(a.useState)(J),k=Object(d.a)(E,2),S=k[0],w=k[1],x=Object(a.useState)("none"),q=Object(d.a)(x,2),N=q[0],_=q[1],O=Object(a.useState)("block"),j=Object(d.a)(O,2),B=j[0],L=j[1],A=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(),t=m[Math.floor(Math.random()*m.length)],n=Math.floor(Math.random()*S.length),a=S[n],e.next=6,C(500);case 6:document.querySelector("#sound").style.display="block",document.querySelector("#participantName").innerHTML=t,c=m.filter((function(e){return e!==t})),void 0===t&&(document.querySelector("#selectBtn").style.display="none",document.querySelector("#participantName").innerHTML="<span style='font-size: 16px'>Now it is time for parking lot. Have a good day!!!</span>"),f(c),h(a),r=S.filter((function(e,t){return t!==n})),w(r),P();case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){document.querySelector("#spinner").style.display="block",document.querySelector("#sound").style.display="none",document.querySelector("#selectBtn").disabled=!0,document.querySelector("#participantName").innerHTML=""},P=function(){document.querySelector("#spinner").style.display="none",document.querySelector("#selectBtn").disabled=!1,document.querySelector("#selectBtn").style.textAlign="center"},C=function(e){return new Promise((function(t){return setTimeout(t,e)}))};return c.a.createElement("div",{className:"selectorBlock"},c.a.createElement("div",{className:"resultBlock"},c.a.createElement("div",{className:"result"},c.a.createElement("img",{id:"spinner",src:p.a,className:"App-logo",alt:"logo",style:{display:"none"}}),c.a.createElement("img",{id:"sound",src:g,alt:"sound",style:{display:"none"}}),c.a.createElement("div",{id:"participantName",className:"selectedName"},"Let's start!"))),c.a.createElement("div",{className:"btn"},c.a.createElement(W.a,{id:"selectBtn",color:"blue",size:"large",name:"chevron circle right",onClick:A})),c.a.createElement("div",{className:"participantList"},c.a.createElement("div",{style:{display:B}},m.map((function(e,t){return c.a.createElement("div",{key:t,className:"participant"}," ",c.a.createElement(W.a,{color:"teal",name:"user"}),e)}))),c.a.createElement(z.a,{icon:!0,onClick:function(){_("none"===N?"block":"none"),L("none"===N?"none":"block")}},c.a.createElement(W.a,{name:"none"===N?"angle double up":"angle double down"})),c.a.createElement("div",{className:"allParticipantList",style:{display:N}},n.sort((function(e,t){return e>t?1:e<t?-1:0})).map((function(e,t){return c.a.createElement("div",{key:t,className:"participant"},c.a.createElement(W.a,{id:"part_"+t,color:"blue",name:"check square",onClick:function(n){return function(e,t,n){if(e.preventDefault(),m.some((function(e){return e===n}))){var a=m.filter((function(e){return e!==n}));f(a),document.querySelector("#part_"+t).setAttribute("class","red close icon")}else{var c=m.concat(n);f(c),document.querySelector("#part_"+t).setAttribute("class","blue check square icon")}}(n,t,e)}})," ",e)})),c.a.createElement("div",null,c.a.createElement("input",{id:"newParticipant",type:"text"})," ",c.a.createElement(W.a,{id:"selectBtn",color:"blue",name:"add",onClick:function(e){return function(e){e.preventDefault();var t=document.querySelector("#newParticipant").value;if(0!==t.length&&!m.some((function(e){return e.toLowerCase()===t.toLowerCase()}))){var a=[].concat(Object(i.a)(m),[t]);f(a);var c=[].concat(Object(i.a)(n),[t]);r(c),document.querySelector("#newParticipant").value=""}}(e)}})))))};var K=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,n){e.exports=n.p+"static/media/sound_1.f4ddfc1d.gif"},99:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[128,1,2]]]);
//# sourceMappingURL=main.efe973a7.chunk.js.map