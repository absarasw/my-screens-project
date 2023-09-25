const fetchData = async (url) => {
    let result = '';
    try {
      result = fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`request to fetch ${url} failed with status code ${response.status}`);
          }
          return response.text();
        });
      return Promise.resolve(result);
    } catch (e) {
      throw new Error(`request to fetch ${url} failed with status code with error ${e}`);
    }
  };

async function previewAndRedirect() {
  var params = new URLSearchParams(window.location.search);
  var previewHost = `https://${params.get("ref")}--${params.get("repo")}--${params.get("owner")}.hlx.page`;
  var statusUrl = `https://admin.hlx.page/status/${params.get("owner")}/${params.get("repo")}/${params.get("ref")}?editUrl=${params.get("referrer")}`;
  console.log('location is ' + window.location.href);
  console.log("previewHost = " + previewHost);
  console.log("statusUrl = " + statusUrl);
  const status = fetchData(statusUrl);
  console.log("status is " + JSON.stringify(status));
  //window.location.replace(previewHost);
}

previewAndRedirect();


