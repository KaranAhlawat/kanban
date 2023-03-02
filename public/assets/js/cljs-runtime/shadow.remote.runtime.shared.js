goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14551){
var map__14552 = p__14551;
var map__14552__$1 = cljs.core.__destructure_map(map__14552);
var runtime = map__14552__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14552__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14744 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14744)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14553 = runtime;
var G__14554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14744);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14553,G__14554) : shadow.remote.runtime.shared.process.call(null,G__14553,G__14554));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14556,res){
var map__14558 = p__14556;
var map__14558__$1 = cljs.core.__destructure_map(map__14558);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14558__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14558__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14559 = res;
var G__14559__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14559,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14559);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14559__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14559__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14561 = arguments.length;
switch (G__14561) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14571,msg,handlers,timeout_after_ms){
var map__14572 = p__14571;
var map__14572__$1 = cljs.core.__destructure_map(map__14572);
var runtime = map__14572__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14761 = arguments.length;
var i__5770__auto___14762 = (0);
while(true){
if((i__5770__auto___14762 < len__5769__auto___14761)){
args__5775__auto__.push((arguments[i__5770__auto___14762]));

var G__14763 = (i__5770__auto___14762 + (1));
i__5770__auto___14762 = G__14763;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14590,ev,args){
var map__14591 = p__14590;
var map__14591__$1 = cljs.core.__destructure_map(map__14591);
var runtime = map__14591__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14592 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14595 = null;
var count__14596 = (0);
var i__14597 = (0);
while(true){
if((i__14597 < count__14596)){
var ext = chunk__14595.cljs$core$IIndexed$_nth$arity$2(null,i__14597);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14767 = seq__14592;
var G__14768 = chunk__14595;
var G__14769 = count__14596;
var G__14770 = (i__14597 + (1));
seq__14592 = G__14767;
chunk__14595 = G__14768;
count__14596 = G__14769;
i__14597 = G__14770;
continue;
} else {
var G__14772 = seq__14592;
var G__14773 = chunk__14595;
var G__14774 = count__14596;
var G__14775 = (i__14597 + (1));
seq__14592 = G__14772;
chunk__14595 = G__14773;
count__14596 = G__14774;
i__14597 = G__14775;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14592);
if(temp__5804__auto__){
var seq__14592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14592__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14592__$1);
var G__14779 = cljs.core.chunk_rest(seq__14592__$1);
var G__14780 = c__5568__auto__;
var G__14781 = cljs.core.count(c__5568__auto__);
var G__14782 = (0);
seq__14592 = G__14779;
chunk__14595 = G__14780;
count__14596 = G__14781;
i__14597 = G__14782;
continue;
} else {
var ext = cljs.core.first(seq__14592__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14784 = cljs.core.next(seq__14592__$1);
var G__14785 = null;
var G__14786 = (0);
var G__14787 = (0);
seq__14592 = G__14784;
chunk__14595 = G__14785;
count__14596 = G__14786;
i__14597 = G__14787;
continue;
} else {
var G__14788 = cljs.core.next(seq__14592__$1);
var G__14789 = null;
var G__14790 = (0);
var G__14791 = (0);
seq__14592 = G__14788;
chunk__14595 = G__14789;
count__14596 = G__14790;
i__14597 = G__14791;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14579){
var G__14580 = cljs.core.first(seq14579);
var seq14579__$1 = cljs.core.next(seq14579);
var G__14581 = cljs.core.first(seq14579__$1);
var seq14579__$2 = cljs.core.next(seq14579__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14580,G__14581,seq14579__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14609,p__14610){
var map__14611 = p__14609;
var map__14611__$1 = cljs.core.__destructure_map(map__14611);
var runtime = map__14611__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14611__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14612 = p__14610;
var map__14612__$1 = cljs.core.__destructure_map(map__14612);
var msg = map__14612__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14612__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__14613 = cljs.core.deref(state_ref);
var map__14613__$1 = cljs.core.__destructure_map(map__14613);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14613__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14613__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14616,msg){
var map__14617 = p__14616;
var map__14617__$1 = cljs.core.__destructure_map(map__14617);
var runtime = map__14617__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14617__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14620,key,p__14621){
var map__14622 = p__14620;
var map__14622__$1 = cljs.core.__destructure_map(map__14622);
var state = map__14622__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14622__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14623 = p__14621;
var map__14623__$1 = cljs.core.__destructure_map(map__14623);
var spec = map__14623__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14623__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14630,key,spec){
var map__14631 = p__14630;
var map__14631__$1 = cljs.core.__destructure_map(map__14631);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14631__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14632_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14632_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14633_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14633_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14634_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14634_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14635_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14635_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14636_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14636_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14642,key){
var map__14644 = p__14642;
var map__14644__$1 = cljs.core.__destructure_map(map__14644);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14649,msg){
var map__14650 = p__14649;
var map__14650__$1 = cljs.core.__destructure_map(map__14650);
var runtime = map__14650__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14650__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14655,p__14656){
var map__14659 = p__14655;
var map__14659__$1 = cljs.core.__destructure_map(map__14659);
var runtime = map__14659__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14659__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14660 = p__14656;
var map__14660__$1 = cljs.core.__destructure_map(map__14660);
var msg = map__14660__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14660__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14660__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14682 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14684 = null;
var count__14685 = (0);
var i__14686 = (0);
while(true){
if((i__14686 < count__14685)){
var map__14729 = chunk__14684.cljs$core$IIndexed$_nth$arity$2(null,i__14686);
var map__14729__$1 = cljs.core.__destructure_map(map__14729);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14729__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14835 = seq__14682;
var G__14836 = chunk__14684;
var G__14837 = count__14685;
var G__14838 = (i__14686 + (1));
seq__14682 = G__14835;
chunk__14684 = G__14836;
count__14685 = G__14837;
i__14686 = G__14838;
continue;
} else {
var G__14840 = seq__14682;
var G__14841 = chunk__14684;
var G__14842 = count__14685;
var G__14843 = (i__14686 + (1));
seq__14682 = G__14840;
chunk__14684 = G__14841;
count__14685 = G__14842;
i__14686 = G__14843;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14682);
if(temp__5804__auto__){
var seq__14682__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14682__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14682__$1);
var G__14847 = cljs.core.chunk_rest(seq__14682__$1);
var G__14848 = c__5568__auto__;
var G__14849 = cljs.core.count(c__5568__auto__);
var G__14850 = (0);
seq__14682 = G__14847;
chunk__14684 = G__14848;
count__14685 = G__14849;
i__14686 = G__14850;
continue;
} else {
var map__14733 = cljs.core.first(seq__14682__$1);
var map__14733__$1 = cljs.core.__destructure_map(map__14733);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14733__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14852 = cljs.core.next(seq__14682__$1);
var G__14853 = null;
var G__14854 = (0);
var G__14855 = (0);
seq__14682 = G__14852;
chunk__14684 = G__14853;
count__14685 = G__14854;
i__14686 = G__14855;
continue;
} else {
var G__14856 = cljs.core.next(seq__14682__$1);
var G__14857 = null;
var G__14858 = (0);
var G__14859 = (0);
seq__14682 = G__14856;
chunk__14684 = G__14857;
count__14685 = G__14858;
i__14686 = G__14859;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
