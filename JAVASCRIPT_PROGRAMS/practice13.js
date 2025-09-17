console.log("\n\t\t\t||>>>>>||- URL SPLITTER -||<<<<<||\n");

// https://www.example.com/products/category/item?id=12345&source=search#section-details

function url_splitter(url) {
  let protocol = "";
  if (url.includes("://")) {
    protocol = url.split("://")[0];
    url = url.split("://")[1];
  }

  let domain = url.split("/")[0];

  let path = "/";
  if (url.includes("/") && url.split("/").length > 1) {
    path += url.split("/").slice(1).join("/");
  }

  let fragment = {};
  if (path.includes("#")) {
    [path, fragment] = path.split("#");
  }

  let Query_Parameters = {};

  if (path.includes("?")) {
    let QueryString = path.split("?")[1];
    path = path.split("?")[0];

    let params = QueryString.split("&");
    for (let i = 0; i < params.length; i++) {
      let key_value = params[i].split("=");
      if (key_value.length == 2) {
        Query_Parameters[key_value[0]] = key_value[1];
      }
    }
  }

  return {
    protocol: protocol,
    path: path,
    domain: domain,
    Query_Parameters: Query_Parameters,
    fragment: fragment,
  };
}

let url_info = url_splitter(
  "// https://www.example.com/products/category/item?id=12345&source=search#section-details"
);
console.log(`The protocol is: ${url_info.protocol}`);
console.log(`The Domain is: ${url_info.domain}`);
console.log(`The Path is: ${url_info.path}`);
console.log(
  `The Query Parameters are: ${JSON.stringify(url_info.Query_Parameters)}`
);
console.log(`The Query Parameters are: ${url_info.fragment}`);
