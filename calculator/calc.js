let disp = document.getElementById('in');
document.getElementById('+').addEventListener("click", () => {
  disp.value += '+';
})
document.getElementById('-').addEventListener("click", () => {
  disp.value += '-';
})
document.getElementById('*').addEventListener("click", () => {
  disp.value += '*';
})
document.getElementById('/').addEventListener("click", () => {
  disp.value += '/';
})
document.getElementById('1').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*1';
  } else
    disp.value += '1';
})
document.getElementById('2').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*2';
  } else
    disp.value += '2';
})
document.getElementById('3').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*3';
  } else
    disp.value += '3';
})
document.getElementById('4').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*4';
  } else
    disp.value += '4';
})
document.getElementById('5').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*5';
  } else
    disp.value += '5';
})
document.getElementById('6').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*6';
  } else
    disp.value += '6';
})
document.getElementById('7').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*7';
  } else
    disp.value += '7';
})
document.getElementById('8').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*8';
  } else
    disp.value += '8';
})
document.getElementById('9').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value = '*9';
  } else
    disp.value += '9';
})
document.getElementById('0').addEventListener("click", () => {
  if (disp.value[disp.value.length - 1] === ")") {
    disp.value += '*0';
  } else
    disp.value += '0';
})
document.getElementById('back').addEventListener("click", () => {
  disp.value = disp.value.slice(0, disp.value.length - 1);
})
document.getElementById('clear').addEventListener("click", () => {
  disp.value = "";
})
document.getElementById('dot').addEventListener("click", () => {
  disp.value += '.';
})
document.getElementById('equal').addEventListener("click", () => {
  try {
    disp.value = disp.value.replaceAll("^", "**");
    disp.value = disp.value.replaceAll("π", Math.PI);
    disp.value = eval(disp.value);
  } catch (e) {
    disp.value = "----.ERROR.----";
  }
})
document.getElementById('^').addEventListener("click", () => {
  disp.value += '^';
})
document.getElementById('%').addEventListener("click", () => {
  disp.value += '%';
})
let p = document.getElementById('pie');
p.addEventListener("click", () => {
  if (disp.value.length === 0) {
    disp.value += 'π';
  } else
    switch (disp.value[disp.value.length - 1]) {
      case '1':
        disp.value += '*π';
        break;
      case '2':
        disp.value += '*π';
        break;
      case '3':
        disp.value += '*π'
        break;
      case '4':
        disp.value += '*π';
        break;
      case '5':
        disp.value += '*π';
        break;
      case '6':
        disp.value += '*π';
        break;
      case '7':
        disp.value += '*π';
        break;
      case '8':
        disp.value += '*π';
        break;
      case '9':
        disp.value += '*π';
        break;
      case '0':
        disp.value += '*π';
        break;
      case ')':
        disp.value += '*π';
        break;
      default:
        disp.value += 'π';
    }
})
document.getElementById('openbracket').addEventListener("click", () => {
  if (disp.value.length === 0) {
    disp.value += '(';
  } else
    switch (disp.value[disp.value.length - 1]) {
      case '1':
        disp.value += '*(';
        break;
      case '2':
        disp.value += '*(';
        break;
      case '3':
        disp.value += '*(';
        break;
      case '4':
        disp.value += '*(';
        break;
      case '5':
        disp.value += '*(';
        break;
      case '6':
        disp.value += '*(';
        break;
      case '7':
        disp.value += '*(';
        break;
      case '8':
        disp.value += '*(';
        break;
      case '9':
        disp.value += '*(';
        break;
      case '0':
        disp.value += '*(';
        break;
      case 'π':
        disp.value += '*(';
        break;
      default:
        disp.value += '(';
    }
})
document.getElementById('closebracket').addEventListener("click", () => {
  disp.value += ')';
})

