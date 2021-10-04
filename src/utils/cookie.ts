export const setCookie = (key: string, value: string, minutes: number) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + minutes);
  const cookie_value = `${key}=${value}; expires=${date.toUTCString()}`;
  document.cookie = cookie_value;
};

export const getCookie = (key: string) => {
  // const cookies = document.cookie;
  // console.log(cookies);
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(key))
    ?.split("=")[1];
  // console.log(value);
  return value;
};

export const delCookie = (key: string) => {
  const date = new Date();
  date.setDate(date.getDate() - 100);
  const cookie_value = `${key}=true; expires=${date.toUTCString()}`;
  document.cookie = cookie_value;
};
