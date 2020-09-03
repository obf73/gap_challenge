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
  updateItemQuality(item);
  updateItemSellIn(item);
}

const isBrie = (item) => {
  return item.name ===  'Aged Brie'
}

const isBackstage = (item) => {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert'
}

const isSulfuras = (item) => {
  return item.name === 'Sulfuras, Hand of Ragnaros'
}

const isConjured = (item) => {
 return item.name === 'Conjured Mana Cake'
}

const determineAction = (item) => {
  let itemName = item.name
  switch(itemName) {
    case 'Aged Brie':
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
      break;
    case 'Backstage passes to a TAFKAL80ETC concert':
      if (item.quality < 50) {
        item.quality = item.quality + 1
        updateBackstagePassSpecial(item)
      }
      break;
    case 'Sulfuras, Hand of Ragnaros':

      break
    case 'Conjured Mana Cake':
      item.quality = item.quality - 1;
    default:
      if (item.quality > 0) {
        item.quality = item.quality - 1
      }
  }
}

const updateItemQuality = (item) => {
  determineAction(item);
}

const updateItemSellIn = (item) => {
  if (isSulfuras(item)) {
  } else {
    item.sell_in = item.sell_in - 1;
  }
  updateItemNegativeSellIn(item)
}

const updateItemNegativeSellIn = (item) => {
  if (item.sell_in < 0) {
    if (isBrie(item)) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    } else {
      if (isBackstage(item)) {
        item.quality = item.quality - item.quality
      } else {
        if (item.quality > 0) {
          if (isSulfuras(item)) {
          } else {
            item.quality = item.quality - 1
          }
        }
      }
    }
  }
}

const updateBackstagePassSpecial = (item) => {
  if (item.sell_in < 11) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
  if (item.sell_in < 6) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}
