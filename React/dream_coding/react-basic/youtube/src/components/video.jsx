import React from 'react';

const Video = ({image}) => {
      console.log(image)
  return (
    <>
      <section className="video-box">
        <article className="video-image">
          <img src={image} />
          <span className="video-info">hi</span>
        </article>
      </section>
    </>
  );
};

export default Video;