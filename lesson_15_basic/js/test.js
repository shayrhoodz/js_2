describe('sum', function() {
  it("Возвращает тип данных true? ", function() {
    assert.isFalse(sum());
  });
});

describe('num', function() {
  it("num должно быть равно 5? ", function() {
    assert.equal(num,5)
  });
});

describe('Each', function() {
  it("Возврат тип данных array? ", function() {
    assert.typeOf(each(arr,myFunc), 'array');
  });  
  it("Равен ли результату [8, 7, 6, 5, 4]? ", function() {
    assert.equal(Array.isArray(each(arr, myFunc)), Array.isArray([8, 7, 6, 5, 4]))
  });
});

describe('Длина Each', function() {
  it("Возврат свойства ", function() {
    assert.property(each(arr,myFunc), 'length');
  });  
});



