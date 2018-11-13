note = new Note()

note.create_new_note('this is a note')
note.create_new_note('this is another note that is rarther longgg')

test2 = new Test('Displays full details of selected Note - toequal', note.viewIndividualNote(0), 'toEqual', "this is a note")
test1 = new Test('Displays full details of selected Note - not equal', note.viewIndividualNote(1), 'notEqualTo', "H ello")
