import React from 'react'

const withData = (getData) => (WrappedComponent) => (props) => {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    getData()
      .then(({ data: d }) => {
        setData(d)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        throw new Error(err)
      })
  }, [])

  if (isLoading) {
    return <div>loading...</div>
  }

  return React.createElement(WrappedComponent, { data, ...props })
}

export default withData
