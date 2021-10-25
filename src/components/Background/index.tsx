import React from 'react';

type BackgroundProps = {
  image: string;
  children: JSX.Element;
};

const Background = ({ image, children }: BackgroundProps): JSX.Element => {
  return (
    <div className="background">
      <div className="background__image" style={{ backgroundImage: `url(${image})` }}>
        <div className="background__overlay">{children}</div>
      </div>
    </div>
  );
};

export default Background;
