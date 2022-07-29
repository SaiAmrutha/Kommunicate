function getUrlParameterValue(url, parameter) {
  var url_str = url.toString();
  var result = "";
  let pos = url_str.search(parameter) + parameter.length;
  if (url_str[pos] == "=") {
    for (let i = pos + 1; url_str[i] != "&" && i < url_str.length; i++)
      result += url_str[i];
  }
  return result;
}
var url = new URL(
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"
);
var parameter = "utm_medium";
console.log(getUrlParameterValue(url, parameter));
