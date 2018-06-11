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
