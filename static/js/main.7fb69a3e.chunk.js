(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,n){e.exports=n(74)},50:function(e,t,n){},73:function(e,t,n){e.exports=n.p+"static/media/hiss.768b0a92.svg"},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),o=n.n(i),s=(n(50),n(12)),c=n(13),l=n(16),u=n(14),d=n(17),h=n(23),p=n(9),g=n(11),m=n(18),f=n(44),b=n(15),v=n(40),w=n.n(v);n(38);var O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).emailHandler=function(e){n.setState({email:e.target.value})},n.passwordHandler=function(e){n.setState({password:e.target.value})},n.emailHandler=n.emailHandler.bind(Object(m.a)(n)),n.passwordHandler=n.passwordHandler.bind(Object(m.a)(n)),n.state={email:"",password:"",submitColor:"#FF7C93",redirectToSelection:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){var e=this;this.props.login(this.state.email,this.state.password).then((function(){e.props.error?console.log(e.props):e.setState({redirectToSelection:!0})}))}},{key:"render",value:function(){var e=this;return this.state.redirectToSelection?r.a.createElement(p.a,{to:"/test"}):r.a.createElement("div",{style:y.pageContainer},r.a.createElement("form",{style:y.formContainer},r.a.createElement("div",{style:y.titleContainer},r.a.createElement("img",{style:y.logoContainer,src:n(73)}),r.a.createElement("p",{style:{fontSize:"18px"}},"by tamuhack")),r.a.createElement("input",{type:"text",placeholder:"Email",value:this.state.email,onChange:this.emailHandler,style:y.inputContainer}),r.a.createElement("input",{type:"password",placeholder:"Password",value:this.state.password,onChange:this.passwordHandler,style:y.inputContainer}),r.a.createElement(f.a,{onClick:function(){return e.login()},style:Object(g.a)({},y.submitContainer,{backgroundColor:this.state.submitColor})},"Login")))}}]),t}(r.a.PureComponent),y={logoContainer:{display:"flex",marginLeft:"-10px",height:"56px"},pageContainer:{display:"flex",height:"100vh",width:"100vw",alignItems:"center"},titleContainer:{marginTop:"27vh",marginBottom:"40px",width:"80vw"},formContainer:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",paddingLeft:"10vw",paddingRight:"10vw",height:"100vh"},inputContainer:{height:"57px",width:"80vw",paddingLeft:"4%",marginBottom:"3vh",fontSize:17},submitContainer:{height:"57px",width:"80vw",marginTop:"3vh",color:"white",fontSize:20}},C=Object(b.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,isLoading:e.auth.isLoading,userData:e.auth.userData,error:e.auth.error}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(n){return w.a.post("https://register.tamuhack.com/api/volunteer/login",{email:e,password:t},{headers:{"content-type":"application/json"}}).then((function(e){n({type:"LOGIN_SUCCESS",userData:e})})).catch((function(e){n(function(e){return{type:"LOGIN_FAILED",error:e}}(e))}))}}(t,n))}}}))(O),j=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:L.pageContainer},"Hello!")}}]),t}(r.a.PureComponent),L={pageContainer:{display:"flex",height:"100vh",width:"100vw",alignItems:"center"}},E=Object(b.b)((function(e){return{}}),(function(e){return{}}))(j),I=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/test",component:E}),r.a.createElement(p.b,{path:"/",component:C})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(10),x=n(43),k={isLoggedIn:!1,isLoading:!1,userData:{},error:void 0};var D=Object(S.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.type),t.type){case"LOGIN_ATTEMPT":return Object(g.a)({},e,{isLoading:!0,isLoggedIn:!1});case"LOGIN_SUCCESS":return Object(g.a)({},e,{isLoading:!1,isLoggedIn:!0,userData:t.userData,error:void 0});case"LOGIN_FAILED":return Object(g.a)({},e,{isLoading:!1,isLoggedIn:!1,error:t.error});case"LOGOUT":return Object(g.a)({},e,{userData:{},isLoading:!1,isLoggedIn:!1});default:return e}}}),H=Object(S.d)(D,Object(S.a)(x.a));o.a.render(r.a.createElement((function(){return r.a.createElement(b.a,{store:H},r.a.createElement(I,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.7fb69a3e.chunk.js.map