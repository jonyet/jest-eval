describe("the item store", function(){
  it("should make a request to the restHelper", function(){

    const restHelper = require('../../../app/helpers/restHelper.js');
    let spy = jest.spyOn(restHelper, 'get');

    const itemStore = require.requireActual('../../../app/stores/ItemStore.js');

    expect(spy).toBeCalledWith('items');
  })
})
