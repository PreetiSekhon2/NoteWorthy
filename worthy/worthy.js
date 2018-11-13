// function It(testDescription, expect) {
//   this.testDescription = testDescription;
//   this.expect = expect;
// }
//
// function Expect(test) {
//   this.test = test;
// }

// (function(exports) {
//   var testDescription;
//
//   function expect(testFunction) {
//     testFunction = testFunction;
//   }
//
//   function toEqual(value) {
//     return this.test === value
//   }
//
//   exports.toEqual = toEqual
//   // exports.toEqual = toEqual
//   // exports.expect.toEqual = toEqual
//   // exports.toEqual = toEqual
// })(this)

// (function(exports) {
//   function toEqual(value) {
//     return expect === value
//   }
//
//   exports.toEqual = toEqual
// })(this)
//
// (function(exports) {
//   function testFunction(test) {
//     return test
//   }
//
//   exports.testFunction = testFunction
// })

// expect(testFunction).toEqual = function(value) {
//   testFunction === value;
// }

var Test = function(description, testingFunction, testType, equalTo) {
  this.description = description;
  this.testingFunction = testingFunction
  this.equalTo = equalTo;
  this.output;
  this.comparitor(testType);
  this.outputResult();

  // testType(testingFunction, equalTo)
}

Test.prototype.comparitor = function(type){
  switch(type) {
    case 'toEqual':
      this.toEqual();
      break;
    case 'notEqualTo':
      this.notEqualTo();
      break;
    case 'include':
      //code
      break;
    case 'notInclude':
      //code
      break;
  }
}

Test.prototype.toEqual = function toEqual() {
  this.output = this.testingFunction === this.equalTo;
}

Test.prototype.notEqualTo = function notEqualTo() {
  this.output = this.testingFunction !== this.equalTo;
};

Test.prototype.outputResult = function(){
  if (this.output){
    document.write( (this.description + '<br><br>').fontcolor("green"))
  } else {
    document.write((this.description + '<br>FAILED - Expected ' + this.equalTo + ' but got ' + this.testingFunction + '<br><br>').fontcolor("red"))
  }
}
