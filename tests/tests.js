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

asyncTest( "Send request to the server", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer._sendRequestToServer("tests/someFile.json", function(data) {
		console.log("Text from test file: ", data);
		ok(true,  "Ok");
		start();
	});

});

asyncTest( "Send request to server for hotSpotsInfo", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer.GetHotSpotsInfo(true, function(data){
		console.log("Hot spots info: ", data);
		ok(true,  "Ok");
		start();
	});

});

asyncTest( "Send request to server for model", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer.GetModel(true, function(data){
		console.log("Model: ", data);
		ok(true,  "Ok");
		start();
	});

});

asyncTest( "Geting hotSpotsInfo", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer.GetHotSpotsInfo(false, function(data){
		console.log("Hot spots info: ", data);
		ok(true,  "Ok");
		start();
	});

});

asyncTest( "Geting model", 1, function() {
	var nativeServer = new KTV.NativeServer();
	nativeServer.GetModel(false, function(data){
		console.log("Model: ", data);
		ok(true,  "Ok");
		start();
	});

});