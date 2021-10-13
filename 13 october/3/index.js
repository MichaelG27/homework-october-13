
let submit = document.getElementById('submit')
let result = document.getElementById('result')

submit.onclick = calculate;

function calculate () {
  let a = 1;
  let s = 0;
  for (a; a <=10; a ++) {
    s = s + a;
    a = a++;
  }
  result.innerHTML = s;
}