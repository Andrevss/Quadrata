/*Validações - TELA 1 (login) */
let btn = document.querySelector(".fa-eye")
let login = document.querySelector('#login')
let senha = document.querySelector('#senha')
let nome = document.querySelector('#nome')
let sobrenome = document.querySelector('#sobrenome')
let email = document.querySelector('#email')
let senhaone = document.querySelector('#senhaone')
let senhatwo = document.querySelector('#senhatwo')
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

let validlogin = false
let validsenha = false
let validnome = false
let validsobrenome = false
let validemail = false
let validsenhaone = false
let validsenhatwo = false

loginadmin = 'admin@admin.com';
senhaadmin = 'admin';
loginuser = 'user@user.com';
senhauser = 'user';


nome.addEventListener('keyup', ()=>{
    if(nome.value.length < 2){
        nome.setAttribute('class', 'validationError')
        validnome = false
    }else{
        nome.setAttribute('class', 'validationSucess')
        validnome = true
    }
})

sobrenome.addEventListener('keyup', ()=>{
    if(sobrenome.value.length < 2){
        sobrenome.setAttribute('class', 'validationError')
        validsobrenome = false
    }else{
        sobrenome.setAttribute('class', 'validationSucess')
        validsobrenome = true
    }
})

email.addEventListener('keyup', ()=>{
    if (emailRegex.test(email.value)){
        email.setAttribute('class', 'validationSucess')
        validemail = true
    }else{
        email.setAttribute('class', 'validationError')
        validemail = false
    }
})

senhaone.addEventListener('keyup', ()=>{
    if(senhaone.value.length < 6){
        senhaone.setAttribute('class', 'validationError')
        validsenhaone = false
    }else{
        senhaone.setAttribute('class', 'validationSucess')
        validsenhaone = true
    }
})

senhatwo.addEventListener('keyup', ()=>{
    if(senhatwo.value != senhaone.value){
        senhatwo.setAttribute('class', 'validationError')
        validsenhatwo = false
    }else{
        senhatwo.setAttribute('class', 'validationSucess')
        validsenhatwo = true
    }
})

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type", "text")
    } else {
        inputSenha.setAttribute("type", "password")
    }
})

function cadastrar(){
    if(validnome && validsobrenome && validemail && validsenhaone && validsenhatwo){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]') 
        listaUser.push(
        {
            nomeCad: nome.value,
            sobrenomeCad: sobrenome.value,
            emailCad: email.value,
            senhaoneCad: senhaone.value
        }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        window.location.href = 'tela2.html'
    }else{
        senhatwo.setAttribute('class', 'validationError')
        senhaone.setAttribute('class', 'validationError')
        sobrenome.setAttribute('class', 'validationError')
        nome.setAttribute('class', 'validationError')
        email.setAttribute('class', 'validationError')
    }
}

function entrar(){
        if(login.value == 'admin@admin.com' && senha.value =='admin'){
            window.location.href = 'tela3.html'
        }else if(login.value == 'user@user.com' && senha.value =='user'){
            window.location.href = 'tela4.html'
        }else{
            login.setAttribute('class', 'validationError')
            senha.setAttribute('class', 'validationError')
        }
}