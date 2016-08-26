

//CAIXAS DO FORMULÁRIO DA LISTA DE PRESENÇA
function criaCaixasDeTexto(valor) {
    
    $('div.caixas').remove();
    fazCaixas(valor);

}
function fazCaixas(valor) {
    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({});

    for(var i = 0; i < valor; i++) {
        iCnt = iCnt + 1;       

        // ADD TEXTBOX.
        $(container).append("<div class='form-group caixas'><label>Nome *</label><br><input type=text class='form-control' id='tb"+iCnt+"' name='tb"+iCnt+"' placeholder='Nome' /></div>");

        // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
        if (iCnt == 1) {

            var divSubmit = $(document.createElement('div'));
            // $(divSubmit).append('<input type=button class="bt"' + 
            //     'onclick="GetTextValue()"' + 
            //         'id=btSubmit value=Submit />');

        }     
        // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
        $('#main').after(container, divSubmit);
    }
}

document.getElementById("txtQtd").disabled = true;

function selectSim() {
    document.getElementById("txtQtd").disabled = false;
}
function selectNao() {
    document.getElementById("txtQtd").disabled = true;
    $('div.caixas').remove();
}