# shackle
Bind the state of form controls or fieldsets to checkboxes and radio buttons.

##useage

Include the shackle.js file on a page. Then invoke it as so:

```javascript
Shackle.pair('id-of-enabling-control', 'id-of-affected-control', boolean);
```

The first argument is an enabling control. This is intended to be a radio
button or checkbox. If it has the checked attribute, it will alter the
state of the second argument, the affected control.

By default, when you check the enabling control, the affected control
becomes enabled. You can alter this behavior with the third argument.
If the third argument is false, the affected control will only be disabled
when the state of the enabling control is not checked. If it is true, it will 
also be hidden when the enabling control is not checked.
