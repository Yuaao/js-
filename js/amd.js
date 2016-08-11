/**
 * Created by wb-gaoyu.b on 2016/8/11.
 */
//AMD 'Asynchronous Module Definition' 异步模块定义。
var amd={
    //不兼容IE IE6,7,8有问题
    getBasePath:function(){
        var nodes=document.getElementsByTagName('script');
        var node=nodes[nodes.length-1];

        var src=document.querySelector?node.src:node.getAttribute('src',4);
        //getAttribute 第二个参数
        //0：默认值。搜索属性时大小写不敏感

        //1：搜索属性时大小写敏感，大小和小写字母必须完全匹配。

        //2：返回BSTR形式的属性值？此标识对事件属性无效。（不知道第一句的具体意义，但是设置属性为2可以用来返回原始值）

        //4：返回完整路径URL地址。只对URL属性有效。（参数为4的情况，我还没有找到使用它的场景。。。）
        //node.src 绝对路径
        //node.getAttribute('src',4)相对路径
        console.log(src)
    },
    getBasePath2:function(){
        var nodes=document.getElementsByTagName('script');
        if(window.VBArray){
        //    如果是IE
            for(var i= 0,node;node=nodes[i++];){
                //IE 下的script标签属性readyState
                //“uninitialized” – 原始状态
                //“loading” – 下载数据中
                //“loaded” – 下载完成
                //“interactive” – 还未执行完毕
                //“complete” – 脚本执行完毕.
                if(node.readyState==='interactive'){
                    break;
                }
            }
        }else{
            node=nodes[nodes.length-1]
        }
        var src=document.querySelector?node.src:node.getAttribute('src',4)
        return src;
    },
    //    优化2
    //访问DOM对象比一般的javascript代码消耗高许多利用Error对象。
    getBasePath3:function(){
        //不明白
        try{
            a.b.c();
            //错误
        }catch(e){
            alert(e)
            if(e.fileName){
            //    firefox
                return e.fileName;
            }else if(e.sourceURL){
            //    safari
                return e.sourceURL;
            }
        }
        var nodes=document.getElementsByTagName('script');
        if(window.VBArray){
            //倒叙查找更快
            for(var i=nodes.length,node;node=nodes[--i];){
                if(node.readyState==='interactive'){
                    break;
                }

            }
        }else{
            node=nodes[nodes.length-1];

        }
        var src=document.querySelector?node.src:node.getAttribute('src',4)
        alert(src)
        return src;

    }

}
console.log(amd.getBasePath3())

