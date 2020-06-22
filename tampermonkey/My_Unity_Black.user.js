// ==UserScript==
// @name					MyUnityBlack[Unity在线及本地网页-黑色主题-JS和C#代码高亮]
// @name_origin				[docs.unity3d & local] Unity Black - a dark theme with JS/C# syntax highlighting
// @namespace               https://github.com/zhangjiequan/
// @namespace_origin		https://greasyfork.org/en/users/10118-drhouse
// @version					2.0
// @description				A beautiful dark theme with syntax highlighting (4 color schemes, JS & C#) that improves visual code samples and lowers screen glare.
// @description:zh			一个美丽的深色主题，带有语法突出显示（4种配色方案，JS和C＃），可改善可视代码示例并降低屏幕眩光
// @include					http://docs.unity3d.com/*
// @include					https://docs.unity3d.com/*
// @include					file://*Editor/Data/Documentation/*
// @require					http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require					http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js
// @require					https://cdn.bootcdn.net/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js
// @resource bold		    https://raw.githubusercontent.com/daylerees/colour-schemes/master/highlightjs/bold.css
// @resource grayscale		https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-grayscale.dark.css
// @resource ocean			https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-ocean.dark.css
// @resource tomorrow		https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-tomorrow.dark.css
// @resource t3024		    https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-3024.dark.css
// @resource applepips		https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-applepips.dark.css
// @grant                   GM_getValue
// @grant                   GM_setValue
// @grant                   GM_deleteValue
// @grant					GM_addStyle
// @grant					GM_getResourceText
// @author                  zhangjiequan
// @author_origin			drhouse
// @icon					http://docs.unity3d.com/StaticFiles/images/favicons/favicon.ico
// @updateURL               https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/My_Unity_Black.user.js
// @downloadURL             https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/My_Unity_Black.user.js
// ==/UserScript==

//对原脚本中的修改有：
//1、修改UserScript：增加：中文说明，更新地址等；修改：作者信息、命名空间等
//2、对应Unity网页修改，增加高优先级的hljs样式，解决原脚本因年久失修导致的代码区、评论区背景不能黑的问题
//3、注释“div.arrow”，解决原脚本导航栏图片丢失的问题
//4、增加样式3024
//5、增加样式applepips，style selector中换行
//6、行号功能，使行号带来的框变黑，抽取部分重复代码

//样式增加简易教程
//https://github.com/idleberg/base16-highlight.js 选一个你喜欢的，如base16-3024.dark.css
//找到对应的raw地址，如：https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-3024.dark.css
//参考本脚本中的“tomorrow”，依葫芦画瓢，增加你刚刚选的样式。

// 一些试过的样式
// @resource bold		    https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-atelierdune.dark.css
// @resource grayscale		https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-atelierforest.dark.css
// @resource ocean			https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-atelierheath.dark.css
// @resource tomorrow		https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-atelierlakeside.dark.css
// @resource t3024		    https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-atelierseaside.dark.css
// @resource applepips		https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-bespin.dark.css

//TODO
//原脚本主题相关的代码大量重复，可以把重复代码提取成方法，改成通过表驱动来处理。

this.$ = this.jQuery = jQuery.noConflict(true);

//是否开启行号功能-
//开启行号带来的问题：
//变色后变不回来
var kEnableLineNumbers = false

function handleEachBlock(block) {
    hljs.highlightBlock(block);
    if (kEnableLineNumbers) {
        hljs.lineNumbersBlock(block);
    }
}

function handleClick(e, themeName) {
    if (e) {
        e.preventDefault();
    }
    GM_setValue("unitystyle", themeName);
    GM_addStyle(GM_getResourceText(themeName));
    $('pre').each(function (i, block) {
        handleEachBlock(block)
    });
    $('code').each(function (i, block) {
        handleEachBlock(block)
    });
}

$(document).ready(function () {

    handleClick(null, "ocean")

    //style selector
    $("<div id='rock1'></div>").appendTo('pre.codeExampleCS');
    $("<div id='rock'></div>").appendTo('pre');
    $('#rock').html('<a id="bold">bold</a> | <a id="grayscale">grayscale</a> | <a id="ocean">ocean</a> | <a id="tomorrow">tomorrow</a>  ')
        .css('position', 'absolute')
        .css('top', '0px')
        .css('right', '0px')
        .css('float', 'right');

    $('#rock1').html('<a id="bold1">bold</a> | <a id="grayscale1">grayscale</a> | <a id="ocean1">ocean</a> | <a id="tomorrow1">tomorrow</a>  ')
        .css('position', 'absolute')
        .css('top', '0px')
        .css('right', '0px')
        .css('float', 'right');

    $("<div id='rock3'></div>").appendTo('pre.codeExampleCS');
    $("<div id='rock2'></div>").appendTo('pre');
    $('#rock2').html('<a id="applepips">applepips</a>  | <a id="t3024">t3024</a>  ')
        .css('position', 'absolute')
        .css('top', '15px')
        .css('right', '0px')
        .css('float', 'right');

    $('#rock3').html('<a id="applepips1">applepips</a>  | <a id="t30241">t3024</a>  ')
        .css('position', 'absolute')
        .css('top', '15px')
        .css('right', '0px')
        .css('float', 'right');


    //add bg image logo
    //http://i.imgur.com/keF6WXn.png
    $('pre').css('font-size', '0.8em').css('font-family', 'Consolas')
        .css('position', 'relative')
        .css('background-image', 'url("https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/My_Unity_Black_bg256.png")  ')
        .css('background-image', 'width:10px')
        .css('background-position', 'top right')
        .css('background-repeat', 'no-repeat')
        .css('padding', '1px');

    $('code').css('position', 'relative')
        .css('position', 'relative')
        .css('background-image', 'url("https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/My_Unity_Black_bg256.png")  ')
        .css('background-image', 'width:10px')
        .css('background-position', 'top right')
        .css('background-repeat', 'no-repeat')
        .css('padding', '1px');

    //----------change by zhangjiequan start----------
    //#2b303b
    //#000000
    $('body').append('<style>.hljs{font-size: 0.8em !important;</style>')
    $('body').append('<style>.hljs{font-family: Consolas !important;</style>')
    $('body').append('<style>.hljs{position: relative !important;</style>')
    $('body').append('<style>.hljs{background-image: url("https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/My_Unity_Black_bg256.png") !important;</style>')
    $('body').append('<style>.hljs{background-image: width:10px !important;</style>')
    $('body').append('<style>.hljs{background-color: #000000 !important;</style>')
    $('body').append('<style>.hljs{background-position: top right !important;</style>')
    $('body').append('<style>.hljs{background-repeat: no-repeat !important;</style>')
    $('body').append('<style>.hljs{padding: 1px !important;</style>')

    //通过chrome的F12中的Styles窗口（把F12开发者工具窗口拖大点，才能看到Styles窗口）看到body中的pre有个background #f0f0f0 !important
    //于是通过代码追加黑色底
    //2b303b
    //$('body').append('<style>.hljs{background-color: #000000 !important;}</style>')
    $('body').append('<style>.hljs, pre, .feedbackbox{background-color: #000000 !important;}</style>')
    //----------changed by zhangjiequan end  ----------

    var styleName;
    $("pre").on("click", function (e) {
        $("#bold").click(function (e) {
            handleClick(e, 'bold')
        });
        $("#grayscale").click(function (e) {
            handleClick(e, 'grayscale')
        });
        $('#ocean').on('click', function (e) {
            handleClick(e, 'ocean')
        });
        $('#tomorrow').on('click', function (e) {
            handleClick(e, 'tomorrow')
        });
        $('#t3024').on('click', function (e) {
            handleClick(e, 't3024')
        });
        $('#applepips').on('click', function (e) {
            handleClick(e, 'applepips')
        });
    });

    $("pre.codeExampleCS").on("click", function (e) {
        $("#bold1").click(function (e) {
            handleClick(e, 'bold')
        });
        $("#grayscale1").click(function (e) {
            handleClick(e, 'grayscale')
        });
        $('#ocean1').on('click', function (e) {
            handleClick(e, 'ocean')
        });
        $('#tomorrow1').on('click', function (e) {
            handleClick(e, 'tomorrow')
        });
        $('#t30241').on('click', function (e) {
            handleClick(e, 't3024')
        });
        $('#applepips1').on('click', function (e) {
            handleClick(e, 'applepips')
        });
    });

    var c = GM_getValue("unitystyle");
    console.log('get ' + c);
    if (c == "bold") {
        $("#bold").click();
        $("#bold").click();
    }
    if (c == "grayscale") {
        $("#grayscale").click();
        $("#grayscale").click();
    }
    if (c == "ocean") {
        $("#ocean").click();
        $("#ocean").click();
    }
    if (c == "tomorrow") {
        $("#tomorrow").click();
        $("#tomorrow").click();
    }
    if (c == "t3024") {
        $("#t3024").click();
        $("#t3024").click();
    }
    if (c == "applepips") {
        $("#applepips").click();
        $("#applepips").click();
    }

    //css style
    $('html').css('background-color', '#1A1B1C');
    $('body').css('color', '#fff');
    $('a').css('color', '#fff');
    $('h1').css('color', '#fff');
    $('h2').css('color', '#fff');
    $('.subsection').css('color', '#ccc');
    $('table').css('background', '#222');
    $('th').css('background', '#222c37');
    $('div.toolbar').css('background', '#1A1B1C');
    $('h1 h2 p span a').css('background-color', '#fff !important');
    $('td').css('border-style', 'ridge')
        .css('border-width', '2px !important')
        .css('border-color', '#fff !important')
        .css('color', '#fff !important')
        .css('background-color', '#44474D !important');
    $('td.desc').css('border-width', '2px !important')
        .css('border-color', '#fff !important')
        .css('color', '#CACCD0 !important')
        .css('background-color', '#414449 !important');
    $('table.list tr:hover').css('outline', '#009393 2px solid !important');
    $('table.list tr:nth-child(odd)').css('background-color', '#222');
    $('table.list tr:nth-child(even)').css('background-color', '#222');
    $('.filler').css('background-color', '#222c37');
    $('.mCSB_draggerRail').css('background-color', '#000!important');
    $('.mCSB_dragger_bar').css('background-color', '#333');
    $('div.sidebar-wrap').css('background-color', '#1A1B1C')
        .css('width', '339px')
        .css('position', 'fixed')
        .css('border-right', '#000 0px dashed');
    //----------changed by zhangjiequan start----------
    //$('div.arrow').css('background', '#27292C url("http://docs.unity3d.com/StaticFiles/images/sprites.png") 0 0 no-repeat')
    //    .css('border', '#9ca9be 1px solid');
    //----------changed by zhangjiequan end  ----------
    $('.nextprev').css('background', '#222c37')
        .css('padding', '0px');
    $('body > div.header-wrapper > div.toolbar > div > div.script-lang').css('color', '#222c37');
    $('body > div.header-wrapper > div.toolbar > div > div > div.lang-list > ul > li > a').css('color', 'black');
    //*/

    //line border black
    //使行号带来的框变黑
    $('body').append('<style>.hljs-ln-numbers{border-color: #000 !important;</style>')
    $('body').append('<style>.hljs-ln-code{border-bottom-color: #000 !important;</style>')

    //https://docs.unity3d.com/Packages 变黑
    $('.img-thumbnail, body').css('background-color', '#1a1b1c')
    $('.sidetoc').css('background-color', '#1a1b1c')
    $('.sidenav, .fixed_header, .toc').css('background-color', '#1a1b1c')
    $('.navbar-default').css('background-color', '#1a1b1c')
    $('.sidefilter').css('background-color', '#1a1b1c')
    $('td').css('background-color', '#1a1b1c')
});