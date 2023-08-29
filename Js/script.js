const dropBox = document.getElementById("drop-box");
const fileInput = document.getElementById("file-input");
const hiddenSubmitButton = document.getElementById("hiddenSubmitButton");

// Prevent default drag behaviour
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
	dropBox.addEventListener(eventName, (e) => {
		e.preventDefault();
		e.stopPropagation();
	});
});

// Highlight drop area when file is dragged over
["dragenter", "dragover"].forEach((eventName) => {
	dropBox.addEventListener(eventName, () => {
		dropBox.classList.add("dragover");
	});
});

["dragleave", "drop"].forEach((eventName) => {
	dropBox.addEventListener(eventName, () => {
		dropBox.classList.remove("dragover");
	});
});

// Handle dropped files
dropBox.addEventListener("drop", (e) => {
	const files = e.dataTransfer.files;
	handleFiles(files);
});

// Handle click on drop box to open file explorer
dropBox.addEventListener("click", () => {
	fileInput.click(); // Trigger the click event of the file input
});

// Handle selected files from file input
fileInput.addEventListener("change", () => {
	const files = fileInput.files;
	handleFiles(files);
	// Programmatically click the submit button
	hiddenSubmitButton.click();
});

// Handle the uploaded or dropped files
function handleFiles(files) {
	// update file input value with the dropped files
	fileInput.files = files;

	// Process or upload files here
	// for (const file of files) {
	// 	// console.log("File: ", file.name);

	// }
}
