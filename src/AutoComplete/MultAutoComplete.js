import React, { useState } from 'react'
import Autosuggest from 'react-autosuggest'
import ItemRenderer from './ItemRenderer'

const brands = [
  'Aldi',
  'Asda',
  'Co-op',
  'Marks & Spencer',
  'Sainsbury',
  'Target',
  'Tesco',
  'Walmart'
]

const MultiAutoComplete = () => {
  let [selectedBrands, setSelectedBrands] = useState([])
  let [selectedBrand, setSelectedBrand] = useState('')
  let [brandList, setBrandList] = useState(brands)

  function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : brandList.filter(
          brand => brand.toLowerCase().slice(0, inputLength) === inputValue
        )
  }

  function getSuggestionValue(suggestion) {
    return suggestion || selectedBrand
  }

  function handleOnChange(value) {
    if (!selectedBrands.includes(value)) {
      let updated = [...selectedBrands, value]
      setSelectedBrands(updated)
    }
  }
  function renderSelectedBrands(list) {
    return list.map((brand, index) => {
      return (
        <ItemRenderer
          key={`${brand}${index}`}
          language={brand}
          deleteItem={deleteItem}
        />
      )
    })
  }

  function deleteItem(b) {
    let updated = selectedBrands.filter(brand => brand !== b)
    setSelectedBrands(updated)
  }

  function renderSuggestion(suggestion) {
    return <div> {suggestion} </div>
  }

  function onSuggestionsFetchRequested({ value }) {
    setBrandList(getSuggestions(value))
  }

  function onSuggestionsClearRequested() {
    setBrandList(getSuggestions([]))
  }

  const inputProps = {
    placeholder: 'Start typing a brand name',
    value: selectedBrand,
    onChange: handleOnChange
  }

  return (
    <>
      {selectedBrands.length > 0 && (
        <div className="wrap-row">{renderSelectedBrands(selectedBrands)}</div>
      )}

      <div>
        <label> Choose Brands</label>
      </div>
      <div>
        <Autosuggest
          suggestions={brands}
          getSuggestionValue={getSuggestionValue}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    </>
  )
}

export default MultiAutoComplete
