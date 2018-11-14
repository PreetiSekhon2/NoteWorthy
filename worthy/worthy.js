(function(exports) {

    var actualValue

    function it(description) {
      testDescription = description;

      return {
        expect: expect
      }
    }

    function expect(actual) {
      actualValue = actual;

      return {
        toEqual: toEqual
      }
    }

    function toEqual(expectedValue) {
      if (expectedValue == actualValue) {
        document.write((testDescription + '<br><br>').fontcolor("green"))
      } else {
        document.write((testDescription + '<br>FAILED - Expected ' + expectedValue + ' but got ' + actualValue + '<br><br>').fontcolor("red"))
      }
    }

    exports.it = it
})(this)

// ********** Old testing framework **********

// var Test = function(description, testingFunction, testType, equalTo) {
//   this.description = description;
//   this.testingFunction = testingFunction
//   this.equalTo = equalTo;
//   this.output;
//   this.comparitor(testType);
//   this.outputResult();
//
//   // testType(testingFunction, equalTo)
// }
//
// Test.prototype.comparitor = function(type){
//   switch(type) {
//
//     case 'toEqual':
//       this.toEqual();
//       break;
//
//     case 'notEqualTo':
//       this.notEqualTo();
//       break;
//
//     case 'include':
//       //code
//       break;
//
//     case 'notInclude':
//       //code
//       break;
//
//     default:
//       console.log("No such comparator")
//   }
// }
//
// Test.prototype.toEqual = function toEqual() {
//   this.output = (this.testingFunction === this.equalTo);
// }
//
// Test.prototype.notEqualTo = function notEqualTo() {
//   this.output = this.testingFunction !== this.equalTo;
// };
//
// Test.prototype.outputResult = function(){
//   if (this.output){
//     document.write( (this.description + '<br><br>').fontcolor("green"))
//   } else {
//     document.write((this.description + '<br>FAILED - Expected ' + this.equalTo + ' but got ' + this.testingFunction + '<br><br>').fontcolor("red"))
//   }
// }
