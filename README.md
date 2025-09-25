# BIMA - Chatbot Pelayanan Masyarakat

✨ **Ingin Panduan Lengkap?** Kunjungi postingan blog kami untuk tutorial mendalam: 

[https://www.dzarel.web.id/2025/09/tutorial-yuk-bikin-chatbot-pelayanan.html] ✨

BIMA adalah sebuah proyek chatbot sederhana yang dirancang untuk memberikan informasi terkait pelayanan publik. Chatbot ini bekerja berdasarkan data yang telah ditentukan dalam format JSON, memberikan jawaban cepat untuk pertanyaan-pertanyaan umum seputar layanan masyarakat.

Proyek ini terdiri dari dua bagian utama:
1.  **Halaman Utama (`index.html`)**: Halaman perkenalan yang menjelaskan fungsi dan keunggulan chatbot BIMA.
2.  **Halaman Chat (`chat.html`)**: Antarmuka utama tempat pengguna dapat berinteraksi langsung dengan chatbot.

## Tujuan Proyek

Tujuan utama dari proyek BIMA adalah:
- **Meningkatkan Aksesibilitas Informasi**: Memudahkan masyarakat mendapatkan informasi layanan publik kapan saja dan di mana saja.
- **Mengurangi Beban Kerja Petugas**: Menjawab pertanyaan-pertanyaan umum secara otomatis sehingga petugas dapat fokus pada kasus yang lebih kompleks.
- **Menyediakan Informasi yang Konsisten**: Memastikan setiap pengguna mendapatkan jawaban yang sama dan akurat sesuai dengan data yang telah ditetapkan.

## Fitur

- **Respons Berbasis Data**: Jawaban dihasilkan dari file `data.json`, memastikan konsistensi dan akurasi informasi.
- **Pencocokan Kata Kunci**: Menggunakan kata kunci (`keyword`) dan sinonim (`synonyms`) untuk menemukan jawaban yang paling relevan dengan pertanyaan pengguna.
- **Antarmuka Responsif**: Tampilan chatbot dan halaman utama dapat menyesuaikan diri dengan berbagai ukuran layar, baik desktop maupun mobile.
- **Balasan Cepat (Quick Replies)**: Menyediakan tombol untuk pertanyaan umum agar pengguna lebih mudah memulai percakapan.
- **Pesan Default**: Memberikan respons standar jika pertanyaan pengguna tidak ditemukan dalam basis data, lengkap dengan tautan bantuan lebih lanjut.
- **Dukungan Tautan**: Jawaban dari bot dapat menyertakan tautan HTML yang bisa diklik (misalnya, untuk menuju ke halaman website atau WhatsApp).

## Teknologi yang Digunakan

- **HTML5**: Untuk struktur konten web.
- **CSS3**: Untuk styling dan desain antarmuka yang modern dan responsif.
- **JavaScript (ES6)**: Untuk logika interaktif chatbot, memproses input pengguna, dan menampilkan respons.
- **JSON**: Sebagai basis data sederhana untuk menyimpan pengetahuan chatbot.

## Struktur File

```
.
├── assets/
│   └── Logo.jpeg         # Logo yang digunakan di chatbot
├── chat.html             # Halaman antarmuka chatbot
├── data.json             # Basis data berisi pertanyaan dan jawaban
├── index.html            # Halaman utama (landing page)
├── landing.css           # File CSS untuk halaman utama
├── script.js             # File JavaScript untuk logika chatbot
└── style.css             # File CSS untuk halaman chatbot
```

## Cara Kerja

1.  Saat halaman `chat.html` dimuat, `script.js` akan mengambil data dari `data.json`.
2.  Pengguna dapat mengetik pertanyaan di kolom input atau mengklik salah satu tombol "Balasan Cepat".
3.  Input dari pengguna (baik dari ketikan maupun tombol) akan diproses oleh fungsi `getBotResponse`.
4.  Fungsi tersebut akan mencocokkan input pengguna dengan `keyword` atau `synonyms` yang ada di `data.json` dengan melakukan perulangan pada setiap kategori dan item.
5.  Jawaban yang memiliki skor kecocokan tertinggi akan dipilih dan ditampilkan sebagai pesan dari bot.
6.  Jika tidak ada kata kunci yang cocok, bot akan memberikan jawaban default yang ada di kategori "Default".

## Cara Menjalankan

Proyek ini sepenuhnya berbasis *client-side*, sehingga tidak memerlukan server khusus.

1.  Pastikan semua file berada dalam satu direktori yang sama sesuai struktur di atas.
2.  Buka file `index.html` untuk melihat halaman utama, atau buka `chat.html` untuk langsung menggunakan chatbot di browser web Anda (seperti Google Chrome, Firefox, atau Safari).

## Kustomisasi

Untuk mengubah atau menambah pengetahuan chatbot, Anda hanya perlu mengedit file `data.json`.

- **Menambah Jawaban Baru**: Tambahkan objek baru di dalam salah satu kategori yang ada (misalnya, "Informasi Umum").
- **Menambah Kata Kunci**: Tambahkan kata kunci baru ke dalam array `keyword` atau `synonyms` pada item yang sudah ada.
- **Mengubah Jawaban**: Edit properti `answer` pada item yang ingin diubah.

Contoh struktur data untuk satu item:
```json
{
    "keyword": ["kata kunci utama"],
    "synonyms": ["sinonim1", "sinonim2"],
    "answer": "Ini adalah jawaban yang akan ditampilkan oleh bot."
}
```

## Kredit

Proyek ini dibuat dan dikembangkan oleh:
- **Dzarel** - [GitHub](https://github.com/dzareldeveloper)

Terima kasih kepada semua pihak yang telah memberikan inspirasi dan dukungan.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.
