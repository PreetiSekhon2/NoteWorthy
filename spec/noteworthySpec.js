var note_1 = new Note

var test_1 = new Test('returns an abbreviated list of notes should say "This is a test of an"', note_1.list_abbreviated_notes()[0],'toEqual', 'This is a test of an')

var test_2 = new Test('length sould be 20', note_1.list_abbreviated_notes()[0].length,'toEqual', 20)
