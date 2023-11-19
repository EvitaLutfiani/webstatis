// Menampilkan Waktu Real Time dengan menggunakan Function
// Waktu JS
function waktu() {
    var sekarang = new Date();
    var jam = sekarang.getHours();
    var menit = sekarang.getMinutes();
    var detik = sekarang.getSeconds();

    var waktu = jam + ":" + menit + ":" + detik;

    document.querySelector('#timeIs').innerHTML = waktu;
}


// Mengubah isi tampilan pada jumbotron Home
function kanan() {
    var wadah = `
        <h1>JASA LAYANAN ENERGI</h1>
        <p>Titan Infra Energy beroperasi di wilayah selatan Pulau Sumatera memberikan layanan terintegrasi dalam pengembangan energi di Indonesia mulai dari jasa pertambangan batubara, infrastruktur logistik dan jasa pengangkutan baik darat maupun air.</p>
    `;
    
    document.querySelector(".jb-main").innerHTML = wadah;
}

function kiri() {
    var wadah = `
        <h1>INFRASTRUKTUR ENERGI</h1>
        <p>Titan Infra Energy berfokus kepada pengembangan infrastruktur energi mulai dari hulu hingga hilir, mulai dari situs tambang, jalur pengangkutan, Pelabuhan khusus hingga kepada jasa pengangkutan batubara.</p>
    `;
    
    document.querySelector(".jb-main").innerHTML = wadah;
}

function berita() {
    var berita = `
        <!-- Cards 4 -->
        <div class="cards-berita">
            <!-- Cards Img Start -->
                <div class="cards-img">
                    <img src="Images_UTS/card4.jpg" alt="">
                </div>
                <span>BATUBARA</span>
            <!-- Cards Img End -->
            
            <!-- Cards Main Start -->
                <div class="cards-main">
                    <h1><a href="Pages/Berita/Berita_4.html">Peran PT Servo Lintas Raya (SLR) sebagai Perusahaan Tambang Batu Bara di Sumatera Selatan</a></h1>
                    <p>Sumatera Selatan telah lama menjadi salah satu produsen batu bara terbesar di Indonesia, dan puluhan perusahaan...</p>
                    <a class="btn" href="Pages/Berita/Berita_4.html">SELENGKAPNYA >></a>
                </div>
            <!-- Cards Main End -->

            <!-- Cards Date Start -->
                <div class="cards-date">
                    <p>05/11/2023</p>
                </div>
            <!-- Cards Date End -->
        </div>
        
        <!-- Cards 5 -->
        <div class="cards-berita">
            <!-- Cards Img Start -->
                <div class="cards-img">
                    <img src="Images_UTS/card5.png" alt="">
                </div>
                <span>BERITA</span>
            <!-- Cards Img End -->
            
            <!-- Cards Main Start -->
                <div class="cards-main">
                    <h1><a href="Pages/Berita/Berita_5.html">Titan Infra Energy Group: PT SLR dan PT SDJ Membangun Kepercayaan Masyarakat dengan Mentaati Peraturan dan Program CSR</a></h1>
                    <p>Mentaati Peraturan adalah landasan utama bagi perusahaan-perusahaan yang beroperasi di sektor Pertam...</p>
                    <a class="btn" href="Pages/Berita/Berita_5.html">SELENGKAPNYA >></a>
                </div>
            <!-- Cards Main End -->

            <!-- Cards Date Start -->
                <div class="cards-date">
                    <p>03/11/2023</p>
                </div>
            <!-- Cards Date End -->
        </div>
        
        <!-- Cards 6 -->
        <div class="cards-berita">
            <!-- Cards Img Start -->
                <div class="cards-img">
                    <img src="Images_UTS/card6.jpg" alt="">
                </div>
                <span>BERITA</span>
            <!-- Cards Img End -->
            
            <!-- Cards Main Start -->
                <div class="cards-main">
                    <h1><a href="Pages/Berita/Berita_6.html">Titan Infra Energy: Peran Industri Batubara dalam Menopang Ketahanan Energi Nasional</a></h1>
                    <p>Indonesia, Tiongkok, dan Australia telah lama dikenal sebagai pemain utama dalam industri batubara. Menurut data dari...</p>
                    <a class="btn" href="Pages/Berita/Berita_6.html">SELENGKAPNYA >></a>
                </div>
            <!-- Cards Main End -->

            <!-- Cards Date Start -->
                <div class="cards-date">
                    <p>29/10/2023</p>
                </div>
            <!-- Cards Date End -->
        </div>
    `;

    document.querySelector('.cards-content').innerHTML = berita;
}

function berita1() {
    var berita = `
        <!-- Cards 1 -->
        <div class="cards-berita">
            <!-- Cards Img Start -->
                <div class="cards-img">
                    <img src="Images_UTS/card1.png" alt="">
                </div>
                <span>BATUBARA</span>
            <!-- Cards Img End -->
            
            <!-- Cards Main Start -->
                <div class="cards-main">
                    <h1><a href="Pages/Berita/Berita_1.html">Mengoptimalkan Transportasi Batu Bara di Sumatera Selatan dengan Jalan Tol Khusus</a></h1>
                    <p>Dalam dunia pertambangan batu bara di Sumatera Selatan, PT Servo Lintas Raya (SLR) dan jalan tol khusus batu bara...</p>
                    <a class="btn" href="Pages/Berita/Berita_1.html">SELENGKAPNYA >></a>
                </div>
            <!-- Cards Main End -->

            <!-- Cards Date Start -->
                <div class="cards-date">
                    <p>06/11/2023</p>
                </div>
            <!-- Cards Date End -->
        </div>
        
        <!-- Cards 2 -->
        <div class="cards-berita">
            <!-- Cards Img Start -->
                <div class="cards-img">
                    <img src="Images_UTS/card2.jpg" alt="">
                </div>
                <span>BERITA</span>
            <!-- Cards Img End -->
            
            <!-- Cards Main Start -->
                <div class="cards-main">
                    <h1><a href="Pages/Berita/Berita_2.html">PT Servo Lintas Raya (Titan Group) Optimis Kapalkann 18 Juta Ton Batu Bara Lahat dan Muara Enim</a></h1>
                    <p>Tahun ini, PT Servo Lintas Raya (SLR) yang bertindak sebagai operator “jalan tol” khusus untuk angkutan batu bara di...</p>
                    <a class="btn" href="Pages/Berita/Berita_2.html">SELENGKAPNYA >></a>
                </div>
            <!-- Cards Main End -->

            <!-- Cards Date Start -->
                <div class="cards-date">
                    <p>07/11/2023</p>
                </div>
            <!-- Cards Date End -->
        </div>
        
        <!-- Cards 3 -->
        <div class="cards-berita">
            <!-- Cards Img Start -->
                <div class="cards-img">
                    <img src="Images_UTS/card3.png" alt="">
                </div>
                <span>BERITA</span>
            <!-- Cards Img End -->
            
            <!-- Cards Main Start -->
                <div class="cards-main">
                    <h1><a href="Pages/Berita/Berita_3.html">Penanganan Insiden Dump Truck di Pelabuhan Swarnadwipa Dermaga Jaya Telah Dilakukan dengan Cepat dan Efektif</a></h1>
                    <p>Insiden tergelincirnya dump truck di Pelabuhan Swarnadwipa Dermaga Jaya (SDJ) pada 30 Oktober 2023 merupakan...</p>
                    <a class="btn" href="Pages/Berita/Berita_3.html">SELENGKAPNYA >></a>
                </div>
            <!-- Cards Main End -->

            <!-- Cards Date Start -->
                <div class="cards-date">
                    <p>08/11/2023</p>
                </div>
            <!-- Cards Date End -->
        </div>
    `;

    document.querySelector('.cards-content').innerHTML = berita;
}

// Toggle class active for hamburger menu
const navbarNav = document.querySelector(".navbars-nav");

// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active-nav");
};

// Klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active-nav");
    }
});