// ==UserScript==
// @name         OA_小助手_lite
// @namespace    https://github.com/zhangjiequan/
// @version      1.2
// @updateURL    https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/oa_helper/lite/oa_helper_lite.user.js
// @downloadURL  https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/oa_helper/lite/oa_helper_lite.user.js
// @description  自动选择上次选择的部门负责人、以及填写常用缺省值
// @author       zhangjiequan
// @match        http://oa.info/*
// @grant        none
// ==/UserScript==

//OA_mealtrafficapply.js
// @match        http://oa.info/mealtrafficapply/draft.do*
// @match        http://oa.info/attend/otApply/draft.do**


var kLocalStorageLeaderKey = "OA_mealtrafficapply_localStorage_item_name_selectedLeader2"
var enableLog = true

var log = function (msg) {
    if (!enableLog) {
        return
    }
    console.log(msg)
}

var isSuportStorage = function () {
    return typeof (Storage) != "undefined"
}

var getSelectedLeader = function () {
    var nextStepRadios = document.getElementsByName("nextStepRadio")
    for (var i = 0; i < nextStepRadios.length; i++) {
        if (nextStepRadios[i].checked) {
            return nextStepRadios[i].id
        };
    }
}

var saveSelectedLeaderId = function () {
    if (!isSuportStorage()) {
        return
    }
    var value = getSelectedLeader()
    localStorage.setItem(kLocalStorageLeaderKey, value);
    log("saveSelectedLeaderId" + value);
}

var getSavedSelectedLeaderId = function () {
    if (!isSuportStorage()) {
        return ""
    }
    var value = localStorage.getItem(kLocalStorageLeaderKey);
    log("getSavedSelectedLeaderId" + value);
    return value
}

var autoSelectLeader = function () {
    var leaderId = getSavedSelectedLeaderId()
    var leader = document.getElementById(leaderId)
    if (leader) {
        leader.checked = true;
        log("OA_mealtrafficapply leaderauto selected" + leaderId);
    }
}

// 每秒，保存选择的部门负责人
// var calledInterval = function () {
//     log("calledInterval");
//     saveSelectedLeaderId()
// }
// setInterval(function () { calledInterval() }, 1000);

// 选择变化时，保存选择的部门负责人
$(document).ready(function () {
    $('input[type=radio]').change(function () {
        saveSelectedLeaderId()
    });
});



(function () {
    // Your code here...
    $(function () {
        var delayHalfSecond = function () {
            autoSelectLeader()
        }
        setTimeout(delayHalfSecond, 200);
    });

})();
