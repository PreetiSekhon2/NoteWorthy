var notes1 = new Note

notes1.create_new_note('this is a note')
notes1.create_new_note('this is another note')

it('creates a new note').expect(notes1.list[0]).toEqual('this is a note')
it('creates another new note').expect(notes1.list[1]).toEqual('this is another note')
it('checks the array length once note has been added').expect(notes1.list.length).toEqual(2)

// new Test ('creates a new list', note.list[0], 'toEqual', 'this is a note' )
// new Test ('creates a new list', note.list[1], 'toEqual', 'this is another note' )
// new Test ('checks arrays length once note has been added', note.list.length, 'toEqual', 2)

var notes2 = new Note

notes2.create_new_note('This is a test of an amazingly longggggggg note')

it('returns an abbreviated list of notes that should say "This is a test of an"').expect(notes2.list_abbreviated_notes()[0]).toEqual('This is a test of an')
it('length should be 20').expect(notes2.list_abbreviated_notes()[0].length).toEqual(20)

// var test_1 = new Test('returns an abbreviated list of notes should say "This is a test of an"', note_1.list_abbreviated_notes()[0],'toEqual', 'This is a test of an')
// var test_2 = new Test('length sould be 20', note_1.list_abbreviated_notes()[0].length,'toEqual', 20)
