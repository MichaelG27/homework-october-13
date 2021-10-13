
let submit = document.getElementById('submit')
let result = document.getElementById('result')

submit.onclick = calculate;

function calculate () {
  let a = parseInt(document.getElementById('a').value)
  let b = parseInt(document.getElementById('b').value)
  if (a>0) {
    var c = (a+b)/2
  } else {
    var c=a/b
  }
  result.innerHTML = c;
}