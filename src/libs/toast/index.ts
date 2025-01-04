import Swal from 'sweetalert2';

const Toast = (icon: 'success' | 'error' | 'info', message: string) => {
  Swal.fire({
    icon,
    title: message,
    toast: true,
    position: 'top-right',
    timer: 2000,
    timerProgressBar: true,
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
      container: 'swal-container',
      popup: 'swal-popup'
    },
    didOpen: (toast) => {
      toast.style.zIndex = '9999';
    }
  });
};

export { Toast };