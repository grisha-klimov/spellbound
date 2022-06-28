const scrollTo = () => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: document.querySelector('.scroll-to').offsetTop,
  });
};

export { scrollTo };
