var grades = require('./grader');

describe('grader()', function() {

  it('grade is A+', function() {
    expect(grades.grader(98)).toEqual('A+');
  });

  it('grade is A', function() {
    expect(grades.grader(95)).toEqual('A');
  });

  it('grade is A-', function() {
    expect(grades.grader(92)).toEqual('A-');
  });

  it('grade is B+', function() {
    expect(grades.grader(88)).toEqual('B+');
  });

  it('grade is B', function() {
    expect(grades.grader(85)).toEqual('B');
  });

  it('grade is B-', function() {
    expect(grades.grader(81)).toEqual('B-');
  });

  it('grade is C+', function() {
    expect(grades.grader(78)).toEqual('C+');
  });

  it('grade is C', function() {
    expect(grades.grader(76)).toEqual('C');
  });

  it('grade is C-', function() {
    expect(grades.grader(70)).toEqual('C-');
  });

  it('grade is D+', function() {
    expect(grades.grader(68)).toEqual('D+');
  });

  it('grade is D', function() {
    expect(grades.grader(66)).toEqual('D');
  });

  it('grade is D-', function() {
    expect(grades.grader(61)).toEqual('D-');
  });

  it('grade is F', function() {
    expect(grades.grader(15)).toEqual('F');
  });
});

describe('median()', function() {

  it('median is 70', function() {
    expect(grades.medianScore([70, 70, 70])).toEqual(70.00);
  });

  it('median is 64.33', function() {
    expect(grades.medianScore([88, 95, 47, 37, 19, 100])).toEqual(64.33);
  });

  it('median is 50.13', function() {
    expect(grades.medianScore([32, 55, 100, 67, 45, 35, 44, 23])).toEqual(50.13);
  });

  it('median is 62.33', function() {
    expect(grades.medianScore([100, 55, 33, 25, 77, 84])).toEqual(62.33);
  });

  it('median is 86.75', function() {
    expect(grades.medianScore([87, 86, 85, 89])).toEqual(86.75);
  });

});

describe('mode()', function() {

  it('mode is 70', function() {
    expect(grades.modeScore([70, 70, 70])).toEqual(70.00);
  });

  it('mode is 19', function() {
    expect(grades.modeScore([88, 95, 47, 19, 37, 19, 100])).toEqual(19);
  });

  it('mode is 44', function() {
    expect(grades.modeScore([32, 55, 100, 44, 67, 45, 35, 44, 23])).toEqual(44);
  });

  it('mode is 55', function() {
    expect(grades.modeScore([100, 55, 33, 25, 77, 55, 84])).toEqual(55);
  });

  it('mode is 86', function() {
    expect(grades.modeScore([87, 86, 85, 86, 89])).toEqual(86);
  });

  it('mode is dog', function() {
    expect(grades.modeScore(['cat', 'horse', 'dog', 'dog', 'pony'])).toEqual('dog');
  });

});



















