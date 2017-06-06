//console.log('It worked!') --Just for testing of corrected hook up, do this every first time
const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
    ev.preventDefault() //just to stop the default refresh
    const f= ev.target
    const details = document.querySelector('#details')
    //heading.textContent = f.personName.value + ' is now age ' + f.personAge.value
    const name = f.personName.value
   // details.innerHTML += '<strong>' + name + '</strong>'
    details.innerHTML += `<strong>${name}</strong>`
}

function reverseString(ev) {
    ev.preventDefault()
    const heading = document.querySelector('h1')
    const str= heading.textContent
    const paragraph = document.querySelector('.reverse')

    const splitString = str.split(""); 

    const reverseArray = splitString.reverse(); 
    
    const joinArray = reverseArray.join("");

    paragraph.textContent = joinArray
}

function colorToHex(red,green,blue) {
    return '#' + decimalToHex(red) + decimalToHex(green) + decimalToHex(blue);
};

function decimalToHex(d) {
  var hex = Number(d).toString(16).toUpperCase();
  if(d<16){
      return '0'+hex;
  }
  return hex;
}

function changeAppearance(ev){
    ev.preventDefault()
    const f= ev.target
    const heading = document.querySelector('.reverse')
    const str= heading.textContent
    //alert(colorToHex(f.colorRed.value,f.colorGreen.value,f.colorBlue.value)) -- This is for debugging purpose
    heading.style.color = colorToHex(f.colorRed.value,f.colorGreen.value,f.colorBlue.value);
    //We change the heading's color by RGB provided from User's form.
    //Side Note: style.color only support HEX value, so we need to covert before preceed
}
personForm.addEventListener('submit', handleSubmit) //Do NOT do handleSubmit(ev) here. otherwise we are only using the return value!!!
personForm.addEventListener('submit', reverseString)
personForm.addEventListener('submit', changeAppearance)
