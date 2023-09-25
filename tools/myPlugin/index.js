
async function previewAndRedirec() {
  var params = new URLSearchParams(window.location.search);
  var previewHost = `https://${params.get("ref")}--${params.get("repo")}--${params.get("owner")}.hlx.page`;
  var statusUrl = `https://admin.hlx.page/status/${params.get("owner")}/${params.get("repo")}/${params.get("ref")}?editUrl=${params.get("referrer")}`;
  console.log('location is ' + window.location.href);
  console.log("previewHost = " + previewHost);
  console.log("statusUrl = " + statusUrl);
}

previewAndRedirect();


