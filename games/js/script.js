        let banco = ["java", "mozila firefox", "edge", "visual studio", "apache", "algoritmos", "estrutura de dados", "orientacao a objetos", "python", "c++", "c#", "react native", "javascript", "django", "back end", "fornt end", "fullstack", "kotlin", "pascal", "flask", "ruby"];
        
        let palavra = banco[Math.floor(Math.random() * (banco.length - 0) + 0)];
        let palavraArray = palavra.split("");
        let palavraOculta = new Array(palavra.length).fill("_");
        let tentativas = 6;
        let letrasUsadas = [];

        function atualizarTela() {
            document.getElementById("palavraOculta").textContent = palavraOculta.join(" ");
            document.getElementById("letrasUsadas").textContent = "Letras usadas: " + letrasUsadas.join(", ");
            if (tentativas === 0) {
                document.getElementById("mensagem").textContent = "Você perdeu! a palavra era " + palavra;
            } else if (palavraOculta.join("") === palavra) {
                document.getElementById("mensagem").textContent = "Você ganhou!";
            } else {
                document.getElementById("mensagem").textContent = `Você ainda tem ${tentativas} tentativas.`;
            }
        }

        function adivinhar(letra) {
            if (tentativas === 0 || palavraOculta.join("") === palavra) {
                return;
            }
            if (letrasUsadas.includes(letra)) {
                return;
            }
            letrasUsadas.push(letra);
            let acertou = false;
            for (let i = 0; i < palavraArray.length; i++) {
                if (palavraArray[i] === letra) {
                    palavraOculta[i] = letra;
                    acertou = true;
                }
            }
            if (!acertou) {
                tentativas--;
            }
            atualizarTela();
        }

        atualizarTela();
        document.onkeypress = function(event) {
            adivinhar(event.key);
        }