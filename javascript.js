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
  myX.innerHTML=e.clientX
  myY.innerHTML=e.clientY
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
function send(e) {
  e.preventDefault();
  fetch("https://mockbin.com/request", {
    method: "POST",
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(document.getElementById("value").value)
  })
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
      document
        .getElementById("result2")
        .innerText = value.postData.text;
  });
}

document
  .getElementById("form")
  .addEventListener("submit", send);
  
  

async function getNumber1() {
  return 5
}

async function getNumber2() {
  return 9
}

async function getSum() {
  return await getNumber1()+ await getNumber2();
}


getSum()
  .then(function(data){
  document
    .getElementById('result1')
    .innerHTML='async result = '+data
})

