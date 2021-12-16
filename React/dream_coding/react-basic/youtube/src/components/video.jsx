import React from 'react';

const Video = ({id, title, image}) => {
    
  return (
    <>
    <tr>
    <td className="video-image">
        <img src={image} />
      </td>
      <td className="video-information">
        <span className="video-title">{title}</span>
      </td>
    </tr>
      
    </>
  );
};

export default Video;