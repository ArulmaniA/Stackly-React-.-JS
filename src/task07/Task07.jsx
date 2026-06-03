import  { useRef, useState } from "react";
import "./Task07.css";

function Task07() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container">
      <h1>Task 07 - Image Upload Preview</h1>

      <div className="image-container">
        {image ? (
          <img src={image} alt="Preview" className="preview-image" />
        ) : (
          <p className="placeholder">No Image Selected</p>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden-input"
      />

      <button className="upload-btn" onClick={handleUploadClick}>
        Upload Image
      </button>
    </div>
  );
}

export default Task07;