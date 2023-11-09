const LargeImage = ({ largeImageURL, tags }) => {
  return <img src={largeImageURL} alt={tags} />;
};

export default LargeImage;
