fetch("resources/db/products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data[0].products);
  })
  .catch(function (err) {
    console.log(err);
  });


  
const appendData = (data) =>{
    const mainContainer = document.getElementById("products-container");
    for (let i = 0; i < data.length; i++) {
      const div = document.createElement("div");
      const pic = document.createElement("img");

      div.innerHTML = "Name: " + data[i].name;
      div.className = "col";
      pic.src = "../resources/img/" + data[i].image;
      pic.className = "produtcs-icon";
      div.appendChild(pic);
      mainContainer.appendChild(div);
      
    }
}