import { useState } from "react"

const usePaginate = (allItems, subsetSize = 20) => {
  const [skip, setSkip] = useState(0)
  const [itemSubset, setItemSubset] = useState(allItems.slice(0, subsetSize))

  const loadMore = () => {
    // set the itemSubset to add more items
    setItemSubset(allItems.slice(0, subsetSize + skip))
    // increase the size of the skip to include more items
    setSkip(skip + subsetSize)
  }

  return { items: itemSubset, loadMore }
}

export default usePaginate
