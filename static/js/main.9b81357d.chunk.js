(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__31qJY",Modal:"Modal_Modal__EHi_o"}},26:function(e,t,a){e.exports={App:"App_App__3hXuV"}},28:function(e,t,a){e.exports={ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__3Ftxz"}},29:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1sIgR"}},30:function(e,t,a){e.exports={Button:"Button_Button__5aB9T"}},39:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__vgYCz",SearchForm:"Searchbar_SearchForm__1FoZt",SearchForm__button:"Searchbar_SearchForm__button__3ktsy",SearchForm__button__label:"Searchbar_SearchForm__button__label__1eCCv",SearchForm__input:"Searchbar_SearchForm__input__16NVl"}},81:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=(a(39),a(6)),o=a.n(c),s=a(16),i=a(13),u=a(4),l=a(0),b=a.n(l),h=a(25),m=a.n(h),d=a(9),j=(a(61),a(26)),p=a.n(j),_=a(27),f=a.n(_),g=function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,r,c,s,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,n=void 0===a?"":a,r=t.currentPage,c=void 0===r?1:r,s=t.perPage,i=void 0===s?12:s,e.next=3,f.a.get("".concat("https://pixabay.com/api/","?q=").concat(n,"&page=").concat(c,"&key=").concat("22979201-d3b88ee555cfd640fb3d2f529","&image_type=photo&orientation=horizontal&per_page=").concat(i));case 3:return u=e.sent,e.abrupt("return",u.data.hits);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={fetchData:g},v=a(7),x=a.n(v),y=a(1);function S(e){var t=e.onSubmit,a=Object(l.useState)(""),n=Object(u.a)(a,2),r=n[0],c=n[1];return Object(y.jsx)("header",{className:x.a.Searchbar,children:Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),c(""),""!==r.trim()||d.c.error("Please enter at least one letter !")},className:x.a.SearchForm,children:[Object(y.jsx)("button",{type:"submit",className:x.a.SearchForm__button,children:Object(y.jsx)("span",{className:x.a.SearchForm__button__label,children:"Search"})}),Object(y.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){c(e.target.value)},className:x.a.SearchForm__input})]})})}var k=a(28),w=a.n(k),F=function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags;return Object(y.jsx)("li",{children:Object(y.jsx)("img",{src:a,alt:r,"data-url":n,className:w.a.ImageGalleryItem__image})},t)},I=a(29),C=a.n(I),N=function(e){var t=e.images,a=e.onClick;return Object(y.jsx)("ul",{className:C.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags;return Object(y.jsx)(F,{webformatURL:a,largeImageURL:n,tags:r},t)}))})},L=a(30),M=a.n(L),B=function(e){var t=e.onLoadMore;return Object(y.jsx)("button",{onClick:t,type:"button",className:M.a.Button,children:"Load more"})},G=a(31),E=a(32),P=a(34),R=a(33),U=a(15),A=a.n(U),D=document.querySelector("#modal-root"),q=function(e){Object(P.a)(a,e);var t=Object(R.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(E.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(n.createPortal)(Object(y.jsx)("div",{className:A.a.Overlay,onClick:this.handleBackdropClick,children:Object(y.jsx)("div",{className:A.a.Modal,children:this.props.children})}),D)}}]),a}(l.Component);function z(){var e=Object(l.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(1),c=Object(u.a)(r,2),b=c[0],h=c[1],j=Object(l.useState)(0),_=Object(u.a)(j,2),f=_[0],g=_[1],v=Object(l.useState)(!1),x=Object(u.a)(v,2),k=x[0],w=x[1],F=Object(l.useState)(""),I=Object(u.a)(F,2),C=I[0],L=I[1],M=Object(l.useState)(!1),G=Object(u.a)(M,2),E=G[0],P=G[1],R=Object(l.useState)(""),U=Object(u.a)(R,2),A=U[0],D=U[1];Object(l.useEffect)((function(){if(g(12),C){var e=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={searchQuery:C,currentPage:b,perPage:f},P(!0),e.prev=2,e.next=5,O.fetchData(t);case 5:a=e.sent,n((function(e){return[].concat(Object(s.a)(e),Object(s.a)(a))})),P(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C,b,f]),Object(l.useEffect)((function(){g(12),a.length>f&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[a,f]);var z=function(){w(!k)},J=a.length>0&&!E;return Object(y.jsxs)("div",{className:p.a.App,children:[Object(y.jsx)(S,{onSubmit:function(e){n([]),h(1),L(e)}}),Object(y.jsx)(N,{images:a,onClick:function(e){"IMG"===e.target.nodeName&&(P(!0),D(e.target.dataset.url),z())}}),E&&Object(y.jsx)(m.a,{type:"Puff",color:"#00BFFF",height:80,width:80,radius:50}),J&&Object(y.jsx)(B,{onLoadMore:function(){return h((function(e){return e+1}))}}),Object(y.jsx)(d.b,{theme:"dark",transition:d.a,draggableDirection:"y"}),k&&Object(y.jsx)(q,{onClose:z,children:Object(y.jsx)("img",{src:A,alt:"",onLoad:function(){P(!1)}})})]})}r.a.render(Object(y.jsx)(b.a.StrictMode,{children:Object(y.jsx)(z,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.9b81357d.chunk.js.map