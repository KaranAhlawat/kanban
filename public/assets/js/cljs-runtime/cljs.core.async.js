goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14492 = (function (f,blockable,meta14493){
this.f = f;
this.blockable = blockable;
this.meta14493 = meta14493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14494,meta14493__$1){
var self__ = this;
var _14494__$1 = this;
return (new cljs.core.async.t_cljs$core$async14492(self__.f,self__.blockable,meta14493__$1));
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14494){
var self__ = this;
var _14494__$1 = this;
return self__.meta14493;
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14493","meta14493",595087094,null)], null);
}));

(cljs.core.async.t_cljs$core$async14492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14492");

(cljs.core.async.t_cljs$core$async14492.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14492.
 */
cljs.core.async.__GT_t_cljs$core$async14492 = (function cljs$core$async$__GT_t_cljs$core$async14492(f,blockable,meta14493){
return (new cljs.core.async.t_cljs$core$async14492(f,blockable,meta14493));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14490 = arguments.length;
switch (G__14490) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14492(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14530 = arguments.length;
switch (G__14530) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14535 = arguments.length;
switch (G__14535) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14540 = arguments.length;
switch (G__14540) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17827 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17827) : fn1.call(null,val_17827));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17827) : fn1.call(null,val_17827));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14557 = arguments.length;
switch (G__14557) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17846 = n;
var x_17847 = (0);
while(true){
if((x_17847 < n__5636__auto___17846)){
(a[x_17847] = x_17847);

var G__17848 = (x_17847 + (1));
x_17847 = G__17848;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14576 = (function (flag,meta14577){
this.flag = flag;
this.meta14577 = meta14577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14578,meta14577__$1){
var self__ = this;
var _14578__$1 = this;
return (new cljs.core.async.t_cljs$core$async14576(self__.flag,meta14577__$1));
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14578){
var self__ = this;
var _14578__$1 = this;
return self__.meta14577;
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14577","meta14577",-1169559747,null)], null);
}));

(cljs.core.async.t_cljs$core$async14576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14576");

(cljs.core.async.t_cljs$core$async14576.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14576.
 */
cljs.core.async.__GT_t_cljs$core$async14576 = (function cljs$core$async$__GT_t_cljs$core$async14576(flag,meta14577){
return (new cljs.core.async.t_cljs$core$async14576(flag,meta14577));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14576(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14600 = (function (flag,cb,meta14601){
this.flag = flag;
this.cb = cb;
this.meta14601 = meta14601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14602,meta14601__$1){
var self__ = this;
var _14602__$1 = this;
return (new cljs.core.async.t_cljs$core$async14600(self__.flag,self__.cb,meta14601__$1));
}));

(cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14602){
var self__ = this;
var _14602__$1 = this;
return self__.meta14601;
}));

(cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14601","meta14601",2118225796,null)], null);
}));

(cljs.core.async.t_cljs$core$async14600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14600");

(cljs.core.async.t_cljs$core$async14600.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14600.
 */
cljs.core.async.__GT_t_cljs$core$async14600 = (function cljs$core$async$__GT_t_cljs$core$async14600(flag,cb,meta14601){
return (new cljs.core.async.t_cljs$core$async14600(flag,cb,meta14601));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14600(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14607_SHARP_){
var G__14614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14607_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14614) : fret.call(null,G__14614));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14608_SHARP_){
var G__14615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14608_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14615) : fret.call(null,G__14615));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17883 = (i + (1));
i = G__17883;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17890 = arguments.length;
var i__5770__auto___17891 = (0);
while(true){
if((i__5770__auto___17891 < len__5769__auto___17890)){
args__5775__auto__.push((arguments[i__5770__auto___17891]));

var G__17892 = (i__5770__auto___17891 + (1));
i__5770__auto___17891 = G__17892;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14624){
var map__14625 = p__14624;
var map__14625__$1 = cljs.core.__destructure_map(map__14625);
var opts = map__14625__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14618){
var G__14619 = cljs.core.first(seq14618);
var seq14618__$1 = cljs.core.next(seq14618);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14619,seq14618__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14643 = arguments.length;
switch (G__14643) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14394__auto___17894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_14726){
var state_val_14728 = (state_14726[(1)]);
if((state_val_14728 === (7))){
var inst_14719 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
var statearr_14743_17895 = state_14726__$1;
(statearr_14743_17895[(2)] = inst_14719);

(statearr_14743_17895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (1))){
var state_14726__$1 = state_14726;
var statearr_14748_17896 = state_14726__$1;
(statearr_14748_17896[(2)] = null);

(statearr_14748_17896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (4))){
var inst_14681 = (state_14726[(7)]);
var inst_14681__$1 = (state_14726[(2)]);
var inst_14696 = (inst_14681__$1 == null);
var state_14726__$1 = (function (){var statearr_14750 = state_14726;
(statearr_14750[(7)] = inst_14681__$1);

return statearr_14750;
})();
if(cljs.core.truth_(inst_14696)){
var statearr_14751_17899 = state_14726__$1;
(statearr_14751_17899[(1)] = (5));

} else {
var statearr_14753_17900 = state_14726__$1;
(statearr_14753_17900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (13))){
var state_14726__$1 = state_14726;
var statearr_14756_17901 = state_14726__$1;
(statearr_14756_17901[(2)] = null);

(statearr_14756_17901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (6))){
var inst_14681 = (state_14726[(7)]);
var state_14726__$1 = state_14726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14726__$1,(11),to,inst_14681);
} else {
if((state_val_14728 === (3))){
var inst_14722 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14726__$1,inst_14722);
} else {
if((state_val_14728 === (12))){
var state_14726__$1 = state_14726;
var statearr_14778_17902 = state_14726__$1;
(statearr_14778_17902[(2)] = null);

(statearr_14778_17902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (2))){
var state_14726__$1 = state_14726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14726__$1,(4),from);
} else {
if((state_val_14728 === (11))){
var inst_14708 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
if(cljs.core.truth_(inst_14708)){
var statearr_14794_17903 = state_14726__$1;
(statearr_14794_17903[(1)] = (12));

} else {
var statearr_14796_17904 = state_14726__$1;
(statearr_14796_17904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (9))){
var state_14726__$1 = state_14726;
var statearr_14800_17906 = state_14726__$1;
(statearr_14800_17906[(2)] = null);

(statearr_14800_17906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (5))){
var state_14726__$1 = state_14726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14801_17908 = state_14726__$1;
(statearr_14801_17908[(1)] = (8));

} else {
var statearr_14803_17909 = state_14726__$1;
(statearr_14803_17909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (14))){
var inst_14717 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
var statearr_14806_17910 = state_14726__$1;
(statearr_14806_17910[(2)] = inst_14717);

(statearr_14806_17910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (10))){
var inst_14705 = (state_14726[(2)]);
var state_14726__$1 = state_14726;
var statearr_14810_17911 = state_14726__$1;
(statearr_14810_17911[(2)] = inst_14705);

(statearr_14810_17911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14728 === (8))){
var inst_14701 = cljs.core.async.close_BANG_(to);
var state_14726__$1 = state_14726;
var statearr_14813_17912 = state_14726__$1;
(statearr_14813_17912[(2)] = inst_14701);

(statearr_14813_17912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_14816 = [null,null,null,null,null,null,null,null];
(statearr_14816[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_14816[(1)] = (1));

return statearr_14816;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_14726){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_14726);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e14817){var ex__14132__auto__ = e14817;
var statearr_14818_17917 = state_14726;
(statearr_14818_17917[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_14726[(4)]))){
var statearr_14821_17919 = state_14726;
(statearr_14821_17919[(1)] = cljs.core.first((state_14726[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17920 = state_14726;
state_14726 = G__17920;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_14726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_14726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_14828 = f__14395__auto__();
(statearr_14828[(6)] = c__14394__auto___17894);

return statearr_14828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14864){
var vec__14866 = p__14864;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14866,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14866,(1),null);
var job = vec__14866;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14394__auto___17921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_14874){
var state_val_14875 = (state_14874[(1)]);
if((state_val_14875 === (1))){
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14874__$1,(2),res,v);
} else {
if((state_val_14875 === (2))){
var inst_14871 = (state_14874[(2)]);
var inst_14872 = cljs.core.async.close_BANG_(res);
var state_14874__$1 = (function (){var statearr_14880 = state_14874;
(statearr_14880[(7)] = inst_14871);

return statearr_14880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14874__$1,inst_14872);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0 = (function (){
var statearr_14881 = [null,null,null,null,null,null,null,null];
(statearr_14881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__);

(statearr_14881[(1)] = (1));

return statearr_14881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1 = (function (state_14874){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_14874);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e14882){var ex__14132__auto__ = e14882;
var statearr_14883_17924 = state_14874;
(statearr_14883_17924[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_14874[(4)]))){
var statearr_14889_17925 = state_14874;
(statearr_14889_17925[(1)] = cljs.core.first((state_14874[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17926 = state_14874;
state_14874 = G__17926;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = function(state_14874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1.call(this,state_14874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_14898 = f__14395__auto__();
(statearr_14898[(6)] = c__14394__auto___17921);

return statearr_14898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14900){
var vec__14903 = p__14900;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14903,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14903,(1),null);
var job = vec__14903;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17930 = n;
var __17931 = (0);
while(true){
if((__17931 < n__5636__auto___17930)){
var G__14908_17932 = type;
var G__14908_17933__$1 = (((G__14908_17932 instanceof cljs.core.Keyword))?G__14908_17932.fqn:null);
switch (G__14908_17933__$1) {
case "compute":
var c__14394__auto___17935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17931,c__14394__auto___17935,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async){
return (function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = ((function (__17931,c__14394__auto___17935,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async){
return (function (state_14921){
var state_val_14922 = (state_14921[(1)]);
if((state_val_14922 === (1))){
var state_14921__$1 = state_14921;
var statearr_14931_17936 = state_14921__$1;
(statearr_14931_17936[(2)] = null);

(statearr_14931_17936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (2))){
var state_14921__$1 = state_14921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14921__$1,(4),jobs);
} else {
if((state_val_14922 === (3))){
var inst_14919 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14921__$1,inst_14919);
} else {
if((state_val_14922 === (4))){
var inst_14911 = (state_14921[(2)]);
var inst_14912 = process__$1(inst_14911);
var state_14921__$1 = state_14921;
if(cljs.core.truth_(inst_14912)){
var statearr_14951_17938 = state_14921__$1;
(statearr_14951_17938[(1)] = (5));

} else {
var statearr_14952_17939 = state_14921__$1;
(statearr_14952_17939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (5))){
var state_14921__$1 = state_14921;
var statearr_14954_17940 = state_14921__$1;
(statearr_14954_17940[(2)] = null);

(statearr_14954_17940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (6))){
var state_14921__$1 = state_14921;
var statearr_14956_17942 = state_14921__$1;
(statearr_14956_17942[(2)] = null);

(statearr_14956_17942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (7))){
var inst_14917 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
var statearr_14959_17943 = state_14921__$1;
(statearr_14959_17943[(2)] = inst_14917);

(statearr_14959_17943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17931,c__14394__auto___17935,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async))
;
return ((function (__17931,switch__14128__auto__,c__14394__auto___17935,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0 = (function (){
var statearr_14961 = [null,null,null,null,null,null,null];
(statearr_14961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__);

(statearr_14961[(1)] = (1));

return statearr_14961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1 = (function (state_14921){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_14921);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e14962){var ex__14132__auto__ = e14962;
var statearr_14963_17944 = state_14921;
(statearr_14963_17944[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_14921[(4)]))){
var statearr_14964_17948 = state_14921;
(statearr_14964_17948[(1)] = cljs.core.first((state_14921[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17949 = state_14921;
state_14921 = G__17949;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = function(state_14921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1.call(this,state_14921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__;
})()
;})(__17931,switch__14128__auto__,c__14394__auto___17935,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async))
})();
var state__14396__auto__ = (function (){var statearr_14967 = f__14395__auto__();
(statearr_14967[(6)] = c__14394__auto___17935);

return statearr_14967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
});})(__17931,c__14394__auto___17935,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async))
);


break;
case "async":
var c__14394__auto___17950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17931,c__14394__auto___17950,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async){
return (function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = ((function (__17931,c__14394__auto___17950,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async){
return (function (state_14980){
var state_val_14981 = (state_14980[(1)]);
if((state_val_14981 === (1))){
var state_14980__$1 = state_14980;
var statearr_14991_17951 = state_14980__$1;
(statearr_14991_17951[(2)] = null);

(statearr_14991_17951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (2))){
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14980__$1,(4),jobs);
} else {
if((state_val_14981 === (3))){
var inst_14978 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14980__$1,inst_14978);
} else {
if((state_val_14981 === (4))){
var inst_14970 = (state_14980[(2)]);
var inst_14971 = async(inst_14970);
var state_14980__$1 = state_14980;
if(cljs.core.truth_(inst_14971)){
var statearr_15006_17952 = state_14980__$1;
(statearr_15006_17952[(1)] = (5));

} else {
var statearr_15007_17953 = state_14980__$1;
(statearr_15007_17953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (5))){
var state_14980__$1 = state_14980;
var statearr_15008_17954 = state_14980__$1;
(statearr_15008_17954[(2)] = null);

(statearr_15008_17954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (6))){
var state_14980__$1 = state_14980;
var statearr_15014_17955 = state_14980__$1;
(statearr_15014_17955[(2)] = null);

(statearr_15014_17955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14981 === (7))){
var inst_14976 = (state_14980[(2)]);
var state_14980__$1 = state_14980;
var statearr_15027_17956 = state_14980__$1;
(statearr_15027_17956[(2)] = inst_14976);

(statearr_15027_17956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17931,c__14394__auto___17950,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async))
;
return ((function (__17931,switch__14128__auto__,c__14394__auto___17950,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0 = (function (){
var statearr_15040 = [null,null,null,null,null,null,null];
(statearr_15040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__);

(statearr_15040[(1)] = (1));

return statearr_15040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1 = (function (state_14980){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_14980);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e15044){var ex__14132__auto__ = e15044;
var statearr_15050_17965 = state_14980;
(statearr_15050_17965[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_14980[(4)]))){
var statearr_15072_17966 = state_14980;
(statearr_15072_17966[(1)] = cljs.core.first((state_14980[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17969 = state_14980;
state_14980 = G__17969;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = function(state_14980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1.call(this,state_14980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__;
})()
;})(__17931,switch__14128__auto__,c__14394__auto___17950,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async))
})();
var state__14396__auto__ = (function (){var statearr_15080 = f__14395__auto__();
(statearr_15080[(6)] = c__14394__auto___17950);

return statearr_15080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
});})(__17931,c__14394__auto___17950,G__14908_17932,G__14908_17933__$1,n__5636__auto___17930,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14908_17933__$1)].join('')));

}

var G__17972 = (__17931 + (1));
__17931 = G__17972;
continue;
} else {
}
break;
}

var c__14394__auto___17973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_15115){
var state_val_15116 = (state_15115[(1)]);
if((state_val_15116 === (7))){
var inst_15107 = (state_15115[(2)]);
var state_15115__$1 = state_15115;
var statearr_15126_17974 = state_15115__$1;
(statearr_15126_17974[(2)] = inst_15107);

(statearr_15126_17974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (1))){
var state_15115__$1 = state_15115;
var statearr_15132_17975 = state_15115__$1;
(statearr_15132_17975[(2)] = null);

(statearr_15132_17975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (4))){
var inst_15085 = (state_15115[(7)]);
var inst_15085__$1 = (state_15115[(2)]);
var inst_15086 = (inst_15085__$1 == null);
var state_15115__$1 = (function (){var statearr_15143 = state_15115;
(statearr_15143[(7)] = inst_15085__$1);

return statearr_15143;
})();
if(cljs.core.truth_(inst_15086)){
var statearr_15146_17976 = state_15115__$1;
(statearr_15146_17976[(1)] = (5));

} else {
var statearr_15149_17977 = state_15115__$1;
(statearr_15149_17977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (6))){
var inst_15090 = (state_15115[(8)]);
var inst_15085 = (state_15115[(7)]);
var inst_15090__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15094 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15095 = [inst_15085,inst_15090__$1];
var inst_15096 = (new cljs.core.PersistentVector(null,2,(5),inst_15094,inst_15095,null));
var state_15115__$1 = (function (){var statearr_15151 = state_15115;
(statearr_15151[(8)] = inst_15090__$1);

return statearr_15151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15115__$1,(8),jobs,inst_15096);
} else {
if((state_val_15116 === (3))){
var inst_15109 = (state_15115[(2)]);
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15115__$1,inst_15109);
} else {
if((state_val_15116 === (2))){
var state_15115__$1 = state_15115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15115__$1,(4),from);
} else {
if((state_val_15116 === (9))){
var inst_15100 = (state_15115[(2)]);
var state_15115__$1 = (function (){var statearr_15162 = state_15115;
(statearr_15162[(9)] = inst_15100);

return statearr_15162;
})();
var statearr_15164_17981 = state_15115__$1;
(statearr_15164_17981[(2)] = null);

(statearr_15164_17981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (5))){
var inst_15088 = cljs.core.async.close_BANG_(jobs);
var state_15115__$1 = state_15115;
var statearr_15166_17982 = state_15115__$1;
(statearr_15166_17982[(2)] = inst_15088);

(statearr_15166_17982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15116 === (8))){
var inst_15090 = (state_15115[(8)]);
var inst_15098 = (state_15115[(2)]);
var state_15115__$1 = (function (){var statearr_15168 = state_15115;
(statearr_15168[(10)] = inst_15098);

return statearr_15168;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15115__$1,(9),results,inst_15090);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0 = (function (){
var statearr_15175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__);

(statearr_15175[(1)] = (1));

return statearr_15175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1 = (function (state_15115){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_15115);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e15176){var ex__14132__auto__ = e15176;
var statearr_15178_17986 = state_15115;
(statearr_15178_17986[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_15115[(4)]))){
var statearr_15182_17988 = state_15115;
(statearr_15182_17988[(1)] = cljs.core.first((state_15115[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17989 = state_15115;
state_15115 = G__17989;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = function(state_15115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1.call(this,state_15115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_15192 = f__14395__auto__();
(statearr_15192[(6)] = c__14394__auto___17973);

return statearr_15192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


var c__14394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_15251){
var state_val_15252 = (state_15251[(1)]);
if((state_val_15252 === (7))){
var inst_15247 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15261_17991 = state_15251__$1;
(statearr_15261_17991[(2)] = inst_15247);

(statearr_15261_17991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (20))){
var state_15251__$1 = state_15251;
var statearr_15264_17992 = state_15251__$1;
(statearr_15264_17992[(2)] = null);

(statearr_15264_17992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (1))){
var state_15251__$1 = state_15251;
var statearr_15267_17994 = state_15251__$1;
(statearr_15267_17994[(2)] = null);

(statearr_15267_17994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (4))){
var inst_15197 = (state_15251[(7)]);
var inst_15197__$1 = (state_15251[(2)]);
var inst_15203 = (inst_15197__$1 == null);
var state_15251__$1 = (function (){var statearr_15275 = state_15251;
(statearr_15275[(7)] = inst_15197__$1);

return statearr_15275;
})();
if(cljs.core.truth_(inst_15203)){
var statearr_15276_18001 = state_15251__$1;
(statearr_15276_18001[(1)] = (5));

} else {
var statearr_15278_18002 = state_15251__$1;
(statearr_15278_18002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (15))){
var inst_15229 = (state_15251[(8)]);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15251__$1,(18),to,inst_15229);
} else {
if((state_val_15252 === (21))){
var inst_15242 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15283_18003 = state_15251__$1;
(statearr_15283_18003[(2)] = inst_15242);

(statearr_15283_18003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (13))){
var inst_15244 = (state_15251[(2)]);
var state_15251__$1 = (function (){var statearr_15287 = state_15251;
(statearr_15287[(9)] = inst_15244);

return statearr_15287;
})();
var statearr_15291_18004 = state_15251__$1;
(statearr_15291_18004[(2)] = null);

(statearr_15291_18004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (6))){
var inst_15197 = (state_15251[(7)]);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15251__$1,(11),inst_15197);
} else {
if((state_val_15252 === (17))){
var inst_15237 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
if(cljs.core.truth_(inst_15237)){
var statearr_15299_18005 = state_15251__$1;
(statearr_15299_18005[(1)] = (19));

} else {
var statearr_15302_18006 = state_15251__$1;
(statearr_15302_18006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (3))){
var inst_15249 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15251__$1,inst_15249);
} else {
if((state_val_15252 === (12))){
var inst_15226 = (state_15251[(10)]);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15251__$1,(14),inst_15226);
} else {
if((state_val_15252 === (2))){
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15251__$1,(4),results);
} else {
if((state_val_15252 === (19))){
var state_15251__$1 = state_15251;
var statearr_15306_18007 = state_15251__$1;
(statearr_15306_18007[(2)] = null);

(statearr_15306_18007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (11))){
var inst_15226 = (state_15251[(2)]);
var state_15251__$1 = (function (){var statearr_15310 = state_15251;
(statearr_15310[(10)] = inst_15226);

return statearr_15310;
})();
var statearr_15311_18008 = state_15251__$1;
(statearr_15311_18008[(2)] = null);

(statearr_15311_18008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (9))){
var state_15251__$1 = state_15251;
var statearr_15312_18009 = state_15251__$1;
(statearr_15312_18009[(2)] = null);

(statearr_15312_18009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (5))){
var state_15251__$1 = state_15251;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15314_18010 = state_15251__$1;
(statearr_15314_18010[(1)] = (8));

} else {
var statearr_15315_18011 = state_15251__$1;
(statearr_15315_18011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (14))){
var inst_15231 = (state_15251[(11)]);
var inst_15229 = (state_15251[(8)]);
var inst_15229__$1 = (state_15251[(2)]);
var inst_15230 = (inst_15229__$1 == null);
var inst_15231__$1 = cljs.core.not(inst_15230);
var state_15251__$1 = (function (){var statearr_15318 = state_15251;
(statearr_15318[(11)] = inst_15231__$1);

(statearr_15318[(8)] = inst_15229__$1);

return statearr_15318;
})();
if(inst_15231__$1){
var statearr_15321_18013 = state_15251__$1;
(statearr_15321_18013[(1)] = (15));

} else {
var statearr_15322_18014 = state_15251__$1;
(statearr_15322_18014[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (16))){
var inst_15231 = (state_15251[(11)]);
var state_15251__$1 = state_15251;
var statearr_15323_18016 = state_15251__$1;
(statearr_15323_18016[(2)] = inst_15231);

(statearr_15323_18016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (10))){
var inst_15220 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15327_18017 = state_15251__$1;
(statearr_15327_18017[(2)] = inst_15220);

(statearr_15327_18017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (18))){
var inst_15234 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15332_18019 = state_15251__$1;
(statearr_15332_18019[(2)] = inst_15234);

(statearr_15332_18019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (8))){
var inst_15214 = cljs.core.async.close_BANG_(to);
var state_15251__$1 = state_15251;
var statearr_15333_18022 = state_15251__$1;
(statearr_15333_18022[(2)] = inst_15214);

(statearr_15333_18022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0 = (function (){
var statearr_15334 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__);

(statearr_15334[(1)] = (1));

return statearr_15334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1 = (function (state_15251){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_15251);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e15337){var ex__14132__auto__ = e15337;
var statearr_15338_18030 = state_15251;
(statearr_15338_18030[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_15251[(4)]))){
var statearr_15340_18031 = state_15251;
(statearr_15340_18031[(1)] = cljs.core.first((state_15251[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18032 = state_15251;
state_15251 = G__18032;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__ = function(state_15251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1.call(this,state_15251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_15345 = f__14395__auto__();
(statearr_15345[(6)] = c__14394__auto__);

return statearr_15345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));

return c__14394__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15354 = arguments.length;
switch (G__15354) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15366 = arguments.length;
switch (G__15366) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15398 = arguments.length;
switch (G__15398) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14394__auto___18046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_15427){
var state_val_15428 = (state_15427[(1)]);
if((state_val_15428 === (7))){
var inst_15422 = (state_15427[(2)]);
var state_15427__$1 = state_15427;
var statearr_15435_18048 = state_15427__$1;
(statearr_15435_18048[(2)] = inst_15422);

(statearr_15435_18048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (1))){
var state_15427__$1 = state_15427;
var statearr_15436_18049 = state_15427__$1;
(statearr_15436_18049[(2)] = null);

(statearr_15436_18049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (4))){
var inst_15403 = (state_15427[(7)]);
var inst_15403__$1 = (state_15427[(2)]);
var inst_15404 = (inst_15403__$1 == null);
var state_15427__$1 = (function (){var statearr_15437 = state_15427;
(statearr_15437[(7)] = inst_15403__$1);

return statearr_15437;
})();
if(cljs.core.truth_(inst_15404)){
var statearr_15438_18052 = state_15427__$1;
(statearr_15438_18052[(1)] = (5));

} else {
var statearr_15439_18053 = state_15427__$1;
(statearr_15439_18053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (13))){
var state_15427__$1 = state_15427;
var statearr_15441_18054 = state_15427__$1;
(statearr_15441_18054[(2)] = null);

(statearr_15441_18054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (6))){
var inst_15403 = (state_15427[(7)]);
var inst_15409 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15403) : p.call(null,inst_15403));
var state_15427__$1 = state_15427;
if(cljs.core.truth_(inst_15409)){
var statearr_15442_18055 = state_15427__$1;
(statearr_15442_18055[(1)] = (9));

} else {
var statearr_15443_18056 = state_15427__$1;
(statearr_15443_18056[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (3))){
var inst_15424 = (state_15427[(2)]);
var state_15427__$1 = state_15427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15427__$1,inst_15424);
} else {
if((state_val_15428 === (12))){
var state_15427__$1 = state_15427;
var statearr_15445_18057 = state_15427__$1;
(statearr_15445_18057[(2)] = null);

(statearr_15445_18057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (2))){
var state_15427__$1 = state_15427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15427__$1,(4),ch);
} else {
if((state_val_15428 === (11))){
var inst_15403 = (state_15427[(7)]);
var inst_15413 = (state_15427[(2)]);
var state_15427__$1 = state_15427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15427__$1,(8),inst_15413,inst_15403);
} else {
if((state_val_15428 === (9))){
var state_15427__$1 = state_15427;
var statearr_15448_18058 = state_15427__$1;
(statearr_15448_18058[(2)] = tc);

(statearr_15448_18058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (5))){
var inst_15406 = cljs.core.async.close_BANG_(tc);
var inst_15407 = cljs.core.async.close_BANG_(fc);
var state_15427__$1 = (function (){var statearr_15451 = state_15427;
(statearr_15451[(8)] = inst_15406);

return statearr_15451;
})();
var statearr_15455_18059 = state_15427__$1;
(statearr_15455_18059[(2)] = inst_15407);

(statearr_15455_18059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (14))){
var inst_15420 = (state_15427[(2)]);
var state_15427__$1 = state_15427;
var statearr_15456_18063 = state_15427__$1;
(statearr_15456_18063[(2)] = inst_15420);

(statearr_15456_18063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (10))){
var state_15427__$1 = state_15427;
var statearr_15460_18066 = state_15427__$1;
(statearr_15460_18066[(2)] = fc);

(statearr_15460_18066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15428 === (8))){
var inst_15415 = (state_15427[(2)]);
var state_15427__$1 = state_15427;
if(cljs.core.truth_(inst_15415)){
var statearr_15461_18068 = state_15427__$1;
(statearr_15461_18068[(1)] = (12));

} else {
var statearr_15462_18069 = state_15427__$1;
(statearr_15462_18069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_15464 = [null,null,null,null,null,null,null,null,null];
(statearr_15464[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_15464[(1)] = (1));

return statearr_15464;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_15427){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_15427);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e15468){var ex__14132__auto__ = e15468;
var statearr_15469_18074 = state_15427;
(statearr_15469_18074[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_15427[(4)]))){
var statearr_15470_18075 = state_15427;
(statearr_15470_18075[(1)] = cljs.core.first((state_15427[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_15427;
state_15427 = G__18076;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_15427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_15427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_15471 = f__14395__auto__();
(statearr_15471[(6)] = c__14394__auto___18046);

return statearr_15471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_15505){
var state_val_15506 = (state_15505[(1)]);
if((state_val_15506 === (7))){
var inst_15501 = (state_15505[(2)]);
var state_15505__$1 = state_15505;
var statearr_15514_18077 = state_15505__$1;
(statearr_15514_18077[(2)] = inst_15501);

(statearr_15514_18077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15506 === (1))){
var inst_15481 = init;
var inst_15482 = inst_15481;
var state_15505__$1 = (function (){var statearr_15517 = state_15505;
(statearr_15517[(7)] = inst_15482);

return statearr_15517;
})();
var statearr_15522_18078 = state_15505__$1;
(statearr_15522_18078[(2)] = null);

(statearr_15522_18078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15506 === (4))){
var inst_15485 = (state_15505[(8)]);
var inst_15485__$1 = (state_15505[(2)]);
var inst_15486 = (inst_15485__$1 == null);
var state_15505__$1 = (function (){var statearr_15523 = state_15505;
(statearr_15523[(8)] = inst_15485__$1);

return statearr_15523;
})();
if(cljs.core.truth_(inst_15486)){
var statearr_15527_18079 = state_15505__$1;
(statearr_15527_18079[(1)] = (5));

} else {
var statearr_15528_18080 = state_15505__$1;
(statearr_15528_18080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15506 === (6))){
var inst_15485 = (state_15505[(8)]);
var inst_15489 = (state_15505[(9)]);
var inst_15482 = (state_15505[(7)]);
var inst_15489__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15482,inst_15485) : f.call(null,inst_15482,inst_15485));
var inst_15490 = cljs.core.reduced_QMARK_(inst_15489__$1);
var state_15505__$1 = (function (){var statearr_15536 = state_15505;
(statearr_15536[(9)] = inst_15489__$1);

return statearr_15536;
})();
if(inst_15490){
var statearr_15538_18083 = state_15505__$1;
(statearr_15538_18083[(1)] = (8));

} else {
var statearr_15539_18084 = state_15505__$1;
(statearr_15539_18084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15506 === (3))){
var inst_15503 = (state_15505[(2)]);
var state_15505__$1 = state_15505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15505__$1,inst_15503);
} else {
if((state_val_15506 === (2))){
var state_15505__$1 = state_15505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15505__$1,(4),ch);
} else {
if((state_val_15506 === (9))){
var inst_15489 = (state_15505[(9)]);
var inst_15482 = inst_15489;
var state_15505__$1 = (function (){var statearr_15551 = state_15505;
(statearr_15551[(7)] = inst_15482);

return statearr_15551;
})();
var statearr_15552_18092 = state_15505__$1;
(statearr_15552_18092[(2)] = null);

(statearr_15552_18092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15506 === (5))){
var inst_15482 = (state_15505[(7)]);
var state_15505__$1 = state_15505;
var statearr_15553_18093 = state_15505__$1;
(statearr_15553_18093[(2)] = inst_15482);

(statearr_15553_18093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15506 === (10))){
var inst_15499 = (state_15505[(2)]);
var state_15505__$1 = state_15505;
var statearr_15554_18095 = state_15505__$1;
(statearr_15554_18095[(2)] = inst_15499);

(statearr_15554_18095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15506 === (8))){
var inst_15489 = (state_15505[(9)]);
var inst_15495 = cljs.core.deref(inst_15489);
var state_15505__$1 = state_15505;
var statearr_15579_18096 = state_15505__$1;
(statearr_15579_18096[(2)] = inst_15495);

(statearr_15579_18096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14129__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14129__auto____0 = (function (){
var statearr_15581 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15581[(0)] = cljs$core$async$reduce_$_state_machine__14129__auto__);

(statearr_15581[(1)] = (1));

return statearr_15581;
});
var cljs$core$async$reduce_$_state_machine__14129__auto____1 = (function (state_15505){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_15505);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e15586){var ex__14132__auto__ = e15586;
var statearr_15587_18099 = state_15505;
(statearr_15587_18099[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_15505[(4)]))){
var statearr_15588_18100 = state_15505;
(statearr_15588_18100[(1)] = cljs.core.first((state_15505[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18102 = state_15505;
state_15505 = G__18102;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14129__auto__ = function(state_15505){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14129__auto____1.call(this,state_15505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14129__auto____0;
cljs$core$async$reduce_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14129__auto____1;
return cljs$core$async$reduce_$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_15593 = f__14395__auto__();
(statearr_15593[(6)] = c__14394__auto__);

return statearr_15593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));

return c__14394__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_15603){
var state_val_15604 = (state_15603[(1)]);
if((state_val_15604 === (1))){
var inst_15598 = cljs.core.async.reduce(f__$1,init,ch);
var state_15603__$1 = state_15603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15603__$1,(2),inst_15598);
} else {
if((state_val_15604 === (2))){
var inst_15600 = (state_15603[(2)]);
var inst_15601 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15600) : f__$1.call(null,inst_15600));
var state_15603__$1 = state_15603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15603__$1,inst_15601);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14129__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14129__auto____0 = (function (){
var statearr_15609 = [null,null,null,null,null,null,null];
(statearr_15609[(0)] = cljs$core$async$transduce_$_state_machine__14129__auto__);

(statearr_15609[(1)] = (1));

return statearr_15609;
});
var cljs$core$async$transduce_$_state_machine__14129__auto____1 = (function (state_15603){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_15603);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e15610){var ex__14132__auto__ = e15610;
var statearr_15611_18109 = state_15603;
(statearr_15611_18109[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_15603[(4)]))){
var statearr_15613_18110 = state_15603;
(statearr_15613_18110[(1)] = cljs.core.first((state_15603[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18111 = state_15603;
state_15603 = G__18111;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14129__auto__ = function(state_15603){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14129__auto____1.call(this,state_15603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14129__auto____0;
cljs$core$async$transduce_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14129__auto____1;
return cljs$core$async$transduce_$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_15614 = f__14395__auto__();
(statearr_15614[(6)] = c__14394__auto__);

return statearr_15614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));

return c__14394__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15617 = arguments.length;
switch (G__15617) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_15647){
var state_val_15648 = (state_15647[(1)]);
if((state_val_15648 === (7))){
var inst_15629 = (state_15647[(2)]);
var state_15647__$1 = state_15647;
var statearr_15650_18116 = state_15647__$1;
(statearr_15650_18116[(2)] = inst_15629);

(statearr_15650_18116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (1))){
var inst_15620 = cljs.core.seq(coll);
var inst_15621 = inst_15620;
var state_15647__$1 = (function (){var statearr_15651 = state_15647;
(statearr_15651[(7)] = inst_15621);

return statearr_15651;
})();
var statearr_15653_18119 = state_15647__$1;
(statearr_15653_18119[(2)] = null);

(statearr_15653_18119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (4))){
var inst_15621 = (state_15647[(7)]);
var inst_15627 = cljs.core.first(inst_15621);
var state_15647__$1 = state_15647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15647__$1,(7),ch,inst_15627);
} else {
if((state_val_15648 === (13))){
var inst_15641 = (state_15647[(2)]);
var state_15647__$1 = state_15647;
var statearr_15654_18131 = state_15647__$1;
(statearr_15654_18131[(2)] = inst_15641);

(statearr_15654_18131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (6))){
var inst_15632 = (state_15647[(2)]);
var state_15647__$1 = state_15647;
if(cljs.core.truth_(inst_15632)){
var statearr_15655_18138 = state_15647__$1;
(statearr_15655_18138[(1)] = (8));

} else {
var statearr_15656_18144 = state_15647__$1;
(statearr_15656_18144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (3))){
var inst_15645 = (state_15647[(2)]);
var state_15647__$1 = state_15647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15647__$1,inst_15645);
} else {
if((state_val_15648 === (12))){
var state_15647__$1 = state_15647;
var statearr_15659_18151 = state_15647__$1;
(statearr_15659_18151[(2)] = null);

(statearr_15659_18151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (2))){
var inst_15621 = (state_15647[(7)]);
var state_15647__$1 = state_15647;
if(cljs.core.truth_(inst_15621)){
var statearr_15660_18156 = state_15647__$1;
(statearr_15660_18156[(1)] = (4));

} else {
var statearr_15661_18161 = state_15647__$1;
(statearr_15661_18161[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (11))){
var inst_15638 = cljs.core.async.close_BANG_(ch);
var state_15647__$1 = state_15647;
var statearr_15665_18163 = state_15647__$1;
(statearr_15665_18163[(2)] = inst_15638);

(statearr_15665_18163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (9))){
var state_15647__$1 = state_15647;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15668_18170 = state_15647__$1;
(statearr_15668_18170[(1)] = (11));

} else {
var statearr_15669_18172 = state_15647__$1;
(statearr_15669_18172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (5))){
var inst_15621 = (state_15647[(7)]);
var state_15647__$1 = state_15647;
var statearr_15670_18181 = state_15647__$1;
(statearr_15670_18181[(2)] = inst_15621);

(statearr_15670_18181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (10))){
var inst_15643 = (state_15647[(2)]);
var state_15647__$1 = state_15647;
var statearr_15671_18186 = state_15647__$1;
(statearr_15671_18186[(2)] = inst_15643);

(statearr_15671_18186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (8))){
var inst_15621 = (state_15647[(7)]);
var inst_15634 = cljs.core.next(inst_15621);
var inst_15621__$1 = inst_15634;
var state_15647__$1 = (function (){var statearr_15673 = state_15647;
(statearr_15673[(7)] = inst_15621__$1);

return statearr_15673;
})();
var statearr_15674_18200 = state_15647__$1;
(statearr_15674_18200[(2)] = null);

(statearr_15674_18200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_15678 = [null,null,null,null,null,null,null,null];
(statearr_15678[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_15678[(1)] = (1));

return statearr_15678;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_15647){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_15647);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e15679){var ex__14132__auto__ = e15679;
var statearr_15680_18211 = state_15647;
(statearr_15680_18211[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_15647[(4)]))){
var statearr_15681_18212 = state_15647;
(statearr_15681_18212[(1)] = cljs.core.first((state_15647[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18213 = state_15647;
state_15647 = G__18213;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_15647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_15647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_15686 = f__14395__auto__();
(statearr_15686[(6)] = c__14394__auto__);

return statearr_15686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));

return c__14394__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15692 = arguments.length;
switch (G__15692) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18222 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18222(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18230 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18230(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18238 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18238(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18240 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18240(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15724 = (function (ch,cs,meta15725){
this.ch = ch;
this.cs = cs;
this.meta15725 = meta15725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15726,meta15725__$1){
var self__ = this;
var _15726__$1 = this;
return (new cljs.core.async.t_cljs$core$async15724(self__.ch,self__.cs,meta15725__$1));
}));

(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15726){
var self__ = this;
var _15726__$1 = this;
return self__.meta15725;
}));

(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15724.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15725","meta15725",953593317,null)], null);
}));

(cljs.core.async.t_cljs$core$async15724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15724");

(cljs.core.async.t_cljs$core$async15724.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15724.
 */
cljs.core.async.__GT_t_cljs$core$async15724 = (function cljs$core$async$__GT_t_cljs$core$async15724(ch,cs,meta15725){
return (new cljs.core.async.t_cljs$core$async15724(ch,cs,meta15725));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15724(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14394__auto___18248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_15880){
var state_val_15881 = (state_15880[(1)]);
if((state_val_15881 === (7))){
var inst_15873 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15882_18249 = state_15880__$1;
(statearr_15882_18249[(2)] = inst_15873);

(statearr_15882_18249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (20))){
var inst_15769 = (state_15880[(7)]);
var inst_15782 = cljs.core.first(inst_15769);
var inst_15783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15782,(0),null);
var inst_15784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15782,(1),null);
var state_15880__$1 = (function (){var statearr_15884 = state_15880;
(statearr_15884[(8)] = inst_15783);

return statearr_15884;
})();
if(cljs.core.truth_(inst_15784)){
var statearr_15885_18251 = state_15880__$1;
(statearr_15885_18251[(1)] = (22));

} else {
var statearr_15886_18252 = state_15880__$1;
(statearr_15886_18252[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (27))){
var inst_15816 = (state_15880[(9)]);
var inst_15814 = (state_15880[(10)]);
var inst_15821 = (state_15880[(11)]);
var inst_15738 = (state_15880[(12)]);
var inst_15821__$1 = cljs.core._nth(inst_15814,inst_15816);
var inst_15822 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15821__$1,inst_15738,done);
var state_15880__$1 = (function (){var statearr_15887 = state_15880;
(statearr_15887[(11)] = inst_15821__$1);

return statearr_15887;
})();
if(cljs.core.truth_(inst_15822)){
var statearr_15888_18253 = state_15880__$1;
(statearr_15888_18253[(1)] = (30));

} else {
var statearr_15889_18254 = state_15880__$1;
(statearr_15889_18254[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (1))){
var state_15880__$1 = state_15880;
var statearr_15890_18257 = state_15880__$1;
(statearr_15890_18257[(2)] = null);

(statearr_15890_18257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (24))){
var inst_15769 = (state_15880[(7)]);
var inst_15790 = (state_15880[(2)]);
var inst_15791 = cljs.core.next(inst_15769);
var inst_15747 = inst_15791;
var inst_15748 = null;
var inst_15749 = (0);
var inst_15750 = (0);
var state_15880__$1 = (function (){var statearr_15893 = state_15880;
(statearr_15893[(13)] = inst_15748);

(statearr_15893[(14)] = inst_15750);

(statearr_15893[(15)] = inst_15749);

(statearr_15893[(16)] = inst_15747);

(statearr_15893[(17)] = inst_15790);

return statearr_15893;
})();
var statearr_15894_18262 = state_15880__$1;
(statearr_15894_18262[(2)] = null);

(statearr_15894_18262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (39))){
var state_15880__$1 = state_15880;
var statearr_15898_18263 = state_15880__$1;
(statearr_15898_18263[(2)] = null);

(statearr_15898_18263[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (4))){
var inst_15738 = (state_15880[(12)]);
var inst_15738__$1 = (state_15880[(2)]);
var inst_15739 = (inst_15738__$1 == null);
var state_15880__$1 = (function (){var statearr_15900 = state_15880;
(statearr_15900[(12)] = inst_15738__$1);

return statearr_15900;
})();
if(cljs.core.truth_(inst_15739)){
var statearr_15901_18265 = state_15880__$1;
(statearr_15901_18265[(1)] = (5));

} else {
var statearr_15902_18266 = state_15880__$1;
(statearr_15902_18266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (15))){
var inst_15748 = (state_15880[(13)]);
var inst_15750 = (state_15880[(14)]);
var inst_15749 = (state_15880[(15)]);
var inst_15747 = (state_15880[(16)]);
var inst_15765 = (state_15880[(2)]);
var inst_15766 = (inst_15750 + (1));
var tmp15895 = inst_15748;
var tmp15896 = inst_15749;
var tmp15897 = inst_15747;
var inst_15747__$1 = tmp15897;
var inst_15748__$1 = tmp15895;
var inst_15749__$1 = tmp15896;
var inst_15750__$1 = inst_15766;
var state_15880__$1 = (function (){var statearr_15913 = state_15880;
(statearr_15913[(13)] = inst_15748__$1);

(statearr_15913[(18)] = inst_15765);

(statearr_15913[(14)] = inst_15750__$1);

(statearr_15913[(15)] = inst_15749__$1);

(statearr_15913[(16)] = inst_15747__$1);

return statearr_15913;
})();
var statearr_15915_18268 = state_15880__$1;
(statearr_15915_18268[(2)] = null);

(statearr_15915_18268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (21))){
var inst_15794 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15920_18269 = state_15880__$1;
(statearr_15920_18269[(2)] = inst_15794);

(statearr_15920_18269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (31))){
var inst_15821 = (state_15880[(11)]);
var inst_15825 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15821);
var state_15880__$1 = state_15880;
var statearr_15921_18271 = state_15880__$1;
(statearr_15921_18271[(2)] = inst_15825);

(statearr_15921_18271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (32))){
var inst_15816 = (state_15880[(9)]);
var inst_15814 = (state_15880[(10)]);
var inst_15813 = (state_15880[(19)]);
var inst_15815 = (state_15880[(20)]);
var inst_15827 = (state_15880[(2)]);
var inst_15831 = (inst_15816 + (1));
var tmp15917 = inst_15814;
var tmp15918 = inst_15813;
var tmp15919 = inst_15815;
var inst_15813__$1 = tmp15918;
var inst_15814__$1 = tmp15917;
var inst_15815__$1 = tmp15919;
var inst_15816__$1 = inst_15831;
var state_15880__$1 = (function (){var statearr_15923 = state_15880;
(statearr_15923[(9)] = inst_15816__$1);

(statearr_15923[(10)] = inst_15814__$1);

(statearr_15923[(19)] = inst_15813__$1);

(statearr_15923[(21)] = inst_15827);

(statearr_15923[(20)] = inst_15815__$1);

return statearr_15923;
})();
var statearr_15925_18272 = state_15880__$1;
(statearr_15925_18272[(2)] = null);

(statearr_15925_18272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (40))){
var inst_15845 = (state_15880[(22)]);
var inst_15850 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15845);
var state_15880__$1 = state_15880;
var statearr_15927_18273 = state_15880__$1;
(statearr_15927_18273[(2)] = inst_15850);

(statearr_15927_18273[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (33))){
var inst_15834 = (state_15880[(23)]);
var inst_15837 = cljs.core.chunked_seq_QMARK_(inst_15834);
var state_15880__$1 = state_15880;
if(inst_15837){
var statearr_15933_18274 = state_15880__$1;
(statearr_15933_18274[(1)] = (36));

} else {
var statearr_15934_18275 = state_15880__$1;
(statearr_15934_18275[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (13))){
var inst_15759 = (state_15880[(24)]);
var inst_15762 = cljs.core.async.close_BANG_(inst_15759);
var state_15880__$1 = state_15880;
var statearr_15935_18279 = state_15880__$1;
(statearr_15935_18279[(2)] = inst_15762);

(statearr_15935_18279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (22))){
var inst_15783 = (state_15880[(8)]);
var inst_15787 = cljs.core.async.close_BANG_(inst_15783);
var state_15880__$1 = state_15880;
var statearr_15936_18284 = state_15880__$1;
(statearr_15936_18284[(2)] = inst_15787);

(statearr_15936_18284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (36))){
var inst_15834 = (state_15880[(23)]);
var inst_15839 = cljs.core.chunk_first(inst_15834);
var inst_15840 = cljs.core.chunk_rest(inst_15834);
var inst_15841 = cljs.core.count(inst_15839);
var inst_15813 = inst_15840;
var inst_15814 = inst_15839;
var inst_15815 = inst_15841;
var inst_15816 = (0);
var state_15880__$1 = (function (){var statearr_15938 = state_15880;
(statearr_15938[(9)] = inst_15816);

(statearr_15938[(10)] = inst_15814);

(statearr_15938[(19)] = inst_15813);

(statearr_15938[(20)] = inst_15815);

return statearr_15938;
})();
var statearr_15939_18288 = state_15880__$1;
(statearr_15939_18288[(2)] = null);

(statearr_15939_18288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (41))){
var inst_15834 = (state_15880[(23)]);
var inst_15852 = (state_15880[(2)]);
var inst_15853 = cljs.core.next(inst_15834);
var inst_15813 = inst_15853;
var inst_15814 = null;
var inst_15815 = (0);
var inst_15816 = (0);
var state_15880__$1 = (function (){var statearr_15940 = state_15880;
(statearr_15940[(9)] = inst_15816);

(statearr_15940[(25)] = inst_15852);

(statearr_15940[(10)] = inst_15814);

(statearr_15940[(19)] = inst_15813);

(statearr_15940[(20)] = inst_15815);

return statearr_15940;
})();
var statearr_15941_18293 = state_15880__$1;
(statearr_15941_18293[(2)] = null);

(statearr_15941_18293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (43))){
var state_15880__$1 = state_15880;
var statearr_15942_18294 = state_15880__$1;
(statearr_15942_18294[(2)] = null);

(statearr_15942_18294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (29))){
var inst_15861 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15943_18295 = state_15880__$1;
(statearr_15943_18295[(2)] = inst_15861);

(statearr_15943_18295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (44))){
var inst_15870 = (state_15880[(2)]);
var state_15880__$1 = (function (){var statearr_15944 = state_15880;
(statearr_15944[(26)] = inst_15870);

return statearr_15944;
})();
var statearr_15946_18296 = state_15880__$1;
(statearr_15946_18296[(2)] = null);

(statearr_15946_18296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (6))){
var inst_15804 = (state_15880[(27)]);
var inst_15803 = cljs.core.deref(cs);
var inst_15804__$1 = cljs.core.keys(inst_15803);
var inst_15806 = cljs.core.count(inst_15804__$1);
var inst_15807 = cljs.core.reset_BANG_(dctr,inst_15806);
var inst_15812 = cljs.core.seq(inst_15804__$1);
var inst_15813 = inst_15812;
var inst_15814 = null;
var inst_15815 = (0);
var inst_15816 = (0);
var state_15880__$1 = (function (){var statearr_15947 = state_15880;
(statearr_15947[(9)] = inst_15816);

(statearr_15947[(27)] = inst_15804__$1);

(statearr_15947[(10)] = inst_15814);

(statearr_15947[(19)] = inst_15813);

(statearr_15947[(28)] = inst_15807);

(statearr_15947[(20)] = inst_15815);

return statearr_15947;
})();
var statearr_15948_18309 = state_15880__$1;
(statearr_15948_18309[(2)] = null);

(statearr_15948_18309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (28))){
var inst_15834 = (state_15880[(23)]);
var inst_15813 = (state_15880[(19)]);
var inst_15834__$1 = cljs.core.seq(inst_15813);
var state_15880__$1 = (function (){var statearr_15949 = state_15880;
(statearr_15949[(23)] = inst_15834__$1);

return statearr_15949;
})();
if(inst_15834__$1){
var statearr_15951_18310 = state_15880__$1;
(statearr_15951_18310[(1)] = (33));

} else {
var statearr_15952_18314 = state_15880__$1;
(statearr_15952_18314[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (25))){
var inst_15816 = (state_15880[(9)]);
var inst_15815 = (state_15880[(20)]);
var inst_15818 = (inst_15816 < inst_15815);
var inst_15819 = inst_15818;
var state_15880__$1 = state_15880;
if(cljs.core.truth_(inst_15819)){
var statearr_15953_18316 = state_15880__$1;
(statearr_15953_18316[(1)] = (27));

} else {
var statearr_15955_18317 = state_15880__$1;
(statearr_15955_18317[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (34))){
var state_15880__$1 = state_15880;
var statearr_15956_18319 = state_15880__$1;
(statearr_15956_18319[(2)] = null);

(statearr_15956_18319[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (17))){
var state_15880__$1 = state_15880;
var statearr_15958_18320 = state_15880__$1;
(statearr_15958_18320[(2)] = null);

(statearr_15958_18320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (3))){
var inst_15875 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15880__$1,inst_15875);
} else {
if((state_val_15881 === (12))){
var inst_15799 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15962_18323 = state_15880__$1;
(statearr_15962_18323[(2)] = inst_15799);

(statearr_15962_18323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (2))){
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15880__$1,(4),ch);
} else {
if((state_val_15881 === (23))){
var state_15880__$1 = state_15880;
var statearr_15963_18325 = state_15880__$1;
(statearr_15963_18325[(2)] = null);

(statearr_15963_18325[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (35))){
var inst_15859 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15965_18329 = state_15880__$1;
(statearr_15965_18329[(2)] = inst_15859);

(statearr_15965_18329[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (19))){
var inst_15769 = (state_15880[(7)]);
var inst_15773 = cljs.core.chunk_first(inst_15769);
var inst_15774 = cljs.core.chunk_rest(inst_15769);
var inst_15776 = cljs.core.count(inst_15773);
var inst_15747 = inst_15774;
var inst_15748 = inst_15773;
var inst_15749 = inst_15776;
var inst_15750 = (0);
var state_15880__$1 = (function (){var statearr_15967 = state_15880;
(statearr_15967[(13)] = inst_15748);

(statearr_15967[(14)] = inst_15750);

(statearr_15967[(15)] = inst_15749);

(statearr_15967[(16)] = inst_15747);

return statearr_15967;
})();
var statearr_15969_18337 = state_15880__$1;
(statearr_15969_18337[(2)] = null);

(statearr_15969_18337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (11))){
var inst_15747 = (state_15880[(16)]);
var inst_15769 = (state_15880[(7)]);
var inst_15769__$1 = cljs.core.seq(inst_15747);
var state_15880__$1 = (function (){var statearr_15970 = state_15880;
(statearr_15970[(7)] = inst_15769__$1);

return statearr_15970;
})();
if(inst_15769__$1){
var statearr_15971_18341 = state_15880__$1;
(statearr_15971_18341[(1)] = (16));

} else {
var statearr_15972_18342 = state_15880__$1;
(statearr_15972_18342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (9))){
var inst_15801 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15973_18344 = state_15880__$1;
(statearr_15973_18344[(2)] = inst_15801);

(statearr_15973_18344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (5))){
var inst_15745 = cljs.core.deref(cs);
var inst_15746 = cljs.core.seq(inst_15745);
var inst_15747 = inst_15746;
var inst_15748 = null;
var inst_15749 = (0);
var inst_15750 = (0);
var state_15880__$1 = (function (){var statearr_15975 = state_15880;
(statearr_15975[(13)] = inst_15748);

(statearr_15975[(14)] = inst_15750);

(statearr_15975[(15)] = inst_15749);

(statearr_15975[(16)] = inst_15747);

return statearr_15975;
})();
var statearr_15976_18349 = state_15880__$1;
(statearr_15976_18349[(2)] = null);

(statearr_15976_18349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (14))){
var state_15880__$1 = state_15880;
var statearr_15977_18351 = state_15880__$1;
(statearr_15977_18351[(2)] = null);

(statearr_15977_18351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (45))){
var inst_15867 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15979_18352 = state_15880__$1;
(statearr_15979_18352[(2)] = inst_15867);

(statearr_15979_18352[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (26))){
var inst_15804 = (state_15880[(27)]);
var inst_15863 = (state_15880[(2)]);
var inst_15864 = cljs.core.seq(inst_15804);
var state_15880__$1 = (function (){var statearr_15981 = state_15880;
(statearr_15981[(29)] = inst_15863);

return statearr_15981;
})();
if(inst_15864){
var statearr_15982_18354 = state_15880__$1;
(statearr_15982_18354[(1)] = (42));

} else {
var statearr_15984_18355 = state_15880__$1;
(statearr_15984_18355[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (16))){
var inst_15769 = (state_15880[(7)]);
var inst_15771 = cljs.core.chunked_seq_QMARK_(inst_15769);
var state_15880__$1 = state_15880;
if(inst_15771){
var statearr_15986_18362 = state_15880__$1;
(statearr_15986_18362[(1)] = (19));

} else {
var statearr_15987_18363 = state_15880__$1;
(statearr_15987_18363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (38))){
var inst_15856 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15988_18364 = state_15880__$1;
(statearr_15988_18364[(2)] = inst_15856);

(statearr_15988_18364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (30))){
var state_15880__$1 = state_15880;
var statearr_15993_18365 = state_15880__$1;
(statearr_15993_18365[(2)] = null);

(statearr_15993_18365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (10))){
var inst_15748 = (state_15880[(13)]);
var inst_15750 = (state_15880[(14)]);
var inst_15758 = cljs.core._nth(inst_15748,inst_15750);
var inst_15759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15758,(0),null);
var inst_15760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15758,(1),null);
var state_15880__$1 = (function (){var statearr_15995 = state_15880;
(statearr_15995[(24)] = inst_15759);

return statearr_15995;
})();
if(cljs.core.truth_(inst_15760)){
var statearr_15996_18368 = state_15880__$1;
(statearr_15996_18368[(1)] = (13));

} else {
var statearr_15997_18371 = state_15880__$1;
(statearr_15997_18371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (18))){
var inst_15797 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15998_18372 = state_15880__$1;
(statearr_15998_18372[(2)] = inst_15797);

(statearr_15998_18372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (42))){
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15880__$1,(45),dchan);
} else {
if((state_val_15881 === (37))){
var inst_15834 = (state_15880[(23)]);
var inst_15845 = (state_15880[(22)]);
var inst_15738 = (state_15880[(12)]);
var inst_15845__$1 = cljs.core.first(inst_15834);
var inst_15846 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15845__$1,inst_15738,done);
var state_15880__$1 = (function (){var statearr_16001 = state_15880;
(statearr_16001[(22)] = inst_15845__$1);

return statearr_16001;
})();
if(cljs.core.truth_(inst_15846)){
var statearr_16002_18373 = state_15880__$1;
(statearr_16002_18373[(1)] = (39));

} else {
var statearr_16003_18374 = state_15880__$1;
(statearr_16003_18374[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (8))){
var inst_15750 = (state_15880[(14)]);
var inst_15749 = (state_15880[(15)]);
var inst_15752 = (inst_15750 < inst_15749);
var inst_15753 = inst_15752;
var state_15880__$1 = state_15880;
if(cljs.core.truth_(inst_15753)){
var statearr_16004_18378 = state_15880__$1;
(statearr_16004_18378[(1)] = (10));

} else {
var statearr_16005_18380 = state_15880__$1;
(statearr_16005_18380[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14129__auto__ = null;
var cljs$core$async$mult_$_state_machine__14129__auto____0 = (function (){
var statearr_16010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16010[(0)] = cljs$core$async$mult_$_state_machine__14129__auto__);

(statearr_16010[(1)] = (1));

return statearr_16010;
});
var cljs$core$async$mult_$_state_machine__14129__auto____1 = (function (state_15880){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_15880);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e16012){var ex__14132__auto__ = e16012;
var statearr_16014_18390 = state_15880;
(statearr_16014_18390[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_15880[(4)]))){
var statearr_16015_18391 = state_15880;
(statearr_16015_18391[(1)] = cljs.core.first((state_15880[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18392 = state_15880;
state_15880 = G__18392;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14129__auto__ = function(state_15880){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14129__auto____1.call(this,state_15880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14129__auto____0;
cljs$core$async$mult_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14129__auto____1;
return cljs$core$async$mult_$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_16019 = f__14395__auto__();
(statearr_16019[(6)] = c__14394__auto___18248);

return statearr_16019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16023 = arguments.length;
switch (G__16023) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18402 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18402(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18410 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18410(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18415 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18415(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18417 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18417(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18425 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18425(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18427 = arguments.length;
var i__5770__auto___18428 = (0);
while(true){
if((i__5770__auto___18428 < len__5769__auto___18427)){
args__5775__auto__.push((arguments[i__5770__auto___18428]));

var G__18429 = (i__5770__auto___18428 + (1));
i__5770__auto___18428 = G__18429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16056){
var map__16057 = p__16056;
var map__16057__$1 = cljs.core.__destructure_map(map__16057);
var opts = map__16057__$1;
var statearr_16058_18431 = state;
(statearr_16058_18431[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16060_18432 = state;
(statearr_16060_18432[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16061_18433 = state;
(statearr_16061_18433[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16044){
var G__16045 = cljs.core.first(seq16044);
var seq16044__$1 = cljs.core.next(seq16044);
var G__16046 = cljs.core.first(seq16044__$1);
var seq16044__$2 = cljs.core.next(seq16044__$1);
var G__16047 = cljs.core.first(seq16044__$2);
var seq16044__$3 = cljs.core.next(seq16044__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16045,G__16046,G__16047,seq16044__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16071 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16072){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16072 = meta16072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16073,meta16072__$1){
var self__ = this;
var _16073__$1 = this;
return (new cljs.core.async.t_cljs$core$async16071(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16072__$1));
}));

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16073){
var self__ = this;
var _16073__$1 = this;
return self__.meta16072;
}));

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16071.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16072","meta16072",1574091300,null)], null);
}));

(cljs.core.async.t_cljs$core$async16071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16071");

(cljs.core.async.t_cljs$core$async16071.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16071.
 */
cljs.core.async.__GT_t_cljs$core$async16071 = (function cljs$core$async$__GT_t_cljs$core$async16071(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16072){
return (new cljs.core.async.t_cljs$core$async16071(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16072));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16071(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14394__auto___18453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_16166){
var state_val_16167 = (state_16166[(1)]);
if((state_val_16167 === (7))){
var inst_16122 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
if(cljs.core.truth_(inst_16122)){
var statearr_16171_18455 = state_16166__$1;
(statearr_16171_18455[(1)] = (8));

} else {
var statearr_16172_18456 = state_16166__$1;
(statearr_16172_18456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (20))){
var inst_16115 = (state_16166[(7)]);
var state_16166__$1 = state_16166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16166__$1,(23),out,inst_16115);
} else {
if((state_val_16167 === (1))){
var inst_16096 = calc_state();
var inst_16097 = cljs.core.__destructure_map(inst_16096);
var inst_16100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16097,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16097,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16097,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16103 = inst_16096;
var state_16166__$1 = (function (){var statearr_16176 = state_16166;
(statearr_16176[(8)] = inst_16103);

(statearr_16176[(9)] = inst_16102);

(statearr_16176[(10)] = inst_16101);

(statearr_16176[(11)] = inst_16100);

return statearr_16176;
})();
var statearr_16178_18458 = state_16166__$1;
(statearr_16178_18458[(2)] = null);

(statearr_16178_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (24))){
var inst_16106 = (state_16166[(12)]);
var inst_16103 = inst_16106;
var state_16166__$1 = (function (){var statearr_16183 = state_16166;
(statearr_16183[(8)] = inst_16103);

return statearr_16183;
})();
var statearr_16184_18459 = state_16166__$1;
(statearr_16184_18459[(2)] = null);

(statearr_16184_18459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (4))){
var inst_16117 = (state_16166[(13)]);
var inst_16115 = (state_16166[(7)]);
var inst_16114 = (state_16166[(2)]);
var inst_16115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16114,(0),null);
var inst_16116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16114,(1),null);
var inst_16117__$1 = (inst_16115__$1 == null);
var state_16166__$1 = (function (){var statearr_16186 = state_16166;
(statearr_16186[(13)] = inst_16117__$1);

(statearr_16186[(7)] = inst_16115__$1);

(statearr_16186[(14)] = inst_16116);

return statearr_16186;
})();
if(cljs.core.truth_(inst_16117__$1)){
var statearr_16189_18466 = state_16166__$1;
(statearr_16189_18466[(1)] = (5));

} else {
var statearr_16193_18467 = state_16166__$1;
(statearr_16193_18467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (15))){
var inst_16138 = (state_16166[(15)]);
var inst_16107 = (state_16166[(16)]);
var inst_16138__$1 = cljs.core.empty_QMARK_(inst_16107);
var state_16166__$1 = (function (){var statearr_16199 = state_16166;
(statearr_16199[(15)] = inst_16138__$1);

return statearr_16199;
})();
if(inst_16138__$1){
var statearr_16201_18468 = state_16166__$1;
(statearr_16201_18468[(1)] = (17));

} else {
var statearr_16203_18469 = state_16166__$1;
(statearr_16203_18469[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (21))){
var inst_16106 = (state_16166[(12)]);
var inst_16103 = inst_16106;
var state_16166__$1 = (function (){var statearr_16205 = state_16166;
(statearr_16205[(8)] = inst_16103);

return statearr_16205;
})();
var statearr_16206_18476 = state_16166__$1;
(statearr_16206_18476[(2)] = null);

(statearr_16206_18476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (13))){
var inst_16129 = (state_16166[(2)]);
var inst_16131 = calc_state();
var inst_16103 = inst_16131;
var state_16166__$1 = (function (){var statearr_16209 = state_16166;
(statearr_16209[(8)] = inst_16103);

(statearr_16209[(17)] = inst_16129);

return statearr_16209;
})();
var statearr_16214_18477 = state_16166__$1;
(statearr_16214_18477[(2)] = null);

(statearr_16214_18477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (22))){
var inst_16158 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
var statearr_16218_18478 = state_16166__$1;
(statearr_16218_18478[(2)] = inst_16158);

(statearr_16218_18478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (6))){
var inst_16116 = (state_16166[(14)]);
var inst_16120 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16116,change);
var state_16166__$1 = state_16166;
var statearr_16222_18479 = state_16166__$1;
(statearr_16222_18479[(2)] = inst_16120);

(statearr_16222_18479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (25))){
var state_16166__$1 = state_16166;
var statearr_16223_18480 = state_16166__$1;
(statearr_16223_18480[(2)] = null);

(statearr_16223_18480[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (17))){
var inst_16116 = (state_16166[(14)]);
var inst_16108 = (state_16166[(18)]);
var inst_16140 = (inst_16108.cljs$core$IFn$_invoke$arity$1 ? inst_16108.cljs$core$IFn$_invoke$arity$1(inst_16116) : inst_16108.call(null,inst_16116));
var inst_16141 = cljs.core.not(inst_16140);
var state_16166__$1 = state_16166;
var statearr_16227_18481 = state_16166__$1;
(statearr_16227_18481[(2)] = inst_16141);

(statearr_16227_18481[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (3))){
var inst_16162 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16166__$1,inst_16162);
} else {
if((state_val_16167 === (12))){
var state_16166__$1 = state_16166;
var statearr_16237_18482 = state_16166__$1;
(statearr_16237_18482[(2)] = null);

(statearr_16237_18482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (2))){
var inst_16103 = (state_16166[(8)]);
var inst_16106 = (state_16166[(12)]);
var inst_16106__$1 = cljs.core.__destructure_map(inst_16103);
var inst_16107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16106__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16106__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16106__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16166__$1 = (function (){var statearr_16238 = state_16166;
(statearr_16238[(12)] = inst_16106__$1);

(statearr_16238[(16)] = inst_16107);

(statearr_16238[(18)] = inst_16108);

return statearr_16238;
})();
return cljs.core.async.ioc_alts_BANG_(state_16166__$1,(4),inst_16109);
} else {
if((state_val_16167 === (23))){
var inst_16149 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
if(cljs.core.truth_(inst_16149)){
var statearr_16239_18483 = state_16166__$1;
(statearr_16239_18483[(1)] = (24));

} else {
var statearr_16240_18484 = state_16166__$1;
(statearr_16240_18484[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (19))){
var inst_16144 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
var statearr_16243_18485 = state_16166__$1;
(statearr_16243_18485[(2)] = inst_16144);

(statearr_16243_18485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (11))){
var inst_16116 = (state_16166[(14)]);
var inst_16126 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16116);
var state_16166__$1 = state_16166;
var statearr_16244_18486 = state_16166__$1;
(statearr_16244_18486[(2)] = inst_16126);

(statearr_16244_18486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (9))){
var inst_16134 = (state_16166[(19)]);
var inst_16116 = (state_16166[(14)]);
var inst_16107 = (state_16166[(16)]);
var inst_16134__$1 = (inst_16107.cljs$core$IFn$_invoke$arity$1 ? inst_16107.cljs$core$IFn$_invoke$arity$1(inst_16116) : inst_16107.call(null,inst_16116));
var state_16166__$1 = (function (){var statearr_16245 = state_16166;
(statearr_16245[(19)] = inst_16134__$1);

return statearr_16245;
})();
if(cljs.core.truth_(inst_16134__$1)){
var statearr_16248_18496 = state_16166__$1;
(statearr_16248_18496[(1)] = (14));

} else {
var statearr_16249_18497 = state_16166__$1;
(statearr_16249_18497[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (5))){
var inst_16117 = (state_16166[(13)]);
var state_16166__$1 = state_16166;
var statearr_16251_18498 = state_16166__$1;
(statearr_16251_18498[(2)] = inst_16117);

(statearr_16251_18498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (14))){
var inst_16134 = (state_16166[(19)]);
var state_16166__$1 = state_16166;
var statearr_16253_18499 = state_16166__$1;
(statearr_16253_18499[(2)] = inst_16134);

(statearr_16253_18499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (26))){
var inst_16154 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
var statearr_16254_18500 = state_16166__$1;
(statearr_16254_18500[(2)] = inst_16154);

(statearr_16254_18500[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (16))){
var inst_16146 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
if(cljs.core.truth_(inst_16146)){
var statearr_16255_18501 = state_16166__$1;
(statearr_16255_18501[(1)] = (20));

} else {
var statearr_16257_18502 = state_16166__$1;
(statearr_16257_18502[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (10))){
var inst_16160 = (state_16166[(2)]);
var state_16166__$1 = state_16166;
var statearr_16260_18503 = state_16166__$1;
(statearr_16260_18503[(2)] = inst_16160);

(statearr_16260_18503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (18))){
var inst_16138 = (state_16166[(15)]);
var state_16166__$1 = state_16166;
var statearr_16261_18504 = state_16166__$1;
(statearr_16261_18504[(2)] = inst_16138);

(statearr_16261_18504[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16167 === (8))){
var inst_16115 = (state_16166[(7)]);
var inst_16124 = (inst_16115 == null);
var state_16166__$1 = state_16166;
if(cljs.core.truth_(inst_16124)){
var statearr_16265_18505 = state_16166__$1;
(statearr_16265_18505[(1)] = (11));

} else {
var statearr_16267_18506 = state_16166__$1;
(statearr_16267_18506[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14129__auto__ = null;
var cljs$core$async$mix_$_state_machine__14129__auto____0 = (function (){
var statearr_16268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16268[(0)] = cljs$core$async$mix_$_state_machine__14129__auto__);

(statearr_16268[(1)] = (1));

return statearr_16268;
});
var cljs$core$async$mix_$_state_machine__14129__auto____1 = (function (state_16166){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_16166);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e16269){var ex__14132__auto__ = e16269;
var statearr_16270_18507 = state_16166;
(statearr_16270_18507[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_16166[(4)]))){
var statearr_16272_18508 = state_16166;
(statearr_16272_18508[(1)] = cljs.core.first((state_16166[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18509 = state_16166;
state_16166 = G__18509;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14129__auto__ = function(state_16166){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14129__auto____1.call(this,state_16166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14129__auto____0;
cljs$core$async$mix_$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14129__auto____1;
return cljs$core$async$mix_$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_16273 = f__14395__auto__();
(statearr_16273[(6)] = c__14394__auto___18453);

return statearr_16273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18524 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18524(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18528 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18528(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18529 = (function() {
var G__18530 = null;
var G__18530__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18530__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18530 = function(p,v){
switch(arguments.length){
case 1:
return G__18530__1.call(this,p);
case 2:
return G__18530__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18530.cljs$core$IFn$_invoke$arity$1 = G__18530__1;
G__18530.cljs$core$IFn$_invoke$arity$2 = G__18530__2;
return G__18530;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16314 = arguments.length;
switch (G__16314) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18529(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18529(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16347 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16348){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16348 = meta16348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16349,meta16348__$1){
var self__ = this;
var _16349__$1 = this;
return (new cljs.core.async.t_cljs$core$async16347(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16348__$1));
}));

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16349){
var self__ = this;
var _16349__$1 = this;
return self__.meta16348;
}));

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16348","meta16348",340888740,null)], null);
}));

(cljs.core.async.t_cljs$core$async16347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16347");

(cljs.core.async.t_cljs$core$async16347.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16347.
 */
cljs.core.async.__GT_t_cljs$core$async16347 = (function cljs$core$async$__GT_t_cljs$core$async16347(ch,topic_fn,buf_fn,mults,ensure_mult,meta16348){
return (new cljs.core.async.t_cljs$core$async16347(ch,topic_fn,buf_fn,mults,ensure_mult,meta16348));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16338 = arguments.length;
switch (G__16338) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16330_SHARP_){
if(cljs.core.truth_((p1__16330_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16330_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16330_SHARP_.call(null,topic)))){
return p1__16330_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16330_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16347(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14394__auto___18553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_16473){
var state_val_16474 = (state_16473[(1)]);
if((state_val_16474 === (7))){
var inst_16467 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
var statearr_16480_18554 = state_16473__$1;
(statearr_16480_18554[(2)] = inst_16467);

(statearr_16480_18554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (20))){
var state_16473__$1 = state_16473;
var statearr_16481_18555 = state_16473__$1;
(statearr_16481_18555[(2)] = null);

(statearr_16481_18555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (1))){
var state_16473__$1 = state_16473;
var statearr_16485_18556 = state_16473__$1;
(statearr_16485_18556[(2)] = null);

(statearr_16485_18556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (24))){
var inst_16447 = (state_16473[(7)]);
var inst_16459 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16447);
var state_16473__$1 = state_16473;
var statearr_16487_18557 = state_16473__$1;
(statearr_16487_18557[(2)] = inst_16459);

(statearr_16487_18557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (4))){
var inst_16391 = (state_16473[(8)]);
var inst_16391__$1 = (state_16473[(2)]);
var inst_16392 = (inst_16391__$1 == null);
var state_16473__$1 = (function (){var statearr_16491 = state_16473;
(statearr_16491[(8)] = inst_16391__$1);

return statearr_16491;
})();
if(cljs.core.truth_(inst_16392)){
var statearr_16492_18558 = state_16473__$1;
(statearr_16492_18558[(1)] = (5));

} else {
var statearr_16493_18559 = state_16473__$1;
(statearr_16493_18559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (15))){
var inst_16441 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
var statearr_16497_18560 = state_16473__$1;
(statearr_16497_18560[(2)] = inst_16441);

(statearr_16497_18560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (21))){
var inst_16464 = (state_16473[(2)]);
var state_16473__$1 = (function (){var statearr_16502 = state_16473;
(statearr_16502[(9)] = inst_16464);

return statearr_16502;
})();
var statearr_16503_18561 = state_16473__$1;
(statearr_16503_18561[(2)] = null);

(statearr_16503_18561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (13))){
var inst_16419 = (state_16473[(10)]);
var inst_16423 = cljs.core.chunked_seq_QMARK_(inst_16419);
var state_16473__$1 = state_16473;
if(inst_16423){
var statearr_16507_18562 = state_16473__$1;
(statearr_16507_18562[(1)] = (16));

} else {
var statearr_16510_18563 = state_16473__$1;
(statearr_16510_18563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (22))){
var inst_16455 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
if(cljs.core.truth_(inst_16455)){
var statearr_16511_18564 = state_16473__$1;
(statearr_16511_18564[(1)] = (23));

} else {
var statearr_16513_18565 = state_16473__$1;
(statearr_16513_18565[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (6))){
var inst_16449 = (state_16473[(11)]);
var inst_16391 = (state_16473[(8)]);
var inst_16447 = (state_16473[(7)]);
var inst_16447__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16391) : topic_fn.call(null,inst_16391));
var inst_16448 = cljs.core.deref(mults);
var inst_16449__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16448,inst_16447__$1);
var state_16473__$1 = (function (){var statearr_16518 = state_16473;
(statearr_16518[(11)] = inst_16449__$1);

(statearr_16518[(7)] = inst_16447__$1);

return statearr_16518;
})();
if(cljs.core.truth_(inst_16449__$1)){
var statearr_16521_18569 = state_16473__$1;
(statearr_16521_18569[(1)] = (19));

} else {
var statearr_16522_18570 = state_16473__$1;
(statearr_16522_18570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (25))){
var inst_16461 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
var statearr_16526_18571 = state_16473__$1;
(statearr_16526_18571[(2)] = inst_16461);

(statearr_16526_18571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (17))){
var inst_16419 = (state_16473[(10)]);
var inst_16431 = cljs.core.first(inst_16419);
var inst_16433 = cljs.core.async.muxch_STAR_(inst_16431);
var inst_16434 = cljs.core.async.close_BANG_(inst_16433);
var inst_16435 = cljs.core.next(inst_16419);
var inst_16404 = inst_16435;
var inst_16405 = null;
var inst_16406 = (0);
var inst_16407 = (0);
var state_16473__$1 = (function (){var statearr_16528 = state_16473;
(statearr_16528[(12)] = inst_16406);

(statearr_16528[(13)] = inst_16407);

(statearr_16528[(14)] = inst_16434);

(statearr_16528[(15)] = inst_16404);

(statearr_16528[(16)] = inst_16405);

return statearr_16528;
})();
var statearr_16532_18578 = state_16473__$1;
(statearr_16532_18578[(2)] = null);

(statearr_16532_18578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (3))){
var inst_16470 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16473__$1,inst_16470);
} else {
if((state_val_16474 === (12))){
var inst_16443 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
var statearr_16536_18579 = state_16473__$1;
(statearr_16536_18579[(2)] = inst_16443);

(statearr_16536_18579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (2))){
var state_16473__$1 = state_16473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16473__$1,(4),ch);
} else {
if((state_val_16474 === (23))){
var state_16473__$1 = state_16473;
var statearr_16543_18580 = state_16473__$1;
(statearr_16543_18580[(2)] = null);

(statearr_16543_18580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (19))){
var inst_16449 = (state_16473[(11)]);
var inst_16391 = (state_16473[(8)]);
var inst_16453 = cljs.core.async.muxch_STAR_(inst_16449);
var state_16473__$1 = state_16473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16473__$1,(22),inst_16453,inst_16391);
} else {
if((state_val_16474 === (11))){
var inst_16404 = (state_16473[(15)]);
var inst_16419 = (state_16473[(10)]);
var inst_16419__$1 = cljs.core.seq(inst_16404);
var state_16473__$1 = (function (){var statearr_16547 = state_16473;
(statearr_16547[(10)] = inst_16419__$1);

return statearr_16547;
})();
if(inst_16419__$1){
var statearr_16549_18581 = state_16473__$1;
(statearr_16549_18581[(1)] = (13));

} else {
var statearr_16550_18582 = state_16473__$1;
(statearr_16550_18582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (9))){
var inst_16445 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
var statearr_16552_18583 = state_16473__$1;
(statearr_16552_18583[(2)] = inst_16445);

(statearr_16552_18583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (5))){
var inst_16400 = cljs.core.deref(mults);
var inst_16401 = cljs.core.vals(inst_16400);
var inst_16402 = cljs.core.seq(inst_16401);
var inst_16404 = inst_16402;
var inst_16405 = null;
var inst_16406 = (0);
var inst_16407 = (0);
var state_16473__$1 = (function (){var statearr_16556 = state_16473;
(statearr_16556[(12)] = inst_16406);

(statearr_16556[(13)] = inst_16407);

(statearr_16556[(15)] = inst_16404);

(statearr_16556[(16)] = inst_16405);

return statearr_16556;
})();
var statearr_16558_18584 = state_16473__$1;
(statearr_16558_18584[(2)] = null);

(statearr_16558_18584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (14))){
var state_16473__$1 = state_16473;
var statearr_16563_18586 = state_16473__$1;
(statearr_16563_18586[(2)] = null);

(statearr_16563_18586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (16))){
var inst_16419 = (state_16473[(10)]);
var inst_16426 = cljs.core.chunk_first(inst_16419);
var inst_16427 = cljs.core.chunk_rest(inst_16419);
var inst_16428 = cljs.core.count(inst_16426);
var inst_16404 = inst_16427;
var inst_16405 = inst_16426;
var inst_16406 = inst_16428;
var inst_16407 = (0);
var state_16473__$1 = (function (){var statearr_16567 = state_16473;
(statearr_16567[(12)] = inst_16406);

(statearr_16567[(13)] = inst_16407);

(statearr_16567[(15)] = inst_16404);

(statearr_16567[(16)] = inst_16405);

return statearr_16567;
})();
var statearr_16569_18587 = state_16473__$1;
(statearr_16569_18587[(2)] = null);

(statearr_16569_18587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (10))){
var inst_16406 = (state_16473[(12)]);
var inst_16407 = (state_16473[(13)]);
var inst_16404 = (state_16473[(15)]);
var inst_16405 = (state_16473[(16)]);
var inst_16412 = cljs.core._nth(inst_16405,inst_16407);
var inst_16414 = cljs.core.async.muxch_STAR_(inst_16412);
var inst_16415 = cljs.core.async.close_BANG_(inst_16414);
var inst_16416 = (inst_16407 + (1));
var tmp16560 = inst_16406;
var tmp16561 = inst_16404;
var tmp16562 = inst_16405;
var inst_16404__$1 = tmp16561;
var inst_16405__$1 = tmp16562;
var inst_16406__$1 = tmp16560;
var inst_16407__$1 = inst_16416;
var state_16473__$1 = (function (){var statearr_16578 = state_16473;
(statearr_16578[(17)] = inst_16415);

(statearr_16578[(12)] = inst_16406__$1);

(statearr_16578[(13)] = inst_16407__$1);

(statearr_16578[(15)] = inst_16404__$1);

(statearr_16578[(16)] = inst_16405__$1);

return statearr_16578;
})();
var statearr_16581_18590 = state_16473__$1;
(statearr_16581_18590[(2)] = null);

(statearr_16581_18590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (18))){
var inst_16438 = (state_16473[(2)]);
var state_16473__$1 = state_16473;
var statearr_16585_18591 = state_16473__$1;
(statearr_16585_18591[(2)] = inst_16438);

(statearr_16585_18591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16474 === (8))){
var inst_16406 = (state_16473[(12)]);
var inst_16407 = (state_16473[(13)]);
var inst_16409 = (inst_16407 < inst_16406);
var inst_16410 = inst_16409;
var state_16473__$1 = state_16473;
if(cljs.core.truth_(inst_16410)){
var statearr_16588_18592 = state_16473__$1;
(statearr_16588_18592[(1)] = (10));

} else {
var statearr_16593_18593 = state_16473__$1;
(statearr_16593_18593[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_16600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16600[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_16600[(1)] = (1));

return statearr_16600;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_16473){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_16473);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e16604){var ex__14132__auto__ = e16604;
var statearr_16605_18597 = state_16473;
(statearr_16605_18597[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_16473[(4)]))){
var statearr_16607_18599 = state_16473;
(statearr_16607_18599[(1)] = cljs.core.first((state_16473[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18605 = state_16473;
state_16473 = G__18605;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_16473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_16473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_16611 = f__14395__auto__();
(statearr_16611[(6)] = c__14394__auto___18553);

return statearr_16611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16617 = arguments.length;
switch (G__16617) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16636 = arguments.length;
switch (G__16636) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16659 = arguments.length;
switch (G__16659) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14394__auto___18623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_16713){
var state_val_16714 = (state_16713[(1)]);
if((state_val_16714 === (7))){
var state_16713__$1 = state_16713;
var statearr_16720_18628 = state_16713__$1;
(statearr_16720_18628[(2)] = null);

(statearr_16720_18628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (1))){
var state_16713__$1 = state_16713;
var statearr_16722_18629 = state_16713__$1;
(statearr_16722_18629[(2)] = null);

(statearr_16722_18629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (4))){
var inst_16666 = (state_16713[(7)]);
var inst_16665 = (state_16713[(8)]);
var inst_16669 = (inst_16666 < inst_16665);
var state_16713__$1 = state_16713;
if(cljs.core.truth_(inst_16669)){
var statearr_16724_18642 = state_16713__$1;
(statearr_16724_18642[(1)] = (6));

} else {
var statearr_16725_18643 = state_16713__$1;
(statearr_16725_18643[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (15))){
var inst_16697 = (state_16713[(9)]);
var inst_16702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16697);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16713__$1,(17),out,inst_16702);
} else {
if((state_val_16714 === (13))){
var inst_16697 = (state_16713[(9)]);
var inst_16697__$1 = (state_16713[(2)]);
var inst_16698 = cljs.core.some(cljs.core.nil_QMARK_,inst_16697__$1);
var state_16713__$1 = (function (){var statearr_16728 = state_16713;
(statearr_16728[(9)] = inst_16697__$1);

return statearr_16728;
})();
if(cljs.core.truth_(inst_16698)){
var statearr_16729_18644 = state_16713__$1;
(statearr_16729_18644[(1)] = (14));

} else {
var statearr_16730_18645 = state_16713__$1;
(statearr_16730_18645[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (6))){
var state_16713__$1 = state_16713;
var statearr_16731_18647 = state_16713__$1;
(statearr_16731_18647[(2)] = null);

(statearr_16731_18647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (17))){
var inst_16704 = (state_16713[(2)]);
var state_16713__$1 = (function (){var statearr_16735 = state_16713;
(statearr_16735[(10)] = inst_16704);

return statearr_16735;
})();
var statearr_16736_18648 = state_16713__$1;
(statearr_16736_18648[(2)] = null);

(statearr_16736_18648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (3))){
var inst_16709 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16713__$1,inst_16709);
} else {
if((state_val_16714 === (12))){
var _ = (function (){var statearr_16740 = state_16713;
(statearr_16740[(4)] = cljs.core.rest((state_16713[(4)])));

return statearr_16740;
})();
var state_16713__$1 = state_16713;
var ex16734 = (state_16713__$1[(2)]);
var statearr_16741_18649 = state_16713__$1;
(statearr_16741_18649[(5)] = ex16734);


if((ex16734 instanceof Object)){
var statearr_16744_18650 = state_16713__$1;
(statearr_16744_18650[(1)] = (11));

(statearr_16744_18650[(5)] = null);

} else {
throw ex16734;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (2))){
var inst_16664 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16665 = cnt;
var inst_16666 = (0);
var state_16713__$1 = (function (){var statearr_16745 = state_16713;
(statearr_16745[(7)] = inst_16666);

(statearr_16745[(8)] = inst_16665);

(statearr_16745[(11)] = inst_16664);

return statearr_16745;
})();
var statearr_16746_18654 = state_16713__$1;
(statearr_16746_18654[(2)] = null);

(statearr_16746_18654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (11))){
var inst_16673 = (state_16713[(2)]);
var inst_16674 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16713__$1 = (function (){var statearr_16747 = state_16713;
(statearr_16747[(12)] = inst_16673);

return statearr_16747;
})();
var statearr_16748_18658 = state_16713__$1;
(statearr_16748_18658[(2)] = inst_16674);

(statearr_16748_18658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (9))){
var inst_16666 = (state_16713[(7)]);
var _ = (function (){var statearr_16749 = state_16713;
(statearr_16749[(4)] = cljs.core.cons((12),(state_16713[(4)])));

return statearr_16749;
})();
var inst_16682 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16666) : chs__$1.call(null,inst_16666));
var inst_16683 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16666) : done.call(null,inst_16666));
var inst_16684 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16682,inst_16683);
var ___$1 = (function (){var statearr_16750 = state_16713;
(statearr_16750[(4)] = cljs.core.rest((state_16713[(4)])));

return statearr_16750;
})();
var state_16713__$1 = state_16713;
var statearr_16751_18659 = state_16713__$1;
(statearr_16751_18659[(2)] = inst_16684);

(statearr_16751_18659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (5))){
var inst_16694 = (state_16713[(2)]);
var state_16713__$1 = (function (){var statearr_16753 = state_16713;
(statearr_16753[(13)] = inst_16694);

return statearr_16753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16713__$1,(13),dchan);
} else {
if((state_val_16714 === (14))){
var inst_16700 = cljs.core.async.close_BANG_(out);
var state_16713__$1 = state_16713;
var statearr_16756_18662 = state_16713__$1;
(statearr_16756_18662[(2)] = inst_16700);

(statearr_16756_18662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (16))){
var inst_16707 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16757_18674 = state_16713__$1;
(statearr_16757_18674[(2)] = inst_16707);

(statearr_16757_18674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (10))){
var inst_16666 = (state_16713[(7)]);
var inst_16687 = (state_16713[(2)]);
var inst_16688 = (inst_16666 + (1));
var inst_16666__$1 = inst_16688;
var state_16713__$1 = (function (){var statearr_16762 = state_16713;
(statearr_16762[(14)] = inst_16687);

(statearr_16762[(7)] = inst_16666__$1);

return statearr_16762;
})();
var statearr_16763_18681 = state_16713__$1;
(statearr_16763_18681[(2)] = null);

(statearr_16763_18681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (8))){
var inst_16692 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16771_18682 = state_16713__$1;
(statearr_16771_18682[(2)] = inst_16692);

(statearr_16771_18682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_16776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16776[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_16776[(1)] = (1));

return statearr_16776;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_16713){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_16713);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e16778){var ex__14132__auto__ = e16778;
var statearr_16779_18683 = state_16713;
(statearr_16779_18683[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_16713[(4)]))){
var statearr_16781_18686 = state_16713;
(statearr_16781_18686[(1)] = cljs.core.first((state_16713[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18692 = state_16713;
state_16713 = G__18692;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_16713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_16713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_16787 = f__14395__auto__();
(statearr_16787[(6)] = c__14394__auto___18623);

return statearr_16787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16794 = arguments.length;
switch (G__16794) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14394__auto___18701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_16834){
var state_val_16835 = (state_16834[(1)]);
if((state_val_16835 === (7))){
var inst_16814 = (state_16834[(7)]);
var inst_16812 = (state_16834[(8)]);
var inst_16812__$1 = (state_16834[(2)]);
var inst_16814__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16812__$1,(0),null);
var inst_16815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16812__$1,(1),null);
var inst_16816 = (inst_16814__$1 == null);
var state_16834__$1 = (function (){var statearr_16841 = state_16834;
(statearr_16841[(7)] = inst_16814__$1);

(statearr_16841[(8)] = inst_16812__$1);

(statearr_16841[(9)] = inst_16815);

return statearr_16841;
})();
if(cljs.core.truth_(inst_16816)){
var statearr_16844_18709 = state_16834__$1;
(statearr_16844_18709[(1)] = (8));

} else {
var statearr_16845_18710 = state_16834__$1;
(statearr_16845_18710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16835 === (1))){
var inst_16799 = cljs.core.vec(chs);
var inst_16800 = inst_16799;
var state_16834__$1 = (function (){var statearr_16848 = state_16834;
(statearr_16848[(10)] = inst_16800);

return statearr_16848;
})();
var statearr_16849_18711 = state_16834__$1;
(statearr_16849_18711[(2)] = null);

(statearr_16849_18711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16835 === (4))){
var inst_16800 = (state_16834[(10)]);
var state_16834__$1 = state_16834;
return cljs.core.async.ioc_alts_BANG_(state_16834__$1,(7),inst_16800);
} else {
if((state_val_16835 === (6))){
var inst_16830 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
var statearr_16858_18716 = state_16834__$1;
(statearr_16858_18716[(2)] = inst_16830);

(statearr_16858_18716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16835 === (3))){
var inst_16832 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16834__$1,inst_16832);
} else {
if((state_val_16835 === (2))){
var inst_16800 = (state_16834[(10)]);
var inst_16805 = cljs.core.count(inst_16800);
var inst_16806 = (inst_16805 > (0));
var state_16834__$1 = state_16834;
if(cljs.core.truth_(inst_16806)){
var statearr_16864_18718 = state_16834__$1;
(statearr_16864_18718[(1)] = (4));

} else {
var statearr_16865_18722 = state_16834__$1;
(statearr_16865_18722[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16835 === (11))){
var inst_16800 = (state_16834[(10)]);
var inst_16823 = (state_16834[(2)]);
var tmp16862 = inst_16800;
var inst_16800__$1 = tmp16862;
var state_16834__$1 = (function (){var statearr_16869 = state_16834;
(statearr_16869[(10)] = inst_16800__$1);

(statearr_16869[(11)] = inst_16823);

return statearr_16869;
})();
var statearr_16870_18723 = state_16834__$1;
(statearr_16870_18723[(2)] = null);

(statearr_16870_18723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16835 === (9))){
var inst_16814 = (state_16834[(7)]);
var state_16834__$1 = state_16834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16834__$1,(11),out,inst_16814);
} else {
if((state_val_16835 === (5))){
var inst_16828 = cljs.core.async.close_BANG_(out);
var state_16834__$1 = state_16834;
var statearr_16876_18725 = state_16834__$1;
(statearr_16876_18725[(2)] = inst_16828);

(statearr_16876_18725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16835 === (10))){
var inst_16826 = (state_16834[(2)]);
var state_16834__$1 = state_16834;
var statearr_16877_18728 = state_16834__$1;
(statearr_16877_18728[(2)] = inst_16826);

(statearr_16877_18728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16835 === (8))){
var inst_16814 = (state_16834[(7)]);
var inst_16800 = (state_16834[(10)]);
var inst_16812 = (state_16834[(8)]);
var inst_16815 = (state_16834[(9)]);
var inst_16818 = (function (){var cs = inst_16800;
var vec__16808 = inst_16812;
var v = inst_16814;
var c = inst_16815;
return (function (p1__16792_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16792_SHARP_);
});
})();
var inst_16819 = cljs.core.filterv(inst_16818,inst_16800);
var inst_16800__$1 = inst_16819;
var state_16834__$1 = (function (){var statearr_16882 = state_16834;
(statearr_16882[(10)] = inst_16800__$1);

return statearr_16882;
})();
var statearr_16883_18737 = state_16834__$1;
(statearr_16883_18737[(2)] = null);

(statearr_16883_18737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_16886 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16886[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_16886[(1)] = (1));

return statearr_16886;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_16834){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_16834);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e16887){var ex__14132__auto__ = e16887;
var statearr_16888_18740 = state_16834;
(statearr_16888_18740[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_16834[(4)]))){
var statearr_16889_18741 = state_16834;
(statearr_16889_18741[(1)] = cljs.core.first((state_16834[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18742 = state_16834;
state_16834 = G__18742;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_16834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_16834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_16890 = f__14395__auto__();
(statearr_16890[(6)] = c__14394__auto___18701);

return statearr_16890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16900 = arguments.length;
switch (G__16900) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14394__auto___18752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_16935){
var state_val_16936 = (state_16935[(1)]);
if((state_val_16936 === (7))){
var inst_16917 = (state_16935[(7)]);
var inst_16917__$1 = (state_16935[(2)]);
var inst_16918 = (inst_16917__$1 == null);
var inst_16919 = cljs.core.not(inst_16918);
var state_16935__$1 = (function (){var statearr_16949 = state_16935;
(statearr_16949[(7)] = inst_16917__$1);

return statearr_16949;
})();
if(inst_16919){
var statearr_16950_18753 = state_16935__$1;
(statearr_16950_18753[(1)] = (8));

} else {
var statearr_16958_18754 = state_16935__$1;
(statearr_16958_18754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (1))){
var inst_16911 = (0);
var state_16935__$1 = (function (){var statearr_16960 = state_16935;
(statearr_16960[(8)] = inst_16911);

return statearr_16960;
})();
var statearr_16961_18755 = state_16935__$1;
(statearr_16961_18755[(2)] = null);

(statearr_16961_18755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (4))){
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16935__$1,(7),ch);
} else {
if((state_val_16936 === (6))){
var inst_16930 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16968_18759 = state_16935__$1;
(statearr_16968_18759[(2)] = inst_16930);

(statearr_16968_18759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (3))){
var inst_16932 = (state_16935[(2)]);
var inst_16933 = cljs.core.async.close_BANG_(out);
var state_16935__$1 = (function (){var statearr_16973 = state_16935;
(statearr_16973[(9)] = inst_16932);

return statearr_16973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16935__$1,inst_16933);
} else {
if((state_val_16936 === (2))){
var inst_16911 = (state_16935[(8)]);
var inst_16913 = (inst_16911 < n);
var state_16935__$1 = state_16935;
if(cljs.core.truth_(inst_16913)){
var statearr_16974_18761 = state_16935__$1;
(statearr_16974_18761[(1)] = (4));

} else {
var statearr_16975_18762 = state_16935__$1;
(statearr_16975_18762[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (11))){
var inst_16911 = (state_16935[(8)]);
var inst_16922 = (state_16935[(2)]);
var inst_16923 = (inst_16911 + (1));
var inst_16911__$1 = inst_16923;
var state_16935__$1 = (function (){var statearr_16979 = state_16935;
(statearr_16979[(8)] = inst_16911__$1);

(statearr_16979[(10)] = inst_16922);

return statearr_16979;
})();
var statearr_16981_18763 = state_16935__$1;
(statearr_16981_18763[(2)] = null);

(statearr_16981_18763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (9))){
var state_16935__$1 = state_16935;
var statearr_16982_18764 = state_16935__$1;
(statearr_16982_18764[(2)] = null);

(statearr_16982_18764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (5))){
var state_16935__$1 = state_16935;
var statearr_16986_18765 = state_16935__$1;
(statearr_16986_18765[(2)] = null);

(statearr_16986_18765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (10))){
var inst_16927 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16991_18766 = state_16935__$1;
(statearr_16991_18766[(2)] = inst_16927);

(statearr_16991_18766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (8))){
var inst_16917 = (state_16935[(7)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16935__$1,(11),out,inst_16917);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_16995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16995[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_16995[(1)] = (1));

return statearr_16995;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_16935){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_16935);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e16997){var ex__14132__auto__ = e16997;
var statearr_17002_18779 = state_16935;
(statearr_17002_18779[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_16935[(4)]))){
var statearr_17007_18780 = state_16935;
(statearr_17007_18780[(1)] = cljs.core.first((state_16935[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18781 = state_16935;
state_16935 = G__18781;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_17008 = f__14395__auto__();
(statearr_17008[(6)] = c__14394__auto___18752);

return statearr_17008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17045 = (function (f,ch,meta17014,_,fn1,meta17046){
this.f = f;
this.ch = ch;
this.meta17014 = meta17014;
this._ = _;
this.fn1 = fn1;
this.meta17046 = meta17046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17047,meta17046__$1){
var self__ = this;
var _17047__$1 = this;
return (new cljs.core.async.t_cljs$core$async17045(self__.f,self__.ch,self__.meta17014,self__._,self__.fn1,meta17046__$1));
}));

(cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17047){
var self__ = this;
var _17047__$1 = this;
return self__.meta17046;
}));

(cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17045.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17011_SHARP_){
var G__17051 = (((p1__17011_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17011_SHARP_) : self__.f.call(null,p1__17011_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17051) : f1.call(null,G__17051));
});
}));

(cljs.core.async.t_cljs$core$async17045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17014","meta17014",926873232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17013","cljs.core.async/t_cljs$core$async17013",1025230405,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17046","meta17046",1945605678,null)], null);
}));

(cljs.core.async.t_cljs$core$async17045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17045");

(cljs.core.async.t_cljs$core$async17045.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17045.
 */
cljs.core.async.__GT_t_cljs$core$async17045 = (function cljs$core$async$__GT_t_cljs$core$async17045(f,ch,meta17014,_,fn1,meta17046){
return (new cljs.core.async.t_cljs$core$async17045(f,ch,meta17014,_,fn1,meta17046));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17013 = (function (f,ch,meta17014){
this.f = f;
this.ch = ch;
this.meta17014 = meta17014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17015,meta17014__$1){
var self__ = this;
var _17015__$1 = this;
return (new cljs.core.async.t_cljs$core$async17013(self__.f,self__.ch,meta17014__$1));
}));

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17015){
var self__ = this;
var _17015__$1 = this;
return self__.meta17014;
}));

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17045(self__.f,self__.ch,self__.meta17014,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17053 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17053) : self__.f.call(null,G__17053));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17014","meta17014",926873232,null)], null);
}));

(cljs.core.async.t_cljs$core$async17013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17013");

(cljs.core.async.t_cljs$core$async17013.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17013.
 */
cljs.core.async.__GT_t_cljs$core$async17013 = (function cljs$core$async$__GT_t_cljs$core$async17013(f,ch,meta17014){
return (new cljs.core.async.t_cljs$core$async17013(f,ch,meta17014));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17013(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17057 = (function (f,ch,meta17058){
this.f = f;
this.ch = ch;
this.meta17058 = meta17058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17059,meta17058__$1){
var self__ = this;
var _17059__$1 = this;
return (new cljs.core.async.t_cljs$core$async17057(self__.f,self__.ch,meta17058__$1));
}));

(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17059){
var self__ = this;
var _17059__$1 = this;
return self__.meta17058;
}));

(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17057.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17058","meta17058",1406294362,null)], null);
}));

(cljs.core.async.t_cljs$core$async17057.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17057");

(cljs.core.async.t_cljs$core$async17057.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17057");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17057.
 */
cljs.core.async.__GT_t_cljs$core$async17057 = (function cljs$core$async$__GT_t_cljs$core$async17057(f,ch,meta17058){
return (new cljs.core.async.t_cljs$core$async17057(f,ch,meta17058));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17057(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17091 = (function (p,ch,meta17092){
this.p = p;
this.ch = ch;
this.meta17092 = meta17092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17093,meta17092__$1){
var self__ = this;
var _17093__$1 = this;
return (new cljs.core.async.t_cljs$core$async17091(self__.p,self__.ch,meta17092__$1));
}));

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17093){
var self__ = this;
var _17093__$1 = this;
return self__.meta17092;
}));

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17091.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17092","meta17092",-1780183091,null)], null);
}));

(cljs.core.async.t_cljs$core$async17091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17091");

(cljs.core.async.t_cljs$core$async17091.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17091.
 */
cljs.core.async.__GT_t_cljs$core$async17091 = (function cljs$core$async$__GT_t_cljs$core$async17091(p,ch,meta17092){
return (new cljs.core.async.t_cljs$core$async17091(p,ch,meta17092));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17091(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17112 = arguments.length;
switch (G__17112) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14394__auto___18805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_17149){
var state_val_17150 = (state_17149[(1)]);
if((state_val_17150 === (7))){
var inst_17145 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17151_18806 = state_17149__$1;
(statearr_17151_18806[(2)] = inst_17145);

(statearr_17151_18806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (1))){
var state_17149__$1 = state_17149;
var statearr_17152_18807 = state_17149__$1;
(statearr_17152_18807[(2)] = null);

(statearr_17152_18807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (4))){
var inst_17131 = (state_17149[(7)]);
var inst_17131__$1 = (state_17149[(2)]);
var inst_17132 = (inst_17131__$1 == null);
var state_17149__$1 = (function (){var statearr_17154 = state_17149;
(statearr_17154[(7)] = inst_17131__$1);

return statearr_17154;
})();
if(cljs.core.truth_(inst_17132)){
var statearr_17156_18809 = state_17149__$1;
(statearr_17156_18809[(1)] = (5));

} else {
var statearr_17157_18811 = state_17149__$1;
(statearr_17157_18811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (6))){
var inst_17131 = (state_17149[(7)]);
var inst_17136 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17131) : p.call(null,inst_17131));
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17136)){
var statearr_17158_18812 = state_17149__$1;
(statearr_17158_18812[(1)] = (8));

} else {
var statearr_17159_18813 = state_17149__$1;
(statearr_17159_18813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (3))){
var inst_17147 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17149__$1,inst_17147);
} else {
if((state_val_17150 === (2))){
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17149__$1,(4),ch);
} else {
if((state_val_17150 === (11))){
var inst_17139 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17165_18814 = state_17149__$1;
(statearr_17165_18814[(2)] = inst_17139);

(statearr_17165_18814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (9))){
var state_17149__$1 = state_17149;
var statearr_17166_18816 = state_17149__$1;
(statearr_17166_18816[(2)] = null);

(statearr_17166_18816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (5))){
var inst_17134 = cljs.core.async.close_BANG_(out);
var state_17149__$1 = state_17149;
var statearr_17167_18818 = state_17149__$1;
(statearr_17167_18818[(2)] = inst_17134);

(statearr_17167_18818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (10))){
var inst_17142 = (state_17149[(2)]);
var state_17149__$1 = (function (){var statearr_17174 = state_17149;
(statearr_17174[(8)] = inst_17142);

return statearr_17174;
})();
var statearr_17177_18822 = state_17149__$1;
(statearr_17177_18822[(2)] = null);

(statearr_17177_18822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17150 === (8))){
var inst_17131 = (state_17149[(7)]);
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17149__$1,(11),out,inst_17131);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_17186 = [null,null,null,null,null,null,null,null,null];
(statearr_17186[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_17186[(1)] = (1));

return statearr_17186;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_17149){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_17149);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e17187){var ex__14132__auto__ = e17187;
var statearr_17188_18823 = state_17149;
(statearr_17188_18823[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_17149[(4)]))){
var statearr_17191_18824 = state_17149;
(statearr_17191_18824[(1)] = cljs.core.first((state_17149[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18825 = state_17149;
state_17149 = G__18825;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_17149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_17149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_17193 = f__14395__auto__();
(statearr_17193[(6)] = c__14394__auto___18805);

return statearr_17193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17198 = arguments.length;
switch (G__17198) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14394__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_17302){
var state_val_17306 = (state_17302[(1)]);
if((state_val_17306 === (7))){
var inst_17298 = (state_17302[(2)]);
var state_17302__$1 = state_17302;
var statearr_17314_18830 = state_17302__$1;
(statearr_17314_18830[(2)] = inst_17298);

(statearr_17314_18830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (20))){
var inst_17267 = (state_17302[(7)]);
var inst_17278 = (state_17302[(2)]);
var inst_17279 = cljs.core.next(inst_17267);
var inst_17243 = inst_17279;
var inst_17244 = null;
var inst_17245 = (0);
var inst_17246 = (0);
var state_17302__$1 = (function (){var statearr_17320 = state_17302;
(statearr_17320[(8)] = inst_17245);

(statearr_17320[(9)] = inst_17243);

(statearr_17320[(10)] = inst_17246);

(statearr_17320[(11)] = inst_17278);

(statearr_17320[(12)] = inst_17244);

return statearr_17320;
})();
var statearr_17321_18831 = state_17302__$1;
(statearr_17321_18831[(2)] = null);

(statearr_17321_18831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (1))){
var state_17302__$1 = state_17302;
var statearr_17325_18832 = state_17302__$1;
(statearr_17325_18832[(2)] = null);

(statearr_17325_18832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (4))){
var inst_17226 = (state_17302[(13)]);
var inst_17226__$1 = (state_17302[(2)]);
var inst_17227 = (inst_17226__$1 == null);
var state_17302__$1 = (function (){var statearr_17329 = state_17302;
(statearr_17329[(13)] = inst_17226__$1);

return statearr_17329;
})();
if(cljs.core.truth_(inst_17227)){
var statearr_17330_18833 = state_17302__$1;
(statearr_17330_18833[(1)] = (5));

} else {
var statearr_17331_18834 = state_17302__$1;
(statearr_17331_18834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (15))){
var state_17302__$1 = state_17302;
var statearr_17338_18842 = state_17302__$1;
(statearr_17338_18842[(2)] = null);

(statearr_17338_18842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (21))){
var state_17302__$1 = state_17302;
var statearr_17339_18843 = state_17302__$1;
(statearr_17339_18843[(2)] = null);

(statearr_17339_18843[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (13))){
var inst_17245 = (state_17302[(8)]);
var inst_17243 = (state_17302[(9)]);
var inst_17246 = (state_17302[(10)]);
var inst_17244 = (state_17302[(12)]);
var inst_17257 = (state_17302[(2)]);
var inst_17264 = (inst_17246 + (1));
var tmp17334 = inst_17245;
var tmp17335 = inst_17243;
var tmp17336 = inst_17244;
var inst_17243__$1 = tmp17335;
var inst_17244__$1 = tmp17336;
var inst_17245__$1 = tmp17334;
var inst_17246__$1 = inst_17264;
var state_17302__$1 = (function (){var statearr_17347 = state_17302;
(statearr_17347[(8)] = inst_17245__$1);

(statearr_17347[(9)] = inst_17243__$1);

(statearr_17347[(10)] = inst_17246__$1);

(statearr_17347[(12)] = inst_17244__$1);

(statearr_17347[(14)] = inst_17257);

return statearr_17347;
})();
var statearr_17349_18844 = state_17302__$1;
(statearr_17349_18844[(2)] = null);

(statearr_17349_18844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (22))){
var state_17302__$1 = state_17302;
var statearr_17351_18845 = state_17302__$1;
(statearr_17351_18845[(2)] = null);

(statearr_17351_18845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (6))){
var inst_17226 = (state_17302[(13)]);
var inst_17241 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17226) : f.call(null,inst_17226));
var inst_17242 = cljs.core.seq(inst_17241);
var inst_17243 = inst_17242;
var inst_17244 = null;
var inst_17245 = (0);
var inst_17246 = (0);
var state_17302__$1 = (function (){var statearr_17355 = state_17302;
(statearr_17355[(8)] = inst_17245);

(statearr_17355[(9)] = inst_17243);

(statearr_17355[(10)] = inst_17246);

(statearr_17355[(12)] = inst_17244);

return statearr_17355;
})();
var statearr_17357_18846 = state_17302__$1;
(statearr_17357_18846[(2)] = null);

(statearr_17357_18846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (17))){
var inst_17267 = (state_17302[(7)]);
var inst_17271 = cljs.core.chunk_first(inst_17267);
var inst_17272 = cljs.core.chunk_rest(inst_17267);
var inst_17273 = cljs.core.count(inst_17271);
var inst_17243 = inst_17272;
var inst_17244 = inst_17271;
var inst_17245 = inst_17273;
var inst_17246 = (0);
var state_17302__$1 = (function (){var statearr_17359 = state_17302;
(statearr_17359[(8)] = inst_17245);

(statearr_17359[(9)] = inst_17243);

(statearr_17359[(10)] = inst_17246);

(statearr_17359[(12)] = inst_17244);

return statearr_17359;
})();
var statearr_17360_18848 = state_17302__$1;
(statearr_17360_18848[(2)] = null);

(statearr_17360_18848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (3))){
var inst_17300 = (state_17302[(2)]);
var state_17302__$1 = state_17302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17302__$1,inst_17300);
} else {
if((state_val_17306 === (12))){
var inst_17287 = (state_17302[(2)]);
var state_17302__$1 = state_17302;
var statearr_17365_18849 = state_17302__$1;
(statearr_17365_18849[(2)] = inst_17287);

(statearr_17365_18849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (2))){
var state_17302__$1 = state_17302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17302__$1,(4),in$);
} else {
if((state_val_17306 === (23))){
var inst_17296 = (state_17302[(2)]);
var state_17302__$1 = state_17302;
var statearr_17370_18850 = state_17302__$1;
(statearr_17370_18850[(2)] = inst_17296);

(statearr_17370_18850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (19))){
var inst_17282 = (state_17302[(2)]);
var state_17302__$1 = state_17302;
var statearr_17375_18860 = state_17302__$1;
(statearr_17375_18860[(2)] = inst_17282);

(statearr_17375_18860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (11))){
var inst_17243 = (state_17302[(9)]);
var inst_17267 = (state_17302[(7)]);
var inst_17267__$1 = cljs.core.seq(inst_17243);
var state_17302__$1 = (function (){var statearr_17379 = state_17302;
(statearr_17379[(7)] = inst_17267__$1);

return statearr_17379;
})();
if(inst_17267__$1){
var statearr_17382_18862 = state_17302__$1;
(statearr_17382_18862[(1)] = (14));

} else {
var statearr_17383_18863 = state_17302__$1;
(statearr_17383_18863[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (9))){
var inst_17289 = (state_17302[(2)]);
var inst_17291 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17302__$1 = (function (){var statearr_17385 = state_17302;
(statearr_17385[(15)] = inst_17289);

return statearr_17385;
})();
if(cljs.core.truth_(inst_17291)){
var statearr_17386_18867 = state_17302__$1;
(statearr_17386_18867[(1)] = (21));

} else {
var statearr_17387_18868 = state_17302__$1;
(statearr_17387_18868[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (5))){
var inst_17229 = cljs.core.async.close_BANG_(out);
var state_17302__$1 = state_17302;
var statearr_17390_18872 = state_17302__$1;
(statearr_17390_18872[(2)] = inst_17229);

(statearr_17390_18872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (14))){
var inst_17267 = (state_17302[(7)]);
var inst_17269 = cljs.core.chunked_seq_QMARK_(inst_17267);
var state_17302__$1 = state_17302;
if(inst_17269){
var statearr_17395_18873 = state_17302__$1;
(statearr_17395_18873[(1)] = (17));

} else {
var statearr_17396_18874 = state_17302__$1;
(statearr_17396_18874[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (16))){
var inst_17285 = (state_17302[(2)]);
var state_17302__$1 = state_17302;
var statearr_17397_18875 = state_17302__$1;
(statearr_17397_18875[(2)] = inst_17285);

(statearr_17397_18875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17306 === (10))){
var inst_17246 = (state_17302[(10)]);
var inst_17244 = (state_17302[(12)]);
var inst_17252 = cljs.core._nth(inst_17244,inst_17246);
var state_17302__$1 = state_17302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17302__$1,(13),out,inst_17252);
} else {
if((state_val_17306 === (18))){
var inst_17267 = (state_17302[(7)]);
var inst_17276 = cljs.core.first(inst_17267);
var state_17302__$1 = state_17302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17302__$1,(20),out,inst_17276);
} else {
if((state_val_17306 === (8))){
var inst_17245 = (state_17302[(8)]);
var inst_17246 = (state_17302[(10)]);
var inst_17248 = (inst_17246 < inst_17245);
var inst_17249 = inst_17248;
var state_17302__$1 = state_17302;
if(cljs.core.truth_(inst_17249)){
var statearr_17398_18883 = state_17302__$1;
(statearr_17398_18883[(1)] = (10));

} else {
var statearr_17399_18884 = state_17302__$1;
(statearr_17399_18884[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14129__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14129__auto____0 = (function (){
var statearr_17402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17402[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14129__auto__);

(statearr_17402[(1)] = (1));

return statearr_17402;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14129__auto____1 = (function (state_17302){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_17302);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e17403){var ex__14132__auto__ = e17403;
var statearr_17404_18885 = state_17302;
(statearr_17404_18885[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_17302[(4)]))){
var statearr_17408_18886 = state_17302;
(statearr_17408_18886[(1)] = cljs.core.first((state_17302[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18887 = state_17302;
state_17302 = G__18887;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14129__auto__ = function(state_17302){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14129__auto____1.call(this,state_17302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14129__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14129__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_17410 = f__14395__auto__();
(statearr_17410[(6)] = c__14394__auto__);

return statearr_17410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));

return c__14394__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17417 = arguments.length;
switch (G__17417) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17429 = arguments.length;
switch (G__17429) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17434 = arguments.length;
switch (G__17434) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14394__auto___18904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_17462){
var state_val_17463 = (state_17462[(1)]);
if((state_val_17463 === (7))){
var inst_17457 = (state_17462[(2)]);
var state_17462__$1 = state_17462;
var statearr_17466_18905 = state_17462__$1;
(statearr_17466_18905[(2)] = inst_17457);

(statearr_17466_18905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (1))){
var inst_17439 = null;
var state_17462__$1 = (function (){var statearr_17467 = state_17462;
(statearr_17467[(7)] = inst_17439);

return statearr_17467;
})();
var statearr_17468_18906 = state_17462__$1;
(statearr_17468_18906[(2)] = null);

(statearr_17468_18906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (4))){
var inst_17442 = (state_17462[(8)]);
var inst_17442__$1 = (state_17462[(2)]);
var inst_17443 = (inst_17442__$1 == null);
var inst_17444 = cljs.core.not(inst_17443);
var state_17462__$1 = (function (){var statearr_17469 = state_17462;
(statearr_17469[(8)] = inst_17442__$1);

return statearr_17469;
})();
if(inst_17444){
var statearr_17470_18907 = state_17462__$1;
(statearr_17470_18907[(1)] = (5));

} else {
var statearr_17471_18908 = state_17462__$1;
(statearr_17471_18908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (6))){
var state_17462__$1 = state_17462;
var statearr_17474_18910 = state_17462__$1;
(statearr_17474_18910[(2)] = null);

(statearr_17474_18910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (3))){
var inst_17459 = (state_17462[(2)]);
var inst_17460 = cljs.core.async.close_BANG_(out);
var state_17462__$1 = (function (){var statearr_17478 = state_17462;
(statearr_17478[(9)] = inst_17459);

return statearr_17478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17462__$1,inst_17460);
} else {
if((state_val_17463 === (2))){
var state_17462__$1 = state_17462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17462__$1,(4),ch);
} else {
if((state_val_17463 === (11))){
var inst_17442 = (state_17462[(8)]);
var inst_17451 = (state_17462[(2)]);
var inst_17439 = inst_17442;
var state_17462__$1 = (function (){var statearr_17480 = state_17462;
(statearr_17480[(10)] = inst_17451);

(statearr_17480[(7)] = inst_17439);

return statearr_17480;
})();
var statearr_17481_18911 = state_17462__$1;
(statearr_17481_18911[(2)] = null);

(statearr_17481_18911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (9))){
var inst_17442 = (state_17462[(8)]);
var state_17462__$1 = state_17462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17462__$1,(11),out,inst_17442);
} else {
if((state_val_17463 === (5))){
var inst_17439 = (state_17462[(7)]);
var inst_17442 = (state_17462[(8)]);
var inst_17446 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17442,inst_17439);
var state_17462__$1 = state_17462;
if(inst_17446){
var statearr_17484_18913 = state_17462__$1;
(statearr_17484_18913[(1)] = (8));

} else {
var statearr_17485_18914 = state_17462__$1;
(statearr_17485_18914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (10))){
var inst_17454 = (state_17462[(2)]);
var state_17462__$1 = state_17462;
var statearr_17488_18915 = state_17462__$1;
(statearr_17488_18915[(2)] = inst_17454);

(statearr_17488_18915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17463 === (8))){
var inst_17439 = (state_17462[(7)]);
var tmp17483 = inst_17439;
var inst_17439__$1 = tmp17483;
var state_17462__$1 = (function (){var statearr_17489 = state_17462;
(statearr_17489[(7)] = inst_17439__$1);

return statearr_17489;
})();
var statearr_17490_18920 = state_17462__$1;
(statearr_17490_18920[(2)] = null);

(statearr_17490_18920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_17494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17494[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_17494[(1)] = (1));

return statearr_17494;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_17462){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_17462);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e17495){var ex__14132__auto__ = e17495;
var statearr_17496_18922 = state_17462;
(statearr_17496_18922[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_17462[(4)]))){
var statearr_17503_18923 = state_17462;
(statearr_17503_18923[(1)] = cljs.core.first((state_17462[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18927 = state_17462;
state_17462 = G__18927;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_17462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_17462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_17505 = f__14395__auto__();
(statearr_17505[(6)] = c__14394__auto___18904);

return statearr_17505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17508 = arguments.length;
switch (G__17508) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14394__auto___18934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_17551){
var state_val_17552 = (state_17551[(1)]);
if((state_val_17552 === (7))){
var inst_17544 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
var statearr_17554_18935 = state_17551__$1;
(statearr_17554_18935[(2)] = inst_17544);

(statearr_17554_18935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (1))){
var inst_17511 = (new Array(n));
var inst_17512 = inst_17511;
var inst_17513 = (0);
var state_17551__$1 = (function (){var statearr_17558 = state_17551;
(statearr_17558[(7)] = inst_17512);

(statearr_17558[(8)] = inst_17513);

return statearr_17558;
})();
var statearr_17559_18942 = state_17551__$1;
(statearr_17559_18942[(2)] = null);

(statearr_17559_18942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (4))){
var inst_17516 = (state_17551[(9)]);
var inst_17516__$1 = (state_17551[(2)]);
var inst_17517 = (inst_17516__$1 == null);
var inst_17518 = cljs.core.not(inst_17517);
var state_17551__$1 = (function (){var statearr_17561 = state_17551;
(statearr_17561[(9)] = inst_17516__$1);

return statearr_17561;
})();
if(inst_17518){
var statearr_17569_18946 = state_17551__$1;
(statearr_17569_18946[(1)] = (5));

} else {
var statearr_17574_18947 = state_17551__$1;
(statearr_17574_18947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (15))){
var inst_17538 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
var statearr_17578_18948 = state_17551__$1;
(statearr_17578_18948[(2)] = inst_17538);

(statearr_17578_18948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (13))){
var state_17551__$1 = state_17551;
var statearr_17579_18949 = state_17551__$1;
(statearr_17579_18949[(2)] = null);

(statearr_17579_18949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (6))){
var inst_17513 = (state_17551[(8)]);
var inst_17534 = (inst_17513 > (0));
var state_17551__$1 = state_17551;
if(cljs.core.truth_(inst_17534)){
var statearr_17580_18954 = state_17551__$1;
(statearr_17580_18954[(1)] = (12));

} else {
var statearr_17581_18955 = state_17551__$1;
(statearr_17581_18955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (3))){
var inst_17546 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17551__$1,inst_17546);
} else {
if((state_val_17552 === (12))){
var inst_17512 = (state_17551[(7)]);
var inst_17536 = cljs.core.vec(inst_17512);
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17551__$1,(15),out,inst_17536);
} else {
if((state_val_17552 === (2))){
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17551__$1,(4),ch);
} else {
if((state_val_17552 === (11))){
var inst_17528 = (state_17551[(2)]);
var inst_17529 = (new Array(n));
var inst_17512 = inst_17529;
var inst_17513 = (0);
var state_17551__$1 = (function (){var statearr_17587 = state_17551;
(statearr_17587[(10)] = inst_17528);

(statearr_17587[(7)] = inst_17512);

(statearr_17587[(8)] = inst_17513);

return statearr_17587;
})();
var statearr_17588_18956 = state_17551__$1;
(statearr_17588_18956[(2)] = null);

(statearr_17588_18956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (9))){
var inst_17512 = (state_17551[(7)]);
var inst_17526 = cljs.core.vec(inst_17512);
var state_17551__$1 = state_17551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17551__$1,(11),out,inst_17526);
} else {
if((state_val_17552 === (5))){
var inst_17516 = (state_17551[(9)]);
var inst_17521 = (state_17551[(11)]);
var inst_17512 = (state_17551[(7)]);
var inst_17513 = (state_17551[(8)]);
var inst_17520 = (inst_17512[inst_17513] = inst_17516);
var inst_17521__$1 = (inst_17513 + (1));
var inst_17522 = (inst_17521__$1 < n);
var state_17551__$1 = (function (){var statearr_17591 = state_17551;
(statearr_17591[(12)] = inst_17520);

(statearr_17591[(11)] = inst_17521__$1);

return statearr_17591;
})();
if(cljs.core.truth_(inst_17522)){
var statearr_17592_18958 = state_17551__$1;
(statearr_17592_18958[(1)] = (8));

} else {
var statearr_17593_18959 = state_17551__$1;
(statearr_17593_18959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (14))){
var inst_17541 = (state_17551[(2)]);
var inst_17542 = cljs.core.async.close_BANG_(out);
var state_17551__$1 = (function (){var statearr_17595 = state_17551;
(statearr_17595[(13)] = inst_17541);

return statearr_17595;
})();
var statearr_17596_18961 = state_17551__$1;
(statearr_17596_18961[(2)] = inst_17542);

(statearr_17596_18961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (10))){
var inst_17532 = (state_17551[(2)]);
var state_17551__$1 = state_17551;
var statearr_17598_18962 = state_17551__$1;
(statearr_17598_18962[(2)] = inst_17532);

(statearr_17598_18962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17552 === (8))){
var inst_17521 = (state_17551[(11)]);
var inst_17512 = (state_17551[(7)]);
var tmp17594 = inst_17512;
var inst_17512__$1 = tmp17594;
var inst_17513 = inst_17521;
var state_17551__$1 = (function (){var statearr_17600 = state_17551;
(statearr_17600[(7)] = inst_17512__$1);

(statearr_17600[(8)] = inst_17513);

return statearr_17600;
})();
var statearr_17604_18963 = state_17551__$1;
(statearr_17604_18963[(2)] = null);

(statearr_17604_18963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_17606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17606[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_17606[(1)] = (1));

return statearr_17606;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_17551){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_17551);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e17607){var ex__14132__auto__ = e17607;
var statearr_17608_18969 = state_17551;
(statearr_17608_18969[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_17551[(4)]))){
var statearr_17612_18970 = state_17551;
(statearr_17612_18970[(1)] = cljs.core.first((state_17551[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18974 = state_17551;
state_17551 = G__18974;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_17551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_17551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_17615 = f__14395__auto__();
(statearr_17615[(6)] = c__14394__auto___18934);

return statearr_17615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17622 = arguments.length;
switch (G__17622) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14394__auto___18976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14395__auto__ = (function (){var switch__14128__auto__ = (function (state_17679){
var state_val_17680 = (state_17679[(1)]);
if((state_val_17680 === (7))){
var inst_17675 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17684_18977 = state_17679__$1;
(statearr_17684_18977[(2)] = inst_17675);

(statearr_17684_18977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (1))){
var inst_17629 = [];
var inst_17630 = inst_17629;
var inst_17631 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17679__$1 = (function (){var statearr_17689 = state_17679;
(statearr_17689[(7)] = inst_17630);

(statearr_17689[(8)] = inst_17631);

return statearr_17689;
})();
var statearr_17690_18978 = state_17679__$1;
(statearr_17690_18978[(2)] = null);

(statearr_17690_18978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (4))){
var inst_17634 = (state_17679[(9)]);
var inst_17634__$1 = (state_17679[(2)]);
var inst_17636 = (inst_17634__$1 == null);
var inst_17637 = cljs.core.not(inst_17636);
var state_17679__$1 = (function (){var statearr_17691 = state_17679;
(statearr_17691[(9)] = inst_17634__$1);

return statearr_17691;
})();
if(inst_17637){
var statearr_17693_18979 = state_17679__$1;
(statearr_17693_18979[(1)] = (5));

} else {
var statearr_17697_18980 = state_17679__$1;
(statearr_17697_18980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (15))){
var inst_17630 = (state_17679[(7)]);
var inst_17667 = cljs.core.vec(inst_17630);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17679__$1,(18),out,inst_17667);
} else {
if((state_val_17680 === (13))){
var inst_17662 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17702_18981 = state_17679__$1;
(statearr_17702_18981[(2)] = inst_17662);

(statearr_17702_18981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (6))){
var inst_17630 = (state_17679[(7)]);
var inst_17664 = inst_17630.length;
var inst_17665 = (inst_17664 > (0));
var state_17679__$1 = state_17679;
if(cljs.core.truth_(inst_17665)){
var statearr_17704_18985 = state_17679__$1;
(statearr_17704_18985[(1)] = (15));

} else {
var statearr_17705_18986 = state_17679__$1;
(statearr_17705_18986[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (17))){
var inst_17672 = (state_17679[(2)]);
var inst_17673 = cljs.core.async.close_BANG_(out);
var state_17679__$1 = (function (){var statearr_17707 = state_17679;
(statearr_17707[(10)] = inst_17672);

return statearr_17707;
})();
var statearr_17710_18988 = state_17679__$1;
(statearr_17710_18988[(2)] = inst_17673);

(statearr_17710_18988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (3))){
var inst_17677 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17679__$1,inst_17677);
} else {
if((state_val_17680 === (12))){
var inst_17630 = (state_17679[(7)]);
var inst_17654 = cljs.core.vec(inst_17630);
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17679__$1,(14),out,inst_17654);
} else {
if((state_val_17680 === (2))){
var state_17679__$1 = state_17679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17679__$1,(4),ch);
} else {
if((state_val_17680 === (11))){
var inst_17630 = (state_17679[(7)]);
var inst_17639 = (state_17679[(11)]);
var inst_17634 = (state_17679[(9)]);
var inst_17651 = inst_17630.push(inst_17634);
var tmp17712 = inst_17630;
var inst_17630__$1 = tmp17712;
var inst_17631 = inst_17639;
var state_17679__$1 = (function (){var statearr_17713 = state_17679;
(statearr_17713[(12)] = inst_17651);

(statearr_17713[(7)] = inst_17630__$1);

(statearr_17713[(8)] = inst_17631);

return statearr_17713;
})();
var statearr_17714_18993 = state_17679__$1;
(statearr_17714_18993[(2)] = null);

(statearr_17714_18993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (9))){
var inst_17631 = (state_17679[(8)]);
var inst_17645 = cljs.core.keyword_identical_QMARK_(inst_17631,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17679__$1 = state_17679;
var statearr_17715_18997 = state_17679__$1;
(statearr_17715_18997[(2)] = inst_17645);

(statearr_17715_18997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (5))){
var inst_17631 = (state_17679[(8)]);
var inst_17639 = (state_17679[(11)]);
var inst_17641 = (state_17679[(13)]);
var inst_17634 = (state_17679[(9)]);
var inst_17639__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17634) : f.call(null,inst_17634));
var inst_17641__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17639__$1,inst_17631);
var state_17679__$1 = (function (){var statearr_17716 = state_17679;
(statearr_17716[(11)] = inst_17639__$1);

(statearr_17716[(13)] = inst_17641__$1);

return statearr_17716;
})();
if(inst_17641__$1){
var statearr_17717_18998 = state_17679__$1;
(statearr_17717_18998[(1)] = (8));

} else {
var statearr_17718_18999 = state_17679__$1;
(statearr_17718_18999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (14))){
var inst_17639 = (state_17679[(11)]);
var inst_17634 = (state_17679[(9)]);
var inst_17656 = (state_17679[(2)]);
var inst_17658 = [];
var inst_17659 = inst_17658.push(inst_17634);
var inst_17630 = inst_17658;
var inst_17631 = inst_17639;
var state_17679__$1 = (function (){var statearr_17722 = state_17679;
(statearr_17722[(14)] = inst_17659);

(statearr_17722[(15)] = inst_17656);

(statearr_17722[(7)] = inst_17630);

(statearr_17722[(8)] = inst_17631);

return statearr_17722;
})();
var statearr_17725_19000 = state_17679__$1;
(statearr_17725_19000[(2)] = null);

(statearr_17725_19000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (16))){
var state_17679__$1 = state_17679;
var statearr_17729_19005 = state_17679__$1;
(statearr_17729_19005[(2)] = null);

(statearr_17729_19005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (10))){
var inst_17647 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
if(cljs.core.truth_(inst_17647)){
var statearr_17732_19009 = state_17679__$1;
(statearr_17732_19009[(1)] = (11));

} else {
var statearr_17733_19010 = state_17679__$1;
(statearr_17733_19010[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (18))){
var inst_17669 = (state_17679[(2)]);
var state_17679__$1 = state_17679;
var statearr_17737_19011 = state_17679__$1;
(statearr_17737_19011[(2)] = inst_17669);

(statearr_17737_19011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17680 === (8))){
var inst_17641 = (state_17679[(13)]);
var state_17679__$1 = state_17679;
var statearr_17738_19015 = state_17679__$1;
(statearr_17738_19015[(2)] = inst_17641);

(statearr_17738_19015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14129__auto__ = null;
var cljs$core$async$state_machine__14129__auto____0 = (function (){
var statearr_17752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17752[(0)] = cljs$core$async$state_machine__14129__auto__);

(statearr_17752[(1)] = (1));

return statearr_17752;
});
var cljs$core$async$state_machine__14129__auto____1 = (function (state_17679){
while(true){
var ret_value__14130__auto__ = (function (){try{while(true){
var result__14131__auto__ = switch__14128__auto__(state_17679);
if(cljs.core.keyword_identical_QMARK_(result__14131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14131__auto__;
}
break;
}
}catch (e17753){var ex__14132__auto__ = e17753;
var statearr_17754_19016 = state_17679;
(statearr_17754_19016[(2)] = ex__14132__auto__);


if(cljs.core.seq((state_17679[(4)]))){
var statearr_17755_19017 = state_17679;
(statearr_17755_19017[(1)] = cljs.core.first((state_17679[(4)])));

} else {
throw ex__14132__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19018 = state_17679;
state_17679 = G__19018;
continue;
} else {
return ret_value__14130__auto__;
}
break;
}
});
cljs$core$async$state_machine__14129__auto__ = function(state_17679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14129__auto____1.call(this,state_17679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14129__auto____0;
cljs$core$async$state_machine__14129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14129__auto____1;
return cljs$core$async$state_machine__14129__auto__;
})()
})();
var state__14396__auto__ = (function (){var statearr_17756 = f__14395__auto__();
(statearr_17756[(6)] = c__14394__auto___18976);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14396__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
