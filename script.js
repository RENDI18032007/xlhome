/* =========================================
   KONFIGURASI WHATSAPP SALES
========================================= */

const nomorWhatsApp = "6287792991518";


/* =========================================
   FUNGSI BUKA WHATSAPP
========================================= */

function bukaWhatsApp(pesan) {

    const url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(pesan);

    window.open(url, "_blank");

}


/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


/* =========================================
   TUTUP MENU SETELAH KLIK
========================================= */

const menuLinks =
    document.querySelectorAll(".nav-menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


/* =========================================
   PILIH PAKET
========================================= */

const packageButtons =
    document.querySelectorAll(".package-button");

packageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const paket =
            button.getAttribute("data-package");

        const pesan =
`Halo Sales XL SATU 👋

Saya tertarik dengan paket:

📦 ${paket}

Mohon informasi lebih lanjut mengenai:

✅ Ketersediaan jaringan
✅ Promo yang tersedia
✅ Biaya pemasangan
✅ Syarat pemasangan

Nama:
Alamat pemasangan:
Nomor HP:

Terima kasih.`;

        bukaWhatsApp(pesan);

    });

});


/* =========================================
   TOMBOL WHATSAPP UTAMA
========================================= */

const whatsappButton =
    document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const pesan =
`Halo Sales XL SATU 👋

Saya ingin mengetahui informasi
mengenai layanan internet XL SATU.

📦 Paket yang tersedia
💰 Harga paket
📍 Ketersediaan jaringan
🎁 Promo
🔧 Biaya pemasangan

Nama:
Alamat pemasangan:
Nomor HP:

Terima kasih.`;

            bukaWhatsApp(pesan);

        }
    );

}


/* =========================================
   FLOATING WHATSAPP
========================================= */

const floatingWhatsapp =
    document.getElementById("floatingWhatsapp");

if (floatingWhatsapp) {

    floatingWhatsapp.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const pesan =
`Halo Sales XL SATU 👋

Saya ingin bertanya mengenai
paket internet XL SATU.

Mohon informasi mengenai:

📦 Paket
💰 Harga
📍 Ketersediaan jaringan
🎁 Promo
🔧 Pemasangan

Terima kasih.`;

            bukaWhatsApp(pesan);

        }
    );

}


/* =========================================
   CEK AREA
========================================= */

const areaButtons =
    document.querySelectorAll(".area-button");

areaButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const lokasi =
            button.getAttribute("data-location");

        const pesan =
`Halo Sales XL SATU 👋

Saya ingin mengecek ketersediaan
jaringan XL SATU.

📍 Lokasi:
${lokasi}

Mohon dibantu pengecekan:

✅ Ketersediaan jaringan
✅ Paket yang tersedia
✅ Harga
✅ Promo
✅ Biaya pemasangan

Nama:
Alamat lengkap:
Nomor HP:

Terima kasih.`;

        bukaWhatsApp(pesan);

    });

});


/* =========================================
   INFORMASI XL SATU
========================================= */

const infoXLButton =
    document.getElementById("infoXLButton");

if (infoXLButton) {

    infoXLButton.addEventListener(
        "click",
        function () {

            const pesan =
`Halo Sales XL SATU 👋

Saya ingin mengetahui lebih lanjut
mengenai XL SATU.

Mohon informasi mengenai:

📶 Layanan internet rumah
📦 Pilihan paket
💰 Harga
📍 Area layanan
🎁 Promo
🔧 Pemasangan

Terima kasih.`;

            bukaWhatsApp(pesan);

        }
    );

}