function displayVehicles() {
   var sHTML = "<table class='table table-striped'><thead><tr><th scope='col'>#</th><th scope='col'>Make</th><th scope='col'>Model</th><th scope='col'>Age</th></tr></thead><tbody><tr><th scope='row'>1</th>";
	   var vehicle = {make:"Ford", model:"Mondeo", age:2 };
	   sHTML += "<td>" + vehicle.make + "</td>" + "<td>" + vehicle.model + "</td>" + "<td>" + vehicle.age + "</td></tr>";   
   sHTML += "</tbody></table>";
   clientSideContent.innerHTML = sHTML;
}