$(document).ready(
function() {
var totalCharacters = 280;
$("#inputPost").keyup(function (event) {
var inputText = event.target.value;
$("#charRemaining").html(totalCharacters -
inputText.length);
	});
 

getComments();
/**
* When the page loads (or is refreshed) we request all comments from
the server
*/
function getComments() {
	console.log("getComments has been called");
$.ajax({
url: '/getComments/',
type: 'GET',
success: function (data) {
var posts = "";
for (var i = 0; i < data.length; i++) {
posts +=  "<div class='row justify-content-md-center pt-4'>" +
"<div class='card col-md-6'><div class='row'>"
+ "<div class='col-md-9'>"+ data[i].comment + "</div>" + "<div class='col-md-3'>" +
"<button type='button' id='del' name='delete " + data[i]._id + "' class='btn btn-danger'>" +
"Delete</button></div></div></div></div>";

}
$("#feedPosts").html(posts);
}
});
}

/**
* Event handler for when the user deletes a comment
*/
$("#feedPosts").click(function (event)
{
var targetArray = event.target.name.split(" ");
console.log(event.target.name);
if(targetArray[0] == "delete")
{
	$.ajax({
	url: '/removeComment/' + targetArray[1],
	type: 'DELETE',
	success: function(result) {
	getComments();
}
});
}

//Call getComments every 10 secs
setInterval(getComments, 10000);

/**
* Event handler for when the user posts a comment
*/
$("#postBtn").click(function (event) {
$.ajax({
url: '/addComment/',
type: 'POST',
data: {user_name:"EndaB", comment:$('#inputPost').val()},
success: function (data) {
getComments();

});
});
});