function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Faltam dados')
        res.innerHTML = `Impossível contar`
    }
    else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <=0) {
            alert('Passo inválido! Considerando passo como 1.')
            p = 1
        }

        if (i < f){
            for (let c = i; c<=f; c+=p) { //contagem crescente
                res.innerHTML += `${c} \u{1F449}`
            }

        }
        else {
            for (let c = i; c>= f; c-=p) { //contagem decrescente
            res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}