document.addEventListener('DOMContentLoaded', function() {
    
    var emailInput = document.getElementById('email');
    var senhaInput = document.getElementById('senha');
    var loginButton = document.querySelector('.btn-login');

    
    loginButton.addEventListener('click', function() {
        var email = emailInput.value;
        var senha = senhaInput.value;

        

 
        if (email === 'usuario@example.com' && senha === 'senha123') {
            
            window.location.href = 'pagina_sucesso.html';
        } else {
          
            alert('E-mail ou senha inválidos. Por favor, tente novamente.');
        }
    });
});


function loginButton(){
    alert("Clicado")
}