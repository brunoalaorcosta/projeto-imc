
        function calcimc() {
            var peso = document.querySelector('#peso').value;
            var altura = document.querySelector('#altura').value;
            var imc = (peso / (altura * altura)).toFixed(2);
            var texto = ''

            if (imc < 18.5) {
                texto = `Seu IMC é de ${imc}, e você está abaixo do peso normal`
            } else if (imc < 24.9) {
                texto = `Seu IMC é de ${imc}, e você está no peso peso normal`
            } else if (imc < 29.9) {
                texto = `Seu IMC é de ${imc}, e você está  com excesso de peso`
            } else if (imc < 35.9) {
                texto = `Seu IMC é de ${imc}, e você está com obesidade classe I`
            } else if (imc < 39.9) {
                texto = `Seu IMC é de ${imc}, e você está com obesidade classe II`
            } else if (imc >= 40) {
                texto = `Seu IMC é de ${imc}, e você está com obesidade classe III`
            }

            document.getElementById("tex").innerText = (texto);
        }

        function limpar() {
            var campoTexto = ""
            document.getElementById("campoTexto").value = "";
        }


    
