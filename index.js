//console.log('It worked!') --Just for testing of corrected hook up, do this every first time
const personForm = document.querySelector('#personForm')

function renderColor(color){
    const div=document.createElement('div');
    div.style.backgroundColor=color;
    div.style.width = '100px';
    div.style.height = '50px';
    return div
}

function renderListItem(label, value){
    const item = document.createElement('li')
    item.textContent = `${label}: ${value}`
    return item
}
function renderList(personData){
    const list = document.createElement('ul')
    //call renderListItem several times
    // map to the same thing to every single elements
    //data['key'] or data.key if the name is following variable naming rules.
    Object.keys(personData).map(function(label){
        const item =renderListItem(label,personData[label])
        list.appendChild(item)
    })
    //['name','favoriteColor', 'Age']
    return list
}

function handleSubmit(ev){
    ev.preventDefault() //just to stop the default refresh
    const f= ev.target
    const details = document.querySelector('#details')
    //heading.textContent = f.personName.value + ' is now age ' + f.personAge.value
    const name = f.personName.value
    const favoriteColor=f.favoriteColor.value
    const age = f.age.value
    const colorDiv = `
    <div style="background-color: ${favoriteColor}; width: 100px; height:50px;"></div>
    `
    //Note that this method is nasty to read but work fine here, and also for color, we HAVE to give it a space to show up. otherwise it is empty.
   // details.innerHTML += '<strong>' + name + '</strong>'
   //const boldedName = document.createElement('strong') //any HTML element tags is valid here.
   //boldedName.textContent= name
    //details.innerHTML += `<strong>${name}</strong>`
    //details.appendChild(boldedName)

    const list = document.createElement('ul');

    // const nameItem = document.createElement('li');
    // nameItem.textContent = `Name: ${name}`;
    
    // const colorItem = document.createElement('li');
    // colorItem.innerHTML=`Favorite Color: ${renderColor(favoriteColor).outerHTML}`;
    // const ageItem = document.createElement('li');
    // ageItem.textContent=`Age: ${age}`;
    

    // list.appendChild(nameItem);
    // list.appendChild(colorItem);
    // list.appendChild(ageItem);
    details.appendChild(list);
   /*innerHTML way to do details
    details.innerHTML=`
    <ul>
        <li>Name: ${name}</li>
        <li>Favorite Color: ${colorDiv}</li>
        <li>Age: ${age}</li>
    </ul>
    `
    */
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
    const person ={
        name: f.personName.value,
        favoriteColor: f.favoriteColor.value,
        age: f.age.value,
    }
    details.appendChild(renderList(person))
    //alert(colorToHex(f.colorRed.value,f.colorGreen.value,f.colorBlue.value)) -- This is for debugging purpose
    heading.style.color = colorToHex(f.colorRed.value,f.colorGreen.value,f.colorBlue.value);
    //We change the heading's color by RGB provided from User's form.
    //Side Note: style.color only support HEX value, so we need to covert before preceed
}
personForm.addEventListener('submit', handleSubmit) //Do NOT do handleSubmit(ev) here. otherwise we are only using the return value!!!
personForm.addEventListener('submit', reverseString)
personForm.addEventListener('submit', changeAppearance)
