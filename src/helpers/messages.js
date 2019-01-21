import toastr from 'toastr';


toastr.options = {
  toastClass: 'alert',
  iconClasses: {
    error: 'alert-danger',
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
  },
  showDuration: 3000,
  hideDuration: 500,
  timeOut: 5000,
  extendedTimeOut: 2000,
  closeButton: true,
  preventDuplicates: true,
  positionClass: 'toast-bottom-center',
  onclick: null,
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

export const successMessage = (message) => {
  toastr.success(message);
};
export const errorMessage = (message) => {
  toastr.error(message);
};
