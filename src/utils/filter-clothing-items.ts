import { intersection } from "lodash"

type BodyType = {
  id: string
  code: string
}

type Category = {
  id: string
  name: string
}

type Retailer = {
  id: string
  name: string
}

type ClothingItem = {
  id: string
  bodyTypes: Array<BodyType>
  categories: Array<Category>
  colors: Array<Color>
  retailer: Retailer
  verified: boolean
  imgUrl: string
}

type Filters = {
  bodyType: string
  categories: Array<string>
  colors: Array<string>
  verified: boolean
  retailers: Array<string>
}

type Color = {
  id: string
  hex: string
  imageUrl: string
  name: string
}

export const filterClothingItems = (
  clothingItems: Array<ClothingItem>,
  filters: Filters
): Array<ClothingItem> => {
  const { bodyType, categories, colors, verified, retailers } = filters
  if (!clothingItems) return []

  return clothingItems.filter(item => {
    if (bodyType) {
      if (item.bodyTypes.find(type => type.code === bodyType)) {
        // console.log(`PASS: found matching element`)
      } else {
        // console.log(`FAIL: item body types didn't match the filter set`)
        return false
      }
    }

    if (categories.length) {
      const categoryIds: Array<string> = item.categories.map(c => c.id)
      if (intersection(categories, categoryIds).length) {
        // console.log(`PASS: categories match`)
      } else {
        // console.log(`FAIL: category filter didn't match`)
        return false
      }
    }

    if (colors.length) {
      const colorIds: Array<string> = item.colors.map(c => c.id)
      if (intersection(colors, colorIds).length) {
        // console.log(`PASS: colors match`)
      } else {
        // console.log(`FAIL: color filter didn't match`)
        return false
      }
    }

    // show verified items at all times
    if (item.verified || item.verified === verified) {
      // console.log(`PASS: verified match`)
    } else {
      // console.log(`FAIL: verified match wasn't the same`)
      return false
    }

    if (retailers.length) {
      if (retailers.includes(item.retailer.id)) {
        // console.log(`PASS: retailers match`)
      } else {
        // console.log(`FAIL: retailer filter didn't match`)
        return false
      }
    }

    // passed all filters, therefore, keep the item
    return true
  })
}
