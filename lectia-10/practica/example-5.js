/*
## Example 5 - Toggle

Write a `Toggle` class that takes a settings object `{isOpen: boolean}` and
declares one property `on` - state on/off (true/false). By default
the value of the `on` property should be `false`.
*/

class Toggle {
  constructor(arg) {
    if (arg && arg.isOpen) {
      this.on = arg.isOpen;
      return;
    }
    // In cazul in care nu trimit niciun argument, se seteaza valoarea default
    this.on = false;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({ isOpen: true });
console.group("firstToggle");
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd("firstToggle");

const secondToggle = new Toggle();
console.group("secondToggle");
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd("secondToggle");
