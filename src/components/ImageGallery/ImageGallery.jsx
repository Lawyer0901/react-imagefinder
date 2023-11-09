import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.length > 0 ? (
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
            />
          );
        })
      ) : (
        <p>There are no images, try to search something :)!</p>
      )}
    </ul>
  );
};

export default ImageGallery;
