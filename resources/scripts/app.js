(async () => {
  // Global
  // if (document.querySelectorAll('.header-top').length > 0 && document.querySelectorAll('.header').length > 0) {
  //     const { header } = await import(/* webpackChunkName: 'header' */ './modules/header');
  //
  //     header();
  // }
  //Modules
  if (document.querySelectorAll('.datepicker-input').length > 0) {
    const { datepicker } = await import(/* webpackChunkName: "datepicker" */ './modules/datepicker');

    datepicker();
  }

  if (document.querySelectorAll('.reg-form__select').length > 0) {
    const { select } = await import(/* webpackChunkName: "select" */ './modules/select');

    select();
  }

  if (document.querySelectorAll('.reg-form__phone').length > 0) {
    const { phone } = await import(/* webpackChunkName: "phone" */ './modules/phone');

    phone();
  }

  if (document.querySelectorAll('.scroll-to').length > 0) {
    const { scrollTo } = await import(/* webpackChunkName: "scrollTo" */ './modules/scroll-to');

    scrollTo();
  }
})();
