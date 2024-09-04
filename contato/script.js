window.onscroll = async () => {
  if (window.scrollY != 0)
  {
      document.querySelector('header').className = "header-box-shadow"
  } else {
      document.querySelector('header').className = ''
  }
}

var nomeGlobal;
var mensagemGlobal;

function conferirZapEster(){
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;

  nomeGlobal = nome;
  mensagemGlobal = mensagem;
  
  document.getElementById("confNome").textContent = nome;
  document.getElementById("confMsg").textContent = mensagem;
}

function enviarEster(){
  var numTelEster = "41997729970"

  var linkWhatsApp = "https://wa.me/" + numTelEster + "?text=Nome:" + nomeGlobal + "-" + mensagemGlobal;
  window.open(linkWhatsApp, "_blank");
}