export const fetchJsonURL = (url, data) => {
  let result = {};
  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => {
      result = response;
    })
    .catch(error => {
      result = { error };
    });
  return result;
};

export const fetchTextURL = (url, text) => {
  let result = {};
  fetch(url, {
    headers: {
      "Content-Type": "text/plain"
        },
    method: 'POST',
    body: text,
  })
    .then(data => data.json())
    .then(data => {
      result = data;
    })
    .catch(error => {
      result = { error };
    });
  return result;
};
