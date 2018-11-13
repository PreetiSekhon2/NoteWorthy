var note = new Note

note.create_new_note('this is a note')
note.create_new_note('this is another note')
new Test ('creates a new list', note.list[0], 'toEqual', 'this is a note' )
new Test ('creates a new list', note.list[1], 'toEqual', 'this is another note' )
new Test ('checks arrays length once note has been added', note.list.length, 'toEqual', 2)