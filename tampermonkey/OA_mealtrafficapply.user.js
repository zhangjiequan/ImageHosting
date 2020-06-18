// ==UserScript==
// @name         OA_工作日餐费交通费申请_固定选人
// @namespace    https://github.com/zhangjiequan/
// @version      0.5
// @updateURL    https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/OA_mealtrafficapply.user.js
// @downloadURL  https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/OA_mealtrafficapply.user.js
// @description  OA_工作日餐费交通费申请_固定选人（不用插件，默认的话，总是选了第一个，不科学）
// @author       zhangjiequan
// @match        http://oa.info/mealtrafficapply/draft.do*
// @match        http://oa.info/attend/otApply/draft.do**
// @match        http://oa.info/*
// @grant        none
// ==/UserScript==

//OA_mealtrafficapply.js

(function () {
    // Your code here...
    $(function () {
        var kLocalStorageLeaderKey = "OA_mealtrafficapply_localStorage_item_name_selectedLeader"
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

        autoSelectLeader()

        // var calledInterval = function () {
        //     log("calledInterval");
        //     saveSelectedLeaderId()
        // }
        // setInterval(function () { calledInterval() }, 1000);

        $(document).ready(function () {
            $('input[type=radio]').change(function () {
                saveSelectedLeaderId()
            });
        });
    });

})();
