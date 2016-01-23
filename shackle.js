/**
* Shackle allows you to bind a form control or
* fieldset's enabled/disabled state to the checked/unchecked
* state of a radio button or checkbox.
* Simply Include Shackle and call:
* Shackle.pair(id-of-enabling-element, id-of-affected-element);
*/
var Shackle = (function(document, window) {
  //Make any change to the state of the enabling
  //control cause the other controls to syncronize
  //their state
  var pair = function(enableId, controlId) {
    console.log(enableId, controlId);
    var enable = document.getElementById(enableId);
    console.log(enable);
    var control = document.getElementById(controlId);
    console.log(control);
    enable.addEventListener('click',
                             _sync.bind(null, enable, control),
                             false);
    _sync(enable, control);
  };
  
  //Synchronize the current state of the enabling control
  //to the enabled/disabled control(s)
  var _sync = function(enable, control) {
    if(enable.checked) {
      control.disabled = false;
    } else {
      control.disabled = true;
    }
  };
  return {
    pair: pair
  };
})(document, window);
