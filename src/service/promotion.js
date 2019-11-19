import fetch from './fetch'

export const getPromotionsData = async (brand='galaxy') => {
  return fetch.callFunction('getPromotionData', { brand }).then(res => res.result)
}

