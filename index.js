display=""
function btn(a){
	display=document.getElementById('display').innerHTML=display+a
}
button=""
function res(){
	display=document.getElementById('display').innerHTML=eval(display)

}
function del(){
	display=document.getElementById('display').innerHTML=""

}
function one(){
	display=document.getElementById('display').innerHTML=display.slice(0,-1)

}