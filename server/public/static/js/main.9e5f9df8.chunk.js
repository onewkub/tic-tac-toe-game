(this["webpackJsonptic-tac-client"]=this["webpackJsonptic-tac-client"]||[]).push([[0],{126:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),i=n(21),o=n.n(i),s=(n(69),n(70),n(3)),u="CHANGE_GAME_STATE",l=function(e){return{type:u,payload:e}},d=n(2);!function(e){e[e.main_menu=0]="main_menu",e[e.game=1]="game",e[e.replay=2]="replay",e[e.create=3]="create",e[e.result=4]="result",e[e.join=5]="join",e[e.record=6]="record",e[e.about=7]="about"}(a||(a={}));var j={loading:!1,game_state:a.main_menu,error:null};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case u:return Object(d.a)(Object(d.a)({},e),{},{game_state:a});default:return e}},m=(n(76),n(0));var h=function(){var e=Object(s.c)(),t=function(t){e(l(t))};return Object(m.jsxs)("div",{className:"main-menu",children:[Object(m.jsx)("h3",{children:"Tic Tac Toe Game"}),Object(m.jsx)("div",{className:"main-menu-btn",onClick:function(){return t(a.create)},children:Object(m.jsx)("span",{children:"Create Game"})}),Object(m.jsx)("div",{className:"main-menu-btn",onClick:function(){return t(a.join)},children:"Join Game"}),Object(m.jsx)("div",{className:"main-menu-btn",onClick:function(){return t(a.record)},children:"Game Record"}),Object(m.jsx)("div",{className:"main-menu-btn",onClick:function(){return t(a.about)},children:"About Me"})]})},O=n(7);n(78);var x=function(e){var t=e.backTo,n=void 0===t?a.main_menu:t,c=Object(s.c)();return Object(m.jsx)("div",{className:"navigator",children:Object(m.jsx)("div",{className:"back-link",onClick:function(){return[c(l(n))]},children:"< Back to Menu"})})},f=n(13),v=n.n(f),p=n(16),g=n(57),y=n(58),G=n(59),N=n.n(G),M=new(function(){function e(t){Object(g.a)(this,e),this.axiosInstance=void 0,this.axiosInstance=N.a.create({baseURL:t,timeout:5e3}),this.axiosInstance.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",this.axiosInstance.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),this.axiosInstance.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))}return Object(y.a)(e,[{key:"setHeader",value:function(e){this.axiosInstance.defaults.headers.common[e.key]=e.value}},{key:"get",value:function(e,t){return this.axiosInstance.get(e,t)}},{key:"post",value:function(e,t,n){return this.axiosInstance.post(e,t,n)}},{key:"put",value:function(e,t,n){return this.axiosInstance.put(e,t,n)}},{key:"delete",value:function(e,t){return this.axiosInstance.delete(e,t)}}]),e}())("https://tic-tac-toe-funny.herokuapp.com/api"),R="FETCH_GAME_START",C="FETCH_GAME_SUCCESS",A="FETCH_GAME_FAILURE",k=function(e){return{type:A,payload:e}};var I="FETCH_GAME_RECORD_BEGIN",w="FETCH_GAME_RECORD_FAILURE",E="FETCH_GAME_RECORD_SUCESS",T=function(e){return{type:w,payload:e}};n(97);var Y=n(60),S=n.n(Y),F=n(22);n(98);var B=function(){return Object(m.jsxs)("div",{className:"loading",children:[Object(m.jsx)("div",{style:{height:300,justifyContent:"center",alignItems:"center"},children:Object(m.jsx)(F.PacmanLoader,{color:"white",size:50,margin:2})}),Object(m.jsx)("h1",{children:"Loading..."})]})},H="SET_GAME_ID",V="SET_GAME",Z=function(e){return{type:V,payload:e}};function z(e){for(var t=[],n=0;n<e;n++){t[n]=[];for(var a=0;a<e;a++)t[n][a]=""}return t}var J=Object(s.b)((function(e){return{games:e.GameReducer.games,total:e.GameReducer.total,loading:e.GameReducer.loading,error:e.GameReducer.error}}),{fetchGame:function(e){return function(){var t=Object(p.a)(v.a.mark((function t(n){var a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:R}),t.prev=1,t.next=4,M.get("/game",{params:{page:e,take:4}});case 4:return a=t.sent,t.next=7,M.get("/game-count");case 7:c=t.sent,n((r={data:a.data,count:c.data},{type:C,payload:r})),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0),n(k(t.t0));case 15:case"end":return t.stop()}var r}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},changeGameState:l,fetchGameRecord:function(e){return function(){var t=Object(p.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:I}),t.prev=1,t.next=4,M.get("/game-record",{params:{id:e}});case 4:a=t.sent,n((c=a.data,{type:E,payload:c})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0),n(T(t.t0));case 12:case"end":return t.stop()}var c}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},setGame:Z})((function(e){var t=e.games,n=e.total,r=e.loading,i=e.fetchGame,o=e.changeGameState,s=e.fetchGameRecord,u=e.setGame,l=Object(c.useState)(1),d=Object(O.a)(l,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){i(j)}),[j,i]),r?Object(m.jsx)(B,{}):Object(m.jsxs)("div",{className:"game-record",children:[Object(m.jsx)(x,{}),Object(m.jsx)("h3",{children:"Game Record"}),Object(m.jsxs)("div",{className:"record-list",children:[n<=0&&Object(m.jsx)("span",{children:"No Game Record"}),t.map((function(e){return Object(m.jsxs)("div",{className:"record-item",children:[Object(m.jsxs)("div",{className:"record-id",children:["id:",e.id]}),Object(m.jsxs)("div",{className:"record-detail",children:[Object(m.jsx)("div",{className:"record-player",children:"".concat(e.player_o," vs ").concat(e.player_x)}),Object(m.jsxs)("div",{className:"record-result",children:["==",e.result,"=="]}),Object(m.jsx)("div",{children:S()(new Date(e.createAt),"dd/mm/yyyy HH:MM")})]}),Object(m.jsx)("div",{className:"record-watch-btn",onClick:function(){return t=e.id,n=e.dimension,s(t),u({board:z(n)}),void o(a.replay);var t,n},children:"\u231b watch"})]},e.id)}))]}),Object(m.jsxs)("div",{className:"action",children:[Object(m.jsx)("div",{className:"action-btn",onClick:function(){1!==j&&b((function(e){return e-1}))},children:"Back"}),Object(m.jsx)("div",{className:"action-page",children:j}),Object(m.jsx)("div",{className:"action-btn",onClick:function(){j<Math.ceil(n/4)&&b((function(e){return e+1}))},children:"Next"})]})]})})),D=(n(126),n.p+"static/media/facebook-512.f548a299.png");var X=function(){return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)(x,{}),Object(m.jsx)("h3",{children:"About me"}),Object(m.jsx)("img",{alt:"gh-logo",style:{width:120,margin:"0 auto"},src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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"}),Object(m.jsx)("a",{href:"https://github.com/onewkub",children:"github.com/onewkub"}),Object(m.jsx)("div",{style:{height:36}}),Object(m.jsx)("img",{alt:"fb-log",style:{width:120,margin:"0 auto"},src:D}),Object(m.jsx)("a",{href:"https://facebook.com/onewkub",children:"facebook.com/onewkub"})]})},U=n(61),Q=n.n(U),W=n(14),L={id:"",board:[["","",""],["","",""],["","",""]],whoTurn:"",whatYouAre:"",turn:0,yourName:"",notice:""};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(d.a)(Object(d.a)({},e),t.payload);case H:return Object(d.a)(Object(d.a)({},e),{},{id:t.payload});default:return e}},P={games:[],total:0,loading:!1,error:null};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case R:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:null});case C:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,games:a.data,total:a.count,error:null});case A:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:a});default:return e}},_={gameRecords:[],loading:!1,error:null};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case I:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:null});case E:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,gameRecords:a,error:null});case w:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:a});default:return e}},ee=Object(W.c)({GameStateReducer:b,GameManagerReducer:K,GameReducer:q,GameRecordReducer:$}),te=n(62),ne=Object(W.d)(ee,Object(W.a)(te.a)),ae=Q.a.connect("https://tic-tac-toe-funny.herokuapp.com/");ae.on("board-update",(function(){})),ae.on("game-id",(function(e){ne.dispatch(Z(e))})),ae.on("notice",(function(e){ne.dispatch(Z({notice:e}))})),ae.on("you-are",(function(e){ne.dispatch(Z({whatYouAre:e}))})),ae.on("game-start",(function(e){ne.dispatch(l(a.game)),ne.dispatch(Z(e))})),ae.on("game-update",(function(e){ne.dispatch(Z(e))})),ae.on("game-end",(function(e){ne.dispatch(l(a.result)),ae.emit("leave-room",ne.getState().GameManagerReducer.id)}));n(156);function ce(e){var t=e.size,n=e.value,a=e.pos_x,c=e.pos_y,r=e.readOnly,i=void 0!==r&&r,o=Object(s.d)((function(e){return e.GameManagerReducer.id}));return Object(m.jsx)("div",{onClick:function(){i||function(e,t,n){ae.emit("make-move",{room_id:e,pos_x:t,pos_y:n})}(o,a,c)},className:i?"square-display":"square",style:{height:t,width:t},children:Object(m.jsx)("span",{style:{fontSize:.8*t},children:n})})}function re(e){var t=e.board,n=e.width,a=void 0===n?450:n,c=e.readOnly,r=void 0!==c&&c,i=t.length,o=Math.floor((a-i)/i);return Object(m.jsx)(m.Fragment,{children:t.map((function(e,n){return e.map((function(e,a){return Object(m.jsx)(ce,{size:o,value:t[n][a],pos_x:n,pos_y:a,readOnly:r},"".concat(n).concat(a))}))}))})}var ie=Object(s.b)((function(e){return{id:e.GameManagerReducer.id,board:e.GameManagerReducer.board,turn:e.GameManagerReducer.turn}}))((function(e){var t=e.board,n=e.readOnly,a=void 0!==n&&n,r=e.turn;return Object(c.useEffect)((function(){}),[t,r]),Object(m.jsx)("div",{className:"board",children:Object(m.jsx)(re,{readOnly:a,board:t})})}));n(157);var oe=Object(s.b)((function(e){return{yourName:e.GameManagerReducer.yourName,whoTurn:e.GameManagerReducer.whoTurn,turn:e.GameManagerReducer.turn,notice:e.GameManagerReducer.notice,whatYouAre:e.GameManagerReducer.whatYouAre}}))((function(e){var t=e.whoTurn,n=e.turn,a=e.notice,c=e.whatYouAre,r=e.yourName;return Object(m.jsxs)("div",{className:"game",children:[Object(m.jsxs)("h1",{children:["Current Player:",t===r?"YOU":t]}),Object(m.jsxs)("h4",{children:["Turn: ",n]}),Object(m.jsx)(ie,{}),Object(m.jsx)("h3",{children:"You are play as ".concat(c)}),Object(m.jsx)("span",{children:a})]})})),se=n(63),ue=n.n(se),le=(n(158),n(64)),de=new(n.n(le).a);function je(){var e=Object(c.useState)(0),t=Object(O.a)(e,2)[1];return function(){return t((function(e){return e+1}))}}var be=Object(s.b)((function(e){return{notice:e.GameManagerReducer.notice}}))((function(e){var t=e.notice;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{height:300,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)(F.ClimbingBoxLoader,{color:"white",size:30})}),Object(m.jsx)("h3",{children:t})]})}));new ue.a(".copy-clipboard-btn");var me=Object(s.b)((function(e){return{inviteCode:e.GameManagerReducer.id}}))((function(e){var t=Object(c.useState)({name:"player_1",dim:3,online:!0}),n=Object(O.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),o=Object(O.a)(i,2),s=o[0],u=o[1],l=e.inviteCode,j=function(e,t){switch(t){case"name":return r((function(t){return Object(d.a)(Object(d.a)({},t),{},{name:e})}));case"dim":return r((function(t){return Object(d.a)(Object(d.a)({},t),{},{dim:Number(e)})}));case"online":return r((function(t){return Object(d.a)(Object(d.a)({},t),{},{online:"true"===e})}));default:return}},b=je(),h=function(){var e=Object(p.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:de.allValid()?(t=a.name,n=a.dim,c=a.online,ae.emit("create-game",{player_name:t,dim:n,online:c}),ne.dispatch(Z({yourName:t})),u(!0)):(de.showMessages(),b());case 1:case"end":return e.stop()}var t,n,c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),!s&&Object(m.jsxs)("div",{className:"create-game-panel",children:[Object(m.jsx)("h3",{children:"Create Game"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{children:" Online"}),Object(m.jsx)("input",{type:"radio",name:"single",onChange:function(e){return j(e.target.value,"online")},value:"true",checked:a.online}),Object(m.jsx)("label",{children:" Single Play"}),Object(m.jsx)("input",{type:"radio",name:"single",onChange:function(e){return j(e.target.value,"online")},value:"false",checked:!a.online})]}),Object(m.jsxs)("div",{className:"txt-input",children:[Object(m.jsx)("label",{children:"Player Name"}),Object(m.jsx)("input",{value:a.name,onChange:function(e){return j(e.target.value,"name")},placeholder:"please insert your name"}),de.message("name",a.name,"required")]}),Object(m.jsxs)("div",{className:"txt-input",children:[Object(m.jsx)("label",{children:"Table Dimension"}),Object(m.jsx)("input",{value:a.dim,onChange:function(e){return j(e.target.value,"dim")},placeholder:"Please insert table dimension"}),de.message("dimension",a.dim,"required|integer|min:3,num")]}),Object(m.jsx)("button",{onClick:h,className:"create-btn",children:"Create ROOM"})]}),s&&Object(m.jsxs)("div",{className:"create-game-panel-invite-code",children:[Object(m.jsx)(be,{}),a.online&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:"Send code below to your friend"}),Object(m.jsxs)("div",{className:"invite-code-field",children:[Object(m.jsx)("input",{id:"invite-code",readOnly:!0,value:l}),Object(m.jsx)("div",{className:"copy-clipboard-btn","data-clipboard-text":l,children:"Copy"})]})]})]})]})}));n(159);var he=function(){var e=Object(c.useState)({name:"player_2",inviteCode:""}),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(O.a)(r,2),o=i[0],s=i[1],u=function(e,t){switch(t){case"name":return a((function(t){return Object(d.a)(Object(d.a)({},t),{},{name:e})}));case"inviteCode":return a((function(t){return Object(d.a)(Object(d.a)({},t),{},{inviteCode:e})}));default:return}},l=je();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),!o&&Object(m.jsxs)("div",{className:"join-game-panel",children:[Object(m.jsx)("h3",{children:"Join Game"}),Object(m.jsxs)("div",{className:"txt-input",children:[Object(m.jsx)("label",{children:"Player Name"}),Object(m.jsx)("input",{value:n.name,onChange:function(e){return u(e.target.value,"name")},placeholder:"please insert your name",required:!0}),de.message("name",n.name,"required")]}),Object(m.jsxs)("div",{className:"txt-input",children:[Object(m.jsx)("label",{children:"Invite Code"}),Object(m.jsx)("input",{value:n.inviteCode,onChange:function(e){return u(e.target.value,"inviteCode")},placeholder:"Please insert your invite code"}),de.message("invite code",n.inviteCode,"required")]}),Object(m.jsx)("button",{onClick:function(){var e,t;de.allValid()?(e=n.name,t=n.inviteCode,ae.emit("join-room",{player_name:e,inviteCode:t}),ne.dispatch(Z({yourName:e})),s(!0)):(de.showMessages(),l())},className:"join-btn",children:"JOIN ROOM"})]}),o&&Object(m.jsx)("div",{className:"waiting-room",children:Object(m.jsx)(be,{})})]})};n(160);var Oe,xe=Object(s.b)((function(e){return{notice:e.GameManagerReducer.notice,whatYouAre:e.GameManagerReducer.whatYouAre}}),{changeGameState:l,setGame:Z})((function(e){var t=e.notice,n=e.changeGameState,c=e.whatYouAre,r=e.setGame;return Object(m.jsxs)("div",{className:"result",children:[Object(m.jsx)(ie,{readOnly:!0}),Object(m.jsxs)("h1",{className:"result-title",children:[t,c?"(".concat(c,")"):""]}),Object(m.jsx)("label",{children:"Your game play will be record to database."}),Object(m.jsxs)("label",{children:["You can see your replay"," ",Object(m.jsx)("span",{className:"link",style:{cursor:"pointer"},onClick:function(){n(a.record),r(L)},children:"here"})]}),Object(m.jsx)("div",{className:"main-menu-btn",onClick:function(){r(L),n(a.main_menu)},children:"Back to Main Menu"})]})})),fe=(n(161),0);var ve=Object(s.b)((function(e){return{board:e.GameManagerReducer.board}}),{setGame:Z})((function(e){var t=e.board,n=e.gameRecords,a=e.setGame,r=Object(c.useState)(.5),i=Object(O.a)(r,2),o=i[0],s=i[1],u=Object(c.useState)(!1),l=Object(O.a)(u,2),d=l[0],j=l[1],b=function(e){var n=t;n[e.position_x][e.position_y]=e.turn%2===0?"O":"X",a({board:n,turn:e.turn}),fe++};return Object(c.useEffect)((function(){return function(){fe=0}}),[]),Object(c.useEffect)((function(){return d?Oe=setInterval((function(){if(fe>=n.length)return console.log("replay is end"),j(!1),clearInterval(Oe);b(n[fe])}),3e3*o):clearInterval(Oe),function(){clearInterval(Oe)}}),[o,d]),Object(m.jsxs)("div",{className:"control-panel",children:[Object(m.jsxs)("span",{children:["Status: ",d?"Playing":"Stop"]}),Object(m.jsxs)("div",{className:"control-slider",children:[Object(m.jsx)("span",{children:"Speed: "}),Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;s(t)},step:.05,type:"range",min:.1,value:o,max:1})]}),Object(m.jsxs)("div",{className:"control-btn-group",children:[Object(m.jsx)("div",{className:"control-btn",onClick:function(){fe>0&&(j(!1),function(){fe--;var e=n[fe],c=t;c[e.position_x][e.position_y]="",a({board:c,turn:e.turn-1})}())},children:"Back"}),Object(m.jsx)("div",{className:"control-btn",onClick:function(){j((function(e){return!e}))},children:d?"Pause":"Play"}),Object(m.jsx)("div",{className:"control-btn",onClick:function(){j(!1),fe<n.length&&b(n[fe])},children:"Next"})]})]})}));var pe=Object(s.b)((function(e){return{gameRecords:e.GameRecordReducer.gameRecords,loading:e.GameRecordReducer.loading,error:e.GameRecordReducer.error}}),{setGame:Z})((function(e){var t=e.loading,n=e.gameRecords;return t?Object(m.jsx)(B,{}):Object(m.jsxs)("div",{className:"replay-panel",children:[Object(m.jsx)(x,{backTo:a.record}),Object(m.jsx)("div",{style:{height:10}}),Object(m.jsx)(ie,{readOnly:!0}),Object(m.jsx)(ve,{gameRecords:n})]})}));var ge=Object(s.b)((function(e){return{state:e.GameStateReducer.game_state,loading:e.GameStateReducer.loading,error:e.GameStateReducer.error}}),{changeGameState:l})((function(e){var t=e.state;return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"game-panel",children:[t===a.main_menu&&Object(m.jsx)(h,{}),t===a.game&&Object(m.jsx)(oe,{}),t===a.result&&Object(m.jsx)(xe,{}),t===a.replay&&Object(m.jsx)(pe,{}),t===a.create&&Object(m.jsx)(me,{}),t===a.join&&Object(m.jsx)(he,{}),t===a.record&&Object(m.jsx)(J,{}),t===a.about&&Object(m.jsx)(X,{})]})})})),ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(s.a,{store:ne,children:Object(m.jsx)(ge,{})})}),document.getElementById("root")),ye()},69:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[162,1,2]]]);
//# sourceMappingURL=main.9e5f9df8.chunk.js.map