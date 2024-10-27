/*
# Module 5 - Lesson 10 - Prototypes and classes

## Example 1 - Blogger

Write a `Blogger` class to create a blogger object with the following properties:

- `email` - mail, line
- `age` - age, number
- `numberOfPosts` - number of posts, number
- `topics` - an array of topics the blogger specializes in

The class expects one parameter - object of settings with the same name properties.

Add a `getInfo()` method that returns string:
`User ${mail} is ${age} years old and has ${number of posts} posts`.

Add the `updatePostCount(value)` method, which in the `value` parameter takes
number of posts to add to the user.
*/

class Blogger {
  constructor({ email, age, numberOfPosts, topics }) {
    this.age = age;
    this.email = email;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  test = 5;

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  email: "mango@example.com",
  age: 30,
  numberOfPosts: 15,
  topics: ["travel", "photography"],
});
console.log(mango.getInfo());
mango.updatePostCount(3);
mango.updatePostCount(7);
console.log(mango.getInfo());
console.log(mango);

const poly = new Blogger({
  email: "poly@example.com",
  age: 22,
  numberOfPosts: 10,
  topics: ["music", "movies", "fashion"],
});
console.log(poly.getInfo());
poly.updatePostCount(5);
console.log(poly.getInfo());
console.log(poly);
