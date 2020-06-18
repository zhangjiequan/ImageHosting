// ==UserScript==
// @name         OA_工作日餐费交通费申请_固定选人
// @namespace    http://tampermonkey.net/
// @version      0.1
// @updateURL    http://10.18.19.100/plugins/tampermonkey/OA_mealtrafficapply.user.js
// @downloadURL  http://10.18.19.100/plugins/tampermonkey/OA_mealtrafficapply.user.js
// @description  try to take over the world!
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
            console.log("OA_mealtrafficapply version      0.1");
        }
    });

})();
