    function encryptText(text) {
        let encryptedText = text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return encryptedText;
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        let decryptedText = text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return decryptedText;
    }
    function adjustTextareaHeight(el) {
        el.style.height = 'auto'; 
        el.style.height = (el.scrollHeight) + 'px'; 
    }

    
    
    const inputTextArea = document.getElementById('input-text');
    const varEncryptText = document.querySelector('.encrypt-text');
    const outputParagraph = document.querySelector('.encrypt-text #text-area-encrypt');
    const encryptButton = document.querySelector('.encrypt-btn');
    const decryptButton = document.querySelector('.decrypt-btn');
    

    inputTextArea.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-z\s]/g, '');
    });
   
    function showOutput(text) {

        document.querySelector(".output-section .illustration").style.display = "none";
        document.querySelector(".output-section .text-1").style.display = "none";
        document.querySelector(".output-section .text-2").style.display = "none";
        outputParagraph.textContent = text;
        varEncryptText.style.display = 'flex'; // Mostrar la sección de salida
    }

    // Evento para el botón "Encriptar"
    encryptButton.addEventListener('click', () => {
        const inputText = inputTextArea.value;
        const encryptedText = encryptText(inputText);
        const textarea = document.getElementById('text-area-encrypt');
        showOutput(encryptedText);
        adjustTextareaHeight(textarea);

    });

    // Evento para el botón "Desencriptar"
    decryptButton.addEventListener('click', () => {
        const inputText = inputTextArea.value;
        const decryptedText = decryptText(inputText);
        const textarea = document.getElementById('text-area-encrypt');
        showOutput(decryptedText);
        adjustTextareaHeight(textarea);
    });

    document.querySelector('.copy-btn').addEventListener('click', function() {
        var textarea = document.getElementById('text-area-encrypt');
        var textToCopy = textarea.value;
    
        navigator.clipboard.writeText(textToCopy).then(function() {
            alert('Texto copiado: ' + textToCopy);
        }).catch(function(error) {
            alert('Error al copiar el texto: ' + error);
        });
    });


  
    
  
    

    

 