// hide on load "page_2"
// Note.create_new_note(string)
// Note.viewIndividualNote(index)
// Note.list_abbreviated_notes()

var note = new Note
var textBox = (document.getElementById('text_box'))

document.getElementById('submit_note').addEventListener("click", function () {
  if (textBox.value != "") {
    addNote();
    showList();
  }
});

function addNote(){
  note.create_new_note(textBox.value);
  textBox.value = '';
}

function showList(){
  var note_list = document.getElementById('note_list')
  while (note_list.hasChildNodes()) {
      note_list.removeChild(note_list.firstChild);
  }
  createListElements();
}

function createListElements(){
  var ab = note.list_abbreviated_notes()
  for (i = 0; i < ab.length; i++) {
    var first_li = document.createElement('li')
    var first_text = document.createTextNode(ab[i])
    first_li.appendChild(first_text)
    document.getElementById('note_list').appendChild(first_li)
  }
}
