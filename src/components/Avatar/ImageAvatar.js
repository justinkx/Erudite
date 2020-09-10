import React from "react"

function ImageAvatar({ image, size = 30, color = "#f1f0f5" }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      className="image-avatar-container"
    >
      <img
        style={{
          width: `${size - 1}px`,
          height: `${size - 1}px`,
        }}
        src={image}
        alt="avatar"
      />
    </div>
  )
}

export default ImageAvatar
