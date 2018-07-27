var task1 = require('../task1');

describe('task 1 solver', () => {
  it('should return 7', () => {
    expect(task1.solve([['2018-01-01', '2018-01-01']])).toEqual('2018-01-01');
  });

  it('should return 7', () => {
    expect(task1.solve([
      ['2018-01-01', '2018-01-03'],
      ['2018-01-02', '2018-01-03']
    ])).toEqual('2018-01-02');
  });

  it('should return 7', () => {
    expect(task1.solve([
      ['2018-01-01', '2019-01-01'],
      ['2018-06-01', '2019-06-03'],
      ['2020-01-02', '2021-01-03']
    ])).toEqual('2018-06-01');
  });
})
