console.log("\n\t\t\t>>>>>|| URL SPLITTER|| <<<<<");

// https://www.example.com/products/category/item?id=12345&source=search#section-details

function url_splitter(URL) {
  let protocol = "";
  if (URL.includes("://")) {
    protocol = URL.split("://")[0];
    URL = URL.split("://")[1];
  }

  let domain = URL.split("/")[0];

  let path = "/";
  if (URL.includes("/") && URL.split("/").length > 1) {
    path += URL.split("/").slice(1).join("/");
  }

  let queryParams = {};
  let queryString = "";
  if (path.includes("?")) {
    let queryString = path.split("?")[1];
    path = path.split("?")[0];

    let params = queryString.split("&");
    for (let i = 0; i < params.length; i++) {
      let key_value = params[i].split("=");
      if (key_value.length === 2) {
        queryParams[key_value[0]] = key_value[1];
      }
    }
  }

  return {
    protocol: protocol,
    path: path,
    domain: domain,
    queryParams: queryParams,
  };
}

let url_info = url_splitter(
  "https://www.example.com/products/category/item?id=12345&source=search#section-details"
);
console.log(`The protocol is: ${url_info.protocol}`);
console.log(`The Domain is: ${url_info.domain}`);
console.log(`The Path is: ${url_info.path}`);
console.log(`The Query Parameters are: ${url_info.queryParams}`);
