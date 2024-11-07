document.getElementById('calculate-btn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Validasi input
    if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender) {
        alert("Harap lengkapi semua data!");
        return;
    }

    // Hitung BMI
    const bmi = weight / (height * height);
    document.getElementById('result').textContent = `BMI Anda: ${bmi.toFixed(2)}`;

    // Tentukan kategori BMI
    let category = '';
    let description = '';

    if (bmi < 18.5) {
        category = 'Kurus';
        description = 'Berat badan Anda berada di bawah normal. Disarankan untuk meningkatkan asupan gizi.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
        description = 'Berat badan Anda normal. Terus jaga pola makan dan gaya hidup sehat.';
    } else if (bmi >= 25) {
        category = 'Obesitas';
        description = 'Berat badan Anda di atas normal. Disarankan untuk menjaga pola makan dan berolahraga secara rutin.';
    }

    document.getElementById('detailed-result').textContent = `${category}. ${description}`;
});
