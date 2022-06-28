import TomSelect from 'tom-select';

const select = () => {
  document.querySelectorAll('.reg-form__select').forEach(el => {
    new TomSelect(el, {
      create: true,
      sortField: {
        field: 'text',
        direction: 'asc',
      },
    });
  });
};

export { select };
