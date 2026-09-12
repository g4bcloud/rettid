window.addEventListener("load", () => {
	const fileInput = document.getElementById("subscription_file");
	const subscriptionText = document.getElementById("subscription_text");
	const importButton = document.getElementById("import_subscriptions");

	if (!fileInput || !subscriptionText || !importButton) return;

	fileInput.addEventListener("change", async () => {
		const [file] = fileInput.files;
		if (!file) {
			subscriptionText.value = "";
			importButton.disabled = true;
			return;
		}

		if (file.size > 1024 * 1024) {
			fileInput.setCustomValidity("Subscription files must be 1 MB or smaller.");
			importButton.disabled = true;
			return;
		}

		fileInput.setCustomValidity("");
		subscriptionText.value = await file.text();
		importButton.disabled = false;
	});
});
