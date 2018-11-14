// hide on load "page_2"
// Note.create_new_note(string)
// Note.viewIndividualNote(index)
// Note.list_abbreviated_notes()

var note = new Note
document.getElementById('submit_note').addEventListener("click", function () {
  var textBox = (document.getElementById('text_box').value)
  if (textBox != "") {
    note.create_new_note(textBox);
    document.getElementById('text_box').value = '';
  showList();
}

function showList(){
  var note_list = document.getElementById('note_list')
  var i;
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


// document.getElementById('note_list').value = '<li>' + ab[0] + '</li>';
// console.log(ab[0])
});
