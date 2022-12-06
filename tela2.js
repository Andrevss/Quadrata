var btn_addschool = document.getElementById('addschool');
var btn_addwork = document.getElementById('addwork');
var formschool = document.getElementById('school');
var formwork = document.getElementById('work');
var boxschool = document.getElementById('boxschool');
var boxwork = document.getElementById('boxwork');
var contador = 1;

btn_addschool.addEventListener('click', function(){
    contador++;
    campocurso();
    campoinstituicao();
    campograu();
});

function divcampo(){
    var div = document.createElement('div')
    div.classList.add('campo')
    return div;
}

function fnLabel(nome, texto){
    var label = document.createElement('label');
    label.setAttribute('for', nome +contador);
    label.textContent = texto;
    return label;
}

function fnInput( type, name, id, placeholder){

    var input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id + contador);
    input.setAttribute('placeholder', placeholder);
    input.classList.add(id);
    return input;

}

function campocurso(){
    var label = fnLabel('curso_', 'Curso*')

    var input = fnInput('text', 'curso', 'curso_', 'Curso');
    var div = divcampo()
    
    boxschool.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
}

function campoinstituicao(){
    var label = fnLabel('instituicao_', 'Instituicao*');
    
    var input = fnInput('text', 'instituicao', 'instituicao_', 'Instituição');
    var div = divcampo()
    
    boxschool.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
}

function campograu(){
    var label = fnLabel('grau_', 'Grau*');
    
    var select = fnSelect()
    var div = divcampo()
    
    boxschool.appendChild(div);
    div.appendChild(label);
    div.appendChild(select);
}

function fnSelect(){
    var SELECT = document.createElement('SELECT');
    SELECT.classList.add('Grau');

    var OPT0 = document.createElement('OPTION');
    OPT0.setAttribute('value', 0);
    OPT0.setAttribute('selected', "");

    var OPT1 = document.createElement('OPTION');
    OPT1.setAttribute('value', 0);

    var OPT2 = document.createElement('OPTION');
    OPT2.setAttribute('value', 0);

    var OPT3 = document.createElement('OPTION');
    OPT3.setAttribute('value', 0);

    var OPT4 = document.createElement('OPTION');
    OPT4.setAttribute('value', 0);
    
    var OPT5 = document.createElement('OPTION');
    OPT5.setAttribute('value', 0);

    var OPT6 = document.createElement('OPTION');
    OPT6.setAttribute('value', 0);

    var OPT7 = document.createElement('OPTION');
    OPT7.setAttribute('value', 0);

    OPT0.appendChild( document.createTextNode( 'Selecione' ) );
    OPT1.appendChild( document.createTextNode( 'Ensino Fundamental' ) );
    OPT2.appendChild( document.createTextNode( 'Ensino Médio' ) );
    OPT3.appendChild( document.createTextNode( 'Técnico' ) );
    OPT4.appendChild( document.createTextNode( 'Graduação' ) );
    OPT5.appendChild( document.createTextNode( 'Pós-Graduaçãoo' ) );
    OPT6.appendChild( document.createTextNode( 'Mestrado' ) );
    OPT7.appendChild( document.createTextNode( 'Doutorado' ) );

    SELECT.appendChild(OPT0); SELECT.appendChild(OPT1);
    SELECT.appendChild(OPT2); SELECT.appendChild(OPT3);
    SELECT.appendChild(OPT4); SELECT.appendChild(OPT5);
    SELECT.appendChild(OPT6); SELECT.appendChild(OPT7);


  return SELECT;

}

btn_addwork.addEventListener('click', function(){
    contador++;
    campoFuncao();
    campoEmpresa();
    campoPeriodo();
})

function campoFuncao(){
    var label = fnLabel('funcao_trabalho_', 'Função');

    var input = fnInput('text', 'funcao_trabalho', 'funcao_trabalho_', 'Função');
    var div = divcampo()

    boxwork.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
}

function campoEmpresa(){
    var label = fnLabel('empresa_', 'Empresa');

    var input = fnInput('text', 'empresa', 'empresa_', 'Empresa');
    var div = divcampo()

    boxwork.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
}

function campoPeriodo(){
    var label = fnLabel('periodo_', 'Período');

    var input = fnInput('text', 'periodo_trabalho', 'periodo_trabalho_', 'Período');
    var div = divcampo()

    boxwork.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
}

//VALIDAÇÃO 
let CEP = document.querySelector('#CEP')
let Rua = document.querySelector('#Rua')
let telefone = document.querySelector('#telefone')
let pronome = document.querySelector('#select')
let curso = document.querySelector('#curso')
let instituicao = document.querySelector('#instituicao')
let grau = document.querySelector('#Grau')
let tecnologias = document.querySelector('#tecnologias')
let funcao = document.querySelector ('#funcao_trabalho')
let empresa = document.querySelector('#empresa')
let periodo = document.querySelector('#periodo_trabalho')


let validCEP = false
let validRua = false
let validtelefone = false
let validpronome = false
let validcurso = false
let validinstituicao = false
let validgrau = false
let validtecnologias = false
let validfuncao = false
let validempresa = false
let validperiodo = false
let validsobre = true


grau.addEventListener('keyup', ()=>{
        if(grau.value == 'selecione'){
            grau.setAttribute('class', 'validationErrorgrau')
            validgrau = false
        }else{
            grau.setAttribute('class', 'validationSucess')
            validgrau = true
        }
})

CEP.addEventListener('keyup', ()=>{
    if(CEP.value.length < 8){
        CEP.setAttribute('class', 'validationError')
        validCEP = false
    }else{
        CEP.setAttribute('class', 'validationSucess')
        validCEP = true
    }
})

Rua.addEventListener('keyup', ()=>{
    if(Rua.value.length < 9){
        Rua.setAttribute('class', 'validationError')
        validRua = false
    }else{
        Rua.setAttribute('class', 'validationSucess')
        validRua = true
    }
})

telefone.addEventListener('keyup', ()=>{
    if(telefone.value.length < 2){
        telefone.setAttribute('class', 'validationError')
        validtelefone = false
    }else{
        telefone.setAttribute('class', 'validationSucess')
        validtelefone = true
    }
})

curso.addEventListener('keyup', ()=>{
    if(curso.value.length < 2){
        curso.setAttribute('class', 'validationError')
        validcurso = false
    }else{
        curso.setAttribute('class', 'validationSucess')
        validcurso = true
    }
})

instituicao.addEventListener('keyup', ()=>{
    if(instituicao.value.length < 2){
        instituicao.setAttribute('class', 'validationError')
        validinstituicao = false
    }else{
        instituicao.setAttribute('class', 'validationSucess')
        validinstituicao = true
    }
})



tecnologias.addEventListener('keyup', ()=>{
    if(tecnologias.value.length < 1){
        tecnologias.setAttribute('class', 'validationError')
        validtecnologias = false
    }else{
        tecnologias.setAttribute('class', 'validationSucess')
        validtecnologias = true
    }
})

funcao.addEventListener('keyup', ()=>{
    if(funcao.value.length < 6){
        funcao.setAttribute('class', 'validationError')
        validfuncao = false
    }else{
        funcao.setAttribute('class', 'validationSucess')
        validfuncao = true
    }
})

empresa.addEventListener('keyup', ()=>{
    if(empresa.value.length < 4){
        empresa.setAttribute('class', 'validationError')
        validempresa = false
    }else{
        empresa.setAttribute('class', 'validationSucess')
        validempresa = true
    }
})

periodo.addEventListener('keyup', ()=>{
    if(periodo.value.length < 4){
        periodo.setAttribute('class', 'validationError')
        validperiodo = false
    }else{
        periodo.setAttribute('class', 'validationSucess')
        validperiodo = true
    }
})


function enviar(){
    if(validCEP && validRua && validtelefone && validpronome && validcurso && validinstituicao && validtecnologias && validfuncao && validempresa && validperiodo)
    {
        window.location.href = 'tela4.html'
    }else{
        CEP.setAttribute('class', 'validationError')
        Rua.setAttribute('class', 'validationError')
        telefone.setAttribute('class', 'validationError')
        curso.setAttribute('class', 'validationError')
        instituicao.setAttribute('class', 'validationError')
        grau.setAttribute('class', 'validationError')
        tecnologias.setAttribute('class', 'validationError')
        funcao.setAttribute('class', 'validationError')
        empresa.setAttribute('class', 'validationError')
        periodo.setAttribute('class', 'validationError')
    }
}