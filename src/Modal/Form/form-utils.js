const categories = [
  'Beer',

  'Biscuits',
  
  'Baby Food',
  
  'Breakfast Cereal',
  
  'Chocolate',
  
  'Energy & Health Drinks',
  
  'Fizzy Drinks',
  
  'Ice Cream',
  
  'Pasta Sauces',
  
  'Pet',
  
  'Shaving',
  
  'Skincare',
  
  'Soft Drinks',
  
  'Spirits',
  
  'Sweets',
  
  'Table Sauces & Marinades',
  
  'Tea',
  
  'Tinned Vegetables',
  
  'Yoghurt'
]

const brands = [
  'Amazon UK',
  'Amazon Fresh',
  'Amazon Pantry',
  'ASDA',
  'Bestway',
  'Booker',
  'Boots',
  'Fetch',
  'Iceland',
  'Lloyds Pharmacy',
  'Monster',
  'Morrisons',
  'Ocado',
  'Pets at home',
  'Sainsburys',
  'Superdrug',
  'Tesco',
  'Viovet',
  'Waitrose',
  'Zooplus'
]

const BRAND_THRESHOLD = 3

const curry = fn => {
  return (...xs) => {
    if (xs.length === 0) {
      throw Error('EMPTY INVOCATION')
    }
    if (xs.length >= fn.length) {
      return fn(...xs)
    }
    return curry(fn.bind(null, ...xs))
  }
}
const isValid = (value, id) => {
  return { id, value, valid: true }
}
const isNotValid = id => {
  return { id, value: null, valid: false }
}

const validateText = callback => (str, id) => {
  let valid = str.length > 0
  if (valid) {
    callback(isValid(str, id))
  } else {
    callback(isNotValid(id))
  }
  return valid
}

const validateEmail = callback => (str, id) => {
  let valid = str.includes('@')
  if (valid) {
    callback(isValid(str, id))
  } else {
    callback(isNotValid(id))
  }
  return valid
}

const validatePassword = callback => (str, id) => {
  let valid = str.length > 4
  if (valid) {
    callback(isValid(str, id))
  } else {
    callback(isNotValid(id))
  }
  return valid
}

const validateBrandSelection = callback => (arr, id) => {
  let valid = arr.length <= BRAND_THRESHOLD 
  if (valid) {
    callback({id, value: arr, valid: true})
  } else {
    callback({id, value: null, valid: false})
  }
  return valid
}

const validateCategory = callback => (str, id) => {
  console.log(str, id, '-->')
  let valid = categories.includes(str)
  if (valid) {
    callback(isValid(str, id))
  } else {
    callback(isNotValid(id))
  }
  return valid
}


const requiredFieldsValid = arr =>{
  return arr.reduce((acc, o) => {
    let key = Object.keys(o)[0] 
    console.log(`${o[key]['required']} && ${o[key]['valid']}`)
    if(o[key]['required'] && o[key]['valid']){
      acc.push(true)
    }else{
      acc.push(false)
    }
    return acc
  }, []).every( bool => bool.toString() === 'true')
}
 

export { 
  validateText, 
  validateEmail, 
  validatePassword, 
  requiredFieldsValid, 
  validateBrandSelection, 
  validateCategory, 
  brands,
  categories,
  BRAND_THRESHOLD
}
