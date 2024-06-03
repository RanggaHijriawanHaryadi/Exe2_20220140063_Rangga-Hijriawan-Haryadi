document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#tanggal", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });

    document.getElementById("pendaftaranForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        var name = document.getElementById("nama").value;
        var nopasien = document.getElementById("nim").value;
        var keluhan = document.getElementById("keluhan").value;
        var alamat = document.getElementById("alamat").value;
        var tanggal = document.getElementById("tanggal").value;

        alert(
            "Nama: " + name +
            "\nNo Pasien: " + nopasien +
            "\nKeluhan: " + keluhan +
            "\nAlamat: " + alamat +
            "\nTanggal: " + tanggal
        );

        // Add your form submission logic here
    });
});
