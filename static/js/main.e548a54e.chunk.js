(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(15),n(3)),u=n(4),s=n(5),l=n(7),m=n(6),b=n(8),d=(n(16),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).onAdd=function(){n.setState(function(e,t){return{number:e.number+t.increment}})},n.onSub=function(){n.setState(function(e,t){return{number:e.number-t.increment}})},n.onSubmit=function(){var e=n.state.number;e>=0&e<=100?localStorage.setItem(e.toString(),e):alert("Do not try negative integers and above 100 value")},n.onReset=function(){n.setState({number:0})},n.onEvent=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(c.a)({},a,o))},n.state={number:0+n.props.increment},n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header",style:{marginLeft:"300px"}},o.a.createElement("h1",null,this.state.number,"%"),o.a.createElement("button",{onClick:this.onAdd},"+"),o.a.createElement("button",{onClick:this.onSubmit},"Post"),o.a.createElement("p",null),o.a.createElement("input",{type:"text",value:this.state.number,onChange:this.onEvent,name:"number",style:{width:"60px",borderRadius:"5px"}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.onSub},"-"),o.a.createElement("button",{onClick:this.onReset},"Reset")))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(d,{increment:1}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.e548a54e.chunk.js.map