//? Class 01 - DOM with a fresh start.

//todo1 #title elementini getElementById ile seç → rengini mor yap
// let title = document.getElementById('title');
// title.style.color = 'purple';

//todo2 .item class’lı tüm <p> elementlerini querySelectorAll ile seç → hepsini 20px yap
// let p = document.querySelectorAll('.item');
// for (let item of p) {
//     item.style.fontSize = '20px';
// }

//todo3 tüm <li> elementlerini getElementsByTagName ile seç → console.log’a yazdır
// let li = document.getElementsByTagName('li');
// for (let item of li) {
//     console.log(item);
// }

/*
    1) Elementi seç → let baslik = ...
    2) İçindeki yazıyı şu yap:
    "Ata bugün DOM çalışıyor"

    3) İçine HTML ekle (kalın yap):
    "Ata <b>DOM</b> çalışıyor"

    4) Class name’ini al → console.log ile yaz
    5) Stil ver:
    renk: kırmızı
    fontSize: 30px
    backgroundColor: siyah
    padding: 10px
*/

// let title_2 = document.getElementById('title-2');
// title_2.innerText = 'ata is studying DOM today.';
// title_2.innerHTML = 'ata is studying <b>DOM</b> today.';

// console.log(title_2.className);

// title_2.style.color = 'red';
// title_2.style.fontSize = '30px';
// title_2.style.backgroundColor = 'black';
// title_2.style.padding = '10px';

// Görev 1:
// iki elementinin parent'ını console.log’a yaz.
// let iki = document.getElementById('iki');
// console.log(iki.parentElement);


// Görev 2:
// bir elementinin kardeşini bul (sağdaki) → içeriğini “Yeni İki” yap.
// let bir = document.getElementById('bir');
// bir.nextElementSibling.textContent = 'yeni iki';

// Görev 3:
// uc elementinin sol kardeşini bul → arka planını sarı yap.
// let uc = document.getElementById('uc');
// uc.previousElementSibling.style.backgroundColor = 'yellow';

// Görev:
// Yeni bir <li> oluştur
// İçine "karpuz" yaz
// #liste elementinin en sonuna ekle
// let li = document.createElement('li');
// li.textContent = 'watermelon';

// let ul = document.querySelector('#list');
// ul.appendChild(li);

// Görev:
// iki id’li <li>yi listeden tamamen sil.
// iki.remove();

// Gorev
// 1. ekle butonunu seç
// 2. Click event’i ekle
// 3. Tıklanınca listeye yeni bir <li> ekle → içi "Yeni Öğe" olsun

// let btn = document.getElementById('btn');

// btn.addEventListener('click', function () {
//     let li = document.createElement('li');
//     li.textContent = 'new item';

//     let ul = document.querySelector('#list-2');
//     ul.appendChild(li);
// });

let input = document.querySelector('#text');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert('you cannot add item when the textbox is empty.');
        return;
    }

    let li = document.createElement('li');
    li.textContent = input.value;

    let ul = document.querySelector('#list-2');
    ul.appendChild(li);

    input.value = '';
});

input.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        btn.click();
    }
});
