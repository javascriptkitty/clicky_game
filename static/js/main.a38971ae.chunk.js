(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,link:"./images/1.gif"},{id:2,link:"./images/2.gif"},{id:3,link:"./images/3.gif"},{id:4,link:"./images/4.gif"},{id:5,link:"./images/5.gif"},{id:6,link:"./images/6.gif"},{id:7,link:"./images/7.gif"},{id:8,link:"./images/8.gif"},{id:9,link:"./images/9.gif"},{id:10,link:"./images/10.gif"},{id:11,link:"./images/11.gif"},{id:12,link:"./images/12.gif"}]},function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),o=n.n(c),r=(n(15),n(1)),s=n(2),l=n(4),m=n(3),u=n(5),d=(n(16),n(17),function(e){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"logo"},"Clicky game"),i.a.createElement("div",{className:"message"},e.message),i.a.createElement("div",{className:"scores"},"Score: ",e.score,"| Top score: ",e.topScore))}),g=(n(18),n(8)),k=(n(19),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.onClick(e.id)}},i.a.createElement("img",{src:e.link}))}),f=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={pictures:g},n.handleOnClick=function(e){var t=n.state.pictures.sort(function(){return.5-Math.random()});n.props.onClickCard(e),n.setState({pictures:t})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"wrapper"},this.state.pictures.map(function(t){return i.a.createElement(k,{id:t.id,link:t.link,onClick:e.handleOnClick})}))}}]),t}(a.Component);n(20);var p=function(){return i.a.createElement("div",{className:"hero"},i.a.createElement("h1",null,"Clicky game"),"Click on an image to earn points, but don't click on any more than once!")},h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={score:0,topScore:0,message:"Click an image to begin!",clicked:[]},n.handleClick=function(e){n.state.clicked.includes(e)?n.setState({score:0,topScore:n.state.topScore>n.state.score?n.state.topScore:n.state.score,message:"You guessed incorrectly!",clicked:[]}):n.setState({score:n.state.score+1,topScore:n.state.topScore,message:"You guessed correctly!",clicked:n.state.clicked.concat(e)}),n.state.clicked.push(e),console.log(n.state.clicked)},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(p,null),i.a.createElement(f,{onClickCard:this.handleClick}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a38971ae.chunk.js.map