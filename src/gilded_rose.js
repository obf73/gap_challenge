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

const updateItemQuality = (item) => {
  if (isBrie(item) || isBackstage(item)) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (isBackstage(item)) {
        updateBackstagePassSpecial(item)
      }
    }
  } else {
    if (item.quality > 0) {
      if (isSulfuras(item)) {

      } else {
        item.quality = item.quality - 1
        if(isConjured(item)) {
          item.quality = item.quality - 1;
        }
      }
    }
  }
}

const updateItemSellIn = (item) => {
  if (isSulfuras(item)) {
  } else {
    item.sell_in = item.sell_in - 1;
  }
  if (item.sell_in < 0) {
    if (!isBrie(item)) {
      if (!isBackstage(item)) {
        if (item.quality > 0) {
          if (isSulfuras(item)) {
          } else {
            item.quality = item.quality - 1
          }
        }
      } else {
        item.quality = item.quality - item.quality
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
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
