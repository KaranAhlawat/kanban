goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19235 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19235(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19237 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19237(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17864 = coll;
var G__17865 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17864,G__17865) : shadow.dom.lazy_native_coll_seq.call(null,G__17864,G__17865));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17918 = arguments.length;
switch (G__17918) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17923 = arguments.length;
switch (G__17923) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17941 = arguments.length;
switch (G__17941) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17961 = arguments.length;
switch (G__17961) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17990 = arguments.length;
switch (G__17990) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18036 = arguments.length;
switch (G__18036) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18051){if((e18051 instanceof Object)){
var e = e18051;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18051;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18070 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18071 = null;
var count__18072 = (0);
var i__18073 = (0);
while(true){
if((i__18073 < count__18072)){
var el = chunk__18071.cljs$core$IIndexed$_nth$arity$2(null,i__18073);
var handler_19258__$1 = ((function (seq__18070,chunk__18071,count__18072,i__18073,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18070,chunk__18071,count__18072,i__18073,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19258__$1);


var G__19259 = seq__18070;
var G__19260 = chunk__18071;
var G__19261 = count__18072;
var G__19262 = (i__18073 + (1));
seq__18070 = G__19259;
chunk__18071 = G__19260;
count__18072 = G__19261;
i__18073 = G__19262;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18070);
if(temp__5804__auto__){
var seq__18070__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18070__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18070__$1);
var G__19266 = cljs.core.chunk_rest(seq__18070__$1);
var G__19267 = c__5568__auto__;
var G__19268 = cljs.core.count(c__5568__auto__);
var G__19269 = (0);
seq__18070 = G__19266;
chunk__18071 = G__19267;
count__18072 = G__19268;
i__18073 = G__19269;
continue;
} else {
var el = cljs.core.first(seq__18070__$1);
var handler_19270__$1 = ((function (seq__18070,chunk__18071,count__18072,i__18073,el,seq__18070__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18070,chunk__18071,count__18072,i__18073,el,seq__18070__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19270__$1);


var G__19271 = cljs.core.next(seq__18070__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__18070 = G__19271;
chunk__18071 = G__19272;
count__18072 = G__19273;
i__18073 = G__19274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18105 = arguments.length;
switch (G__18105) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18133 = cljs.core.seq(events);
var chunk__18134 = null;
var count__18135 = (0);
var i__18136 = (0);
while(true){
if((i__18136 < count__18135)){
var vec__18201 = chunk__18134.cljs$core$IIndexed$_nth$arity$2(null,i__18136);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18201,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18201,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19276 = seq__18133;
var G__19277 = chunk__18134;
var G__19278 = count__18135;
var G__19279 = (i__18136 + (1));
seq__18133 = G__19276;
chunk__18134 = G__19277;
count__18135 = G__19278;
i__18136 = G__19279;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18133);
if(temp__5804__auto__){
var seq__18133__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18133__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18133__$1);
var G__19284 = cljs.core.chunk_rest(seq__18133__$1);
var G__19285 = c__5568__auto__;
var G__19286 = cljs.core.count(c__5568__auto__);
var G__19287 = (0);
seq__18133 = G__19284;
chunk__18134 = G__19285;
count__18135 = G__19286;
i__18136 = G__19287;
continue;
} else {
var vec__18207 = cljs.core.first(seq__18133__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18207,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19288 = cljs.core.next(seq__18133__$1);
var G__19289 = null;
var G__19290 = (0);
var G__19291 = (0);
seq__18133 = G__19288;
chunk__18134 = G__19289;
count__18135 = G__19290;
i__18136 = G__19291;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18214 = cljs.core.seq(styles);
var chunk__18215 = null;
var count__18216 = (0);
var i__18217 = (0);
while(true){
if((i__18217 < count__18216)){
var vec__18235 = chunk__18215.cljs$core$IIndexed$_nth$arity$2(null,i__18217);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18235,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19292 = seq__18214;
var G__19293 = chunk__18215;
var G__19294 = count__18216;
var G__19295 = (i__18217 + (1));
seq__18214 = G__19292;
chunk__18215 = G__19293;
count__18216 = G__19294;
i__18217 = G__19295;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18214);
if(temp__5804__auto__){
var seq__18214__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18214__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18214__$1);
var G__19300 = cljs.core.chunk_rest(seq__18214__$1);
var G__19301 = c__5568__auto__;
var G__19302 = cljs.core.count(c__5568__auto__);
var G__19303 = (0);
seq__18214 = G__19300;
chunk__18215 = G__19301;
count__18216 = G__19302;
i__18217 = G__19303;
continue;
} else {
var vec__18241 = cljs.core.first(seq__18214__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18241,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19304 = cljs.core.next(seq__18214__$1);
var G__19305 = null;
var G__19306 = (0);
var G__19307 = (0);
seq__18214 = G__19304;
chunk__18215 = G__19305;
count__18216 = G__19306;
i__18217 = G__19307;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18247_19308 = key;
var G__18247_19309__$1 = (((G__18247_19308 instanceof cljs.core.Keyword))?G__18247_19308.fqn:null);
switch (G__18247_19309__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19321 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19321,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19321,"aria-");
}
})())){
el.setAttribute(ks_19321,value);
} else {
(el[ks_19321] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18297){
var map__18298 = p__18297;
var map__18298__$1 = cljs.core.__destructure_map(map__18298);
var props = map__18298__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18298__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18303 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18303,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18315 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18315,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18315;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18324 = arguments.length;
switch (G__18324) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18353){
var vec__18359 = p__18353;
var seq__18360 = cljs.core.seq(vec__18359);
var first__18361 = cljs.core.first(seq__18360);
var seq__18360__$1 = cljs.core.next(seq__18360);
var nn = first__18361;
var first__18361__$1 = cljs.core.first(seq__18360__$1);
var seq__18360__$2 = cljs.core.next(seq__18360__$1);
var np = first__18361__$1;
var nc = seq__18360__$2;
var node = vec__18359;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18366 = nn;
var G__18367 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18366,G__18367) : create_fn.call(null,G__18366,G__18367));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18369 = nn;
var G__18370 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18369,G__18370) : create_fn.call(null,G__18369,G__18370));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18375 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18375,(1),null);
var seq__18379_19329 = cljs.core.seq(node_children);
var chunk__18381_19330 = null;
var count__18382_19331 = (0);
var i__18383_19332 = (0);
while(true){
if((i__18383_19332 < count__18382_19331)){
var child_struct_19333 = chunk__18381_19330.cljs$core$IIndexed$_nth$arity$2(null,i__18383_19332);
var children_19334 = shadow.dom.dom_node(child_struct_19333);
if(cljs.core.seq_QMARK_(children_19334)){
var seq__18436_19335 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19334));
var chunk__18438_19336 = null;
var count__18439_19337 = (0);
var i__18440_19338 = (0);
while(true){
if((i__18440_19338 < count__18439_19337)){
var child_19341 = chunk__18438_19336.cljs$core$IIndexed$_nth$arity$2(null,i__18440_19338);
if(cljs.core.truth_(child_19341)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19341);


var G__19342 = seq__18436_19335;
var G__19343 = chunk__18438_19336;
var G__19344 = count__18439_19337;
var G__19345 = (i__18440_19338 + (1));
seq__18436_19335 = G__19342;
chunk__18438_19336 = G__19343;
count__18439_19337 = G__19344;
i__18440_19338 = G__19345;
continue;
} else {
var G__19346 = seq__18436_19335;
var G__19347 = chunk__18438_19336;
var G__19348 = count__18439_19337;
var G__19349 = (i__18440_19338 + (1));
seq__18436_19335 = G__19346;
chunk__18438_19336 = G__19347;
count__18439_19337 = G__19348;
i__18440_19338 = G__19349;
continue;
}
} else {
var temp__5804__auto___19350 = cljs.core.seq(seq__18436_19335);
if(temp__5804__auto___19350){
var seq__18436_19351__$1 = temp__5804__auto___19350;
if(cljs.core.chunked_seq_QMARK_(seq__18436_19351__$1)){
var c__5568__auto___19352 = cljs.core.chunk_first(seq__18436_19351__$1);
var G__19353 = cljs.core.chunk_rest(seq__18436_19351__$1);
var G__19354 = c__5568__auto___19352;
var G__19355 = cljs.core.count(c__5568__auto___19352);
var G__19356 = (0);
seq__18436_19335 = G__19353;
chunk__18438_19336 = G__19354;
count__18439_19337 = G__19355;
i__18440_19338 = G__19356;
continue;
} else {
var child_19357 = cljs.core.first(seq__18436_19351__$1);
if(cljs.core.truth_(child_19357)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19357);


var G__19359 = cljs.core.next(seq__18436_19351__$1);
var G__19360 = null;
var G__19361 = (0);
var G__19362 = (0);
seq__18436_19335 = G__19359;
chunk__18438_19336 = G__19360;
count__18439_19337 = G__19361;
i__18440_19338 = G__19362;
continue;
} else {
var G__19363 = cljs.core.next(seq__18436_19351__$1);
var G__19364 = null;
var G__19365 = (0);
var G__19366 = (0);
seq__18436_19335 = G__19363;
chunk__18438_19336 = G__19364;
count__18439_19337 = G__19365;
i__18440_19338 = G__19366;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19334);
}


var G__19370 = seq__18379_19329;
var G__19371 = chunk__18381_19330;
var G__19372 = count__18382_19331;
var G__19373 = (i__18383_19332 + (1));
seq__18379_19329 = G__19370;
chunk__18381_19330 = G__19371;
count__18382_19331 = G__19372;
i__18383_19332 = G__19373;
continue;
} else {
var temp__5804__auto___19374 = cljs.core.seq(seq__18379_19329);
if(temp__5804__auto___19374){
var seq__18379_19375__$1 = temp__5804__auto___19374;
if(cljs.core.chunked_seq_QMARK_(seq__18379_19375__$1)){
var c__5568__auto___19376 = cljs.core.chunk_first(seq__18379_19375__$1);
var G__19377 = cljs.core.chunk_rest(seq__18379_19375__$1);
var G__19378 = c__5568__auto___19376;
var G__19379 = cljs.core.count(c__5568__auto___19376);
var G__19380 = (0);
seq__18379_19329 = G__19377;
chunk__18381_19330 = G__19378;
count__18382_19331 = G__19379;
i__18383_19332 = G__19380;
continue;
} else {
var child_struct_19381 = cljs.core.first(seq__18379_19375__$1);
var children_19382 = shadow.dom.dom_node(child_struct_19381);
if(cljs.core.seq_QMARK_(children_19382)){
var seq__18460_19383 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19382));
var chunk__18462_19384 = null;
var count__18463_19385 = (0);
var i__18464_19386 = (0);
while(true){
if((i__18464_19386 < count__18463_19385)){
var child_19387 = chunk__18462_19384.cljs$core$IIndexed$_nth$arity$2(null,i__18464_19386);
if(cljs.core.truth_(child_19387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19387);


var G__19388 = seq__18460_19383;
var G__19389 = chunk__18462_19384;
var G__19390 = count__18463_19385;
var G__19391 = (i__18464_19386 + (1));
seq__18460_19383 = G__19388;
chunk__18462_19384 = G__19389;
count__18463_19385 = G__19390;
i__18464_19386 = G__19391;
continue;
} else {
var G__19392 = seq__18460_19383;
var G__19393 = chunk__18462_19384;
var G__19394 = count__18463_19385;
var G__19395 = (i__18464_19386 + (1));
seq__18460_19383 = G__19392;
chunk__18462_19384 = G__19393;
count__18463_19385 = G__19394;
i__18464_19386 = G__19395;
continue;
}
} else {
var temp__5804__auto___19396__$1 = cljs.core.seq(seq__18460_19383);
if(temp__5804__auto___19396__$1){
var seq__18460_19397__$1 = temp__5804__auto___19396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18460_19397__$1)){
var c__5568__auto___19398 = cljs.core.chunk_first(seq__18460_19397__$1);
var G__19399 = cljs.core.chunk_rest(seq__18460_19397__$1);
var G__19400 = c__5568__auto___19398;
var G__19401 = cljs.core.count(c__5568__auto___19398);
var G__19402 = (0);
seq__18460_19383 = G__19399;
chunk__18462_19384 = G__19400;
count__18463_19385 = G__19401;
i__18464_19386 = G__19402;
continue;
} else {
var child_19403 = cljs.core.first(seq__18460_19397__$1);
if(cljs.core.truth_(child_19403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19403);


var G__19404 = cljs.core.next(seq__18460_19397__$1);
var G__19405 = null;
var G__19406 = (0);
var G__19407 = (0);
seq__18460_19383 = G__19404;
chunk__18462_19384 = G__19405;
count__18463_19385 = G__19406;
i__18464_19386 = G__19407;
continue;
} else {
var G__19408 = cljs.core.next(seq__18460_19397__$1);
var G__19409 = null;
var G__19410 = (0);
var G__19411 = (0);
seq__18460_19383 = G__19408;
chunk__18462_19384 = G__19409;
count__18463_19385 = G__19410;
i__18464_19386 = G__19411;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19382);
}


var G__19412 = cljs.core.next(seq__18379_19375__$1);
var G__19413 = null;
var G__19414 = (0);
var G__19415 = (0);
seq__18379_19329 = G__19412;
chunk__18381_19330 = G__19413;
count__18382_19331 = G__19414;
i__18383_19332 = G__19415;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18514 = cljs.core.seq(node);
var chunk__18515 = null;
var count__18516 = (0);
var i__18517 = (0);
while(true){
if((i__18517 < count__18516)){
var n = chunk__18515.cljs$core$IIndexed$_nth$arity$2(null,i__18517);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19416 = seq__18514;
var G__19417 = chunk__18515;
var G__19418 = count__18516;
var G__19419 = (i__18517 + (1));
seq__18514 = G__19416;
chunk__18515 = G__19417;
count__18516 = G__19418;
i__18517 = G__19419;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18514);
if(temp__5804__auto__){
var seq__18514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18514__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18514__$1);
var G__19420 = cljs.core.chunk_rest(seq__18514__$1);
var G__19421 = c__5568__auto__;
var G__19422 = cljs.core.count(c__5568__auto__);
var G__19423 = (0);
seq__18514 = G__19420;
chunk__18515 = G__19421;
count__18516 = G__19422;
i__18517 = G__19423;
continue;
} else {
var n = cljs.core.first(seq__18514__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19424 = cljs.core.next(seq__18514__$1);
var G__19425 = null;
var G__19426 = (0);
var G__19427 = (0);
seq__18514 = G__19424;
chunk__18515 = G__19425;
count__18516 = G__19426;
i__18517 = G__19427;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18532 = arguments.length;
switch (G__18532) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18550 = arguments.length;
switch (G__18550) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18568 = arguments.length;
switch (G__18568) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19439 = arguments.length;
var i__5770__auto___19440 = (0);
while(true){
if((i__5770__auto___19440 < len__5769__auto___19439)){
args__5775__auto__.push((arguments[i__5770__auto___19440]));

var G__19445 = (i__5770__auto___19440 + (1));
i__5770__auto___19440 = G__19445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18614_19446 = cljs.core.seq(nodes);
var chunk__18615_19447 = null;
var count__18616_19448 = (0);
var i__18617_19449 = (0);
while(true){
if((i__18617_19449 < count__18616_19448)){
var node_19450 = chunk__18615_19447.cljs$core$IIndexed$_nth$arity$2(null,i__18617_19449);
fragment.appendChild(shadow.dom._to_dom(node_19450));


var G__19451 = seq__18614_19446;
var G__19452 = chunk__18615_19447;
var G__19453 = count__18616_19448;
var G__19454 = (i__18617_19449 + (1));
seq__18614_19446 = G__19451;
chunk__18615_19447 = G__19452;
count__18616_19448 = G__19453;
i__18617_19449 = G__19454;
continue;
} else {
var temp__5804__auto___19455 = cljs.core.seq(seq__18614_19446);
if(temp__5804__auto___19455){
var seq__18614_19456__$1 = temp__5804__auto___19455;
if(cljs.core.chunked_seq_QMARK_(seq__18614_19456__$1)){
var c__5568__auto___19457 = cljs.core.chunk_first(seq__18614_19456__$1);
var G__19458 = cljs.core.chunk_rest(seq__18614_19456__$1);
var G__19459 = c__5568__auto___19457;
var G__19460 = cljs.core.count(c__5568__auto___19457);
var G__19461 = (0);
seq__18614_19446 = G__19458;
chunk__18615_19447 = G__19459;
count__18616_19448 = G__19460;
i__18617_19449 = G__19461;
continue;
} else {
var node_19464 = cljs.core.first(seq__18614_19456__$1);
fragment.appendChild(shadow.dom._to_dom(node_19464));


var G__19465 = cljs.core.next(seq__18614_19456__$1);
var G__19466 = null;
var G__19467 = (0);
var G__19468 = (0);
seq__18614_19446 = G__19465;
chunk__18615_19447 = G__19466;
count__18616_19448 = G__19467;
i__18617_19449 = G__19468;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18609){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18609));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18663_19469 = cljs.core.seq(scripts);
var chunk__18664_19470 = null;
var count__18665_19471 = (0);
var i__18666_19472 = (0);
while(true){
if((i__18666_19472 < count__18665_19471)){
var vec__18698_19476 = chunk__18664_19470.cljs$core$IIndexed$_nth$arity$2(null,i__18666_19472);
var script_tag_19477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18698_19476,(0),null);
var script_body_19478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18698_19476,(1),null);
eval(script_body_19478);


var G__19480 = seq__18663_19469;
var G__19481 = chunk__18664_19470;
var G__19482 = count__18665_19471;
var G__19483 = (i__18666_19472 + (1));
seq__18663_19469 = G__19480;
chunk__18664_19470 = G__19481;
count__18665_19471 = G__19482;
i__18666_19472 = G__19483;
continue;
} else {
var temp__5804__auto___19484 = cljs.core.seq(seq__18663_19469);
if(temp__5804__auto___19484){
var seq__18663_19485__$1 = temp__5804__auto___19484;
if(cljs.core.chunked_seq_QMARK_(seq__18663_19485__$1)){
var c__5568__auto___19486 = cljs.core.chunk_first(seq__18663_19485__$1);
var G__19487 = cljs.core.chunk_rest(seq__18663_19485__$1);
var G__19488 = c__5568__auto___19486;
var G__19489 = cljs.core.count(c__5568__auto___19486);
var G__19490 = (0);
seq__18663_19469 = G__19487;
chunk__18664_19470 = G__19488;
count__18665_19471 = G__19489;
i__18666_19472 = G__19490;
continue;
} else {
var vec__18712_19491 = cljs.core.first(seq__18663_19485__$1);
var script_tag_19492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18712_19491,(0),null);
var script_body_19493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18712_19491,(1),null);
eval(script_body_19493);


var G__19494 = cljs.core.next(seq__18663_19485__$1);
var G__19495 = null;
var G__19496 = (0);
var G__19497 = (0);
seq__18663_19469 = G__19494;
chunk__18664_19470 = G__19495;
count__18665_19471 = G__19496;
i__18666_19472 = G__19497;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18717){
var vec__18719 = p__18717;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18719,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18719,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18747 = arguments.length;
switch (G__18747) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18790 = cljs.core.seq(style_keys);
var chunk__18791 = null;
var count__18792 = (0);
var i__18793 = (0);
while(true){
if((i__18793 < count__18792)){
var it = chunk__18791.cljs$core$IIndexed$_nth$arity$2(null,i__18793);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19509 = seq__18790;
var G__19510 = chunk__18791;
var G__19511 = count__18792;
var G__19512 = (i__18793 + (1));
seq__18790 = G__19509;
chunk__18791 = G__19510;
count__18792 = G__19511;
i__18793 = G__19512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18790);
if(temp__5804__auto__){
var seq__18790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18790__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18790__$1);
var G__19513 = cljs.core.chunk_rest(seq__18790__$1);
var G__19514 = c__5568__auto__;
var G__19515 = cljs.core.count(c__5568__auto__);
var G__19516 = (0);
seq__18790 = G__19513;
chunk__18791 = G__19514;
count__18792 = G__19515;
i__18793 = G__19516;
continue;
} else {
var it = cljs.core.first(seq__18790__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19517 = cljs.core.next(seq__18790__$1);
var G__19518 = null;
var G__19519 = (0);
var G__19520 = (0);
seq__18790 = G__19517;
chunk__18791 = G__19518;
count__18792 = G__19519;
i__18793 = G__19520;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18798,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18808 = k18798;
var G__18808__$1 = (((G__18808 instanceof cljs.core.Keyword))?G__18808.fqn:null);
switch (G__18808__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18798,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18817){
var vec__18819 = p__18817;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18819,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18797){
var self__ = this;
var G__18797__$1 = this;
return (new cljs.core.RecordIter((0),G__18797__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18799,other18800){
var self__ = this;
var this18799__$1 = this;
return (((!((other18800 == null)))) && ((((this18799__$1.constructor === other18800.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18799__$1.x,other18800.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18799__$1.y,other18800.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18799__$1.__extmap,other18800.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18798){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18861 = k18798;
var G__18861__$1 = (((G__18861 instanceof cljs.core.Keyword))?G__18861.fqn:null);
switch (G__18861__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18798);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18797){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18869 = cljs.core.keyword_identical_QMARK_;
var expr__18870 = k__5352__auto__;
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18870)))){
return (new shadow.dom.Coordinate(G__18797,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18870)))){
return (new shadow.dom.Coordinate(self__.x,G__18797,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18797),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18797){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18797,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18801){
var extmap__5385__auto__ = (function (){var G__18903 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18801,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18801)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18903);
} else {
return G__18903;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18801),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18801),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18917,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18936 = k18917;
var G__18936__$1 = (((G__18936 instanceof cljs.core.Keyword))?G__18936.fqn:null);
switch (G__18936__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18917,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18950){
var vec__18951 = p__18950;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18916){
var self__ = this;
var G__18916__$1 = this;
return (new cljs.core.RecordIter((0),G__18916__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18918,other18919){
var self__ = this;
var this18918__$1 = this;
return (((!((other18919 == null)))) && ((((this18918__$1.constructor === other18919.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18918__$1.w,other18919.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18918__$1.h,other18919.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18918__$1.__extmap,other18919.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18917){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18992 = k18917;
var G__18992__$1 = (((G__18992 instanceof cljs.core.Keyword))?G__18992.fqn:null);
switch (G__18992__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18917);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18916){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18994 = cljs.core.keyword_identical_QMARK_;
var expr__18995 = k__5352__auto__;
if(cljs.core.truth_((pred__18994.cljs$core$IFn$_invoke$arity$2 ? pred__18994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18995) : pred__18994.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18995)))){
return (new shadow.dom.Size(G__18916,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18994.cljs$core$IFn$_invoke$arity$2 ? pred__18994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18995) : pred__18994.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18995)))){
return (new shadow.dom.Size(self__.w,G__18916,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18916),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18916){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18916,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18921){
var extmap__5385__auto__ = (function (){var G__19021 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18921,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18921)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19021);
} else {
return G__19021;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18921),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18921),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19567 = (i + (1));
var G__19568 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19567;
ret = G__19568;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19033){
var vec__19034 = p__19033;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19034,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19042 = arguments.length;
switch (G__19042) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19597 = ps;
var G__19598 = (i + (1));
el__$1 = G__19597;
i = G__19598;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19092 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19092,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19092,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19092,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19095_19618 = cljs.core.seq(props);
var chunk__19096_19619 = null;
var count__19097_19620 = (0);
var i__19098_19621 = (0);
while(true){
if((i__19098_19621 < count__19097_19620)){
var vec__19108_19622 = chunk__19096_19619.cljs$core$IIndexed$_nth$arity$2(null,i__19098_19621);
var k_19623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19108_19622,(0),null);
var v_19624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19108_19622,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19623);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19623),v_19624);


var G__19633 = seq__19095_19618;
var G__19634 = chunk__19096_19619;
var G__19635 = count__19097_19620;
var G__19636 = (i__19098_19621 + (1));
seq__19095_19618 = G__19633;
chunk__19096_19619 = G__19634;
count__19097_19620 = G__19635;
i__19098_19621 = G__19636;
continue;
} else {
var temp__5804__auto___19638 = cljs.core.seq(seq__19095_19618);
if(temp__5804__auto___19638){
var seq__19095_19640__$1 = temp__5804__auto___19638;
if(cljs.core.chunked_seq_QMARK_(seq__19095_19640__$1)){
var c__5568__auto___19642 = cljs.core.chunk_first(seq__19095_19640__$1);
var G__19647 = cljs.core.chunk_rest(seq__19095_19640__$1);
var G__19648 = c__5568__auto___19642;
var G__19649 = cljs.core.count(c__5568__auto___19642);
var G__19650 = (0);
seq__19095_19618 = G__19647;
chunk__19096_19619 = G__19648;
count__19097_19620 = G__19649;
i__19098_19621 = G__19650;
continue;
} else {
var vec__19112_19660 = cljs.core.first(seq__19095_19640__$1);
var k_19661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19112_19660,(0),null);
var v_19662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19112_19660,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19661);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19661),v_19662);


var G__19664 = cljs.core.next(seq__19095_19640__$1);
var G__19665 = null;
var G__19666 = (0);
var G__19667 = (0);
seq__19095_19618 = G__19664;
chunk__19096_19619 = G__19665;
count__19097_19620 = G__19666;
i__19098_19621 = G__19667;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19116 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19116,(1),null);
var seq__19119_19668 = cljs.core.seq(node_children);
var chunk__19121_19669 = null;
var count__19122_19670 = (0);
var i__19123_19671 = (0);
while(true){
if((i__19123_19671 < count__19122_19670)){
var child_struct_19676 = chunk__19121_19669.cljs$core$IIndexed$_nth$arity$2(null,i__19123_19671);
if((!((child_struct_19676 == null)))){
if(typeof child_struct_19676 === 'string'){
var text_19680 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19680),child_struct_19676].join(''));
} else {
var children_19681 = shadow.dom.svg_node(child_struct_19676);
if(cljs.core.seq_QMARK_(children_19681)){
var seq__19154_19682 = cljs.core.seq(children_19681);
var chunk__19156_19683 = null;
var count__19157_19684 = (0);
var i__19158_19685 = (0);
while(true){
if((i__19158_19685 < count__19157_19684)){
var child_19686 = chunk__19156_19683.cljs$core$IIndexed$_nth$arity$2(null,i__19158_19685);
if(cljs.core.truth_(child_19686)){
node.appendChild(child_19686);


var G__19687 = seq__19154_19682;
var G__19688 = chunk__19156_19683;
var G__19689 = count__19157_19684;
var G__19690 = (i__19158_19685 + (1));
seq__19154_19682 = G__19687;
chunk__19156_19683 = G__19688;
count__19157_19684 = G__19689;
i__19158_19685 = G__19690;
continue;
} else {
var G__19692 = seq__19154_19682;
var G__19693 = chunk__19156_19683;
var G__19694 = count__19157_19684;
var G__19695 = (i__19158_19685 + (1));
seq__19154_19682 = G__19692;
chunk__19156_19683 = G__19693;
count__19157_19684 = G__19694;
i__19158_19685 = G__19695;
continue;
}
} else {
var temp__5804__auto___19701 = cljs.core.seq(seq__19154_19682);
if(temp__5804__auto___19701){
var seq__19154_19702__$1 = temp__5804__auto___19701;
if(cljs.core.chunked_seq_QMARK_(seq__19154_19702__$1)){
var c__5568__auto___19704 = cljs.core.chunk_first(seq__19154_19702__$1);
var G__19706 = cljs.core.chunk_rest(seq__19154_19702__$1);
var G__19707 = c__5568__auto___19704;
var G__19708 = cljs.core.count(c__5568__auto___19704);
var G__19709 = (0);
seq__19154_19682 = G__19706;
chunk__19156_19683 = G__19707;
count__19157_19684 = G__19708;
i__19158_19685 = G__19709;
continue;
} else {
var child_19715 = cljs.core.first(seq__19154_19702__$1);
if(cljs.core.truth_(child_19715)){
node.appendChild(child_19715);


var G__19719 = cljs.core.next(seq__19154_19702__$1);
var G__19720 = null;
var G__19721 = (0);
var G__19722 = (0);
seq__19154_19682 = G__19719;
chunk__19156_19683 = G__19720;
count__19157_19684 = G__19721;
i__19158_19685 = G__19722;
continue;
} else {
var G__19723 = cljs.core.next(seq__19154_19702__$1);
var G__19724 = null;
var G__19725 = (0);
var G__19726 = (0);
seq__19154_19682 = G__19723;
chunk__19156_19683 = G__19724;
count__19157_19684 = G__19725;
i__19158_19685 = G__19726;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19681);
}
}


var G__19727 = seq__19119_19668;
var G__19728 = chunk__19121_19669;
var G__19729 = count__19122_19670;
var G__19730 = (i__19123_19671 + (1));
seq__19119_19668 = G__19727;
chunk__19121_19669 = G__19728;
count__19122_19670 = G__19729;
i__19123_19671 = G__19730;
continue;
} else {
var G__19732 = seq__19119_19668;
var G__19733 = chunk__19121_19669;
var G__19734 = count__19122_19670;
var G__19735 = (i__19123_19671 + (1));
seq__19119_19668 = G__19732;
chunk__19121_19669 = G__19733;
count__19122_19670 = G__19734;
i__19123_19671 = G__19735;
continue;
}
} else {
var temp__5804__auto___19736 = cljs.core.seq(seq__19119_19668);
if(temp__5804__auto___19736){
var seq__19119_19737__$1 = temp__5804__auto___19736;
if(cljs.core.chunked_seq_QMARK_(seq__19119_19737__$1)){
var c__5568__auto___19742 = cljs.core.chunk_first(seq__19119_19737__$1);
var G__19744 = cljs.core.chunk_rest(seq__19119_19737__$1);
var G__19745 = c__5568__auto___19742;
var G__19746 = cljs.core.count(c__5568__auto___19742);
var G__19747 = (0);
seq__19119_19668 = G__19744;
chunk__19121_19669 = G__19745;
count__19122_19670 = G__19746;
i__19123_19671 = G__19747;
continue;
} else {
var child_struct_19752 = cljs.core.first(seq__19119_19737__$1);
if((!((child_struct_19752 == null)))){
if(typeof child_struct_19752 === 'string'){
var text_19753 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19753),child_struct_19752].join(''));
} else {
var children_19759 = shadow.dom.svg_node(child_struct_19752);
if(cljs.core.seq_QMARK_(children_19759)){
var seq__19162_19760 = cljs.core.seq(children_19759);
var chunk__19164_19761 = null;
var count__19165_19762 = (0);
var i__19166_19763 = (0);
while(true){
if((i__19166_19763 < count__19165_19762)){
var child_19764 = chunk__19164_19761.cljs$core$IIndexed$_nth$arity$2(null,i__19166_19763);
if(cljs.core.truth_(child_19764)){
node.appendChild(child_19764);


var G__19769 = seq__19162_19760;
var G__19770 = chunk__19164_19761;
var G__19771 = count__19165_19762;
var G__19772 = (i__19166_19763 + (1));
seq__19162_19760 = G__19769;
chunk__19164_19761 = G__19770;
count__19165_19762 = G__19771;
i__19166_19763 = G__19772;
continue;
} else {
var G__19773 = seq__19162_19760;
var G__19774 = chunk__19164_19761;
var G__19775 = count__19165_19762;
var G__19776 = (i__19166_19763 + (1));
seq__19162_19760 = G__19773;
chunk__19164_19761 = G__19774;
count__19165_19762 = G__19775;
i__19166_19763 = G__19776;
continue;
}
} else {
var temp__5804__auto___19777__$1 = cljs.core.seq(seq__19162_19760);
if(temp__5804__auto___19777__$1){
var seq__19162_19778__$1 = temp__5804__auto___19777__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19162_19778__$1)){
var c__5568__auto___19779 = cljs.core.chunk_first(seq__19162_19778__$1);
var G__19780 = cljs.core.chunk_rest(seq__19162_19778__$1);
var G__19781 = c__5568__auto___19779;
var G__19782 = cljs.core.count(c__5568__auto___19779);
var G__19783 = (0);
seq__19162_19760 = G__19780;
chunk__19164_19761 = G__19781;
count__19165_19762 = G__19782;
i__19166_19763 = G__19783;
continue;
} else {
var child_19785 = cljs.core.first(seq__19162_19778__$1);
if(cljs.core.truth_(child_19785)){
node.appendChild(child_19785);


var G__19786 = cljs.core.next(seq__19162_19778__$1);
var G__19787 = null;
var G__19788 = (0);
var G__19789 = (0);
seq__19162_19760 = G__19786;
chunk__19164_19761 = G__19787;
count__19165_19762 = G__19788;
i__19166_19763 = G__19789;
continue;
} else {
var G__19790 = cljs.core.next(seq__19162_19778__$1);
var G__19791 = null;
var G__19792 = (0);
var G__19793 = (0);
seq__19162_19760 = G__19790;
chunk__19164_19761 = G__19791;
count__19165_19762 = G__19792;
i__19166_19763 = G__19793;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19759);
}
}


var G__19794 = cljs.core.next(seq__19119_19737__$1);
var G__19795 = null;
var G__19796 = (0);
var G__19797 = (0);
seq__19119_19668 = G__19794;
chunk__19121_19669 = G__19795;
count__19122_19670 = G__19796;
i__19123_19671 = G__19797;
continue;
} else {
var G__19798 = cljs.core.next(seq__19119_19737__$1);
var G__19799 = null;
var G__19800 = (0);
var G__19801 = (0);
seq__19119_19668 = G__19798;
chunk__19121_19669 = G__19799;
count__19122_19670 = G__19800;
i__19123_19671 = G__19801;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19803 = arguments.length;
var i__5770__auto___19804 = (0);
while(true){
if((i__5770__auto___19804 < len__5769__auto___19803)){
args__5775__auto__.push((arguments[i__5770__auto___19804]));

var G__19805 = (i__5770__auto___19804 + (1));
i__5770__auto___19804 = G__19805;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19178){
var G__19179 = cljs.core.first(seq19178);
var seq19178__$1 = cljs.core.next(seq19178);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19179,seq19178__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19188 = arguments.length;
switch (G__19188) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14394__auto___19809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_19205){
var state_val_19206 = (state_19205[(1)]);
if((state_val_19206 === (1))){
var state_19205__$1 = state_19205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19205__$1,(2),once_or_cleanup);
} else {
if((state_val_19206 === (2))){
var inst_19202 = (state_19205[(2)]);
var inst_19203 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19205__$1 = (function (){var statearr_19211 = state_19205;
(statearr_19211[(7)] = inst_19202);

return statearr_19211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19205__$1,inst_19203);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14129__auto__ = null;
var shadow$dom$state_machine__14129__auto____0 = (function (){
var statearr_19213 = [null,null,null,null,null,null,null,null];
(statearr_19213[(0)] = shadow$dom$state_machine__14129__auto__);

(statearr_19213[(1)] = (1));

return statearr_19213;
});
var shadow$dom$state_machine__14129__auto____1 = (function (state_19205){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_19205);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e19214){var ex__14132__auto__ = e19214;
var statearr_19215_19814 = state_19205;
(statearr_19215_19814[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_19205[(4)]))){
var statearr_19216_19815 = state_19205;
(statearr_19216_19815[(1)] = cljs.core.first((state_19205[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19816 = state_19205;
state_19205 = G__19816;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
shadow$dom$state_machine__14129__auto__ = function(state_19205){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14129__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14129__auto____1.call(this,state_19205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14129__auto____0;
shadow$dom$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14129__auto____1;
return shadow$dom$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_19217 = f__14395__auto__();
(statearr_19217[(6)] = c__14394__auto___19809);

return statearr_19217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
