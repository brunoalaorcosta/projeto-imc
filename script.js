
        function calcimc() {
            let peso = document.querySelector('#peso').value;
            let altura =  document.querySelector('#altura').value;
            let imc = (peso / (altura ** 2)).toFixed(2);
            let texto = ''

            if (imc < 18.5) {
                texto = `Seu IMC é de ${imc}, e você está abaixo do peso ideal`
            } else if (imc < 24.9) {
                texto = `Seu IMC é de ${imc}, e você está no peso ideal`
            } else if (imc < 29.9) {
                texto = `Seu IMC é de ${imc}, e você está  com excesso de peso`
            } else if (imc < 35.9) {
                texto = `Seu IMC é de ${imc}, e você está com obesidade classe I`
            } else if (imc < 39.9) {
                texto = `Seu IMC é de ${imc}, e você está com obesidade classe II`
            } else if  (imc >= 40) {
                texto = `Seu IMC é de ${imc}, e você está com obesidade classe III`
            }

            document.getElementById("tex").innerText = (texto);
        }

        function limpar() {
            let campoTexto = ""
            document.getElementById("altura").value = "";
            document.getElementById("peso").value = "";
            document.getElementById("tex").value = "";


        }






    
