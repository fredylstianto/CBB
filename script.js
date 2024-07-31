const form = document.querySelector('form');
const hitungButton = document.querySelector('#hitung');
const namaUser = document.querySelector('#nama-user');
const hasilBerat = document.querySelector('#hasil-berat');
const kcalHarian = document.querySelector('#kcal-harian');

hitungButton.addEventListener('click', (e) => {
  e.preventDefault();
  const nama = document.querySelector('#nama').value;
  const berat = parseFloat(document.querySelector('#berat').value);
  const tinggi = parseFloat(document.querySelector('#tinggi').value);

  const bmi = berat / (tinggi / 100) ** 2;
  const kategori = getKategori(bmi);
  const kcal = getKcalHarian(bmi);

  namaUser.textContent = `Halo, ${nama}!`;
  hasilBerat.textContent = `Berat Badan Anda ${kategori}.`;
  kcalHarian.textContent = `Anda perlu membakar ${kcal} Kcal per hari.`;
});

function getKategori(bmi) {
  if (bmi < 18.5) {
    return 'kurang berat';
  } else if (bmi < 25) {
    return 'normal';
  } else if (bmi < 30) {
    return 'kelebihan berat';
  } else {
    return 'obesitas';
  }
}

function getKcalHarian(bmi) {
    if (bmi < 18.5) {
      return 1500;
    } else if (bmi < 25) {
      return 1800;
    } else if (bmi < 30) {
      return 2000;
    } else {
      return 2500;
    }
  }