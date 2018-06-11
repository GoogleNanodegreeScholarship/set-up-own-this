const mockingbird = {
  title: 'To Kill a Mockingbird',
  describe: function () {
    console.log(`${this.title} is a classic novel`);
  }
};

const pride = {
  title: 'Pride and Prejudice'
};
//call methot 'this' from pride and inject into mockingbird describe method instead of original 'this'(title)
mockingbird.describe.call(pride);
//Output will be: Pride and Prejudice is a classic novel

//Here is another example of a call(apply) function with arguments.

const cat = {
  name: 'Bailey'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}
//first argument sets up 'this', and socond one is passing argument to the sayHello function
sayHello.call(cat, 'Nice to see you');
//returns Nice to see you Bailey

//apply method does the same, it sets up first argument as 'this', but second argument has to be an array
sayHello.apply(cat, ['Hello']);
//Hello, Bailey


