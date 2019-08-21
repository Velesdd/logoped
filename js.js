let text = ['привет', ' школа', ' месяц', ' то', ' конец', ' машина', ' начало', ' до', ' новый', ' гуляет']
let ind = 0
let right = 0
let time = 100
let isStart = false
let x = 0
let intervalID
let onRead = (value) => {
    isStart= true

    document.getElementById(x).style.background = '#607d8b4d'
    let checkKey = (e) => {
        if (e.keyCode == '32') {

              if(value===text[ind]){
                console.log(x)
                document.getElementById(x).style.color = 'green'
                right++

                 }
              else{
                     document.getElementById(x).style.color = 'red'
                }

              document.getElementById('text').value=''
              document.getElementById(x).style.background = 'white'
              x++
              ind++
              if(ind%5==0&&ind<9){
                x = 0;
                for(let i = ind; i <ind+5; i++){
                    document.getElementById(x).innerHTML =text[i]
                    document.getElementById(x).style.color = 'black'
                    x++
                    }
                x = 0
              }
              if(ind==9)
                clearInterval(intervalID)

              document.getElementById('right').innerHTML = right
    }
    }
    document.onkeydown = checkKey;


}

intervalID = setInterval(()=>{
    if(isStart){
        time--
        document.getElementById('timer').innerHTML = time

        if(time<1){
            clearInterval(intervalID)
        }
    }
},1000)

let Input = () => {
    for(let i = 0; i <5; i++){
        document.getElementById(i).innerHTML =text[i]
        document.getElementById(i).style.color = 'black'
        document.getElementById(i).style.background = 'white'
        console.log('hello')
    }
}
let Over = ()=>{
    ind = 0
    right = 0
    time = 100
    isStart = false
    x = 0
    document.getElementById('timer').innerHTML = ''
    document.getElementById('text').value=''
    Input()
}