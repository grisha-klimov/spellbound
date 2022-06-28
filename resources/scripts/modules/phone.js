import IMask from 'imask';

const phone = () => {
  let maskOptions = {
    mask: '(000)000-0000',
  };
  IMask(document.querySelector('.reg-form__phone'), maskOptions);
};

export { phone };
