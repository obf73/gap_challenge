import { items, Item, update_quality } from '../src/gilded_rose';

const TEST_NORMAL_ITEM = new Item('normal', 10, 20)
let testItems = [];

describe('Gilded Rose', () => {
  it("should run given data", function() {
    update_quality(items);
  });
})

describe('update_quality', () => {

  describe('normal item', () => {

    afterEach(() => {
      testItems = []
    })

    it('should decrement sell_in prop by 1', () => {
      const item = new Item('normal', 10, 20);
      testItems.push(item);
      update_quality(testItems);
      expect(testItems[0].sell_in).toEqual(9);
    })

    it('should decrement quality prop by 1', () => {
      const item = new Item('normal', 10, 20);
      testItems.push(item)
      update_quality(testItems);
      expect(testItems[0].quality).toEqual(19);
    })

    it('allow sell_in prop to decrement below 0', () => {
      const item = new Item('normal', 0, 20);
      testItems.push(item)
      update_quality(testItems);
      expect(testItems[0].sell_in).toEqual(-1);
    })

    it('decrement quality 2x as fast after sell_in reaches 0', () => {
      const item = new Item('normal', 0, 20);
      testItems.push(item)
      update_quality(testItems);
      expect(testItems[0].quality).toEqual(18);
    })

    it('never allows negative quality', () => {
      const item = new Item('normal', 10, 0);
      testItems.push(item)
      update_quality(testItems);
      expect(testItems[0].quality).toEqual(0);
    })

  })

  describe('Aged Brie', () => {

    afterEach(() => {
      testItems = []
    })

    it('should decrement sell_in prop by 1', () => {
      const item = new Item('Aged Brie', 10, 20);
      testItems.push(item);
      update_quality(testItems);
      expect(testItems[0].sell_in).toEqual(9);
    })

    // it('should decrement quality prop by 1', () => {
    //   const item = new Item('Aged Brie', 10, 20);
    //   testItems.push(item)
    //   update_quality(testItems);
    //   expect(testItems[0].quality).toEqual(19);
    // })

    // it('allow sell_in prop to decrement below 0', () => {
    //   const item = new Item('Aged Brie', 0, 20);
    //   testItems.push(item)
    //   update_quality(testItems);
    //   expect(testItems[0].sell_in).toEqual(-1);
    // })

    // it('decrement quality 2x as fast after sell_in reaches 0', () => {
    //   const item = new Item('Aged Brie', 0, 20);
    //   testItems.push(item)
    //   update_quality(testItems);
    //   expect(testItems[0].quality).toEqual(18);
    // })

    // it('never allows negative quality', () => {
    //   const item = new Item('Aged Brie', 10, 0);
    //   testItems.push(item)
    //   update_quality(testItems);
    //   expect(testItems[0].quality).toEqual(0);
    // })

  })
})