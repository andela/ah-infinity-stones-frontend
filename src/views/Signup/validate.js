/* eslint-disable no-useless-escape */
/**
 *
 * @param {*} data
 * @returns msg
 */
export default function validateData(data) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
  const msg = {
    usernameError: '',
    emailError: '',
    passwordError: '',
    cpasswordError: '',
    successMsg: '',
  };
  if (data.username.length > 0 && data.username.length < 6) {
    msg.usernameError = 'Username must have at least six characters';
  } else if (data.email.length > 0 && !emailPattern.test(data.email)) {
    msg.emailError = 'Invalid email address';
  } else if (data.password.length > 0 && data.password.length < 6) {
    msg.passwordError = 'Password must have at least six characters';
  } else if (data.password.length > 0 && !strongPassword.test(data.password)) {
    msg.passwordError = 'Enter strong password e.g p!Yd7YzU,S8}p}@';
  } else if (data.cpassword.length > 0 && data.cpassword !== data.password) {
    msg.cpasswordError = 'Password does not match';
  }
  return msg;
}

/**
 *
 * @param {*} data
 * @returns buttonDisabled
 */
export function handleSuccess(data) {
  const response = validateData(data);
  let buttonDisabled = false;
  if (
    response.usernameError === ''
    && response.emailError === ''
    && response.passwordError === ''
    && response.cpasswordError === ''
  ) {
    buttonDisabled = false;
  } else {
    buttonDisabled = true;
  }
  return buttonDisabled;
}
