describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});

//pig_latin
describe('addAy', function() {
  it("appends 'ay' to word starting with a vowel", function() {
    expect(addAy('add')).to.equal('adday');
  });
});

describe('startsWithVowel', function(){
  it("returns true when starts with vowel", function(){
    expect(startsWithVowel('animal')).to.equal(true);
  });
});

describe('consAddAy', function(){
  it("appends 'ay' to word starting with a consonant", function(){
      expect(consAddAy('dragon')).to.equal('agondray')
  });
});
