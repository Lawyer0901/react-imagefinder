import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, showLargeImage }) => {
  return (
    <ul>
      {images.length > 0 ? (
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              id={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              onClick={() => showLargeImage(image.largeImageURL)}
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
