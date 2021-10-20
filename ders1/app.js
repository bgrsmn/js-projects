console.log('Merhaba Kodlama.io');

//JS type safe değildir.
let dolarBugun = 9.3;

let dolarDun = 9.2;

{
	let dolarDun = 9.1;
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11 //bunu yapamıyoruz

console.log(euroDun);
//konutKredileri
//camelCasing
//PascalCasing
let konutKredileri = [
	'Konut Kredisi',
	'Emlak Konut Kredisi',
	'Kamu Konut Kredisi',
	'Özel Konut Kredileri',
];

console.log('<ul>');
for (let i = 0; i < konutKredileri.length; i++) {
	console.log('<li>' + konutKredileri[i] + '</li>');
}

console.log('</ul>');

console.log(konutKredileri);
