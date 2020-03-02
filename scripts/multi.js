function Carpma() {
    const s1 = Number(document.getElementById("sayi1").value);
    const s2 = Number(document.getElementById("sayi2").value);
    const sonuc = s1 * s2 / 24;
    document.getElementById("kutuSonuc").textContent = Math.round(sonuc) + "day";
}