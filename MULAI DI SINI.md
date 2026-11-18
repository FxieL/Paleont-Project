# Fosil & Cerita — mulai di sini

## Buka website

Buka `index.html` di browser. Halaman-halamannya sekarang dipisah: Beranda, koleksi Pachy, Catatan & Filosofi, dan Museum Wishlist. Tautannya menggunakan alamat relatif, jadi semua file bisa dipindahkan bersama dalam satu folder.

## Gambar Pachy dari Wikimedia Commons

Ilustrasi sudah dipasang di halaman Beranda dan halaman Pachy. File gambarnya ada di:

`images/Pachy/Pachycephalosaurus_2026.jpg`

Halaman Commons mencatat ilustrasi cat air oleh **Plegadis**, sumber **karya sendiri**, dan lisensi **CC0 1.0**. CC0 memperbolehkan penyalinan dan pengubahan tanpa meminta izin atau mewajibkan atribusi, tetapi kami tetap menampilkan nama pembuat, lisensi, dan tautan sumber sebagai catatan yang baik. [Lihat informasi file dan lisensinya di Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pachycephalosaurus_2026.jpg).

Kalau mau memasang gambar Commons lain:

1. Buka halaman file di Wikimedia Commons, bukan sekadar halaman pencarian atau thumbnail.
2. Periksa bagian **Licensing/Lisensi**. Catat jenis lisensi dan persyaratannya. Lisensi CC BY perlu kredit; CC BY-SA juga mensyaratkan berbagi adaptasi dengan lisensi serupa. Hindari gambar yang tidak mencantumkan izin pakai yang jelas.
3. Di bagian informasi file, pilih **Original file** atau ukuran yang sesuai, unduh gambarnya, lalu simpan di folder `images` (boleh buat subfolder, misalnya `images/Ammonite/`).
4. Di halaman yang sesuai, tambahkan gambar dengan jalur relatif, misalnya:

   ```html
   <img src="images/Ammonite/nama-file.jpg" alt="Deskripsi yang terlihat pada fosil">
   ```

5. Tambahkan kredit di dekat gambar: nama pembuat, judul, lisensi, dan tautan halaman Commons. Kirim file atau tautannya kepadaku kalau ingin dibantu memasang dan menata gambarnya.

## Gonta-ganti perangkat

Website ini belum menyinkronkan data sendiri. Semua halaman dan gambar bisa dibuka di laptop/PC lain dengan menyalin **seluruh folder `Fosil dan Cerita`**—bukan `index.html` saja. Kamu bisa zip folder itu, pindahkan, lalu ekstrak di perangkat lain. Pastikan susunan di dalam folder tidak berubah, terutama `images`, `site.css`, dan `site.js`.

Catatan personal dan checklist museum saat ini disimpan oleh browser di perangkat yang dipakai. Nilai centang/catatan itu tidak ikut di dalam ZIP. Untuk memindahkannya, salin teks catatan dan catat checklist secara manual. Kalau folder project kamu simpan di folder cloud yang tersinkron (misalnya OneDrive atau Dropbox), file websitenya bisa ikut tersinkron; penyimpanan browser tetap terpisah. Kita bisa ubah nanti supaya data dicatat di file juga, kalau kamu mau.

## Cara menumbuhkan koleksi

- `pachy.html` berisi artikel spesies dan catatan mainan Pachy pertamamu.
- `filosofi.html` menampung refleksi soal dinosaurus dan rasa ingin tahu.
- `museum.html` berisi wishlist dan checklist kunjungan.
- `index.html` menjadi beranda dan pintu masuk ke halaman-halaman tersebut.

Kalau kamu menemukan fosil, label pameran, atau cerita baru, kita bisa tambah halaman baru dengan pola yang sama. Fungsi kubah Pachy tetap ditulis sebagai topik yang diperdebatkan, bukan fakta yang sudah pasti.
