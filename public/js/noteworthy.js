"use strict";
function Note(note){
  this.list = [];

  (function(note) {
    function create_new_note(string) {
      this.list.push(string);
    };

    note.create_new_note = create_new_note;
  })(this);

}
