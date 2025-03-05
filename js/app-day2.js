let name, age, language;
let section2 = document.getElementById('section2');

function sendAnswer() {
    this.name = document.getElementById('name').value;
    this.age = document.getElementById('age').value;
    this.language = document.getElementById('language').value;
    if (verifyAnswer()) {
        section2.innerHTML = `Olá ${this.name}, você tem ${this.age} anos e já está aprendendo ${this.language}!`;
    }
}

function verifyAnswer() {
    if (this.name == '' || this.age == '' || this.language == '') {
        alert('Preencha todos os campos!');        
        return false;
    }
    return true;
}