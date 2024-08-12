'use strict'
var Name_a;
var Name_b;
var Zahl_a;
var Zahl_b;

alert('Mein erster Versuch in JavaScript --> Ausgabe in einem Diagnosefeld');

Name_a = prompt('Gib deinen Vornamen ein!');
Name_b = prompt('Gib deinen Nachnamen ein!');
Zahl_a = prompt('Bitte gib eine Zahl ein!');
Zahl_b = prompt('Bitte gib eine weitere Zahl ein!');

alert('Hallo ' + Name_a + ' ' + Name_b + ', deine Zahlen lauten: ' + Zahl_a + ' und ' + Zahl_b);

console.log('Mein erster Versuch in JavaScript --> Ausgabe in der Konsole des Browsers --> F12');
console.log('Hallo ' + Name_a + ' ' + Name_b + ', deine Zahlen lauten ' + Zahl_a + ' und ' + Zahl_b);