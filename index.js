//console.log('It worked!') --Just for testing of corrected hook up, do this every first time
const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
    ev.preventDefault() //just to stop the default refresh
    const f= ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + ' is now age ' + f.personAge.value

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

function changeAppearance(ev){
    ev.preventDefault()
    const f= ev.target
    const heading = document.querySelector('h1')
    const str= heading.textContent
    if(f.personAge.value>=75){
        heading.style.color = "red";
    }else{
        heading.style.color = "blue";
    }
    //We change the heading's color by age.
    //Side Note: If you are young (in my belief), color is blue, otherwise, color is red.
}
personForm.addEventListener('submit', handleSubmit) //Do NOT do handleSubmit(ev) here. otherwise we are only using the return value!!!
personForm.addEventListener('submit', reverseString)
personForm.addEventListener('submit', changeAppearance)
