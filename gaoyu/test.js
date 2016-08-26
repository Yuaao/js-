var test={
    init:function(){
        // this.promptNumber();
        this.knowArray();
        this.knowString();
        this.konwRegExp();
        this.konwMath();
        this.komwDate();
        // this.konwError();
        this.konwFunction();
        this.konwObject()
    },
    promptNumber:function(){
        var m=window.prompt('请输入一个质数');
        var k=Math.sqrt(m);
        for(var i=2;i<=k;i++){
            if(m%i==0){
                break;
            }

        }
        if(i>k){
            console.log('是质数')
        }else{
            console.log('不是质数')
        }

    },
    // 数组中一个数第一次出现的下标
    indexOf:function (arr,value){
        var index=-1;
        for(var i=0;i<arr.length;i++){
            if(arr[i]==value){
                index=i;
                break;
            }
        }
        return index;
    },
    // 获取数组中的最大值
    getMax:function (arr){
        // var arr=[1,13,10,6];
        var max=arr[0];
        for(i=0;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i]
            }
        }
        return max;
    },
    knowArray:  function(){
        var arr=[1,2,3,4,'gaoyu','made'];
        console.log(arr.join('@'));//每个元素以@拼接成字符串
        console.log(arr.concat(1,2));//concat() 方法用于连接两个或多个数组。// 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。// 语法// arrayObject.concat(arrayX,arrayX,......,arrayX)
        console.log(arr.slice(0,4));//两个参数 [start,end);
        var arr1=arr.splice(2,0,21,22,23);
        console.log(arr)//删除一部分，在添加一部分改变了原来的数组
  },
  knowString:function(){
    var emai='tom@163@sohu.com';
// 下标为5的数后面的@的下标
    console.log(emai.indexOf('@',5));
    // 下标为5的往前找
    console.log(emai.lastIndexOf('@',5))

  },
  konwRegExp:function(){
    var text='G1012';
    var regexp=/^([Sgd])(\d{4})$/i;
    console.log(regexp.test(text));
    console.log(regexp.$1);
    console.log(regexp.$2);
    var t='Tom|Mary||||John|||||Tim';
    var reg=/\|+/;//|出现一次或多次
    var str= t.split(reg)
    console.log(str)

  },
  konwMath:function(){
    var num=1.4;
    console.log(Math.ceil(num));//上取整 2
    console.log(Math.floor(num));//下取整 1
    var number=-1.5;
    console.log(Math.ceil(number));//上取整-1
    console.log(Math.floor(number));//下取整-2
    console.log(Math.random())//生成0-1之间的随机小数0<=x<1

  },
  komwDate:function(){
    // 日期输入：
    // 1991-10-6
    // 1991/10/6
    // 1991.10.6
    // 加入new 引用类型
    var d1=new Date('1991-10-6');
    console.log(d1)

  },
  konwError:function(){
        // 好多种吧
        var  userName='tom';
        var x=0;
        try{
            console.log(uName);

        }catch(e){
            console.log(e)
        };
        try{
            // 麻蛋这个怎么catch不到语法错误
            // console.log(x+++)

        }catch(e){
            console.log(e)
        }
  },
  konwFunction:function(){
    var temp='typeof 可能返回值：number string boolean object function undefined null——这个返回object';
    var temp2='创建一个函数的三种方式1. function foo(){};2.var functionName=new Function("a", "b", "return a * b");3.var aa=function(){} 4.匿名函数直接调用(function(n1,n2){return n1+n2;})(100,200)'

  },
  konwObject:function(){
    // js对象的分类
    // （1）值类型：number string boolean
    // （2）特殊类型：null undefined
    // （3）引用/对象类型
    //      1）.ES原生对象/预定义对象 Global Array Function Number String Boolean Data Error Array RegExp Math
    //      2）.浏览器宿主对象：Bom Dom
    //      3）.用户自定义对象
    //
    //      创建自定义对象
    // （1）直接变量
    var obj={
        name:'gaoyu'
    };
    // （2）new
    var obj=new object();
    obj.name='John';
    console.log(obj)

  }
}
test.init()