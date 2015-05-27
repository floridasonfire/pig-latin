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
  it("appends 'ay' to word starting with a consonant - accounting for edge-cases of 'QU'", function(){
      expect(consAddAy('squid')).to.equal('idsquay')
  });

  it("appends 'ay' to word starting with a consonant - accounting for edge-cases of 'Y'", function(){
      expect(consAddAy('yes')).to.equal('esyay')
      expect(consAddAy('buying')).to.equal('uyingbay')
      expect(consAddAy('crying')).to.equal('yingcray')
  });

});
