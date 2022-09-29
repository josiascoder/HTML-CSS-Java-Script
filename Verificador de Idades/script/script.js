function verificar(){
    //window.alert('Seja bem-vindo, user!')
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let result = window.document.getElementById('result')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        //result.innerHTML = `Idade calculada ${idade}`
        let genero = ''
        let g_masculino = document.getElementById('masc')
        let g_feminino = document.getElementById('fem')
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (g_masculino.checked){
            genero = 'Homem'
            if (idade>=0 && idade<10){
                //Criança
                img.setAttribute('src', './Imagens/foto-bebe-m.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', './Imagens/foto-jovem-m.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', './Imagens/foto-adulto-m.png')
            }
            else{
                //Idoso
                img.setAttribute('src','./Imagens/foto-idoso-m.png')
            }
        }
        else if (g_feminino.checked){
            genero = 'Mulher'
            if (idade>=0 && idade<10){
                //Criança
                img;setAttribute ('src','./Imagens/foto-bebe-f.png')
            }
            else if (idade < 21){
                //Jovem
                img.setAttribute('src', './Imagens/foto-jovem-f.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute ('src','./Imagens/foto-adulto-f.png')
            }
            else{
                //Idoso
                img.setAttribute ('src','./Imagens/foto-idoso-f.png')
            }
        }
        result.style.textAlign='center'
        result.innerHTML = `Detectamos ${genero} e idade ${idade} anos`
        result.appendChild(img)
    }

}