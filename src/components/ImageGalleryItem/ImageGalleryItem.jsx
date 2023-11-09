const ImageGalleryItem = ({ webformatURL, tags, onClick, largeImageURL }) => {
  return (
    <li className="gallery-item">
      <img
        onClick={onClick(largeImageURL)}
        src={webformatURL}
        alt={tags}
        width="200px"
      />
    </li>
  );
};

export default ImageGalleryItem;
