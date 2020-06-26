// ==UserScript==
// @name         OA_小助手
// @namespace    https://github.com/zhangjiequan/
// @version      0.9
// @updateURL    https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/oa_helper/full/oa_helper_full.user.js
// @downloadURL  https://github.com/zhangjiequan/ImageHosting/raw/master/tampermonkey/oa_helper/full/oa_helper_full.user.js
// @description  自动选择上次选择的部门负责人、以及填写常用缺省值
// @author       zhangjiequan
// @match        http://oa.info/*
// @grant        none
// ==/UserScript==

//OA_mealtrafficapply.js
// @match        http://oa.info/mealtrafficapply/draft.do*
// @match        http://oa.info/attend/otApply/draft.do**

(function () {
    // Your code here...
    $(function () {
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

        var autoFillMealtrafficapplyInfo = function () {

            //-----------------------工作日餐费交通费申请--------------------
            //勾选申请
            var isApplys = document.getElementsByClassName("isApply")
            for (var i = 0; i < isApplys.length; i++) {
                isApplys[i].checked = true
            }

            // 加班事由
            var reasons = document.getElementsByClassName("form-bg input-middle reason")
            for (var i = 0; i < reasons.length; i++) {
                reasons[i].value = "功能开发"
            }


            //-----------------------报销单--------------------
            // 纸质发票数
            var appendixNum = document.getElementById("appendixNum")
            if (appendixNum) {
                appendixNum.value = "1"
            }

            // 报销事由
            var repay_content = document.getElementById("repay_content")
            if (repay_content) {
                repay_content.value = "加班"
            }
            // // 项目
            // var pjSelBtn = document.getElementsByClassName("pjSelBtn")
            // if (pjSelBtn) {
            //     log("pjSelBtn") //能log，但是不能选择？什么原因？
            //     pjSelBtn.value = "3"//市内交通费（加班）
            // }

            //-----------------------请假单--------------------
            // 请假类别
            // 不能模拟点击，直接设置值，没有回调，不能显示动态控件
            // var holidayTypeSelect = document.getElementById("holidayTypeSelect")
            // if (holidayTypeSelect) {
            //     holidayTypeSelect.value = "2"//补休
            // }

            // 请假事由
            var leaveReason = document.getElementById("leaveReason")
            if (leaveReason) {
                leaveReason.value = "家里有事"
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

        var delayHalfSecond = function () {
            autoSelectLeader()
            autoFillMealtrafficapplyInfo()
        }

        setTimeout(delayHalfSecond, 200);
    });

})();
