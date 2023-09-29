const getCode = async () => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text())
    .then((response) => response);
};

getCode();
