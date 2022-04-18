resName=document.getElementById('res-name')
myInput = document.getElementById('name')
myInput.addEventListener('input',function(event){
  resName.innerHTML=event.target.value
})
resGender=document.getElementById('res-gender')
myGender = document.getElementById('gender')
myGender.addEventListener('change',function(event){
  resGender.innerHTML=event.target.value
})
res = document.getElementById('result')
myX = document.getElementById('mouse-x')
myY = document.getElementById('mouse-y')
res.addEventListener('mousemove', function(e){
  myX.innerHTML=e.offsetX
  myY.innerHTML=e.offsetY
})
codVal = document.getElementById('code-validation')
but = document.getElementById('submit-btn')
but.setAttribute('disabled','true')
document.getElementById('code').addEventListener('input', function(e){
  if(e.target.value.startsWith('CODE-')){
    codVal.innerHTML=''
    but.removeAttribute('disabled')
     }
	else
	{
		codVal.innerHTML='should start with CODE-'
		but.setAttribute('disabled','true')
	}
}
)