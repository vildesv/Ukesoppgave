function vote(index) {
    model.stemmer[index].antallStemmer ++
 
    show(); 
}

function slette(index) {
    model.stemmer.splice(index, 1)
    show();
}

function leggTil() {
    let html = `Navn: <input type="text" oninput="model.inputs.navn = this.value"><br>
    <button onclick="lagre()">Legg til Ny</button>`;
    model.leggTilNy = html
    show();
}

function endre(index){
    let html = `Navn: <input type="text" oninput="model.inputs.navn = this.value"><br>
    <button onclick="lagreEndring(${index})">endre</button>`;
    model.leggTilNy = html
 
    show()
    
}
function lagreEndring(index){
    model.stemmer[index].navn = model.inputs.navn
    model.leggTilNy = '';
    show()
}
function lagre(){
    if(model.inputs.navn == "" ){
        model.feilmelding = 'Du må fylle inn';
    }
    
    else {
        model.stemmer.push({
            navn: model.inputs.navn,
            antallStemmer: 0})
    } 

    model.inputs.navn = "";
    model.inputs.antallStemmer = '';

    model.leggTilNy = '';
    show();    
}
