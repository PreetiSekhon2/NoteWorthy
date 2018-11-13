var calculator = new Calc

new Test('this is a passing test', 1, 'toEqual', 1)

new Test('this is a failing test', 1, 'toEqual', 2)

new Test('this is a test for the calculator', calculator.add(1,3), 'toEqual', 4)

new Test('this is a failing test for the calculator', calculator.add(1,3), 'toEqual', 5)

new Test('this is a test with a test type', calculator.add(1,4), 'toEqual', 5)

new Test('4 plus 5 is equal to 9', calculator.add(4,5), 'notEqualTo', 8)
