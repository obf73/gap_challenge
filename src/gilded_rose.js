function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

export { Item }
export const items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

export const update_quality = (items) => {
  items.forEach(item => {
    updateItem(item);
  })
}

const updateItem = (item) => {
  determineAction(item);
}

const determineAction = (item) => {
  let itemName = item.name
  switch(itemName) {
    case 'Aged Brie':
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
      item.sell_in = item.sell_in - 1;
      break;
    case 'Backstage passes to a TAFKAL80ETC concert':
      if (item.quality < 50) {
        updateBackstagePassSpecial(item)
      }
      if(item.sell_in === 0) {
        item.quality = item.quality - item.quality
      }
      item.sell_in = item.sell_in - 1;
      break;
    case 'Sulfuras, Hand of Ragnaros':

      break
    case 'Conjured Mana Cake':
      item.quality = item.quality - 1;
    default:
      if (item.quality > 0) {
        item.quality = item.quality - 1
        if(item.sell_in <= 0) {
          item.quality = item.quality - 1
        }
      }
      item.sell_in = item.sell_in - 1;
  }
}

const updateBackstagePassSpecial = (item) => {
  if (item.sell_in <= 5) {
    if (item.quality < 50) {
      item.quality = item.quality + 3
      return 
    }
  }
  if (item.sell_in <= 10) {
    if (item.quality < 50) {
      item.quality = item.quality + 2
      return
    }
  }
  item.quality = item.quality + 1
}
