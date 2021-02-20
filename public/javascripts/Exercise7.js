function displayVehicles() {
   var sHTML = "<table class='table table-striped'><thead><tr><th scope='col'>#</th><th scope='col'>Make</th><th scope='col'>Model</th><th scope='col'>Age</th></tr></thead><tbody><tr><th scope='row'>1</th>";
	   var vehicles = [{make:"Ford", model:"Mondeo", year:2016, mileage: 102,000km}, {make:"Nissan", model:"350Z", year:2012, mileage: 200,000km}];
	   var vehicles.push ({make:"Ford", model:"Mondeo", year:2016, mileage: 102,000km}, {make:"Nissan", model:"350Z", year:2012, mileage: 200,000km});
		for (var i=0; i<vehicles.length; i++)
	   sHTML += "<td>" + vehicle.make + "</td>" + "<td>" + vehicle.model + "</td>" + "<td>" + vehicle.age + "</td></tr>";   
   sHTML += "</tbody></table>";
   clientSideContent.innerHTML = sHTML;
}