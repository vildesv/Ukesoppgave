let appDiv = document.getElementById('app');

show();
function show(){
    let html = ``
    for(let i = 0; i < model.stemmer.length; i++){
        html += `<div onclick="endre(${i})">
        <button onclick="vote(${i})">${model.stemmer[i].navn}</button> ${model.stemmer[i].antallStemmer} 
        <button onclick="slette(${i})">Slett</button> 
        </div>
        <hr>
        `;
    }

    html += `
        <br>
        <button onclick="leggTil()">Legg til</button>${model.leggTilNy}
     
    `;

appDiv.innerHTML = html;
}