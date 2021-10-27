import React from 'react';

type ScreenProps = {
  backgroundImage?: string;
  className?: string;
  children: JSX.Element;
};

type BackgroundStyle = {
  backgroundImage?: string;
};

const Screen = ({ backgroundImage, className, children }: ScreenProps): JSX.Element => {
  const backgroundStyle: BackgroundStyle = {};
  if (backgroundImage) {
    backgroundStyle.backgroundImage = `url(${backgroundImage})`;
  }

  return (
    <div className={`screen ${className}`}>
      <div className="screen__background-image" style={backgroundStyle}>
        <div className="screen__content">{children}</div>
      </div>
    </div>
  );
};

export default Screen;
