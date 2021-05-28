function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //pega o ano digitado
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) { //verifica se o comprimento do valor digita é igual a 0 ou maior que o ano atual
        alert('Verifique os dados novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //está atribuindo id foto para a imagem
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebeM.jpg')
            }
            else if(idade < 21) {
                img.setAttribute('src', 'jovemM.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adultoM.jpg')
            }
            else {
                img.setAttribute('src', 'idosoM.jpg')
            }
        }
        else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebeF.jpg')
            }
            else if(idade < 21) {
                img.setAttribute('src', 'jovemF.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adultoF.jpg')
            }
            else {
                img.setAttribute('src', 'idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        img.style.borderRadius = '50%'
        img.style.width = '300px'
        img.style.height = '300px'
        res.appendChild(img) //faz aparecer a imagem
    }
}