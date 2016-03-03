function foo () {
	var bar;
  quux = "escopo externo";

	function zip () {
		var quux = "escopo interno";
    bar = true;
	}

  return zip;
}