function saveOptions(e) {
	e.preventDefault();
	browser.storage.sync.set({
		api_key:
			document.querySelector("#api_key").value,
		});
	}
	
function restoreOptions() {
	function setCurrentChoice(result) {
		document.querySelector("#api_key").value = result.api_key;
	}
	
	function onError(error) {
		console.log(`Error: ${error}`);
	}
	
	let getting = browser.storage.sync.get("api_key");
	getting.then(setCurrentChoice, onError);
}

