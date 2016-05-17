describe('Filters', function () {

  var $filter;

  beforeEach(function () {
    module('testApp');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });


  it('should split a string on each character', function () {
    // Arrange.
    var patient = 'teststring';

    var result = $filter('letterBreak')(patient);
    // Assert.
    expect(result).toEqual(['t', 'e', 's', 't', 's', 't', 'r', 'i', 'n', 'g']);
  });

  it('should replace the string {recipe} with the given parameter', function () {
    // Arrange.
    var patient = 'test {recipe} string';

    var result = $filter('vanilla')(patient, '192x108');
    // Assert.
    expect(result).toEqual('test 192x108 string');
  });

});     
