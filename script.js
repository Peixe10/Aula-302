var login = "Luis";
var senha = "aviao11";
var loginuser = prompt ("Digite seu login");
var senhauser = prompt ("Digite sua senha");
var cont = 0;

while (cont<=1) 
    if ((login == loginuser)&&(senha == senhauser)) {
        alert ("Login Realizado com Sucesso");
        cont = 3;
    }

    else{
        alert("Credenciais Não Registradas");
        cont = (cont + 1);
        loginuser = prompt ("Digite seu login");
        senhauser = prompt ("Digite sua senha");
    }