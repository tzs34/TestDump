import React from 'react'
import Autosuggest from 'react-autosuggest'
import {categories} from '../Form/form-utils'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : categories.filter(
        lang => lang.toLowerCase().slice(0, inputLength) === inputValue
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

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    }
  }
  componentWillReceiveProps (nextProps){

    const {validate} = nextProps
    const{validationFunction, name} = this.props
    const {value} = this.state

    console.log(validationFunction)
    console.log(typeof validationFunction === 'function')
    console.log('####################')
    if (
      validate &&
      validationFunction &&
      typeof validationFunction === 'function'
    ) {
      let isValid = validationFunction(value, name )
      if (!isValid) {
        //setError(true)
      }
    }
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    })
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
    const { value, suggestions } = this.state

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    }

    // Finally, render it!
    return (
      <>
        <div>
          <label> Choose Category</label>
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
      </>
    )
  }
}
export default AutoComplete
