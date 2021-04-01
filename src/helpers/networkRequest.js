const networkRequest = (path, reqMethod = "GET", data = {}) =>
  new Promise((resolve, reject) => {
    const baseUrl = "https://reqres.in";
    const headerConfig = {
      "content-type": "application/json"
    };
    const reqHeaders = new Headers(headerConfig);
    const config = {
      method: reqMethod,
      headers: reqHeaders,
      body: JSON.stringify(data)
    };
    fetch(`${baseUrl}${path}`, config)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((e) => {
        console.log(e);
        reject(e);
      });
  });

export default networkRequest;
