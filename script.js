function clicar(){
    var tura = document.getElementById("alt")
    var pes = document.getElementById("peso")
    var res = document.getElementById("resultado")
    var a1 = Number(tura.value)/100
    var p1 = Number(pes.value)
    var soma= p1/(a1)**2
    var imc = soma.toFixed(2)
    
    if(imc < 18.5){
       res.innerHTML= (`Seu IMC é de ${imc} e você esta em estado de magreza.`)
    }
    
    else if(imc<24.9){
        res.innerHTML=(`Seu IMC é de ${imc} e seu peso esta normal.`)

    }

    else if(imc<29.9){
        res.innerHTML=(`Seu IMC é de ${imc} e você esta com sobre peso.`)
    }

    else if(imc <34.9){
        res.innerHTML=(`Seu IMC é de  ${imc} e você esta com obesidade do primeiro grau.`)
    }

    else if(imc <39.9){
        res.innerHTML=(`Seu IMC é de ${imc} e você esta com obesidade do segundo grau (SEVERA).`)
    }

    else if(imc > 39.9){
        res.innerHTML=(`Seu IMC é de ${imc} e você esta com obesidade do terceiro grau (MORBIDA).`)
    }

    else{
        res.innerHTML=(`Esses valores não são aceitos, favor informar um valor aceito.`)
    }

} 

function limpar() {
   var limp= document.getElementById("res")
   limp = location.reload();
    
}

