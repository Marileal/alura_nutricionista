// adiciona imc a tabela

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    // extraindo infos do paciente do doc
    var form = document.querySelector("#form-adiciona");
    var paciente = getDataPacient(form);
    var pacienteTr = montaTr(paciente);
    if(!validaPaciente(paciente)){
      console.log("paciente inválido");
      return;
    }
    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
      console.log(paciente);
    form.reset();
})//fim da função anônima

    function getDataPacient(form){
      var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
      }
      return paciente;
    }
// cria a tr e a td do paciente

    function montaTd(dado, classe){
      var td = document.createElement("td");
      td.textContent = dado;
      td.classList.add(classe);

      return td;
    }

    function montaTr(paciente){
      var pacienteTr = document.createElement("tr");
      pacienteTr.classList.add("paciente");

      pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
      pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
      pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
      pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
      pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

      return pacienteTr;
    }
    function validaPaciente(paciente){
      if(validaPeso(paciente.peso)){
        return true;
        }
      else{
        return false;
      }
    }
