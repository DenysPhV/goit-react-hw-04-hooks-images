import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './App.module.scss';

import getImagesApi from './services/getImagesApi';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export default function App() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [largeUrl, setLargeUrl] = useState('');

  const onChangeQuery = (query) => {
    setImages([]);
    setCurrentPage(1);
    setSearchQuery(query);
  };

  useEffect(() => {
    setPerPage(12);
    if (!searchQuery) {
      return;
    }

    const fetchImages = async () => {
      const options = { searchQuery, currentPage, perPage };

      setIsLoading(true);

      try {
        const response = await getImagesApi.fetchData(options);
        setImages((prevState) => [...prevState, ...response]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [searchQuery, currentPage, perPage]);

  useEffect(() => {
    setPerPage(12);

    if (images.length > perPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [images, perPage]);

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onImageClick = (e) => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    setIsLoading(true);
    setLargeUrl(e.target.dataset.url);

    toggleModal();
  };

  const toggleLoader = () => {
    setIsLoading(false);
  };

  const renderLoadMoreButton = images.length > 0 && !isLoading;

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onChangeQuery} />

      <ImageGallery images={images} onClick={onImageClick} />
      {isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={80}
          width={80}
          radius={50}
        />
      )}
      {renderLoadMoreButton && <Button onLoadMore={nextPage} />}
      <ToastContainer theme="dark" transition={Flip} draggableDirection="y" />

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeUrl} alt="" onLoad={toggleLoader} />
        </Modal>
      )}
    </div>
  );
}
