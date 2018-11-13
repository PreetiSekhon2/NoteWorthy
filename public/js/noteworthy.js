
// Note.prototype.create_new_note = function (note) {
//   this.list.push(note);
// };
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





// "use strict";
//
// (function(exports) {
//   function exclaim(string) {
//     return string + "!";
//   };
//
//   exports.exclaim = exclaim;
// })(this);
