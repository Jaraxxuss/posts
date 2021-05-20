/* eslint-disable react/prop-types */
import React from 'react'

const withFavorite =
  (WrappedComponent) =>
  ({ data: responseData }) => {
    const [data, setData] = React.useState(
      responseData
        ? responseData.map((it) => ({ ...it, isFavorite: false }))
        : [],
    )
    const [isFavoriteVisible, setIsFavoriteVisible] = React.useState(true)

    const favoriteData = data ? data.filter(({ isFavorite }) => isFavorite) : []

    const onClickWithFavoriteBtn = () => {
      setIsFavoriteVisible((prev) => !prev)
    }

    const onChangeFavorite = (id) => {
      const idx = data.findIndex((item) => item.id === id)
      const isFavorite = !data[idx].isFavorite
      data.slice(0, idx)
      data.slice(idx + 1)

      setData([
        ...data.slice(0, idx),
        { ...data[idx], isFavorite },
        ...data.slice(idx + 1),
      ])
    }

    return (
      <div>
        <button type="button" onClick={onClickWithFavoriteBtn}>
          withFavorites
        </button>
        <div>
          <WrappedComponent data={data} onChangeFavorite={onChangeFavorite} />
        </div>
        <div className={isFavoriteVisible ? 'with-favorite' : 'with'}>
          <WrappedComponent
            data={favoriteData}
            onChangeFavorite={onChangeFavorite}
          />
        </div>
      </div>
    )
  }

export default withFavorite
