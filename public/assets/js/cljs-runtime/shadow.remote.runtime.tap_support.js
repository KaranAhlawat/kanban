goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20643,p__20644){
var map__20646 = p__20643;
var map__20646__$1 = cljs.core.__destructure_map(map__20646);
var svc = map__20646__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20646__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20646__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20646__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20647 = p__20644;
var map__20647__$1 = cljs.core.__destructure_map(map__20647);
var msg = map__20647__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20647__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20647__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20647__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20647__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20662,p__20663){
var map__20664 = p__20662;
var map__20664__$1 = cljs.core.__destructure_map(map__20664);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20664__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20665 = p__20663;
var map__20665__$1 = cljs.core.__destructure_map(map__20665);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20665__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20688,p__20689){
var map__20694 = p__20688;
var map__20694__$1 = cljs.core.__destructure_map(map__20694);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20694__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20695 = p__20689;
var map__20695__$1 = cljs.core.__destructure_map(map__20695);
var msg = map__20695__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20695__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20702,tid){
var map__20703 = p__20702;
var map__20703__$1 = cljs.core.__destructure_map(map__20703);
var svc = map__20703__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20703__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20723 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20724 = null;
var count__20725 = (0);
var i__20726 = (0);
while(true){
if((i__20726 < count__20725)){
var vec__20749 = chunk__20724.cljs$core$IIndexed$_nth$arity$2(null,i__20726);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20749,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20880 = seq__20723;
var G__20881 = chunk__20724;
var G__20882 = count__20725;
var G__20883 = (i__20726 + (1));
seq__20723 = G__20880;
chunk__20724 = G__20881;
count__20725 = G__20882;
i__20726 = G__20883;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20723);
if(temp__5804__auto__){
var seq__20723__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20723__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20723__$1);
var G__20884 = cljs.core.chunk_rest(seq__20723__$1);
var G__20885 = c__5568__auto__;
var G__20886 = cljs.core.count(c__5568__auto__);
var G__20887 = (0);
seq__20723 = G__20884;
chunk__20724 = G__20885;
count__20725 = G__20886;
i__20726 = G__20887;
continue;
} else {
var vec__20858 = cljs.core.first(seq__20723__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20858,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20858,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20888 = cljs.core.next(seq__20723__$1);
var G__20889 = null;
var G__20890 = (0);
var G__20891 = (0);
seq__20723 = G__20888;
chunk__20724 = G__20889;
count__20725 = G__20890;
i__20726 = G__20891;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20707_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20707_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20708_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20708_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20709_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20709_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20710_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20710_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20865){
var map__20866 = p__20865;
var map__20866__$1 = cljs.core.__destructure_map(map__20866);
var svc = map__20866__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20866__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20866__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
