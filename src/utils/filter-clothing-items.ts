type BodyType = {
  id: string
  code: string
}

type Category = {
  id: string
  name: string
}

type ClothingItem = {
  id: string
  bodyTypes: Array<BodyType>
  category: Array<Category>
}

type Filters = {
  bodyType: string
  categories: Array<string>
}

export const filterClothingItems = (
  clothingItems: Array<ClothingItem>,
  filters: Filters
): Array<ClothingItem> => {
  const { bodyType, categories } = filters

  return clothingItems.filter(item => {
    if (bodyType) {
      if (item.bodyTypes.find(type => type.code === bodyType)) {
        // console.log(`PASS: found matching element`)
      } else {
        // console.log(`FAIL: item body types didn't match the filter set`)
        return false
      }
    }

    if (categories) {
      if (categories.includes(item.category.id)) {
        // console.log(`PASS: categories match`)
      } else {
        // console.log(`FAIL: category filter didn't match`)
        return false
      }
    }

    // passed all filters, therefore, keep the item
    return true
  })
}
