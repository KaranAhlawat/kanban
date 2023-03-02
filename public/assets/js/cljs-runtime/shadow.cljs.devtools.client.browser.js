goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21765 = arguments.length;
var i__5770__auto___21766 = (0);
while(true){
if((i__5770__auto___21766 < len__5769__auto___21765)){
args__5775__auto__.push((arguments[i__5770__auto___21766]));

var G__21767 = (i__5770__auto___21766 + (1));
i__5770__auto___21766 = G__21767;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21478){
var G__21479 = cljs.core.first(seq21478);
var seq21478__$1 = cljs.core.next(seq21478);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21479,seq21478__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21485 = cljs.core.seq(sources);
var chunk__21486 = null;
var count__21487 = (0);
var i__21488 = (0);
while(true){
if((i__21488 < count__21487)){
var map__21493 = chunk__21486.cljs$core$IIndexed$_nth$arity$2(null,i__21488);
var map__21493__$1 = cljs.core.__destructure_map(map__21493);
var src = map__21493__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21496){var e_21768 = e21496;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21768);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21768.message)].join('')));
}

var G__21769 = seq__21485;
var G__21770 = chunk__21486;
var G__21771 = count__21487;
var G__21772 = (i__21488 + (1));
seq__21485 = G__21769;
chunk__21486 = G__21770;
count__21487 = G__21771;
i__21488 = G__21772;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21485);
if(temp__5804__auto__){
var seq__21485__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21485__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21485__$1);
var G__21773 = cljs.core.chunk_rest(seq__21485__$1);
var G__21774 = c__5568__auto__;
var G__21775 = cljs.core.count(c__5568__auto__);
var G__21776 = (0);
seq__21485 = G__21773;
chunk__21486 = G__21774;
count__21487 = G__21775;
i__21488 = G__21776;
continue;
} else {
var map__21497 = cljs.core.first(seq__21485__$1);
var map__21497__$1 = cljs.core.__destructure_map(map__21497);
var src = map__21497__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21498){var e_21777 = e21498;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21777);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21777.message)].join('')));
}

var G__21778 = cljs.core.next(seq__21485__$1);
var G__21779 = null;
var G__21780 = (0);
var G__21781 = (0);
seq__21485 = G__21778;
chunk__21486 = G__21779;
count__21487 = G__21780;
i__21488 = G__21781;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21499 = cljs.core.seq(js_requires);
var chunk__21500 = null;
var count__21501 = (0);
var i__21502 = (0);
while(true){
if((i__21502 < count__21501)){
var js_ns = chunk__21500.cljs$core$IIndexed$_nth$arity$2(null,i__21502);
var require_str_21782 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21782);


var G__21783 = seq__21499;
var G__21784 = chunk__21500;
var G__21785 = count__21501;
var G__21786 = (i__21502 + (1));
seq__21499 = G__21783;
chunk__21500 = G__21784;
count__21501 = G__21785;
i__21502 = G__21786;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21499);
if(temp__5804__auto__){
var seq__21499__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21499__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21499__$1);
var G__21787 = cljs.core.chunk_rest(seq__21499__$1);
var G__21788 = c__5568__auto__;
var G__21789 = cljs.core.count(c__5568__auto__);
var G__21790 = (0);
seq__21499 = G__21787;
chunk__21500 = G__21788;
count__21501 = G__21789;
i__21502 = G__21790;
continue;
} else {
var js_ns = cljs.core.first(seq__21499__$1);
var require_str_21791 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21791);


var G__21792 = cljs.core.next(seq__21499__$1);
var G__21793 = null;
var G__21794 = (0);
var G__21795 = (0);
seq__21499 = G__21792;
chunk__21500 = G__21793;
count__21501 = G__21794;
i__21502 = G__21795;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21504){
var map__21505 = p__21504;
var map__21505__$1 = cljs.core.__destructure_map(map__21505);
var msg = map__21505__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21505__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21505__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21506(s__21507){
return (new cljs.core.LazySeq(null,(function (){
var s__21507__$1 = s__21507;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21507__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21512 = cljs.core.first(xs__6360__auto__);
var map__21512__$1 = cljs.core.__destructure_map(map__21512);
var src = map__21512__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21512__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21512__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21507__$1,map__21512,map__21512__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21505,map__21505__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21506_$_iter__21508(s__21509){
return (new cljs.core.LazySeq(null,((function (s__21507__$1,map__21512,map__21512__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21505,map__21505__$1,msg,info,reload_info){
return (function (){
var s__21509__$1 = s__21509;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21509__$1);
if(temp__5804__auto____$1){
var s__21509__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21509__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21509__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21511 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21510 = (0);
while(true){
if((i__21510 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21510);
cljs.core.chunk_append(b__21511,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21796 = (i__21510 + (1));
i__21510 = G__21796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21511),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21506_$_iter__21508(cljs.core.chunk_rest(s__21509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21511),null);
}
} else {
var warning = cljs.core.first(s__21509__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21506_$_iter__21508(cljs.core.rest(s__21509__$2)));
}
} else {
return null;
}
break;
}
});})(s__21507__$1,map__21512,map__21512__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21505,map__21505__$1,msg,info,reload_info))
,null,null));
});})(s__21507__$1,map__21512,map__21512__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21505,map__21505__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21506(cljs.core.rest(s__21507__$1)));
} else {
var G__21797 = cljs.core.rest(s__21507__$1);
s__21507__$1 = G__21797;
continue;
}
} else {
var G__21798 = cljs.core.rest(s__21507__$1);
s__21507__$1 = G__21798;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21513_21799 = cljs.core.seq(warnings);
var chunk__21514_21800 = null;
var count__21515_21801 = (0);
var i__21516_21802 = (0);
while(true){
if((i__21516_21802 < count__21515_21801)){
var map__21519_21803 = chunk__21514_21800.cljs$core$IIndexed$_nth$arity$2(null,i__21516_21802);
var map__21519_21804__$1 = cljs.core.__destructure_map(map__21519_21803);
var w_21805 = map__21519_21804__$1;
var msg_21806__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519_21804__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519_21804__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519_21804__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21519_21804__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21809)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21807),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21808),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21806__$1)].join(''));


var G__21810 = seq__21513_21799;
var G__21811 = chunk__21514_21800;
var G__21812 = count__21515_21801;
var G__21813 = (i__21516_21802 + (1));
seq__21513_21799 = G__21810;
chunk__21514_21800 = G__21811;
count__21515_21801 = G__21812;
i__21516_21802 = G__21813;
continue;
} else {
var temp__5804__auto___21814 = cljs.core.seq(seq__21513_21799);
if(temp__5804__auto___21814){
var seq__21513_21815__$1 = temp__5804__auto___21814;
if(cljs.core.chunked_seq_QMARK_(seq__21513_21815__$1)){
var c__5568__auto___21816 = cljs.core.chunk_first(seq__21513_21815__$1);
var G__21817 = cljs.core.chunk_rest(seq__21513_21815__$1);
var G__21818 = c__5568__auto___21816;
var G__21819 = cljs.core.count(c__5568__auto___21816);
var G__21820 = (0);
seq__21513_21799 = G__21817;
chunk__21514_21800 = G__21818;
count__21515_21801 = G__21819;
i__21516_21802 = G__21820;
continue;
} else {
var map__21520_21821 = cljs.core.first(seq__21513_21815__$1);
var map__21520_21822__$1 = cljs.core.__destructure_map(map__21520_21821);
var w_21823 = map__21520_21822__$1;
var msg_21824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520_21822__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520_21822__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520_21822__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520_21822__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21827)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21825),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21826),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21824__$1)].join(''));


var G__21828 = cljs.core.next(seq__21513_21815__$1);
var G__21829 = null;
var G__21830 = (0);
var G__21831 = (0);
seq__21513_21799 = G__21828;
chunk__21514_21800 = G__21829;
count__21515_21801 = G__21830;
i__21516_21802 = G__21831;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21503_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21503_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21521){
var map__21522 = p__21521;
var map__21522__$1 = cljs.core.__destructure_map(map__21522);
var msg = map__21522__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21522__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21522__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21523 = cljs.core.seq(updates);
var chunk__21525 = null;
var count__21526 = (0);
var i__21527 = (0);
while(true){
if((i__21527 < count__21526)){
var path = chunk__21525.cljs$core$IIndexed$_nth$arity$2(null,i__21527);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21637_21832 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21641_21833 = null;
var count__21642_21834 = (0);
var i__21643_21835 = (0);
while(true){
if((i__21643_21835 < count__21642_21834)){
var node_21836 = chunk__21641_21833.cljs$core$IIndexed$_nth$arity$2(null,i__21643_21835);
if(cljs.core.not(node_21836.shadow$old)){
var path_match_21837 = shadow.cljs.devtools.client.browser.match_paths(node_21836.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21837)){
var new_link_21838 = (function (){var G__21669 = node_21836.cloneNode(true);
G__21669.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21837),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21669;
})();
(node_21836.shadow$old = true);

(new_link_21838.onload = ((function (seq__21637_21832,chunk__21641_21833,count__21642_21834,i__21643_21835,seq__21523,chunk__21525,count__21526,i__21527,new_link_21838,path_match_21837,node_21836,path,map__21522,map__21522__$1,msg,updates,reload_info){
return (function (e){
var seq__21670_21839 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21672_21840 = null;
var count__21673_21841 = (0);
var i__21674_21842 = (0);
while(true){
if((i__21674_21842 < count__21673_21841)){
var map__21678_21843 = chunk__21672_21840.cljs$core$IIndexed$_nth$arity$2(null,i__21674_21842);
var map__21678_21844__$1 = cljs.core.__destructure_map(map__21678_21843);
var task_21845 = map__21678_21844__$1;
var fn_str_21846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678_21844__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678_21844__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21848 = goog.getObjectByName(fn_str_21846,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21847)].join(''));

(fn_obj_21848.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21848.cljs$core$IFn$_invoke$arity$2(path,new_link_21838) : fn_obj_21848.call(null,path,new_link_21838));


var G__21849 = seq__21670_21839;
var G__21850 = chunk__21672_21840;
var G__21851 = count__21673_21841;
var G__21852 = (i__21674_21842 + (1));
seq__21670_21839 = G__21849;
chunk__21672_21840 = G__21850;
count__21673_21841 = G__21851;
i__21674_21842 = G__21852;
continue;
} else {
var temp__5804__auto___21853 = cljs.core.seq(seq__21670_21839);
if(temp__5804__auto___21853){
var seq__21670_21854__$1 = temp__5804__auto___21853;
if(cljs.core.chunked_seq_QMARK_(seq__21670_21854__$1)){
var c__5568__auto___21855 = cljs.core.chunk_first(seq__21670_21854__$1);
var G__21856 = cljs.core.chunk_rest(seq__21670_21854__$1);
var G__21857 = c__5568__auto___21855;
var G__21858 = cljs.core.count(c__5568__auto___21855);
var G__21859 = (0);
seq__21670_21839 = G__21856;
chunk__21672_21840 = G__21857;
count__21673_21841 = G__21858;
i__21674_21842 = G__21859;
continue;
} else {
var map__21679_21860 = cljs.core.first(seq__21670_21854__$1);
var map__21679_21861__$1 = cljs.core.__destructure_map(map__21679_21860);
var task_21862 = map__21679_21861__$1;
var fn_str_21863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21679_21861__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21679_21861__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21865 = goog.getObjectByName(fn_str_21863,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21864)].join(''));

(fn_obj_21865.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21865.cljs$core$IFn$_invoke$arity$2(path,new_link_21838) : fn_obj_21865.call(null,path,new_link_21838));


var G__21866 = cljs.core.next(seq__21670_21854__$1);
var G__21867 = null;
var G__21868 = (0);
var G__21869 = (0);
seq__21670_21839 = G__21866;
chunk__21672_21840 = G__21867;
count__21673_21841 = G__21868;
i__21674_21842 = G__21869;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21836);
});})(seq__21637_21832,chunk__21641_21833,count__21642_21834,i__21643_21835,seq__21523,chunk__21525,count__21526,i__21527,new_link_21838,path_match_21837,node_21836,path,map__21522,map__21522__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21837], 0));

goog.dom.insertSiblingAfter(new_link_21838,node_21836);


var G__21870 = seq__21637_21832;
var G__21871 = chunk__21641_21833;
var G__21872 = count__21642_21834;
var G__21873 = (i__21643_21835 + (1));
seq__21637_21832 = G__21870;
chunk__21641_21833 = G__21871;
count__21642_21834 = G__21872;
i__21643_21835 = G__21873;
continue;
} else {
var G__21874 = seq__21637_21832;
var G__21875 = chunk__21641_21833;
var G__21876 = count__21642_21834;
var G__21877 = (i__21643_21835 + (1));
seq__21637_21832 = G__21874;
chunk__21641_21833 = G__21875;
count__21642_21834 = G__21876;
i__21643_21835 = G__21877;
continue;
}
} else {
var G__21878 = seq__21637_21832;
var G__21879 = chunk__21641_21833;
var G__21880 = count__21642_21834;
var G__21881 = (i__21643_21835 + (1));
seq__21637_21832 = G__21878;
chunk__21641_21833 = G__21879;
count__21642_21834 = G__21880;
i__21643_21835 = G__21881;
continue;
}
} else {
var temp__5804__auto___21882 = cljs.core.seq(seq__21637_21832);
if(temp__5804__auto___21882){
var seq__21637_21883__$1 = temp__5804__auto___21882;
if(cljs.core.chunked_seq_QMARK_(seq__21637_21883__$1)){
var c__5568__auto___21884 = cljs.core.chunk_first(seq__21637_21883__$1);
var G__21885 = cljs.core.chunk_rest(seq__21637_21883__$1);
var G__21886 = c__5568__auto___21884;
var G__21887 = cljs.core.count(c__5568__auto___21884);
var G__21888 = (0);
seq__21637_21832 = G__21885;
chunk__21641_21833 = G__21886;
count__21642_21834 = G__21887;
i__21643_21835 = G__21888;
continue;
} else {
var node_21889 = cljs.core.first(seq__21637_21883__$1);
if(cljs.core.not(node_21889.shadow$old)){
var path_match_21890 = shadow.cljs.devtools.client.browser.match_paths(node_21889.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21890)){
var new_link_21891 = (function (){var G__21680 = node_21889.cloneNode(true);
G__21680.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21890),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21680;
})();
(node_21889.shadow$old = true);

(new_link_21891.onload = ((function (seq__21637_21832,chunk__21641_21833,count__21642_21834,i__21643_21835,seq__21523,chunk__21525,count__21526,i__21527,new_link_21891,path_match_21890,node_21889,seq__21637_21883__$1,temp__5804__auto___21882,path,map__21522,map__21522__$1,msg,updates,reload_info){
return (function (e){
var seq__21681_21892 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21683_21893 = null;
var count__21684_21894 = (0);
var i__21685_21895 = (0);
while(true){
if((i__21685_21895 < count__21684_21894)){
var map__21689_21896 = chunk__21683_21893.cljs$core$IIndexed$_nth$arity$2(null,i__21685_21895);
var map__21689_21897__$1 = cljs.core.__destructure_map(map__21689_21896);
var task_21898 = map__21689_21897__$1;
var fn_str_21899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689_21897__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689_21897__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21901 = goog.getObjectByName(fn_str_21899,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21900)].join(''));

(fn_obj_21901.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21901.cljs$core$IFn$_invoke$arity$2(path,new_link_21891) : fn_obj_21901.call(null,path,new_link_21891));


var G__21902 = seq__21681_21892;
var G__21903 = chunk__21683_21893;
var G__21904 = count__21684_21894;
var G__21905 = (i__21685_21895 + (1));
seq__21681_21892 = G__21902;
chunk__21683_21893 = G__21903;
count__21684_21894 = G__21904;
i__21685_21895 = G__21905;
continue;
} else {
var temp__5804__auto___21906__$1 = cljs.core.seq(seq__21681_21892);
if(temp__5804__auto___21906__$1){
var seq__21681_21907__$1 = temp__5804__auto___21906__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21681_21907__$1)){
var c__5568__auto___21908 = cljs.core.chunk_first(seq__21681_21907__$1);
var G__21909 = cljs.core.chunk_rest(seq__21681_21907__$1);
var G__21910 = c__5568__auto___21908;
var G__21911 = cljs.core.count(c__5568__auto___21908);
var G__21912 = (0);
seq__21681_21892 = G__21909;
chunk__21683_21893 = G__21910;
count__21684_21894 = G__21911;
i__21685_21895 = G__21912;
continue;
} else {
var map__21690_21913 = cljs.core.first(seq__21681_21907__$1);
var map__21690_21914__$1 = cljs.core.__destructure_map(map__21690_21913);
var task_21915 = map__21690_21914__$1;
var fn_str_21916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21690_21914__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21690_21914__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21918 = goog.getObjectByName(fn_str_21916,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21917)].join(''));

(fn_obj_21918.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21918.cljs$core$IFn$_invoke$arity$2(path,new_link_21891) : fn_obj_21918.call(null,path,new_link_21891));


var G__21919 = cljs.core.next(seq__21681_21907__$1);
var G__21920 = null;
var G__21921 = (0);
var G__21922 = (0);
seq__21681_21892 = G__21919;
chunk__21683_21893 = G__21920;
count__21684_21894 = G__21921;
i__21685_21895 = G__21922;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21889);
});})(seq__21637_21832,chunk__21641_21833,count__21642_21834,i__21643_21835,seq__21523,chunk__21525,count__21526,i__21527,new_link_21891,path_match_21890,node_21889,seq__21637_21883__$1,temp__5804__auto___21882,path,map__21522,map__21522__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21890], 0));

goog.dom.insertSiblingAfter(new_link_21891,node_21889);


var G__21923 = cljs.core.next(seq__21637_21883__$1);
var G__21924 = null;
var G__21925 = (0);
var G__21926 = (0);
seq__21637_21832 = G__21923;
chunk__21641_21833 = G__21924;
count__21642_21834 = G__21925;
i__21643_21835 = G__21926;
continue;
} else {
var G__21927 = cljs.core.next(seq__21637_21883__$1);
var G__21928 = null;
var G__21929 = (0);
var G__21930 = (0);
seq__21637_21832 = G__21927;
chunk__21641_21833 = G__21928;
count__21642_21834 = G__21929;
i__21643_21835 = G__21930;
continue;
}
} else {
var G__21931 = cljs.core.next(seq__21637_21883__$1);
var G__21932 = null;
var G__21933 = (0);
var G__21934 = (0);
seq__21637_21832 = G__21931;
chunk__21641_21833 = G__21932;
count__21642_21834 = G__21933;
i__21643_21835 = G__21934;
continue;
}
}
} else {
}
}
break;
}


var G__21935 = seq__21523;
var G__21936 = chunk__21525;
var G__21937 = count__21526;
var G__21938 = (i__21527 + (1));
seq__21523 = G__21935;
chunk__21525 = G__21936;
count__21526 = G__21937;
i__21527 = G__21938;
continue;
} else {
var G__21939 = seq__21523;
var G__21940 = chunk__21525;
var G__21941 = count__21526;
var G__21942 = (i__21527 + (1));
seq__21523 = G__21939;
chunk__21525 = G__21940;
count__21526 = G__21941;
i__21527 = G__21942;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21523);
if(temp__5804__auto__){
var seq__21523__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21523__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21523__$1);
var G__21943 = cljs.core.chunk_rest(seq__21523__$1);
var G__21944 = c__5568__auto__;
var G__21945 = cljs.core.count(c__5568__auto__);
var G__21946 = (0);
seq__21523 = G__21943;
chunk__21525 = G__21944;
count__21526 = G__21945;
i__21527 = G__21946;
continue;
} else {
var path = cljs.core.first(seq__21523__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21691_21947 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21695_21948 = null;
var count__21696_21949 = (0);
var i__21697_21950 = (0);
while(true){
if((i__21697_21950 < count__21696_21949)){
var node_21951 = chunk__21695_21948.cljs$core$IIndexed$_nth$arity$2(null,i__21697_21950);
if(cljs.core.not(node_21951.shadow$old)){
var path_match_21952 = shadow.cljs.devtools.client.browser.match_paths(node_21951.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21952)){
var new_link_21953 = (function (){var G__21723 = node_21951.cloneNode(true);
G__21723.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21952),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21723;
})();
(node_21951.shadow$old = true);

(new_link_21953.onload = ((function (seq__21691_21947,chunk__21695_21948,count__21696_21949,i__21697_21950,seq__21523,chunk__21525,count__21526,i__21527,new_link_21953,path_match_21952,node_21951,path,seq__21523__$1,temp__5804__auto__,map__21522,map__21522__$1,msg,updates,reload_info){
return (function (e){
var seq__21724_21954 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21726_21955 = null;
var count__21727_21956 = (0);
var i__21728_21957 = (0);
while(true){
if((i__21728_21957 < count__21727_21956)){
var map__21732_21958 = chunk__21726_21955.cljs$core$IIndexed$_nth$arity$2(null,i__21728_21957);
var map__21732_21959__$1 = cljs.core.__destructure_map(map__21732_21958);
var task_21960 = map__21732_21959__$1;
var fn_str_21961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732_21959__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21732_21959__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21963 = goog.getObjectByName(fn_str_21961,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21962)].join(''));

(fn_obj_21963.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21963.cljs$core$IFn$_invoke$arity$2(path,new_link_21953) : fn_obj_21963.call(null,path,new_link_21953));


var G__21964 = seq__21724_21954;
var G__21965 = chunk__21726_21955;
var G__21966 = count__21727_21956;
var G__21967 = (i__21728_21957 + (1));
seq__21724_21954 = G__21964;
chunk__21726_21955 = G__21965;
count__21727_21956 = G__21966;
i__21728_21957 = G__21967;
continue;
} else {
var temp__5804__auto___21968__$1 = cljs.core.seq(seq__21724_21954);
if(temp__5804__auto___21968__$1){
var seq__21724_21969__$1 = temp__5804__auto___21968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21724_21969__$1)){
var c__5568__auto___21970 = cljs.core.chunk_first(seq__21724_21969__$1);
var G__21971 = cljs.core.chunk_rest(seq__21724_21969__$1);
var G__21972 = c__5568__auto___21970;
var G__21973 = cljs.core.count(c__5568__auto___21970);
var G__21974 = (0);
seq__21724_21954 = G__21971;
chunk__21726_21955 = G__21972;
count__21727_21956 = G__21973;
i__21728_21957 = G__21974;
continue;
} else {
var map__21733_21975 = cljs.core.first(seq__21724_21969__$1);
var map__21733_21976__$1 = cljs.core.__destructure_map(map__21733_21975);
var task_21977 = map__21733_21976__$1;
var fn_str_21978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733_21976__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21733_21976__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21980 = goog.getObjectByName(fn_str_21978,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21979)].join(''));

(fn_obj_21980.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21980.cljs$core$IFn$_invoke$arity$2(path,new_link_21953) : fn_obj_21980.call(null,path,new_link_21953));


var G__21981 = cljs.core.next(seq__21724_21969__$1);
var G__21982 = null;
var G__21983 = (0);
var G__21984 = (0);
seq__21724_21954 = G__21981;
chunk__21726_21955 = G__21982;
count__21727_21956 = G__21983;
i__21728_21957 = G__21984;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21951);
});})(seq__21691_21947,chunk__21695_21948,count__21696_21949,i__21697_21950,seq__21523,chunk__21525,count__21526,i__21527,new_link_21953,path_match_21952,node_21951,path,seq__21523__$1,temp__5804__auto__,map__21522,map__21522__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21952], 0));

goog.dom.insertSiblingAfter(new_link_21953,node_21951);


var G__21985 = seq__21691_21947;
var G__21986 = chunk__21695_21948;
var G__21987 = count__21696_21949;
var G__21988 = (i__21697_21950 + (1));
seq__21691_21947 = G__21985;
chunk__21695_21948 = G__21986;
count__21696_21949 = G__21987;
i__21697_21950 = G__21988;
continue;
} else {
var G__21989 = seq__21691_21947;
var G__21990 = chunk__21695_21948;
var G__21991 = count__21696_21949;
var G__21992 = (i__21697_21950 + (1));
seq__21691_21947 = G__21989;
chunk__21695_21948 = G__21990;
count__21696_21949 = G__21991;
i__21697_21950 = G__21992;
continue;
}
} else {
var G__21993 = seq__21691_21947;
var G__21994 = chunk__21695_21948;
var G__21995 = count__21696_21949;
var G__21996 = (i__21697_21950 + (1));
seq__21691_21947 = G__21993;
chunk__21695_21948 = G__21994;
count__21696_21949 = G__21995;
i__21697_21950 = G__21996;
continue;
}
} else {
var temp__5804__auto___21997__$1 = cljs.core.seq(seq__21691_21947);
if(temp__5804__auto___21997__$1){
var seq__21691_21998__$1 = temp__5804__auto___21997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21691_21998__$1)){
var c__5568__auto___21999 = cljs.core.chunk_first(seq__21691_21998__$1);
var G__22000 = cljs.core.chunk_rest(seq__21691_21998__$1);
var G__22001 = c__5568__auto___21999;
var G__22002 = cljs.core.count(c__5568__auto___21999);
var G__22003 = (0);
seq__21691_21947 = G__22000;
chunk__21695_21948 = G__22001;
count__21696_21949 = G__22002;
i__21697_21950 = G__22003;
continue;
} else {
var node_22004 = cljs.core.first(seq__21691_21998__$1);
if(cljs.core.not(node_22004.shadow$old)){
var path_match_22005 = shadow.cljs.devtools.client.browser.match_paths(node_22004.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22005)){
var new_link_22006 = (function (){var G__21734 = node_22004.cloneNode(true);
G__21734.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22005),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21734;
})();
(node_22004.shadow$old = true);

(new_link_22006.onload = ((function (seq__21691_21947,chunk__21695_21948,count__21696_21949,i__21697_21950,seq__21523,chunk__21525,count__21526,i__21527,new_link_22006,path_match_22005,node_22004,seq__21691_21998__$1,temp__5804__auto___21997__$1,path,seq__21523__$1,temp__5804__auto__,map__21522,map__21522__$1,msg,updates,reload_info){
return (function (e){
var seq__21735_22007 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21737_22008 = null;
var count__21738_22009 = (0);
var i__21739_22010 = (0);
while(true){
if((i__21739_22010 < count__21738_22009)){
var map__21743_22011 = chunk__21737_22008.cljs$core$IIndexed$_nth$arity$2(null,i__21739_22010);
var map__21743_22012__$1 = cljs.core.__destructure_map(map__21743_22011);
var task_22013 = map__21743_22012__$1;
var fn_str_22014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743_22012__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21743_22012__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22016 = goog.getObjectByName(fn_str_22014,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22015)].join(''));

(fn_obj_22016.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22016.cljs$core$IFn$_invoke$arity$2(path,new_link_22006) : fn_obj_22016.call(null,path,new_link_22006));


var G__22017 = seq__21735_22007;
var G__22018 = chunk__21737_22008;
var G__22019 = count__21738_22009;
var G__22020 = (i__21739_22010 + (1));
seq__21735_22007 = G__22017;
chunk__21737_22008 = G__22018;
count__21738_22009 = G__22019;
i__21739_22010 = G__22020;
continue;
} else {
var temp__5804__auto___22021__$2 = cljs.core.seq(seq__21735_22007);
if(temp__5804__auto___22021__$2){
var seq__21735_22022__$1 = temp__5804__auto___22021__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21735_22022__$1)){
var c__5568__auto___22023 = cljs.core.chunk_first(seq__21735_22022__$1);
var G__22024 = cljs.core.chunk_rest(seq__21735_22022__$1);
var G__22025 = c__5568__auto___22023;
var G__22026 = cljs.core.count(c__5568__auto___22023);
var G__22027 = (0);
seq__21735_22007 = G__22024;
chunk__21737_22008 = G__22025;
count__21738_22009 = G__22026;
i__21739_22010 = G__22027;
continue;
} else {
var map__21744_22028 = cljs.core.first(seq__21735_22022__$1);
var map__21744_22029__$1 = cljs.core.__destructure_map(map__21744_22028);
var task_22030 = map__21744_22029__$1;
var fn_str_22031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744_22029__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21744_22029__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22033 = goog.getObjectByName(fn_str_22031,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22032)].join(''));

(fn_obj_22033.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22033.cljs$core$IFn$_invoke$arity$2(path,new_link_22006) : fn_obj_22033.call(null,path,new_link_22006));


var G__22034 = cljs.core.next(seq__21735_22022__$1);
var G__22035 = null;
var G__22036 = (0);
var G__22037 = (0);
seq__21735_22007 = G__22034;
chunk__21737_22008 = G__22035;
count__21738_22009 = G__22036;
i__21739_22010 = G__22037;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22004);
});})(seq__21691_21947,chunk__21695_21948,count__21696_21949,i__21697_21950,seq__21523,chunk__21525,count__21526,i__21527,new_link_22006,path_match_22005,node_22004,seq__21691_21998__$1,temp__5804__auto___21997__$1,path,seq__21523__$1,temp__5804__auto__,map__21522,map__21522__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22005], 0));

goog.dom.insertSiblingAfter(new_link_22006,node_22004);


var G__22038 = cljs.core.next(seq__21691_21998__$1);
var G__22039 = null;
var G__22040 = (0);
var G__22041 = (0);
seq__21691_21947 = G__22038;
chunk__21695_21948 = G__22039;
count__21696_21949 = G__22040;
i__21697_21950 = G__22041;
continue;
} else {
var G__22042 = cljs.core.next(seq__21691_21998__$1);
var G__22043 = null;
var G__22044 = (0);
var G__22045 = (0);
seq__21691_21947 = G__22042;
chunk__21695_21948 = G__22043;
count__21696_21949 = G__22044;
i__21697_21950 = G__22045;
continue;
}
} else {
var G__22046 = cljs.core.next(seq__21691_21998__$1);
var G__22047 = null;
var G__22048 = (0);
var G__22049 = (0);
seq__21691_21947 = G__22046;
chunk__21695_21948 = G__22047;
count__21696_21949 = G__22048;
i__21697_21950 = G__22049;
continue;
}
}
} else {
}
}
break;
}


var G__22050 = cljs.core.next(seq__21523__$1);
var G__22051 = null;
var G__22052 = (0);
var G__22053 = (0);
seq__21523 = G__22050;
chunk__21525 = G__22051;
count__21526 = G__22052;
i__21527 = G__22053;
continue;
} else {
var G__22054 = cljs.core.next(seq__21523__$1);
var G__22055 = null;
var G__22056 = (0);
var G__22057 = (0);
seq__21523 = G__22054;
chunk__21525 = G__22055;
count__21526 = G__22056;
i__21527 = G__22057;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21745){
var map__21746 = p__21745;
var map__21746__$1 = cljs.core.__destructure_map(map__21746);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21746__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21747){
var map__21748 = p__21747;
var map__21748__$1 = cljs.core.__destructure_map(map__21748);
var _ = map__21748__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21748__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21749,done,error){
var map__21750 = p__21749;
var map__21750__$1 = cljs.core.__destructure_map(map__21750);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21750__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21751,done,error){
var map__21752 = p__21751;
var map__21752__$1 = cljs.core.__destructure_map(map__21752);
var msg = map__21752__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21752__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21752__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21752__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21753){
var map__21754 = p__21753;
var map__21754__$1 = cljs.core.__destructure_map(map__21754);
var src = map__21754__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21755 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21755) : done.call(null,G__21755));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21756){
var map__21757 = p__21756;
var map__21757__$1 = cljs.core.__destructure_map(map__21757);
var msg__$1 = map__21757__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21757__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21758){var ex = e21758;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21759){
var map__21760 = p__21759;
var map__21760__$1 = cljs.core.__destructure_map(map__21760);
var env = map__21760__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21760__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21761){
var map__21762 = p__21761;
var map__21762__$1 = cljs.core.__destructure_map(map__21762);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21762__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21762__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21763){
var map__21764 = p__21763;
var map__21764__$1 = cljs.core.__destructure_map(map__21764);
var svc = map__21764__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
