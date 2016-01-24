# shackle
Bind the state of form controls or fieldsets to checkboxes and radio buttons.

##useage

Include the shackle.js file on a page. Then invoke it as so:

```javascript
Shackle.pair({
    enabler: 'box1',
    affected: 'controls1',
    whenChecked: ['readonly'],
    whenUnchecked: ['disabled', 'hidden']
});
```

The configuration object is simple:
- enabler: the enabler is the if of the form control that will alter the
  state of other markup. It must be able to gain/lose the "checked" HTML 
  attribute to trigger the state change on the corresponding affected markup.
- affected: this is the id of some HTML on the page that you want to alter
  when the state of the enabler control changes. It can be anything, though
  I designed this with fieldsets in mind. It's very useful selectively
  disable a whole fieldset based on a checkbox. For instance, the the fieldset
  is asking for information on an opt-in basis, why not hide it and disable it
  unless an opt-in checkbox is checked?
- whenChecked: a list of HTML attributes to apply when the state of the enabler
  is checked.
- whenUnchecked: a list of HTML attributes to apply when the state of the
  enabler is not checked
