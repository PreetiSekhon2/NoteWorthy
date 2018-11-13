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
    note.viewIndividualNote = viewIndividualNote

    note.create_new_note = create_new_note;
  })(this);
}
