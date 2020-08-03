function input() {
    let input1 = document.getElementById("form").elements[0].value
    document.getElementById("nama").innerHTML =  `Nama : ${input1}`
    let input2 = document.getElementById("form").elements[1].value
    document.getElementById("umur").innerHTML = `Umur : ${input2}`
    let input3 = document.getElementsByName("sex")
    for(i=0; i < input3.length; i++){
        if(input3[i].checked)
        document.getElementById("result").innerHTML = "Kelamin : "+ input3[i].value
    }   
}

function kuadrat(){
    let input = document.getElementById("kuadratF").elements[0].value
    document.getElementById("outputK").innerHTML = `Hasil : ${input}&sup2 =  ${Math.pow(input,2)}`
}

function kuadrat3(){
    let input = document.getElementById("kuadrat3F").elements[0].value
    let input1 = document.getElementById("kuadrat3F").elements[1].value
    document.getElementById("outputK").innerHTML = `Hasil : ${input}&sup3 = ${Math.pow(input,input1)}`
}

function findChar(){
    let input = document.getElementById("findcharacter").elements[0].value
    let input1 = document.getElementById("findcharacter").elements[1].value
    let count = 0
    for(let i = 0; i < input.length; i++){
        if(input[i] === input1) count++
    }
    if(count == 0){
        document.getElementById("foundchar").innerHTML = `Kamu tidak menemukan apapun`
    } else if(count >0){
        document.getElementById("foundchar").innerHTML = `Kamu menemukan ${count} character`
    }
}

function calc(value){
    let input = document.getElementById("calc").elements[0].value
    let input1 =document.getElementById("calc").elements[1].value
    let bagi = document.getElementById("bagi").value
    let kali = document.getElementById("kali").value
    let tambah = document.getElementById("tambah").value
    let kurang = document.getElementById("kurang").value
    let modulus = document.getElementById("modulus").value
    let pangkat = document.getElementById("pangkat").value

    if(input1 == 0){
        alert("INFINITE!")
    }else if(kali == value){
        return document.getElementById("kalkulator").innerHTML = `Hasil : ${input} x ${input1} = ${input * input1}`
    } else if (bagi == value){
        return document.getElementById("kalkulator").innerHTML = `Hasil : ${input} / ${input1} = ${input / input1}`
    } else if (tambah == value){
        return document.getElementById("kalkulator").innerHTML = `Hasil : ${input} + ${input1} = ${input + input1}`
    } else if (kurang == value){
        return document.getElementById("kalkulator").innerHTML = `Hasil : ${input} - ${input1} = ${input - input1}`
    } else if (modulus == value){
        return document.getElementById("kalkulator").innerHTML = `Hasil : ${input} % ${input1} = ${input % input1}`
    } else if (pangkat == value){
        return document.getElementById("kalkulator").innerHTML = `Hasil : ${input} ^ ${input1} = ${input ** input1}`
    }
}

function pertanyaan(){
    let nilai = 0
    
    if(document.getElementById("presiden1").checked){
        answerPresiden = document.getElementById("presiden1").value
        if(answerPresiden == "Prof.B.J.Habibie") nilai+= 25
    }
    if (document.getElementById("pemograman2").checked) {
        answerPemograman = document.getElementById("pemograman2").value
        if (answerPemograman == "micro") nilai += 25
    }
    if (document.getElementById("lagu3").checked) {
        answerLagu = document.getElementById("lagu3").value
        if (answerLagu == "mirai") nilai += 25
    }
    if (document.getElementById("topeng4").checked) {
        answerTopeng = document.getElementById("topeng4").value
        if (answerTopeng == "bruce") nilai += 25
    }

    return document.getElementById("outputQ").innerHTML = `Nilai akhir anda ${nilai}`
}