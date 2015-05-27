describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});

//pig_latin
describe('add_ay', function() {
  it("appends 'ay' to word starting with a vowel", function() {

    expect(add_ay('add')).to.equal('adday');
  });
});
