module.exports = {
  name: 'David',
  lastName: 'Ng',
  age: 23,
  sentence: function() {
    console.log('My name is', this.name, this.lastName);
  }
};
