const url =
  "http://host.docker.internal:3000/callback?session_state=b8118c2b-4dc0-4a7b-861e-dfd125a746f3&code=0e3bfc8c-2c91-4e71-814b-54b0add4fbeb.b8118c2b-4dc0-4a7b-861e-dfd125a746f3.e7f6eb86-d324-45f0-ad38-a3182923e06e";

const request1 = fetch(url);
const request2 = fetch(url);

Promise.all([request1, request2])
  .then(async (responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((jsons) => console.log(jsons));