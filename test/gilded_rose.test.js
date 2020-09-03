import { items, Item, update_quality } from '../src/gilded_rose';

const TEST_NORMAL_ITEM = new Item('normal', 20, 20)
let testItems = [];

describe('Gilded Rose', () => {
  it("should run", function() {
    update_quality(items);
  });
})

describe('update_quality', () => {
  describe('normal item', () => {
    beforeEach(() => {
      testItems.push(TEST_NORMAL_ITEM);
    })
    afterEach(() => {
      testItems = [];
    })

    it('should decrement sell_in prop by 1', () => {
      update_quality(testItems);
      expect(testItems[0].sell_in).toEqual(19);
    })



  })
})