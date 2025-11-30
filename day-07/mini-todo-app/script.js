// 📝 GEREKLER
// 1) Input’tan not ekle
// Input’a yaz → Add butonuna basınca listeye ekle.
// 2) Enter ile de ekle
// Enter’a basınca Add butonu ile aynı işlem olsun.
// 3) Her notun yanında bir delete butonu (X) olsun
// Yeni not eklenirken yanında bir X oluştur.
// 4) X’e basınca sadece o not silinsin
// li.remove() mantığı biliniyor zaten.
// 5) Input boşsa ekleme
// Boş gelirse alert ver ve işlemi durdur.

let input = document.querySelector('#text');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

btn.addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert('textbox is empty.');
        return;
    }

    let li = document.createElement('li');
    li.textContent = input.value;

    let del = document.createElement('button');
    del.textContent = 'X';
    del.classList.add('del')

    li.appendChild(del);
    list.appendChild(li);

    input.value = '';
})

list.addEventListener('click', function (e) {
    if (e.target.classList.contains('del'))
        e.target.parentElement.remove();
});

input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        btn.click();
    }
});