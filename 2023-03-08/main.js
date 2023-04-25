// Ausgabe Objekt
const cat ={
    name: 'Miau',
    breed: 'Hauskatze',
    age: 5,
    showCat: function() {
        document.querySelector('#objectOutput').innerHTML =
        `Name: ${this.name} gehört zur Rasse ${this.breed}. <br>
        Alter: ${this.age } </br> <hr>`;
        console.log(cat);
         }
 }

// mit Klasse
class CatClass{
    constructor(name, breed, age, birth, button){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.birth = birth;
        this.button = button;
    }
    showCat(){
        this.showCat(this);
     }

}
document.querySelector('#newCatClass').addEventListener('click', function() {
    let returnValue = validateForm();
    if(returnValue != false) {
        allCats.push(new CatClass(
            returnValue[0], returnValue[1], returnValue[2], returnValue[3], 'Object via Class'
        ))
    }
    showAllCats();
});

// Mit Konstruktor Object
function CatConstructor(name, breed, age, birth, button) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.birth = birth;
    this.button = button;
    this.showCat = function() { show(this);}
}

document.querySelector ('#newCatConstructor').addEventListener ('click', function() {
    let returnValue = validateForm();
    if(returnValue != false) {
        allCats.push = new CatConstructor(
            returnValue[0], returnValue[1], returnValue[2], returnValue[3], 'Constructor Object'
        ); 
        showAllCats();

}
 });

// Algemeine Klassen
let allCats = [];
const months = [
    "Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt",
"Nov", "Dez"]
function validateForm() {

}
function show(value){

}
function showAllCats(){
document.querySelector('#output')
}
function showAge(allCats) {

}