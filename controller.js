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
    Antall stemmer: <input type="text" oninput="model.inputs.antallStemmer = this.value"><br></br>
    <button onclick="lagre()">Lagre</button>`;
    model.leggTilNy = html
    show();
}


function lagre(){
    if(model.inputs.navn == "" || model.inputs.antallStemmer == ''){
        show();
    }
    
    else {
        model.stemmer.push({
            navn: model.inputs.navn,
            antallStemmer: model.inputs.antallStemmer})
    } 

    model.inputs.navn = "";
    model.inputs.antallStemmer = '';

    model.leggTilNy = '';
    show(); 
}



