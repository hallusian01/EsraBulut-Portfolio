function temaDegistir() {
    document.body.classList.toggle("dark-mode");
}
function resimYaklastir(event) {
    event.target.style.transform = "scale(1.1)";
    event.target.style.transition = "transform 0.3s ease";
}

function resimNormal(event) {
    event.target.style.transform = "scale(1)";
}
function projeAra() {
    const input = document.getElementById("aramaInput").value.toLowerCase();
    const projeler = document.querySelectorAll(".project");

    projeler.forEach((proje) => {
        const baslik = proje.querySelector("h3").textContent.toLowerCase();
        const aciklama = proje.querySelector("p").textContent.toLowerCase();

        if (baslik.includes(input) || aciklama.includes(input)) {
            proje.style.display = "block"; // Eşleşen projeyi göster
        } else {
            proje.style.display = "none"; // Eşleşmeyen projeyi gizle
        }
    });
}
function fontBoyutunuDegistir() {
    // Sayfa gövdesinin stilini al
    var body = document.body;
    
    // Mevcut font boyutunu kontrol et
    if (body.style.fontSize === "16px") {
        // Varsayılan font boyutu 16px ise, font boyutunu büyüt
        body.style.fontSize = "20px";
    } else {
        // Font boyutu 20px ise, tekrar varsayılan boyuta dön
        body.style.fontSize = "16px";
    }
}
function rastgeleRenkDegistir() {
    // Rastgele renk oluştur
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Sayfa arka plan rengini değiştir
    document.body.style.backgroundColor = randomColor;
}
