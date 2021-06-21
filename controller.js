function vote(index) {
    model.stemmer[index].antallStemmer ++
    show(); 
}

function slette(index) {
    model.stemmer.splice(index, 1)
    show();
}