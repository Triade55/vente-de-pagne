fetch("../component/footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("includeFooter").innerHTML = data));
