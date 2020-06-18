// ==UserScript==
// @name         OA_工作日餐费交通费申请_固定选人
// @namespace    https://github.com/zhangjiequan/
// @version      0.2
// @updateURL    https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/OA_mealtrafficapply.user.js
// @downloadURL  https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/OA_mealtrafficapply.user.js
// @description  OA_工作日餐费交通费申请_固定选人（不用插件，默认的话，总是选了第一个，不科学）
// @author       zhangjiequan
// @match        http://oa.info/mealtrafficapply/draft.do*
// @grant        none
// ==/UserScript==

//OA_mealtrafficapply.js

(function() {
    // Your code here...
    $(function () {
        var leader = document.getElementById("leader3628")
        if (leader) {
            leader.checked = true;
            console.log("OA_mealtrafficapply version      0.2");
        }
    });

})();
