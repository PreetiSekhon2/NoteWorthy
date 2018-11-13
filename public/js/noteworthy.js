function Note() {


  (function(x) {
    var list = ['This is a test of an amazingly longggggggg note']
    function list_abbreviated_notes() {
      return list.map(y => {
      return y.substring(0,20)
      } )
    }
  x.list_abbreviated_notes = list_abbreviated_notes
  })(this)
}
