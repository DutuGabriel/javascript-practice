/*
## Example 2 - Phone book

Make methods' refactoring of the `phonebook` object to make the code work.
*/

const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: "default",
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);

    return this.contacts;
  },
  generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },

  get() {
    return this.contacts;
  },
};

console.log(
  phonebook.add({
    name: "Nelu",
    email: "Nelu@mail.com",
    list: "friends",
  })
);
console.log(
  phonebook.add({
    name: "Yamal",
    email: "Yamal@hotmail.com",
  })
);

console.log(phonebook.get());
