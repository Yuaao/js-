/**
 * Created by wb-gaoyu.b on 2016/8/1.
 */
var i = 0, canPull = true;
var recruit = {
    //详细信息

    init: function (){
        recruit.eventBind()
        //setTimeout(recruit.loadMask,2000);
        recruit.sharePic();

    },
    //loadMask:function(){
    //    //$('.mask').removeClass('hide');
    //
    //},
    sharePic: function () {
        $('.share-pic-img').on("tap", function (e) {
            $('.mask2').removeClass('hide');
        })
    },

    eventBind: function () {
        var $bd = $('body');
        //活动事件获取
        $bd.on('touchstart', function(ev) {
            if (canPull) {
                ev.preventDefault();
                startY = ev.touches[0].pageY;
            }
        });
        //触摸事件
        $bd.on('touchend', function(ev) {


            if(canPull) {
                ev.preventDefault();
                endY = ev.changedTouches[0].pageY;
                if (startY - endY > 40 && canPull) {
                    recruit.up();
                    recruit.run();
                } else if (startY - endY < -40 && canPull) {
                    recruit.down();
                    recruit.run();
                }
            }
        });



    },

    //向下滑动计数(不循环)
    up: function () {
        //console.log($('.steps').length);
        i++;
        if(i == $('.steps').length){
            i = $('.steps').length - 1;//0;
        };
    },

    //向下滑动计数
    down: function (){
        i--;
        if(i < 0){
            i = 0; //$('.steps').length - 1;
        };
    },

    /*页面滑动*/
    run: function (){
        console.log(i);
        //if(i==1){
        //    $('.mask').addClass('hide');
        //}
        $('.steps').removeClass('on').eq(i).addClass('on');
        $('.section-wrap').attr("class","section-wrap").addClass(function() { return "put-section-" + i; });
        $('.animation').removeClass('pass').eq(i-1).addClass('pass');
    },
    //扩展zepto模板
    substitute: function(str, sub) {
        return str.replace(/\{(.+?)\}/g, function($0, $1) {
            return $1 in sub ? sub[$1] : "";
        });
    }
};
recruit.init();