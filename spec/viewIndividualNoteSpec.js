note = new Note()


test2 = new Test('Displays full details of selected Note - toequal', note.viewIndividualNote(4), 'toEqual', "Hello")
test1 = new Test('Displays full details of selected Note - not equal', note.viewIndividualNote(4), 'notEqualTo', "H ello")
