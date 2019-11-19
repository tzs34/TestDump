import React  from 'react'
import Autosuggest from 'react-autosuggest'
import ItemRenderer from './ItemRenderer'
import {brands} from '../Form/form-utils'

import style from  '../styles.module.css'


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : brands.filter(
        brand => brand.toLowerCase().slice(0, inputLength) === inputValue
      )
}

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion}</div>

class AutoComplete extends React.Component {
  constructor() {
    super()
  this.state = {
      value: '',
      suggestions: [],
      selectedItems: []
    }
  }

  componentWillReceiveProps (nextProps){

    const {validate, validationFunction, name} = nextProps
    const {selectedItems} = this.state
    if (
      validate &&
      validationFunction &&
      typeof validationFunction === 'function'
    ) {
      let isValid = validationFunction(selectedItems, name )
      if (!isValid) {
        //setError(true)
      }
    }
  }

    renderSelectedBrands = (list) => {
    return list.map((brand, index) => {
      return (
        <ItemRenderer
          key={`${brand}${index}`}
          name={brand}
          deleteItem={this.deleteItem}
        />
      )
    })
  }

   deleteItem = (b) => {
    let selectedItems = this.state.selectedItems.filter(brand => brand !== b)
    this.setState({selectedItems})
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    }, this.renderSelected)
  }

   renderSelected= () => {
    let selectedItems = this.state.selectedItems
    let {value} = this.state
    if(brands.includes(value)){
      selectedItems = this.state.selectedItems.concat([value]) 
      if(selectedItems.length > this.props.selectionLimit ){
        selectedItems.shift()
      }
      this.setState({
        value: '',
        selectedItems
      })
    }
  }
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  render() {
    const { value, suggestions, selectedItems} = this.state

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    }

    // Finally, render it!
    return (
      <div className={style.column}>
        {selectedItems.length > 0 && (
          <div className={`${style.wraprow} ${style.wraprowactive}`}>{this.renderSelectedBrands(selectedItems)}</div>
        )}
      <div className={style.formdiv}>
        <div>
          <label> Choose Brands</label>
        </div>
      <div>
        <Autosuggest 
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
        />
        </div>
      </div>
    </div>
    )
  }
}
export default AutoComplete