export const filteredList = (list, key, value) =>
  list.filter((item) => item[key] === value)

export const valuesExtractor = (obj, key) => {
  const objEntries = Object.entries(obj)
  const filteredObjEntries = objEntries.filter(
    (value) => value[0].includes(key) && value[1]
  )

  // const keys = filteredObjEntries.map((item) => item[0])

  const values = filteredObjEntries.map((item) => item[1])

  // if (values) {
  //   return ({
  //     key: valore
  //   })
  // }

  return values
}

// export const ingredientsData = () => {
//   return valuesExtractor(data, 'strIngredient')
// }
