document.getElementById("novoContato").addEventListener("click", criarContato);
document.getElementById("listaContatos").addEventListener("click", listarContatos);
document.getElementById("listaDuplicados").addEventListener("click", listarDuplicados);






function criarContato() {

   var nome = document.getElementById('nome').value;
   var novoContato = navigator.contacts.create({"displayName": nome });
   var telefones = [];

   var celular = document.getElementById('ntel').value;

   //telefones[1] = document.getElementById('nome').value;
   telefones[1] = new ContactField('mobile', celular , true);
   novoContato.phoneNumbers = telefones;
   novoContato.save(ok, erro);
    
   function ok() {
      alert("Contato Salvo!")
   }
  
   function erro(message) {
      alert('falha: ' + message);
   }
  
}


function listarContatos() {
   var options = new ContactFindOptions();
   options.filter = "";
   options.multiple = true;

   fields = ["displayName", "phoneNumbers"];
   navigator.contacts.find(fields, sucesso, falha, options);
    
   contatoDiv = document.querySelector("#contato");
   contatoDiv.innerHTML = "";
   function sucesso(contacts) {
      for (var i = 0; i < contacts.length; i++) {
         contatoDiv.innerHTML += "<b>" + contacts[i].displayName+"</b><br/>"+contacts[i].phoneNumbers[0].value+"<br/>";
      }
   }
  
   function falha(message) {
      alert('Falha: ' + message);
   }
  
}

function listarDuplicados(){

    //document.getElementById("principal").style.display = "block";
    //document.getElementById("novo").style.display = "none";

    var cont = 0;
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;

    fields = ["displayName", "phoneNumbers"];
    navigator.contacts.find(fields, sucesso, falha, options);

    contatoDiv = document.querySelector("#contato");
    contatoDiv.innerHTML = "";

    function sucesso(contacts){

      



        for (var i = 0; i < contacts.length; i++) {
              cont = 0;

              for(var j = 0; j <contacts.length; j++){
                  if (contacts[i].displayName == contacts[j].displayName) {
                    cont++;
                  }
              }
              if (cont > 1) {
                contatoDiv.innerHTML += "<b>" +
                contacts[i].displayName + "<b> " +
                contacts[i].phoneNumbers[0].value + "<br>";
              }

           }

       
        }   
         function falha(message){
          alert('Falha: ' + message);
  
    }
}

/*
// JavaScript Modal 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("abreModal"); 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

*/ 