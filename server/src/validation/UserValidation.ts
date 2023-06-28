export const validateUser = (
  name: string,
  cpf?: string,
  login?: string,
  password?: string
) => {
  return (
    validateName(name) ??
    validateCPF(cpf) ??
    validateLogin(login) ??
    validatePassword(password)
  );
};

const validateName = (name: string) => {
  if (!name || name.length > 60) {
    return "Name not informed/must contain a maximum of 60 characters.";
  }
};

const validatePassword = (password?: string) => {
  if (!password || password.length > 20) {
    return "Password must contain a maximum of 20 characters.";
  }
  if (!password || password.length < 8) {
    return "Password must contain at least 8 characters.";
  }
  // if (
  //   !password.match(/((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g)
  // ) {
  //   return "Password must contain 1 number, 1 special character, lowercase and uppercase letter. Ex: 1@aA";
  // }
};

const validateLogin = (login?: string) => {
  if (!login || login.length < 4) {
    return "Login must contain at least 4 characters.";
  }
  if (!login || login.length > 20) {
    return "Login must contain a maximum of 20 characters.";
  }
};

const CPF = (cpf: string) => {
  if (typeof cpf !== "string") return false;
  cpf = cpf.replace(/[\s.-]*/gim, "");
  if (
    !cpf ||
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    return false;
  }
  var sum = 0;
  var rest;
  for (var i = 1; i <= 9; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  for (var i = 1; i <= 10; i++)
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(cpf.substring(10, 11))) return false;
  return true;
};

const validateCPF = (cpf?: string) => {
  if (!cpf || !CPF(cpf)) {
    return "Invalid CPF.";
  }
};
