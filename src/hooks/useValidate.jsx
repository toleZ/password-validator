const useValidate = (password) => {
  const upperCaseRegex = /[A-Z]/g;
  const lowerCaseRegex = /[a-z]/g;
  const numbersRegex = /[0-9]/g;

  const errors = {
    length: password.length >= 8,
    uppercase: Boolean(password.match(upperCaseRegex)),
    lowercase: Boolean(password.match(lowerCaseRegex)),
    number: Boolean(password.match(numbersRegex)),
  };

  return errors;
};

export default useValidate;
3;
