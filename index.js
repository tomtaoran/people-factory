//console.log('It worked!') --Just for testing of corrected hook up, do this every first time
const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
    ev.preventDefault() //just to stop the default refresh
    const f= ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value

}
personForm.addEventListener('submit', handleSubmit) //Do NOT do handleSubmit(ev) here. otherwise we are only using the return value!!!
