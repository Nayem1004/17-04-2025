let fardinAge = 28
let mahamudAge = 29

if(fardinAge > mahamudAge){
    age = 'Fardin is elder then mahamud' + ' , ' + 'Mahaud is littel then Fardin'
}else if(fardinAge < mahamudAge){
    age = 'Fardin is littel then mahamud' + ' , ' + 'Mahaud is elder then Fardin'
}else{
    age = 'They are equal'
}
document.getElementById("age").innerHTML = age