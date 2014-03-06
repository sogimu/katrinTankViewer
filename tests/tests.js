module("class NativeServer" );

test("Creating without exeptions", function() {
	try {
		var nativeServer = new KTV.NativeServer();
		ok(true,  "Ok");
	}
	catch(e) {
		console.log(e.message);
		ok(false,  "Failed" );
	};
		
});

asyncTest("_sendRequestToServer(tests/someFile.json, function)", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer._sendRequestToServer("tests/someFile.json", function(data) {
		// console.log("_sendRequestToServer tests/someFile.json ", data);
		ok(true,  "Ok");
		start();
	});

});

asyncTest("GetHotSpotsInfo(true, function)", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer.GetHotSpotsInfo(true, function(data){
		// console.log("GetHotSpotsInfo(true, ...", data);
		ok(true,  "Ok");
		start();
	});

});

asyncTest("GetModel(true, function)", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer.GetModel(true, function(data){
		// console.log("GetModel. params: true, func ", data);
		ok(true,  "Ok");
		start();
	});

});

asyncTest( "GetModel(false, func)", 1, function() {
	var nativeServer = new KTV.NativeServer();

	nativeServer.GetModel(true, function(data0) {
		nativeServer.GetModel(false, function(data1){
			if(data0 === data1) {
				ok(true, "Ok");
				start();
			} else {
				ok(false, "Fail");
				start();
			}
		});
	});	

});

asyncTest( "GetHotSpotsInfo(false, func)", 1, function() {
	var nativeServer = new KTV.NativeServer();

	nativeServer.GetHotSpotsInfo(true, function(data0) {
		nativeServer.GetHotSpotsInfo(false, function(data1){
			ok(data0 == data1, "Ok");
			start();

		});
	});	

});

module("class HotSpotInfo");
hotSpotsJSON = {
	"1": {"VRMLPointsID": "2392", "name": "435-RTP-5-0005", "VRMLPoint": ["-11610", "225.804", "-107.296"]}, 
	"2": {"VRMLPointsID": "2971", "name": "435-RTP-5-0013", "VRMLPoint": ["-10638.7", "1575.21", "97.2829"]},
	"3": {"VRMLPointsID": "2670", "name": "435-RTP-5-0014", "VRMLPoint": ["-10973", "1925.69", "89.2006"]}
};

test("Creating without exeptions", function() {
	try {
		var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
		ok(true,  "Ok");
	}
	catch(e) {
		console.log(e.message);
		ok(false,  "Failed" );
	};
		
});

test("_setHotSpotsList", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setHotSpotsList(list);
	if(hotSpotInfo._hotSpotList == list) {
		ok(true,  "Ok");
	}

});

test("_getHotSpotsList", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setHotSpotsList(list);
	if(hotSpotInfo._getHotSpotsList() == list) {
		ok(true,  "Ok");
	}

});

test("_setListById", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setListById(list);
	if(hotSpotInfo._listById == list) {
		ok(true,  "Ok");
	}

});

test("_setListByName", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setListByName(list);
	if(hotSpotInfo._listByName == list) {
		ok(true,  "Ok");
	}

});

test("_setListByPos", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setListByPos(list);
	if(hotSpotInfo._listByPos == list) {
		ok(true,  "Ok");
	}

});

test("_getListById", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setListById(list);
	if(hotSpotInfo._getListById() == list) {
		ok(true,  "Ok");
	}

});

test("_getListByName", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setListByName(list);
	if(hotSpotInfo._getListByName() == list) {
		ok(true,  "Ok");
	}

});

test("_getListByPos", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	var list = {d:2342};
	hotSpotInfo._setListByPos(list);
	if(hotSpotInfo._getListByPos() == list) {
		ok(true,  "Ok");
	}

});

test("GetHotSpotByName", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	ok(hotSpotInfo.GetHotSpotByName("435-RTP-5-0005")["VRMLPointsID"] == "2392",  "Ok");
	ok(hotSpotInfo.GetHotSpotByName("435-RTP-5-0013")["VRMLPointsID"] == "2971",  "Ok");
	ok(hotSpotInfo.GetHotSpotByName("435-RTP-5-0014")["VRMLPointsID"] == "2670",  "Ok");
});

test("GetHotSpotById", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	ok(hotSpotInfo.GetHotSpotById(1)["name"] == "435-RTP-5-0005",  "Ok");
	ok(hotSpotInfo.GetHotSpotById(2)["name"] == "435-RTP-5-0013",  "Ok");
	ok(hotSpotInfo.GetHotSpotById(3)["name"] == "435-RTP-5-0014",  "Ok");
});

test("GetHotSpotByPos", function() {
	var hotSpotInfo = new KTV.HotSpotInfo({hotSpotsList: hotSpotsJSON});
	ok(hotSpotInfo.GetHotSpotByPos("-11610,225.804,-107.296")["name"] == "435-RTP-5-0005",  "Ok");
	ok(hotSpotInfo.GetHotSpotByPos("-10638.7,1575.21,97.2829")["name"] == "435-RTP-5-0013",  "Ok");
	ok(hotSpotInfo.GetHotSpotByPos("-10973,1925.69,89.2006")["name"] == "435-RTP-5-0014",  "Ok");
});
