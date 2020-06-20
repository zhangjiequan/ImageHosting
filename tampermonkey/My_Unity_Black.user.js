// ==UserScript==
// @name					MyUnityBlack[Unity在线及本地网页-黑色主题-JS和C#代码高亮]
// @name_origin				[docs.unity3d & local] Unity Black - a dark theme with JS/C# syntax highlighting
// @namespace               https://github.com/zhangjiequan/
// @namespace_origin		https://greasyfork.org/en/users/10118-drhouse
// @version					1.3
// @description				A beautiful dark theme with syntax highlighting (4 color schemes, JS & C#) that improves visual code samples and lowers screen glare.
// @description:zh			一个美丽的深色主题，带有语法突出显示（4种配色方案，JS和C＃），可改善可视代码示例并降低屏幕眩光
// @include					http://docs.unity3d.com/*
// @include					https://docs.unity3d.com/*
// @include					file://*Editor/Data/Documentation/*
// @require					http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require					http://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js
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

//修改点
//1、修改UserScript：增加：中文说明，更新地址等；修改：作者信息、命名空间等
//2、对应Unity网页修改，增加高优先级的hljs样式，解决原脚本因年久失修导致的代码区、评论区背景不能黑的问题
//3、注释“div.arrow”，解决原脚本导航栏图片丢失的问题
//4、增加样式3024
//5、增加样式applepips，style selector中换行

//样式增加建议教程
//https://github.com/idleberg/base16-highlight.js选一个你喜欢的，如base16-3024.dark.css
//找到对应的raw地址，如：https://raw.githubusercontent.com/idleberg/base16-highlight.js/master/base16-3024.dark.css
//参考本脚本中的“tomorrow”，依葫芦画瓢，增加你刚刚选的样式。

this.$ = this.jQuery = jQuery.noConflict(true);

$(document).ready(function () {

    function bold() {
        GM_addStyle(GM_getResourceText("bold"));
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        $('code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    function github() {
        GM_addStyle(GM_getResourceText("github"));
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        $('code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    function grayscale() {
        GM_addStyle(GM_getResourceText("grayscale"));
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        $('code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    function ocean() {
        GM_addStyle(GM_getResourceText("ocean"));
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        $('code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    function tomorrow() {
        GM_addStyle(GM_getResourceText("tomorrow"));
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        $('code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    function t3024() {
        GM_addStyle(GM_getResourceText("t3024"));
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        $('code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    function applepips() {
        GM_addStyle(GM_getResourceText("applepips"));
        $('pre').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        $('code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    //init style
    //bold();
    //github();
    //grayscale();
    ocean();
    //tomorrow();

    //style selector
    $("<div id='rock1'></div>").appendTo('pre.codeExampleCS');
    $("<div id='rock'></div>").appendTo('pre');
    $('#rock').html('<a id="bold">bold</a> | <a id="grayscale">grayscale</a> | <a id="ocean">ocean</a> | <a id="tomorrow">tomorrow</a>  | <a id="t3024">t3024</a>  ')
        .css('position', 'absolute')
        .css('top', '0px')
        .css('right', '0px')
        .css('float', 'right');

    $('#rock1').html('<a id="bold1">bold</a> | <a id="grayscale1">grayscale</a> | <a id="ocean1">ocean</a> | <a id="tomorrow1">tomorrow</a>  | <a id="t30241">t3024</a>  ')
        .css('position', 'absolute')
        .css('top', '0px')
        .css('right', '0px')
        .css('float', 'right');

    $("<div id='rock3'></div>").appendTo('pre.codeExampleCS');
    $("<div id='rock2'></div>").appendTo('pre');
    $('#rock2').html('<a id="applepips">applepips</a>  ')
        .css('position', 'absolute')
        .css('top', '15px')
        .css('right', '0px')
        .css('float', 'right');

    $('#rock3').html('<a id="applepips1">applepips</a>  ')
        .css('position', 'absolute')
        .css('top', '15px')
        .css('right', '0px')
        .css('float', 'right');


    //add bg image logo
    $('pre').css('font-size', '0.8em').css('font-family', 'Consolas')
        .css('position', 'relative')
        .css('background-image', 'url("http://i.imgur.com/keF6WXn.png")  ')
        .css('background-image', 'width:10px')
        .css('background-position', 'top right')
        .css('background-repeat', 'no-repeat')
        .css('padding', '1px');

    $('code').css('position', 'relative')
        .css('position', 'relative')
        .css('background-image', 'url("http://i.imgur.com/keF6WXn.png")  ')
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
    $('body').append('<style>.hljs{background-image: url("http://i.imgur.com/keF6WXn.png") !important;</style>')
    $('body').append('<style>.hljs{background-image: width:10px !important;</style>')
    $('body').append('<style>.hljs{background-color: #6495ed !important;</style>')
    $('body').append('<style>.hljs{background-position: top right !important;</style>')
    $('body').append('<style>.hljs{background-repeat: no-repeat !important;</style>')
    $('body').append('<style>.hljs{padding: 1px !important;</style>')

    $('body').append('<style>.hljs, pre, .feedbackbox{background-color: #000000 !important;}</style>')
    //----------changed by zhangjiequan end  ----------

    var styleName;
    $("pre").on("click", function (e) {
        $("#bold").click(function (e) {
            e.preventDefault();
            bold();
            styleName = 'bold';
            GM_setValue("unitystyle", styleName);
        });
        $("#grayscale").click(function (e) {
            e.preventDefault();
            grayscale();
            styleName = 'grayscale';
            GM_setValue("unitystyle", styleName);
        });
        $('#ocean').on('click', function (e) {
            e.preventDefault();
            ocean();
            styleName = 'ocean';
            GM_setValue("unitystyle", styleName);
        });
        $('#tomorrow').on('click', function (e) {
            e.preventDefault();
            tomorrow();
            styleName = 'tomorrow';
            GM_setValue("unitystyle", styleName);
        });
        $('#t3024').on('click', function (e) {
            e.preventDefault();
            t3024();
            styleName = 't3024';
            GM_setValue("unitystyle", styleName);
        });
        $('#applepips').on('click', function (e) {
            e.preventDefault();
            applepips();
            styleName = 'applepips';
            GM_setValue("unitystyle", styleName);
        });
    });

    $("pre.codeExampleCS").on("click", function (e) {
        $("#bold1").click(function (e) {
            e.preventDefault();
            bold();
            styleName = 'bold';
            GM_setValue("unitystyle", styleName);
        });
        $("#grayscale1").click(function (e) {
            e.preventDefault();
            grayscale();
            styleName = 'grayscale';
            console.log('cs gscale');
            GM_setValue("unitystyle", styleName);
        });
        $('#ocean1').on('click', function (e) {
            e.preventDefault();
            ocean();
            styleName = 'ocean';
            GM_setValue("unitystyle", styleName);
        });
        $('#tomorrow1').on('click', function (e) {
            e.preventDefault();
            tomorrow();
            styleName = 'tomorrow';
            GM_setValue("unitystyle", styleName);
        });
        $('#t30241').on('click', function (e) {
            e.preventDefault();
            t3024();
            styleName = 't3024';
            GM_setValue("unitystyle", styleName);
        });
        $('#applepips').on('click', function (e) {
            e.preventDefault();
            applepips();
            styleName = 'applepips';
            GM_setValue("unitystyle", styleName);
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

});