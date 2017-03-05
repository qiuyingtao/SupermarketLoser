"use strict";

SupermarketLoser.home = function(params) {
    var	sumPrice1 = ko.observable(),
    	quantity1 = ko.observable(),
    	//unitPrice1 = ko.observable(),
    	sumPrice2 = ko.observable(),
    	quantity2 = ko.observable();
    	//unitPrice2 = ko.observable();

    function sumPrice1AsNumber() {
        return sumPrice1() || 0;
    }

    function quantity1AsNumber() {
        return quantity1() || 0;
    }

    function sumPrice2AsNumber() {
        return sumPrice2() || 0;
    }

    function quantity2AsNumber() {
        return quantity2() || 0;
    }

    var unitPrice1 = ko.computed(function() {
        return sumPrice1AsNumber() / quantity1AsNumber();
    });

    var unitPrice2 = ko.computed(function() {
        return sumPrice2AsNumber() / quantity2AsNumber();
    });

    var compareResult = ko.computed(function() {
    	if (sumPrice1AsNumber() == 0 || quantity1AsNumber() == 0 || sumPrice2AsNumber() == 0 || quantity2AsNumber() == 0) {
    		return '请输入商品总价和数量';
    	}
    	if (unitPrice1() > unitPrice2()) {
    		return '乙更便宜';
    	} else if (unitPrice1() < unitPrice2()){
    		return '甲更便宜';
    	} else {
    		return '甲和乙单价一样';
    	}
    });

    function viewShown() {
        $("#sumPrice1Input").data("dxNumberBox").focus();
    }


    return {
        sumPrice1: sumPrice1,
        quantity1: quantity1,
        unitPrice1: unitPrice1,
        sumPrice2: sumPrice2,
        quantity2: quantity2,
        unitPrice2: unitPrice2,
        compareResult: compareResult,

        viewShown: viewShown
    };
};