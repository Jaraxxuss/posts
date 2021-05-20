import React from 'react'

const withData = (getData) => (WrappedComponent) => () => {
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

  return <WrappedComponent data={data} />
}

export default withData
