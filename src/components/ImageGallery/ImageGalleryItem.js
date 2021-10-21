import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => (
  <li key={id}>
    <img
      src={webformatURL}
      alt={tags}
      data-url={largeImageURL}
      className={s.ImageGalleryItem__image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
