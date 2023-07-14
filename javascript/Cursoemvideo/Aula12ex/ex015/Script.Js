function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamnete')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 1){
                // bebe
                img.setAttribute('src', 'foto-bebe-m.jpeg')
               } else if (idade >= 2 && idade <= 10 ) {
               // criança
               img.setAttribute('src', 'foto-criança-m.jpeg')
               } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
               } else if (idade < 58) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
               } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.jpeg')
               }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 1){
                // bebe
                img.setAttribute('src', 'foto-bebe-f.jpg')
               } else if (idade >= 2 && idade <= 10 ) {
               // criança
               img.setAttribute('src', 'foto-criança-f.jpeg')
               } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
               } else if (idade < 58) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
               } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.jpeg')
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}