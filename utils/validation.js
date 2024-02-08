export const onlyAlphabetsValidation = (NameToCheck) => {
  let regex = /^[A-Za-z _]*$/;
  return regex.test(NameToCheck);
};

export const onlyEmailValidation = (emailforValidation) => {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailforValidation)
  ) {
    return true;
  }
  return false;
};

export const onlyPasswordPatternValidation = (pass_word) => {
  let passwordCheck = new RegExp(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/
  );
  if (passwordCheck.test(pass_word)) {
    return true;
  }
  return false;
};

export const onlyPhoneNumberValidation = (num_ber) => {
  // Updated regular expression with length constraint
  let phoneNumber = /^\d{10}$/;

  if (phoneNumber.test(num_ber)) {
    return true;
  }
  return false;
};

