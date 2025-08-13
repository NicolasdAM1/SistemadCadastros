import { conta, menu } from "../main.js";
import { prompt, returnMenu } from "../pack.js";


export function userSignUp(){
    console.clear();
    console.log("-".repeat(20) + "ADICIONE UM NOVO USUÁRIO" + "-".repeat(20));
    console.log("Digite o nome de usuário: ");
    var username = prompt("> ");
    console.log("Digite o telefone do usuário (com DDD): ");
    var usernumber = prompt("> ");
    if(isNaN(usernumber) || usernumber.length < 11){
        console.log("O TELEFONE deve conter APENAS números e ter um TAMANHO válido.");
        returnMenu();
    }
    const telefoneFormatado = "(" + usernumber.substring(0,2) + ")" + usernumber.substring(2,7) + "-" + usernumber.substring(7);
    console.log("Digite o email do usuário: ");
    var usermail = prompt("> ");
    const user = {
        ID: Math.floor(Date.now() / 6000),
        username: username,
        usernumber: telefoneFormatado,
        usermail: usermail,
    };
    conta.push(user);
    console.clear();
    console.log("-".repeat(80));
    console.log(`USUÁRIO: ${username}, de TELEFONE: ${telefoneFormatado} e de EMAIL '${usermail}' cadastrado.\nSeu ID de usuário é: ${user.ID}`);
    console.log("-".repeat(80));
    returnMenu();
}