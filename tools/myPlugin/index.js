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
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref");
  const repo = params.get("repo");
  const owner = params.get("owner");
  const referrer = params.get("referrer");
  const previewHost = `https://${ref}--${repo}--${owner}.hlx.page`;
  const statusUrl = `https://admin.hlx.page/status/${owner}/${repo}/${ref}?editUrl=${referrer}`;
  console.log('location is ' + window.location.href);
  console.log("previewHost = " + previewHost);
  console.log("statusUrl = " + statusUrl);
  const status = JSON.parse(await fetchData(statusUrl));
  console.log("status is " + JSON.stringify(status));
  //window.location.replace(previewHost);
}

previewAndRedirect();


