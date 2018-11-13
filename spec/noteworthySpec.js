var note = new Note

note.create_new_note('this is a note')
note.create_new_note('this is another note')
new Test ('creates a new list', note.list[0], 'toEqual', 'this is a note' )
new Test ('creates a new list', note.list[1], 'toEqual', 'this is another note' )
new Test ('checks arrays length once note has been added', note.list.length, 'toEqual', 2)

var note_1 = new Note
note_1.create_new_note('This is a test of an amazingly longggggggg note')
var test_1 = new Test('returns an abbreviated list of notes should say "This is a test of an"', note_1.list_abbreviated_notes()[0],'toEqual', 'This is a test of an')
var test_2 = new Test('length sould be 20', note_1.list_abbreviated_notes()[0].length,'toEqual', 20)



