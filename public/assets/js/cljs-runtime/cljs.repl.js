goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19323){
var map__19324 = p__19323;
var map__19324__$1 = cljs.core.__destructure_map(map__19324);
var m = map__19324__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19324__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19324__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19325_20031 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19326_20032 = null;
var count__19327_20033 = (0);
var i__19328_20034 = (0);
while(true){
if((i__19328_20034 < count__19327_20033)){
var f_20035 = chunk__19326_20032.cljs$core$IIndexed$_nth$arity$2(null,i__19328_20034);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20035], 0));


var G__20036 = seq__19325_20031;
var G__20037 = chunk__19326_20032;
var G__20038 = count__19327_20033;
var G__20039 = (i__19328_20034 + (1));
seq__19325_20031 = G__20036;
chunk__19326_20032 = G__20037;
count__19327_20033 = G__20038;
i__19328_20034 = G__20039;
continue;
} else {
var temp__5804__auto___20040 = cljs.core.seq(seq__19325_20031);
if(temp__5804__auto___20040){
var seq__19325_20041__$1 = temp__5804__auto___20040;
if(cljs.core.chunked_seq_QMARK_(seq__19325_20041__$1)){
var c__5568__auto___20042 = cljs.core.chunk_first(seq__19325_20041__$1);
var G__20043 = cljs.core.chunk_rest(seq__19325_20041__$1);
var G__20044 = c__5568__auto___20042;
var G__20045 = cljs.core.count(c__5568__auto___20042);
var G__20046 = (0);
seq__19325_20031 = G__20043;
chunk__19326_20032 = G__20044;
count__19327_20033 = G__20045;
i__19328_20034 = G__20046;
continue;
} else {
var f_20047 = cljs.core.first(seq__19325_20041__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20047], 0));


var G__20048 = cljs.core.next(seq__19325_20041__$1);
var G__20049 = null;
var G__20050 = (0);
var G__20051 = (0);
seq__19325_20031 = G__20048;
chunk__19326_20032 = G__20049;
count__19327_20033 = G__20050;
i__19328_20034 = G__20051;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20052 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20052], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20052)))?cljs.core.second(arglists_20052):arglists_20052)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19435_20053 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19436_20054 = null;
var count__19437_20055 = (0);
var i__19438_20056 = (0);
while(true){
if((i__19438_20056 < count__19437_20055)){
var vec__19541_20057 = chunk__19436_20054.cljs$core$IIndexed$_nth$arity$2(null,i__19438_20056);
var name_20058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19541_20057,(0),null);
var map__19544_20059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19541_20057,(1),null);
var map__19544_20060__$1 = cljs.core.__destructure_map(map__19544_20059);
var doc_20061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544_20060__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544_20060__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20058], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20062], 0));

if(cljs.core.truth_(doc_20061)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20061], 0));
} else {
}


var G__20063 = seq__19435_20053;
var G__20064 = chunk__19436_20054;
var G__20065 = count__19437_20055;
var G__20066 = (i__19438_20056 + (1));
seq__19435_20053 = G__20063;
chunk__19436_20054 = G__20064;
count__19437_20055 = G__20065;
i__19438_20056 = G__20066;
continue;
} else {
var temp__5804__auto___20067 = cljs.core.seq(seq__19435_20053);
if(temp__5804__auto___20067){
var seq__19435_20068__$1 = temp__5804__auto___20067;
if(cljs.core.chunked_seq_QMARK_(seq__19435_20068__$1)){
var c__5568__auto___20069 = cljs.core.chunk_first(seq__19435_20068__$1);
var G__20070 = cljs.core.chunk_rest(seq__19435_20068__$1);
var G__20071 = c__5568__auto___20069;
var G__20072 = cljs.core.count(c__5568__auto___20069);
var G__20073 = (0);
seq__19435_20053 = G__20070;
chunk__19436_20054 = G__20071;
count__19437_20055 = G__20072;
i__19438_20056 = G__20073;
continue;
} else {
var vec__19548_20075 = cljs.core.first(seq__19435_20068__$1);
var name_20076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19548_20075,(0),null);
var map__19551_20077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19548_20075,(1),null);
var map__19551_20078__$1 = cljs.core.__destructure_map(map__19551_20077);
var doc_20079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19551_20078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19551_20078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20076], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20080], 0));

if(cljs.core.truth_(doc_20079)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20079], 0));
} else {
}


var G__20083 = cljs.core.next(seq__19435_20068__$1);
var G__20084 = null;
var G__20085 = (0);
var G__20086 = (0);
seq__19435_20053 = G__20083;
chunk__19436_20054 = G__20084;
count__19437_20055 = G__20085;
i__19438_20056 = G__20086;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19558 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19559 = null;
var count__19560 = (0);
var i__19561 = (0);
while(true){
if((i__19561 < count__19560)){
var role = chunk__19559.cljs$core$IIndexed$_nth$arity$2(null,i__19561);
var temp__5804__auto___20087__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20087__$1)){
var spec_20088 = temp__5804__auto___20087__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20088)], 0));
} else {
}


var G__20089 = seq__19558;
var G__20090 = chunk__19559;
var G__20091 = count__19560;
var G__20092 = (i__19561 + (1));
seq__19558 = G__20089;
chunk__19559 = G__20090;
count__19560 = G__20091;
i__19561 = G__20092;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19558);
if(temp__5804__auto____$1){
var seq__19558__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19558__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19558__$1);
var G__20093 = cljs.core.chunk_rest(seq__19558__$1);
var G__20094 = c__5568__auto__;
var G__20095 = cljs.core.count(c__5568__auto__);
var G__20096 = (0);
seq__19558 = G__20093;
chunk__19559 = G__20094;
count__19560 = G__20095;
i__19561 = G__20096;
continue;
} else {
var role = cljs.core.first(seq__19558__$1);
var temp__5804__auto___20097__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20097__$2)){
var spec_20098 = temp__5804__auto___20097__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20098)], 0));
} else {
}


var G__20099 = cljs.core.next(seq__19558__$1);
var G__20100 = null;
var G__20101 = (0);
var G__20102 = (0);
seq__19558 = G__20099;
chunk__19559 = G__20100;
count__19560 = G__20101;
i__19561 = G__20102;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20103 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20104 = cljs.core.ex_cause(t);
via = G__20103;
t = G__20104;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19852 = datafied_throwable;
var map__19852__$1 = cljs.core.__destructure_map(map__19852);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19852__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19853 = cljs.core.last(via);
var map__19853__$1 = cljs.core.__destructure_map(map__19853);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19854 = data;
var map__19854__$1 = cljs.core.__destructure_map(map__19854);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19854__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19854__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19854__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19855 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19855__$1 = cljs.core.__destructure_map(map__19855);
var top_data = map__19855__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19855__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19860 = phase;
var G__19860__$1 = (((G__19860 instanceof cljs.core.Keyword))?G__19860.fqn:null);
switch (G__19860__$1) {
case "read-source":
var map__19864 = data;
var map__19864__$1 = cljs.core.__destructure_map(map__19864);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19864__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19865 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19865__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19865,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19865);
var G__19865__$2 = (cljs.core.truth_((function (){var fexpr__19866 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19866.cljs$core$IFn$_invoke$arity$1 ? fexpr__19866.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19866.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19865__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19865__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19865__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19867 = top_data;
var G__19867__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19867);
var G__19867__$2 = (cljs.core.truth_((function (){var fexpr__19871 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19871.cljs$core$IFn$_invoke$arity$1 ? fexpr__19871.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19871.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19867__$1);
var G__19867__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19867__$2);
var G__19867__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19867__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19867__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19893 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19893,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19893,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19893,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19893,(3),null);
var G__19896 = top_data;
var G__19896__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19896,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19896);
var G__19896__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19896__$1);
var G__19896__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19896__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19896__$2);
var G__19896__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19896__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19896__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19896__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19896__$4;
}

break;
case "execution":
var vec__19897 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19897,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19844_SHARP_){
var or__5045__auto__ = (p1__19844_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19902 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19902.cljs$core$IFn$_invoke$arity$1 ? fexpr__19902.cljs$core$IFn$_invoke$arity$1(p1__19844_SHARP_) : fexpr__19902.call(null,p1__19844_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19905 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19905__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19905,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19905);
var G__19905__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19905__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19905__$1);
var G__19905__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19905__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19905__$2);
var G__19905__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19905__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19905__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19905__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19905__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19860__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19913){
var map__19914 = p__19913;
var map__19914__$1 = cljs.core.__destructure_map(map__19914);
var triage_data = map__19914__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19914__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19940 = phase;
var G__19940__$1 = (((G__19940 instanceof cljs.core.Keyword))?G__19940.fqn:null);
switch (G__19940__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19944 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19945 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19946 = loc;
var G__19947 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19948_20136 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19949_20137 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19950_20138 = true;
var _STAR_print_fn_STAR__temp_val__19951_20139 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19950_20138);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19951_20139);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19909_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19909_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19949_20137);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19948_20136);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19944,G__19945,G__19946,G__19947) : format.call(null,G__19944,G__19945,G__19946,G__19947));

break;
case "macroexpansion":
var G__19967 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19968 = cause_type;
var G__19969 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19970 = loc;
var G__19971 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19967,G__19968,G__19969,G__19970,G__19971) : format.call(null,G__19967,G__19968,G__19969,G__19970,G__19971));

break;
case "compile-syntax-check":
var G__19972 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19973 = cause_type;
var G__19974 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19975 = loc;
var G__19976 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19972,G__19973,G__19974,G__19975,G__19976) : format.call(null,G__19972,G__19973,G__19974,G__19975,G__19976));

break;
case "compilation":
var G__19977 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19978 = cause_type;
var G__19979 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19980 = loc;
var G__19981 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19977,G__19978,G__19979,G__19980,G__19981) : format.call(null,G__19977,G__19978,G__19979,G__19980,G__19981));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19982 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19983 = symbol;
var G__19984 = loc;
var G__19985 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19993_20140 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19994_20141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19995_20142 = true;
var _STAR_print_fn_STAR__temp_val__19996_20143 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19995_20142);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19996_20143);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19912_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19912_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19994_20141);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19993_20140);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19982,G__19983,G__19984,G__19985) : format.call(null,G__19982,G__19983,G__19984,G__19985));
} else {
var G__20000 = "Execution error%s at %s(%s).\n%s\n";
var G__20001 = cause_type;
var G__20002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20003 = loc;
var G__20004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20000,G__20001,G__20002,G__20003,G__20004) : format.call(null,G__20000,G__20001,G__20002,G__20003,G__20004));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19940__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
