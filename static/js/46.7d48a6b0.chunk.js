"use strict";(self.webpackChunkslimmom=self.webpackChunkslimmom||[]).push([[46],{5656:function(t,e,n){n.d(e,{u:function(){return d}});var a={btn:"Btn_btn__SoHZL",start:"Btn_start__2iWw4 Btn_btn__SoHZL",login:"Btn_login__DUpoj Btn_btn__SoHZL",plus:"Btn_plus__8f6BV Btn_btn__SoHZL"},r=n(8182),i=n(184),d=function(t){var e=t.children,n=t.onBtnClick,d=t.type,o=void 0===d?"submit":d,c=t.variant;return(0,i.jsx)("button",{className:(0,r.W)(a[c]),type:o,onClick:n,children:e})}},5046:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var a=n(9439),r=n(2791),i=n(9434),d=n(1974),o=n(9291),c=n(1652),s=n(4614),l=n(1188),u=n(2969),_=n(3550),m=n(7892),h=n.n(m),f=n(2426),v=n.n(f),y="DiaryDataCalendar_inputCalendar__cFGqB",j=n(184),x=function(){var t=(0,i.I0)();return(0,j.jsx)(c._,{dateAdapter:l.y,children:(0,j.jsx)(s.M,{className:y,format:"DD.MM.YYYY",defaultValue:h()(function(){var t=new Date,e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2);return"".concat(e,"-").concat(n,"-").concat(a)}()),style:{fontSize:"26px"},onChange:function(e){t((0,_.GS)(v()(e.$d).format("YYYY-MM-DD"))),t((0,u.bG)())}})})},p={DivCtnterd:"DiaryAddProductForm_DivCtnterd__L-IRa",icon:"DiaryAddProductForm_icon__0MwtN",Calendar:"DiaryAddProductForm_Calendar__h6kpb",Form:"DiaryAddProductForm_Form__9Niq6",FieldProduct:"DiaryAddProductForm_FieldProduct__dhc1v",FieldWeight:"DiaryAddProductForm_FieldWeight__kKHGd",Label:"DiaryAddProductForm_Label__ZTSVx",Input:"DiaryAddProductForm_Input__1+ngy",LabelWeight:"DiaryAddProductForm_LabelWeight__Oq9ZT",LabelTitle:"DiaryAddProductForm_LabelTitle__oyyXI",InputWeight:"DiaryAddProductForm_InputWeight__2KV9x",btnMobil:"DiaryAddProductForm_btnMobil__rfRge",fieldRow:"DiaryAddProductForm_fieldRow__-Qkf6",inputCalendar:"DiaryAddProductForm_inputCalendar__fdmBG"},D=n(9126),g=n(5656),b=n(3027),N=function(t){var e=(0,i.v9)(b.kC),n=(0,i.I0)(),c=(0,r.useState)(""),s=(0,a.Z)(c,2),l=s[0],u=s[1],_=(0,i.v9)(b.nN),m=(0,r.useState)(""),h=(0,a.Z)(m,2),f=h[0],v=h[1],y=(0,o.Z)().width;(0,r.useEffect)((function(){n((0,d.me)(_))}),[n,_]);var N=function(){u(""),v("")};return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("form",{className:p.Form,onSubmit:function(t){t.preventDefault();var a=e.find((function(t){return t.title.ua===l}))._id,r={date:_,productId:a,weight:f};n((0,d.$6)(r)),N()},children:[y>768?(0,j.jsx)(x,{className:p.Calendar}):"",(0,j.jsxs)("div",{className:p.fieldRow,children:[(0,j.jsxs)("div",{className:p.FieldProduct,children:[(0,j.jsx)("input",{placeholder:"  \u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443",list:"productsList",className:p.Input,type:"text",value:l,onChange:function(t){u(t.currentTarget.value),n((0,d.iW)(l))},name:"title",required:!0}),(0,j.jsx)("datalist",{id:"productsList",children:(null===e||void 0===e?void 0:e.length)>0&&e.map((function(t){return(0,j.jsx)("option",{value:t.title.ua,id:t._id},t._id)}))})]}),(0,j.jsx)("div",{className:p.FieldWeight,children:(0,j.jsx)("input",{placeholder:"  \u0413\u0440\u0430\u043c\u0438",className:p.Input,id:"weight",type:"number",value:f,onChange:function(t){return v(Number(t.currentTarget.value))},name:"weight",pattern:"^[0-9]*$",required:!0})}),(0,j.jsx)("div",{className:p.btn,children:y>768?(0,j.jsx)(g.u,{className:p.btn,type:"submit",variant:"plus",children:(0,j.jsx)(D.B8K,{className:p.icon})}):(0,j.jsx)(g.u,{className:p.btn,type:"submit",variant:"login",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"})})]})]})})},P="DiaryProductListItem_Item__KduWy",C="DiaryProductListItem_Title__-1wEb",F="DiaryProductListItem_Weight__tghT2",I="DiaryProductListItem_Calories__Trk8m",L="DiaryProductListItem_Button__jLJ00",w=function(t){t.dayId;var e=t.title,n=t.kcal,a=t.weight,r=(t.eatenProductId,t.deleteProduct),i=t.id;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("li",{className:P,children:[(0,j.jsx)("span",{className:C,children:e}),(0,j.jsxs)("span",{className:F,children:[a," "]}),(0,j.jsx)("span",{className:I,children:Math.floor(n)}),(0,j.jsx)("button",{className:L,type:"button",id:i,onClick:r,children:"+"})]})})},M="DiaryProductList_filteredList__oTU6Y",k="DiaryProductList_notification__blChM",A="DiaryProductList_listContainer__twgWn",B=n(1839);function S(){var t=(0,i.v9)((function(t){return t.searchData.eatenProducts})),e=(0,i.v9)((function(t){return t.searchData.dayId})),n=(0,i.v9)(b.nN),a=(0,i.I0)(),r=t,o=(0,i.v9)(b.wU),c=function(t){var r={dayId:e,eatenProductId:t.target.id};a((0,d.QF)(r)).unwrap().then((function(){a((0,d.me)(n))}))};return(0,j.jsx)("div",{className:A,children:(0,j.jsx)("ul",{className:M,children:"pending"===o?(0,j.jsx)(B.a,{}):(null===r||void 0===r?void 0:r.length)>0?r.map((function(t){return(0,j.jsx)(w,{id:t.id,weight:t.weight,kcal:t.kcal,title:t.title,eatenProductId:t.id,dayId:e,deleteProduct:c},t.id)})):(0,j.jsx)("p",{className:k,children:"You have no products yet. Please add something."})})})}var Z={diary__wrap:"DairyPage_diary__wrap__ksAIH",container:"DairyPage_container__+qLnb",btn:"DairyPage_btn__LEm1h",dateContainer:"DairyPage_dateContainer__-jpod",userInfoContainer:"DairyPage_userInfoContainer__3iRwN",dateContainerList:"DairyPage_dateContainerList__1KbrV"},W=n(5078),Y=n(4164),T={overlayMod:"ModalSearchForm_overlayMod__aBaZf",modal:"ModalSearchForm_modal__jnnZq",container:"ModalSearchForm_container__gLBW4",icon:"ModalSearchForm_icon__l4G9j"},q=document.querySelector("#modal-root"),R=function(t){var e=t.onModalClose;return(0,Y.createPortal)((0,j.jsx)("div",{className:T.overlayMod,children:(0,j.jsxs)("div",{className:T.modal,children:[(0,j.jsxs)("div",{className:T.container,children:[(0,j.jsx)(D.R_q,{className:T.icon,onClick:function(){return e()}}),(0,j.jsx)(W.Z,{})]}),(0,j.jsx)("div",{className:T.form,children:(0,j.jsx)(N,{})})]})}),q)};var G=function(){var t=(0,r.useState)(!1),e=(0,a.Z)(t,2),n=e[0],c=e[1],s=(0,i.I0)(),l=(0,i.v9)(b.nN),u=(0,o.Z)().width;return(0,r.useEffect)((function(){s((0,d.me)(l))}),[l,s]),(0,j.jsx)(j.Fragment,{children:u>768?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(N,{}),(0,j.jsx)(S,{})]}):(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:Z.userInfoContainer,children:(0,j.jsx)(W.Z,{})}),(0,j.jsxs)("div",{className:Z.container,children:[(0,j.jsx)(x,{className:Z.dateContainer}),(0,j.jsx)(S,{className:Z.dateContainerList}),(0,j.jsx)(g.u,{type:"button",variant:"plus",children:(0,j.jsx)(D.B8K,{className:Z.icon,onClick:function(){c(!0),document.body.style.overflow="hidden"}})}),n&&(0,j.jsx)(R,{onModalClose:function(){document.body.style.overflow="unset",c(!1)}})]})]})})}},3027:function(t,e,n){n.d(e,{VX:function(){return d},kC:function(){return a},nN:function(){return i},wU:function(){return r}});var a=function(t){return t.searchData.productsData},r=function(t){return t.searchData.status},i=function(t){return t.searchData.date},d=function(t){return t.searchData.summary}}}]);
//# sourceMappingURL=46.7d48a6b0.chunk.js.map