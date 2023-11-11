const ImageGalleryItem = ({ id, webformatURL, tags, onClick }) => {
  return (
    <li className="gallery-item">
      <img
        id={id}
        onClick={onClick}
        src={webformatURL}
        alt={tags}
        width="200px"
      />
    </li>
  );
};

export default ImageGalleryItem;
