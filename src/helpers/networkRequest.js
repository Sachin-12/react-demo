const networkRequest = (endPoint, method = "GET", data = {}) =>
  new Promise((resolve, reject) => {
    const baseUrl = "https://reqres.in";
    const headerConfig = {
      "content-type": "application/json"
    };
    const headers = new Headers(headerConfig);
    const config = {
      method,
      headers
    };
    if (method !== "GET") {
      config.body = JSON.stringify(data);
    }
    fetch(`${baseUrl}${endPoint}`, config)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });

export default networkRequest;
