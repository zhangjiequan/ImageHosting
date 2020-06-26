// ==UserScript==
// @name					MyUnityBlack_simple
// @include					https://docs.unity3d.com/*
// @require					https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant                   GM_getValue
// @grant                   GM_setValue
// @grant                   GM_deleteValue
// @grant					GM_addStyle
// @grant					GM_getResourceText
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
// @require					https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js
// @require					https://cdn.bootcdn.net/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js
// @require					https://unpkg.com/highlightjs-badge/highlightjs-badge.min.js
$(document).ready(function () {
    function bold() {
        // GM_addStyle(GM_getResourceText("bold"));
        // $('pre').each(function (i, block) {
        //     hljs.highlightBlock(block);
        //     hljs.lineNumbersBlock(block);
        // });
        // $('code').each(function (i, block) {
        //     hljs.highlightBlock(block);
        //     hljs.lineNumbersBlock(block);
        // });

        // setTimeout(function () {
        //     // var pres = document.querySelectorAll("pre>code");
        //     // for (var i = 0; i < pres.length; i++) {
        //     //     hljs.highlightBlock(pres[i]);
        //     // }
        //     var options = {
        //         contentSelector: ".content",
        //         // Delay in ms used for `setTimeout` before badging is applied
        //         // Use if you need to time highlighting and badge application
        //         // since the badges need to be applied afterwards.
        //         // 0 - direct execution (ie. you handle timing
        //         loadDelay: 0,

        //         // CSS class(es) used to render the copy icon.
        //         copyIconClass: "fa fa-copy",
        //         // CSS class(es) used to render the done icon.
        //         checkIconClass: "fa fa-check text-success",

        //         // hook to allow modifying the text before it's pasted
        //         onBeforeTextCopied: function (text, codeElement) {
        //             return text;   //  you can fix up the text here
        //         }
        //     };
        //     console.log("highlightJsBadgehighlightJsBadge before")
        //     // window.highlightJsBadge(options);
        //     console.log("highlightJsBadgehighlightJsBadge after")
        // }, 1000);
    }
    //init style
    bold();


    // $('body').append('<style>.hljs-ln-numbers{color: #000 !important;</style>')

    // $('body').append('<style>.table{border-color: #000000 !important;}</style>')
    // $('body').append('<style>table{border-color: #000000 !important;}</style>')
    // $('body').append('<style>.hljs-ln{border-color: #000000 !important;}</style>')
    // $('body').append('<style>hljs-ln{border-color: #000000 !important;}</style>')
    //< table class="hljs-ln" ></table >border-color
    // $('table').css('background', '#000 !important;');
    // $('table').css('border-color', '#000 !important;');

});