/**
 * Created by wb-gaoyu.b on 2016/8/4.
 */
var index={

    init:function(){
        //数据类型判断
        // undefined
        //string
        //null
        //boolean
        //number
        this.a=null;
        this.b=undefined;
        this.c='123';
        this.d=false;
        this.e=2222;
        this.arr=[1,2,3,4];
        this.reg=/M/
        this.fu=function(){
        };
        //this.typeoffunction();
        //this.instanceofFunction()
        console.log(this.isPlainObject(this.fu))
    },
    typeoffunction:function(){
        console.log(this)
        console.log(typeof this.a);
        console.log(typeof this.b);
        console.log(typeof this.c);
        console.log(typeof this.d);
        console.log(typeof this.e);
        console.log(typeof this.this)
        console.log(typeof this.arr)//obj
        console.log(typeof this.fu);//fun
        console.log(typeof this.reg);//obj
        console.log(typeof window.alert)//在谷歌上function但是在IE678上是object
    },
    instanceofFunction:function(){
        console.log(this.a instanceof Function);
        console.log(this.b instanceof Object);
        console.log(this.c instanceof String);
        console.log(this.d instanceof Boolean);
        console.log(this.e instanceof Number);
        console.log(this.this instanceof Array)
        console.log(this.arr instanceof Object)//obj
        console.log(this.fu instanceof Function);//fun
        console.log(this.fu instanceof Object);//fun
        console.log(this.reg instanceof Object);//obj
        function Cat(){}

        Cat.prototype = {}



        function Dog(){}

        Dog.prototype ={}



        var dog1 = new Dog();

        console.log(dog1 instanceof Dog);//true

        console.log(dog1 instanceof Object);//true



        Dog.prototype = Cat.prototype;

        console.log(dog1 instanceof Dog);//false

        console.log(dog1 instanceof Cat);//false

        console.log(dog1 instanceof Object);//true;



        var  dog2= new Dog();

        console.log(dog2 instanceof Dog);//true

        console.log(dog2 instanceof Cat);//true

        console.log(dog2 instanceof Object);//true



        Dog.prototype = null;

        var dog3 = new Dog();

        console.log(dog3 instanceof Cat);//false

        console.log(dog3 instanceof Object);//true

        //console(dog3 instanceof Dog);//error
        //instanceof 检测一个对象A是不是另一个对象B的实例的原理是：查看对象B的prototype指向的对象是否在对象A的[[prototype]]链上。
        //如果在，则返回true,如果不在则返回false。不过有一个特殊的情况，当对象B的prototype为null将会报错(类似于空指针异常)。
    //更重的一点是 instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型。
    },
    //type:判断数据类型
//    如果对象是undefined或null，则返回相应的“undefined”或“null”。
//jQuery.type( undefined ) === "undefined"
//jQuery.type() === "undefined"
//jQuery.type( window.notDefined ) === "undefined"
//jQuery.type( null ) === "null"
//如果对象有一个内部的[[Class]]和一个浏览器的内置对象的 [[Class]] 相同，我们返回相应的 [[Class]] 名字。 (有关此技术的更多细节。 )
//jQuery.type( true ) === "boolean"
//jQuery.type( 3 ) === "number"
//jQuery.type( "test" ) === "string"
//jQuery.type( function(){} ) === "function"
//jQuery.type( [] ) === "array"
//jQuery.type( new Date() ) === "date"
//jQuery.type( new Error() ) === "error" // as of jQuery 1.9
//jQuery.type( /test/ ) === "regexp"
//其他一切都将返回它的类型“object”。
    isPlainObject:function(obj){
        if($.type(obj)!=="object" || obj.nodeType|| $.isWindow(obj)){
        //    首先排除基础类型为object的类型，然后DOM节点与window对象
            return false;
        }
    //    然后回溯它最近的原型对象是否一样isPrototypeOf,
    //    旧版本IE的一些原生对象没有暴露constructor，prototype
        try{
            if(obj.constructor && !hasOwn.call(obj.constructor.prototype,'isPrototypeOf')){
                return false;
            }
        }catch(e){
            return false;
        }
        return true;

    },
    isPlainObject2:function(obj){
        //Object.getPrototypeOf(obj)返回对象的原型。
        return obj&&typeof obj==="object"&&Object.getPrototypeOf(obj)===Object.prototype;
    },
    //判断类数组
    isArrayLike:function(obj){
        var length=obj.length,type= $.type(obj);
        if($.isWindow(obj)){
            return false;
        }
        //如果节点是元素节点，则 nodeType 属性将返回 1。
        //如果节点是属性节点，则 nodeType 属性将返回 2。
        if(obj.nodeType===1 && length){
            return true;

        }
        return type==='array'||type!=='function' && (length===0||typeof length==="number" && length>0 && (length-1) in obj)

    },
    isArrarLike2:function(){
        if(obj && typeof obj==='object'){
            var n=obj.length;
            if(+n===n && !(n%1) && n>=0){
            //    检测length是否为负数 +n 正数n !(n%1)为0,
                try{
                //    像Argument，Array ，NodeList 等原生对象的length属性是不可遍历的。
                    if({}.propertyIsEnumerable.call(obj,'length')===false){
                        //propertyIsEnumerable()是用来检测属性是否属于某个对象的,如果检测到了,返回true,否则返回false，
                    //    检测obj中是否存在length属性通过propertyIsEnumerable()方法来检测。
                    //    call 调用一个对象的一个方法，以另一个对象替换当前对象。
                        return Array.isArray(obj)||/^\s?function/.test(obj.item||obj.callee)
                    //      callee 属性是 arguments 对象的一个成员，它表示对函数对象本身的引用，这有利于匿名函数的递归或者保证函数的封装性，例如下边示例的递归计算1到n的自然数之和。而该属性仅当相关函数正在执行时才可用。还有需要注意的是callee拥有length属性，这个属性有时候用于验证还是比较好的。arguments.length是实参长度，arguments.callee.length是
                    //    形参长度，由此可以判断调用时形参长度是否和实参长度一致。


                    }
                    return true;
                }catch (e){
                    return true;
                }
            }
        }
        return false;
    //    以上任意一点return 之后下面代码都停止运行。不管是true 还是false
    },
    isArrarLike3:function(obj){
        if(obj && typeof obj==="object"){
            var n=obj.length;
            var str=Object.prototype.toString.call(obj);
            //obj替换成Object.prototype.toString
            if(/Array|NodeList|Arguments|CSSRuleList/.test(str)){
            //    CSSRule 对象是一个基类，用于定义 CSS 样式表中的任何规则，包括规则集（rule sets）和 @ 规则（at-rules）。
            //    规则存在若干种类型。所有这些类型在 CSSRule 接口共享的通用属性并不多，大部分类型都拥有专门针对特定规则类型的属性。
                return true;
            }else if(str==='[object Object]'&&(+n===n&&!(n%1)&&n>=0)){
                return true;
            //    由于ecma262v5能修改对象的属性的enumerable，因此不能用propertyIsEnumerable来判断
            }

        }
        return false;
    },
    //domReady
    IEContentLoaded:function(w,fn){
        var d= w.document,done=false,init= function () {
            if(!done){
                done=true;
                fn();
            //    这里只执行一次
            }
        }
        (function(){
            try{
                //ie有个特有的doScroll方法，当页面DOM未加载完成时，调用doScroll方法时，就会报错，反过来，只要一直间隔调用doScroll直到不报错，那就表示页面DOM加载完毕了。
                d.documentElement.doScroll('left');
            //    在dom未建完之前调用元素doScroll会抛出错误
            }catch (e){
                //延迟在试
                setTimeout(arguments.callee,50);
                //arguments.callee//   返回正被执行的 Function 对象
                return;
            }
            init();
        })()
    },
//    无冲突处理
    noConflictJquery: function () {

            $.extend({
                noConflict:function(deep){
                    window.$=_$=undefined;
                    if(deep){
                        window.jQuery=_jQuery;
                        return jQuery;
                    }
                }
            })



    }




}
index.init();





				 
