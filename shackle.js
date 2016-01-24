/**
* Shackle allows you to bind a form control or
* fieldset's enabled/disabled state to the checked/unchecked
* state of a radio button or checkbox.
* Simply Include Shackle and call:
* Shackle.pair({
*   enabler: 'id-of-enabling-control',
*   affected: 'id-of-affected-control',
*   whenChecked: [
*       'propertyname'
*   ],
*   whenUnchecked: [
*       'propertyname'
*   ]);
*/
var Shackle = (function(document, window) {
  
    /**
     * Add an event listener for the enabler that synchronizes
     * the whenChecked and whenUnchecked properties of the
     * affected markup with the current state of the enabler.
     * It also performs the initial state synchronization.
     */
  var pair = function(config) {
      //ensure configuration is legal
    if (! (config.hasOwnProperty('enabler')
            && config.hasOwnProperty('affected')
            && (config.hasOwnProperty('whenChecked')
                || config.hasOwnProperty('whenUnchecked')))) {
        return;
    }
    var enabler = document.getElementById(config['enabler']);
    var affected = document.getElementById(config['affected']);
    var whenChecked = (config['whenChecked'] != undefined
            ? config['whenChecked'] : []);
    var whenUnchecked = (config['whenUnchecked'] != undefined
            ? config['whenUnchecked'] : []);
    enabler.addEventListener('change',
            _sync.bind(null, enabler, affected, whenChecked, whenUnchecked),
            false);
    _sync(enabler, affected, whenChecked, whenUnchecked);
  };

  /**
   * Synchronize the state of the enabler to the affected markup.
   * This applies the whenChecked properties if the enabler is checked,
   * and the whenUnchecked properties when it is not.
   */
  var _sync = function(enabler, affected, whenChecked, whenUnchecked) {
    if (enabler.checked) {
        whenChecked.forEach(function applyProperty(property) {
           affected[property] = true; 
        });
        whenUnchecked.forEach(function applyProperty(property) {
           affected[property] = false; 
        });
    } else {
        whenChecked.forEach(function applyProperty(property) {
           affected[property] = false; 
        });
        whenUnchecked.forEach(function applyProperty(property) {
           affected[property] = true; 
        });
    }
  };

  //return the public API
  return {
    pair: pair
  };
})(document, window);
