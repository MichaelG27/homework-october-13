
let submit = document.getElementById('submit')
let result = document.getElementById('result')

submit.onclick = calculate;

function calculate () {
  let a = parseInt(document.getElementById('a').value)
  let b = parseInt(document.getElementById('b').value)
  let h = parseInt(document.getElementById('h').value)
  let s = ((a+b)/2)*h;
  result.innerHTML = s;
}