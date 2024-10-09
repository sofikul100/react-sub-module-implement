import React, { useState } from "react";

// Define the type for an image object
interface Image {
  id: number;
  url: string;
  name: string;
}

const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]); // State to store images
   // To track which image is being edited

  // Handle file upload and add to the image array
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;
    if (!files) return;

    const newImages: Image[] = Array.from(files).map((file) => ({
      id: Date.now() + Math.random(), // Unique ID for the image
      url: URL.createObjectURL(file), // Create URL for the image
      name: file.name
    }));

    setImages((prevImages) => [...prevImages, ...newImages]); // Add new images to state
  };

  // Edit an image (this could be updating a name or replacing the image)
  const handleEditImage = (id: number): void => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, name: "New Name" } : image // Example: updating the name
    );
    setImages(updatedImages);
  };

  // Delete image by filtering it out of the state array
  const handleDeleteImage = (id: number): void => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  return (
    <div className="mx-4 my-4">
      <input type="file" multiple onChange={handleImageUpload} />

      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.url} alt={image.name} width="150" height="150" />
            <div>{image.name}</div>
            <button onClick={() => handleEditImage(image.id)}>Edit</button>
            <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
