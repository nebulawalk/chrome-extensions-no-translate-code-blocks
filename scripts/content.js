const observer = new MutationObserver(() => {
	const preElements = document.querySelectorAll("pre");
	for (const elem of preElements) {
		elem.classList.add("notranslate");
	}
});
observer.observe(document, { childList: true, subtree: true });
