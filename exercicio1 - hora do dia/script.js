function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >=0 && hora < 12) {
    img.src = '../exercicio1 - hora do dia/img/manha.jpg'
    document.body.style.background = 'blue'
}
else if (hora >= 12 && hora < 18) {
    img.src = '../exercicio1 - hora do dia/img/tarde.jpg'
    document.body.style.background = 'orange'
}
else {
    img.src = '../exercicio1 - hora do dia/img/noite.jpg'
    document.body.style.background = 'black'
}
}