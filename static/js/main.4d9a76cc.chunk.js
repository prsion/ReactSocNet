(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{16:function(e,t,s){e.exports={navbar:"Navbar_navbar__16QhB",active:"Navbar_active__1z58e"}},17:function(e,t,s){e.exports={img_users:"Users_img_users__-C0Tj",main:"Users_main__1ROfW",left:"Users_left__3OHrD",right:"Users_right__3XGCm",selectPage:"Users_selectPage__2ZRKU",pagination:"Users_pagination__2GGRB"}},22:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2B9LY",dialogsItems:"Dialogs_dialogsItems__3RnB0",active:"Dialogs_active__1SP0u",dialog:"Dialogs_dialog__2cj3H",messages:"Dialogs_messages__NBR21",message:"Dialogs_message__1D4Y7"}},23:function(e,t,s){e.exports={img1:"ProfileInfo_img1__oWv3m",img2:"ProfileInfo_img2__14ASr"}},29:function(e,t,s){e.exports={dialogs:"DialogItem_dialogs__3CWNz",dialogsItems:"DialogItem_dialogsItems__1U9xH",active:"DialogItem_active__16SJg",dialog:"DialogItem_dialog__LVrpp",messages:"DialogItem_messages__2sl_z",message:"DialogItem_message__26_o0"}},30:function(e,t,s){e.exports={header:"Header_header__wD5SM",loginBlock:"Header_loginBlock__2Wl2o"}},40:function(e,t,s){e.exports={news_item:"News_news_item__2swuP"}},41:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){e.exports={posts:"Myposts_posts__14h3D"}},46:function(e,t,s){e.exports={item:"Post_item__3-roJ"}},47:function(e,t,s){e.exports={clock:"Clock_clock__1_n8s"}},53:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=s(1),a=s.n(n),i=s(21),c=s.n(i),r=(s(53),s(16)),o=s.n(r),l=s(5),u=s(0),g=function(e){return Object(u.jsx)("div",{className:o.a.navbar,children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/profiles",activeClassName:o.a.active,children:"Profiles"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/dialogs",activeClassName:o.a.active,children:"Messages"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/users",activeClassName:o.a.active,children:"Users"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/news",activeClassName:o.a.active,children:"News"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/music",activeClassName:o.a.active,children:"Music"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/settings",activeClassName:o.a.active,children:"Settings"})})]})})},d=s(40),j=s.n(d),A=function(e){return Object(u.jsx)("div",{className:j.a.news_item,children:"Its module News"})},h=s(4),p=s(19),O=s(2),b="UPDATE-MESSAGE-TEXT",m="SEND-MESSAGE",x={dialogs:[{id:1,name:"Dimuch"},{id:2,name:"Andrey"},{id:3,name:"Lucie"},{id:4,name:"Sveta"},{id:5,name:"Sasha"}],messages:[{id:1,message:"Hi HI "},{id:2,message:"OOOOohohoho"},{id:3,message:"egegegeggey"},{id:4,message:"wwwaaaauuu"},{id:5,message:'"euuuuuuuuu'}],newMessageText:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(O.a)(Object(O.a)({},e),{},{newMessageText:t.newMessage});case m:var s=e.newMessageText;return Object(O.a)(Object(O.a)({},e),{},{newMessageText:"",messages:[].concat(Object(p.a)(e.messages),[{id:6,message:s}])});default:return e}},v=s(22),U=s.n(v),I=s(29),k=s.n(I),S=function(e){var t="/dialogs/"+e.id;return Object(u.jsx)("div",{className:k.a.dialog+" "+k.a.active,children:Object(u.jsx)(l.b,{to:t,children:e.name})})},w=s(41),E=s.n(w),B=function(e){return Object(u.jsx)("div",{className:E.a.message,children:e.message})},Q=function(e){var t=e.dialogsPage,s=t.dialogs.map((function(e){return Object(u.jsx)(S,{name:e.name,id:e.id})})),n=t.messages.map((function(e){return Object(u.jsx)(B,{message:e.message})})),a=t.newMessageText;return Object(u.jsxs)("div",{className:U.a.dialogs,children:[Object(u.jsx)("div",{className:U.a.dialogsItems,children:s}),Object(u.jsxs)("div",{className:U.a.messages,children:[Object(u.jsx)("div",{children:n}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{value:a,onChange:function(t){var s=t.target.value;e.updateNewMessageBody(s)},placeholder:"enter your ..."})," "]}),Object(u.jsxs)("div",{children:[" ",Object(u.jsx)("button",{onClick:function(){e.sendMessage()},children:"Send message "})," "]})]})]})]})},C=s(11),J=Object(C.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(){e({type:m})},updateNewMessageBody:function(t){e(function(e){return{type:b,newMessage:e}}(t))}}}))(Q),G=s(12),K=s(13),D=s(15),N=s(14),R=s(43).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ace34fb7-fd40-4634-9016-78a7009a5337"}}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return R.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},H=function(e){return R.post("follow/".concat(e))},T=function(e){return R.delete("follow/".concat(e))},q=function(e){return R.get("profile/".concat(e))},z=function(){return R.get("auth/me")},y="FOLLOW",F="UNFOLLOW",L="SET_USERS",V="SET_CURRENT_PAGE",M="TOGGLE_IS_FETCHING",Y="TOGGLE_IS_FOLLOWING_PROGRES",W={users:[],pageSize:5,totalUsersCount:50,currentPage:1,isFetching:!1,followingInProgress:[]},Z=function(e){return{type:M,isFetching:e}},X=function(e,t){return{type:Y,isFetching:e,userId:t}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!0}):e}))});case F:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(O.a)(Object(O.a)({},e),{},{followed:!1}):e}))});case L:return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case V:return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case M:return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case Y:return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(p.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},$=s(17),ee=s.n($),te=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],n=1;n<=t;n++)s.push(n);return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:s.map((function(t){return Object(u.jsx)("div",{className:ee.a.pagination,children:Object(u.jsx)("div",{className:e.currentPage===t&&ee.a.selectPage,onClick:function(s){e.onPageChanged(t)},children:t})})}))}),e.users.map((function(t){return Object(u.jsxs)("div",{className:ee.a.main,children:[Object(u.jsxs)("div",{className:ee.a.left,children:[Object(u.jsx)(l.b,{to:"/profiles/"+t.id,children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:ee.a.img_users,src:null!==t.photos.small?t.photos.small:"data:image/jpeg;base64,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",alt:""})})}),Object(u.jsx)("div",{children:t.followed?Object(u.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(u.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(u.jsxs)("div",{className:ee.a.right,children:[Object(u.jsx)("div",{children:"My name is=".concat(t.name)}),Object(u.jsx)("div",{children:"id= ".concat(t.id)}),Object(u.jsxs)("div",{children:["twitter= no Data"," "]}),Object(u.jsxs)("div",{children:["facebook= no Data"," "]})]})]},t.id)}))]})},se=s.p+"static/media/spinner.0c299348.gif",ne=function(e){return Object(u.jsx)("div",{style:{backgroundColor:"white"},children:Object(u.jsx)("img",{src:se,alt:"pic"})})},ae=function(e){Object(D.a)(s,e);var t=Object(N.a)(s);function s(){var e;Object(G.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(K.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[this.props.isFetching?Object(u.jsx)(ne,{}):null,Object(u.jsx)(te,{pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,totalUsersCount:this.props.totalUsersCount,followingInProgress:this.props.followingInProgress})]})}}]),s}(a.a.Component),ie=Object(C.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(X(!0,e)),H(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:y,userId:e}}(e)),t(X(!1,e))}))}},unfollow:function(e){return function(t){t(X(!0,e)),T(e).then((function(s){0===s.data.resultCode&&t(function(e){return{type:F,userId:e}}(e)),t(X(!1,e))}))}},toggleFollowingProgress:X,getUsers:function(e,t){return function(s){s(Z(!0)),s(function(e){return{type:V,currentPage:e}}(e)),P(e,t).then((function(e){var t;s((t=e.items,{type:L,users:t})),s(Z(!1))}))}}})(ae),ce=s(44),re=s.n(ce),oe=s(23),le=s.n(oe),ue=s.p+"static/media/foto.de7f89e6.jpg",ge=function(e){return e.profile?Object(u.jsxs)("div",{className:le.a.content,children:[Object(u.jsx)("img",{className:le.a.img1,src:ue}),Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:le.a.img2,src:e.profile.photos.large?e.profile.photos.large:"https://social-network.samuraijs.com/activecontent/images/users/9/user-small.jpg?v=0"}),Object(u.jsx)("p",{children:"about me  ".concat(e.profile.aboutMe)}),Object(u.jsx)("p",{children:"myName ".concat(e.profile.fullName)}),Object(u.jsx)("p",{children:"my id ".concat(e.profile.userId)})]})]}):Object(u.jsx)(ne,{})},de="ADD-POST",je="UPDATE-POST-TEXT",Ae="SET-USER-PROFILE",he={posts:[{id:1,message:"React its cool  ",likes:10},{id:2,message:"Hi how are you?",likes:40},{id:3,message:"bla bla bla bla....",likes:11}],newPostText:"",profile:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:var s={id:6,message:e.newPostText,likes:18};return Object(O.a)(Object(O.a)({},e),{},{posts:[].concat(Object(p.a)(e.posts),[s]),newPostText:""});case je:return Object(O.a)(Object(O.a)({},e),{},{newPostText:t.newText});case Ae:return Object(O.a)(Object(O.a)({},e),{},{profile:t.profile});default:return e}},Oe=s(45),be=s.n(Oe),me=s(46),xe=s.n(me),fe=function(e){return Object(u.jsxs)("div",{className:xe.a.item,children:[Object(u.jsx)("img",{src:"data:image/png;base64,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"}),e.message,Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:["likes = ",e.likes]})})]})},ve=function(e){var t=e.posts.map((function(e){return Object(u.jsx)(fe,{message:e.message,likes:e.likes})})),s=a.a.createRef();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{onChange:function(){var t=s.current.value;e.updateNewPostText(t)},ref:s,placeholder:"write smth,,,",value:e.newPostText}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){e.addPost()},children:"Add Post"})})]}),Object(u.jsx)("div",{className:be.a.posts,children:t})]})},Ue=Object(C.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(t){var s=function(e){return{type:je,newText:e}}(t);e(s)},addPost:function(){e({type:de})}}}))(ve),Ie=function(e){return Object(u.jsxs)("div",{className:re.a.content,children:[Object(u.jsx)(ge,{profile:e.profile}),Object(u.jsx)(Ue,{})]})},ke=function(e){Object(D.a)(s,e);var t=Object(N.a)(s);function s(){return Object(G.a)(this,s),t.apply(this,arguments)}return Object(K.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=2),this.props.getUserProfile(e)}},{key:"render",value:function(){return Object(u.jsx)(Ie,Object(O.a)(Object(O.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(a.a.Component),Se=Object(h.e)(ke),we=Object(C.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){q(e).then((function(e){var s;t((s=e.data,{type:Ae,profile:s}))}))}}})(Se),Ee=s(30),Be=s.n(Ee),Qe=s(47),Ce=s.n(Qe),Je=function(e){Object(D.a)(s,e);var t=Object(N.a)(s);function s(e){var n;return Object(G.a)(this,s),(n=t.call(this,e)).state={date:new Date},n}return Object(K.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:Ce.a.clock,children:[Object(u.jsx)("h1",{children:this.state.date.toLocaleDateString()}),Object(u.jsxs)("h3",{children:[this.state.date.toLocaleTimeString(),"."]})]})}}]),s}(a.a.Component),Ge=function(e){return Object(u.jsxs)("div",{className:Be.a.header,children:[Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"data:image/png;base64,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"})})}),Object(u.jsx)(Je,{}),Object(u.jsx)("div",{className:Be.a.loginBlock,children:e.isAuth?e.login:Object(u.jsx)(l.b,{to:"/login",children:"Login"})})]})},Ke="SET_USER_DATA",De={userId:2,email:null,login:null,isAuth:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;return t.type===Ke?Object(O.a)(Object(O.a)(Object(O.a)({},e),t.data),{},{isAuth:!0}):e},Re=function(e){Object(D.a)(s,e);var t=Object(N.a)(s);function s(){return Object(G.a)(this,s),t.apply(this,arguments)}return Object(K.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(u.jsx)(Ge,Object(O.a)({},this.props))}}]),s}(a.a.Component),Pe=Object(C.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email}}),{getAuthUserData:function(){return function(e){z().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.email,i=s.login;e(function(e,t,s){return{type:Ke,data:{userId:e,email:t,login:s}}}(n,a,i))}}))}}})(Re);var He=function(e){return Object(u.jsxs)("div",{className:"wrap",children:[Object(u.jsx)(Pe,{}),Object(u.jsx)(g,{}),Object(u.jsxs)("div",{className:"wrap_content",children:[Object(u.jsx)(h.a,{path:"/profiles/:userId?",render:function(){return Object(u.jsx)(we,{})}}),Object(u.jsx)(h.a,{path:"/dialogs",render:function(){return Object(u.jsx)(J,{})}}),Object(u.jsx)(h.a,{path:"/users",render:function(){return Object(u.jsx)(ie,{})}}),Object(u.jsx)(h.a,{path:"/news",component:A})]})]})},Te=s(24),qe=s(48),ze=Object(Te.b)({profilePage:pe,dialogsPage:f,usersPage:_,auth:Ne}),ye=Object(Te.c)(ze,Object(Te.a)(qe.a));window.store=ye;var Fe=ye;c.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(C.a,{store:Fe,children:Object(u.jsx)(He,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[83,1,2]]]);
//# sourceMappingURL=main.4d9a76cc.chunk.js.map