function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            //função if para limpar visor da calculadora
            document.getElementById('resultado').value = ''
        }
        
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
            var valorCampo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valorCampo
        }
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }
}