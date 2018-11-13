"use strict";
function Note(note){
  this.list = [];

  (function(note) {
    function create_new_note(string) {
      this.list.push(string);
    };

    function viewIndividualNote(index){
      return "Hello"
    }

     function list_abbreviated_notes() {
      return this.list.map(y => {
      return y.substring(0,20)
      } )
    }
    note.list_abbreviated_notes = list_abbreviated_notes
    note.viewIndividualNote = viewIndividualNote

    note.create_new_note = create_new_note;
  })(this);
}
