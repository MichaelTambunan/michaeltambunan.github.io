const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

navbarLinks.forEach(function (navbarLink) {
	navbarLink.addEventListener("click", function () {
		const navbarCollapse = document.querySelector(".navbar-collapse");
		if (window.getComputedStyle(navbarCollapse).display !== "none") {
			navbarCollapse.classList.remove("show");
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const body = document.querySelector("body");
	const navbarToggler = document.querySelector(".navbar-toggler");
	const navbarCollapse = document.querySelector(".navbar-collapse");

	body.addEventListener("click", function (e) {
		if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
			navbarCollapse.classList.remove("show");
		}
	});
});

const scriptURL = "https://script.google.com/macros/s/AKfycbxLjIyXRwl427Rl_wHoAcPrNA7g0LOqOjWZABfr2-tVQv7_tRpx6_henFrP5P5vEOC0UQ/exec";
const form = document.forms["kael-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// ketika tombol submit diklik
	// tampilkan tombol loading, hilangkan tombol kirim
	btnLoading.classList.toggle("d-none");
	btnKirim.classList.toggle("d-none");
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			// tampilkan tombol kirim, hilangkan tombol loading
			btnLoading.classList.toggle("d-none");
			btnKirim.classList.toggle("d-none");
			// tampilkan alert
			myAlert.classList.toggle("d-none");
			// reset formnya
			form.reset();
			console.log("Success!", response);

			// menampilkan pesan alert
			myAlert.classList.remove("d-none");

			// menyembunyikan pesan alert setelah 5 detik
			setTimeout(() => {
				myAlert.classList.add("d-none");
			}, 6000);
		})
		.catch((error) => console.error("Error!", error.message));
});
