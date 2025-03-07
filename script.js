document.addEventListener("DOMContentLoaded", function () {
    const uploadBox = document.querySelector(".upload-box");
    const fileInput = document.querySelector("#avatarUpload");

    uploadBox.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", function () {
        if (this.files.length > 0) {
            uploadBox.textContent = `📁 ${this.files[0].name}`;
        }
    });

    document.querySelector("#registrationForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your ticket has been generated!");
    });
});
