describe("the item store", function(){
  it("should make a request to the restHelper", function(){
    const itemStore = require.requireActual('../../../app/stores/ItemStore.js');

    const restHelper = require('../../../app/helpers/restHelper.js');

    const spy = jest.spyOn(restHelper, 'get');

    expect(spy).toHaveBeenCalled();
    // expect(spy).toBeCalledWith('items');
  })
})
