// console.log("hello")


// need an event listener for the button
// need to name the input
// need to add an edit button
// need to add a delete button


let noteForm = document.querySelector('#note-form')
console.log(noteForm)
noteForm.addEventListener('submit', function (event){
    event.preventDefault()
    console.log("Button has been clicked")
    console.log(event)
    let noteTitleInput= document.querySelector ('#note-title')
    let noteTitle = noteTitleInput.value
    noteTitleInput.value = ''
    let noteTextInput = document.querySelector ('#note-text')
    let noteText = noteTextInput.value
    noteTextInput.value = ''
    console.log(noteText)
    console.log(noteTitle)
    createNewNote (noteTitle, noteText)
})

function createNewNote (noteTitle, noteText){
    fetch ('http://localhost:3000/notes', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ 'title': noteTitle, 'body': noteText})
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
    
function renderNotes () {
    fetch ('http://localhost:3000/notes', {
        method: 'GET'
})
    .then (response => response.json())
    .then (function (data) {
        console.log (data)
    })
}

renderNotes()