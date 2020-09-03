function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

export { Item }
export const items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

export const update_quality = (items) => {
  items.forEach(item => {
    determineAction(item);
  })
}

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const CONJURED = 'Conjured Mana Cake';

const determineAction = (item) => {
  let itemName = item.name
  switch(itemName) {
    case AGED_BRIE:
      agedBrieAction(item);
      break;
    case BACKSTAGE:
      backstageAction(item);
      break;
    case SULFURAS:
      break;
    case CONJURED:
      conjuredAction(item);
    default:
      defaultAction(item);
  }
}

const agedBrieAction = (item) => {
  item.quality < 50 ? item.quality += 1 : item.quality;
  item.sell_in -= 1;
}

const specialIncrement = (item) => {
  item.sell_in <= 5 ? item.quality += 3 : item.quality += 2
}

const backstageAction = (item) => {
  if (item.quality < 50) {
    item.sell_in <= 10 ? specialIncrement(item) : item.quality += 1
  }
  item.sell_in === 0 ? item.quality = 0 : item.quality
  item.sell_in -= 1;
}

const conjuredAction = (item) => {
  item.quality -= 1;
}

const defaultAction = (item) => {
  item.quality > 0 ? item.quality -= 1 : item.quality
  item.sell_in <= 0 ? item.quality -= 1 : item.quality
  item.sell_in -= 1;
}
