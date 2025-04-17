let num1 = 50
let num2 = 40
let num3 = 60
if(num1 > num2){
    if(num1 > num3){
       show = 'num1 === max'
    }else{
      show= ' num3 === max'
    }
}else{
    if(num2 > num3){
      show = 'num2 === max'
    }else{
      show = 'num3 == max'  
    }
}
document.getElementById("max").innerHTML = show