notes3 = new Note()

notes3.create_new_note('this is a note')
notes3.create_new_note('this is another note that is rather long')

it('displays the full details of a seleted note').expect(notes3.viewIndividualNote(0)).toEqual('this is a note')
it('does not display the full details of a selected note').expect(notes3.viewIndividualNote(1)).toNotEqual('H ello')

// test2 = new Test('Displays full details of selected Note - toequal', note.viewIndividualNote(0), 'toEqual', "this is a note")
// test1 = new Test('Displays full details of selected Note - not equal', note.viewIndividualNote(1), 'notEqualTo', "H ello")
