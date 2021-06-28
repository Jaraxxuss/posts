import React from 'react'
import { useAsync } from 'react-async-hook'
import useConstant from 'use-constant'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

const useDebouncedSearch = (searchFunction, debounceTime) => {
  const [inputText, setInputText] = React.useState('')

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, debounceTime),
  )

  const searchResults = useAsync(async () => {
    if (inputText.length === 0) {
      return []
    }
    return debouncedSearchFunction(inputText)
  }, [inputText])

  return {
    inputText,
    setInputText,
    searchResults,
  }
}

export default useDebouncedSearch
