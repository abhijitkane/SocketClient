var sc = {};
sc["socket"]=null;

$( document ).ready(function() {
	$("#connectButton").click(function(e) {
		sc.socket=window.io($("#socketUrl").val());
		if(sc.socket) {
			$("#sendButton").removeAttr('disabled');
		}
		e.preventDefault();
		return false;
	});

	$("#sendButton").click(function() {
		var req=$("#requestData").val();
		sc.socket.emit('get',req);
	});
});
