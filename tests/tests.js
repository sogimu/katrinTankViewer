module( "class NativeServer" );

test( "Creating without exeptions", function() {
	try {
		var nativeServer = new KTV.NativeServer();
		ok(true,  "Ok");
	}
	catch(e) {
		console.log(e.message);
		ok(false,  "Failed" );
	};
		
});

// asyncTest( "_sendRequestToServer tests/someFile.json", 1, function() {
// 	var nativeServer = new KTV.NativeServer();
// 	nativeServer._sendRequestToServer("tests/someFile.json", function(data) {
// 		console.log("_sendRequestToServer tests/someFile.json ", data);
// 		ok(true,  "Ok");
// 		start();
// 	});

// });

// asyncTest( "GetHotSpotsInfo", 1, function() {
// 	var nativeServer = new KTV.NativeServer();
// 	nativeServer.GetHotSpotsInfo(true, function(data){
// 		console.log("GetHotSpotsInfo. params true, func ", data);
// 		ok(true,  "Ok");
// 		start();
// 	});

// });

// asyncTest( "GetModel(true, ...", 1, function() {
// 	var nativeServer = new KTV.NativeServer();
// 	nativeServer.GetModel(true, function(data){
// 		console.log("GetModel. params: true, func ", data);
// 		ok(true,  "Ok");
// 		start();
// 	});

// });

// asyncTest( "GetModel. params: false, func ", 1, function() {
// 	var nativeServer = new KTV.NativeServer();

// 	nativeServer.GetModel(true, function(data0) {
// 		nativeServer.GetModel(false, function(data1){
// 			if(data0 === data1) {
// 				ok(true, "Ok");
// 				start();
// 			} else {
// 				ok(false, "Fail");
// 				start();
// 			}
// 		});
// 	});	

// });

// asyncTest( "GetHotSpotsInfo. params: false, func ", 1, function() {
// 	var nativeServer = new KTV.NativeServer();

// 	nativeServer.GetHotSpotsInfo(true, function(data0) {
// 		nativeServer.GetHotSpotsInfo(false, function(data1){
// 			if(data0 === data1) {
// 				ok(true, "Ok");
// 				start();
// 			} else {
// 				ok(false, "Fail");
// 				start();
// 			}
// 		});
// 	});	

// });
