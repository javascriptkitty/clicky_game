(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,link:"./images/1.gif"},{id:2,link:"./images/2.gif"},{id:3,link:"./images/3.gif"},{id:4,link:"./images/4.gif"},{id:5,link:"./images/5.gif"},{id:6,link:"./images/6.gif"},{id:7,link:"./images/7.gif"},{id:8,link:"./images/8.gif"},{id:9,link:"./images/9.gif"},{id:10,link:"./images/10.gif"},{id:11,link:"./images/11.gif"},{id:12,link:"./images/12.gif"}]},function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),s=a.n(c),o=(a(15),a(1)),r=a(2),l=a(4),m=a(3),u=a(5),d=(a(16),a(17),function(e){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"logo"},"Clicky game"),i.a.createElement("div",{className:"message"},e.message),i.a.createElement("div",{className:"scores"},"Score: ",e.score,"| Top score: ",e.topScore))}),g=(a(18),a(8)),k=(a(19),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.onClick(e.id)}},i.a.createElement("img",{src:e.link}))}),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={pictures:g},a.handleOnClick=function(e){var t=a.state.pictures.sort(function(){return.5-Math.random()});a.props.onClickCard(e),a.setState({pictures:t})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"wrapper"},this.state.pictures.map(function(t){return i.a.createElement(k,{id:t.id,link:t.link,onClick:e.handleOnClick})}))}}]),t}(n.Component);a(20);var h=function(){return i.a.createElement("div",{className:"hero"},i.a.createElement("h1",null,"Clicky game"),"Click on an image to earn points, but don't click on any more than once!")},p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={score:0,topScore:0,message:"Click an image to begin!",shake:!1,clicked:[]},a.handleClick=function(e){a.state.clicked.includes(e)?a.setState({score:0,topScore:a.state.topScore>a.state.score?a.state.topScore:a.state.score,message:"You guessed incorrectly!",shake:!0,clicked:[]}):a.setState({score:a.state.score+1,topScore:a.state.topScore,message:"You guessed correctly!",shake:!1,clicked:a.state.clicked.concat(e)}),a.state.clicked.push(e),console.log(a.state.clicked)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:this.state.shake?"App shake":"App"},i.a.createElement(d,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(h,null),i.a.createElement(f,{onClickCard:this.handleClick}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.52298ccf.chunk.js.map