export const requiredInput = input => {
  return input ? undefined : "Поле обязательно для заполнения";
};

export const correctInputNameLength = input =>
  input.length < 2 ? "Минимум 2 символа" : undefined;

export const correctInputPhone = input =>
  input.indexOf("_") > 0 ? "Не корректный номер" : undefined;

export const correctInputEmail = input => {
  return input && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)
    ? "Не корректный Email"
    : undefined;
};

export const correctSelect = input => {
  return input === "Населёный пункт"
    ? "Поле обязательно для заполнения"
    : undefined;
};

export const requiredRange = input => {
  // console.log(input);
  return +input < 500 ? "Доставка от 500кг" : undefined;
};
