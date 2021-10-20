import React from 'react'

type BackgroundProps = {
  image: string
  childrenElement: JSX.Element
}

const Background = ({ image, childrenElement }: BackgroundProps): JSX.Element => {
  return (
    <div className="background">
      <div className="background__image" style={{ backgroundImage: `url(${image})` }}>
        <div className="background__overlay">{childrenElement}</div>
      </div>
    </div>
  )
}

export default Background
