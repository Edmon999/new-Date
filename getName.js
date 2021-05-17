const user = {
  _name: [],

  get name() {
    return user._name
  },
  set name(value) {
    let arr = value.split(" ");
    for (let i = 0; i < arr.length; i++) {
      user._name.push([arr[i], arr[i].length]);
    }
  },
};
