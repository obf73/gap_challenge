import { items, Item, update_quality } from '../src/gilded_rose';

describe('Gilded Rose', () => {
  it("should run", function() {
    update_quality(items);
  });
})