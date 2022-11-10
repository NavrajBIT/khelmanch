export const BASE_URL = "http://localhost:8000/";

export const getAPI = async (endpoint) => {
  const url = BASE_URL + endpoint;

  return await fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
};

export const putAPI = async (endpoint, formData) => {
  const url = BASE_URL + endpoint;
  return await fetch(url, { method: "PUT", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
};
export const postAPI = async (endpoint, formData) => {
  const url = BASE_URL + endpoint;
  return await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
};
export const filterAPI = async (endpoint, filtername, filtervalue) => {
  const url = BASE_URL + endpoint + "?" + filtername + "=" + filtervalue;
  return await fetch(url, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
};
