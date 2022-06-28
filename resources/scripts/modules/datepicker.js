import Datepicker from 'vanillajs-datepicker/Datepicker';

const datepicker = () => {
  new Datepicker(document.querySelector('.datepicker-input'), {});
};

export { datepicker };
