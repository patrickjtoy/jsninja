(function() {
	var results;

	this.assert = function assert(value, desc) {
		var li = document.createElement("li");
		results = document.getElementById("results");
		li.className = value ? "pass" : "fail";
		li.appendChild(document.createTextNode(desc));
		results.appendChild(li);
		if (!value) {
			li.parentNode.parentNode.className = "fail";
		}
		return li;
	};
})();