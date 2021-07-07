// console.log("hello")


// need an event listener for the button
// need to name the input
// need to add an edit button
// need to add a delete button


let noteForm = document.querySelector('#note-form')
let wall = document.querySelector (".notes")

noteForm.addEventListener('submit', function (event){
    event.preventDefault()
    // console.log("Button has been clicked")
    // console.log(event)
    let noteTitleInput= document.querySelector ('#note-title')
    let noteTitle = noteTitleInput.value
    noteTitleInput.value = ''
    let noteTextInput = document.querySelector ('#note-text')
    let noteText = noteTextInput.value
    noteTextInput.value = ''
    // console.log(noteText)
    // console.log(noteTitle)
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
        // console.log (data)
    // make a div called postIt
    for (let eachNote of data) {
        let postIt = document.createElement("div");
            postIt.dataset.id = (eachNote.id)
        let headline = document.createElement("h5")
            headline.innerText = (eachNote.title)
            console.log (headline)
        let noteBody = document.createElement("p")
            noteBody.innerText = (eachNote.body)
            console.log (noteBody)
        let noteFoot = document.createElement("div")
// add a trashcan and an edit button
            let deleteIcon = document.createElement("span")
                deleteIcon.id = 'delete'
                deleteIcon.classList.add("fa", "fa-trash", "Mar-l-xs")
                noteFoot.appendChild(deleteIcon)
            let editIcon = document.createElement("span")
                editIcon.id = 'edit'
                editIcon.classList.add("fa", "fa-edit", "Mar-l-xs")
                noteFoot.appendChild(editIcon)
// add some classes
    postIt.classList.add("post-it")

// appends

    postIt.appendChild(headline)
    postIt.appendChild(noteBody)
    postIt.appendChild(noteFoot)
    wall.appendChild(postIt)

    }
// put the title in  a header, put the header in the postIt div with appendChild

// put the body in a <p>? Then put that in the postIt div.
// create a class designation for your postIt notes with a width percentage and a border.  Don't make that div be a flex, or if it inherits the flex from the section (which I bet it will,) then make it flex column.
// create some validation
// grab the section which has the "notes" class on it and append the div to that section

    })
}
// delete and edit listeners
wall.addEventListener("click", function(event){
    console.log(event.target)
    if (event.target.matches("#delete")){
        console.log ("DELETE")
        let targetFoot = (event.target.parentElement)
        let targetPostIt = (targetFoot.parentElement.dataset.id)
        console.log (targetPostIt)
        deletePostIt (targetPostIt)
    } else if (event.target.matches("#edit")){
        console.log ("EDIT")
        let targetFoot = (event.target.parentElement)
        let targetPostIt = (targetFoot.parentElement.dataset.id)
        console.log (targetPostIt)
        // editNote(targetPostIt)
    }

})

function deletePostIt (itemId) {
    fetch (`http://localhost:3000/notes/${itemId}`, {
        method: 'DELETE'
    })
    .then (response => response.json())
    .then (data => console.log(data))
}
// attempted to create  new form, but couldn't make it work.
// function editNote (itemId) {
    // let editNoteBox = document.createElement ("div")
    // let editNote = document.createElement ("form");
    // let titleEdit = document.createElement ("input")
    // titleEdit.type = ("text")
    // titleEdit.id = ("title-edit")
    // editNote.appendChild (titleEdit)
    // editNoteBox.appendChild (editNote)

    // let button = document.querySelector ("#button")
    // button.innertext = ("Edit Note")
    // noteForm.addEventListener('submit', function (event){
    //     event.preventDefault()
    //     let noteTitleInput= document.querySelector ('#note-title')
    //     let noteTitle = noteTitleInput.value
    //     noteTitleInput.value = ''
    //     let noteTextInput = document.querySelector ('#note-text')
    //     let noteText = noteTextInput.value
    //     noteTextInput.value = ''

    // fetch (`http://localhost:3000/notes/${itemId}`, {
    //     method: 'PUT',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({ 'title': noteTitle, 'body': noteText})
    //     })

// })
renderNotes()


