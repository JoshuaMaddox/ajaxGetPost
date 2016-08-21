$(function(){
	var $container = $('.container');
	$.get("http://api.github.com/users/JoshuaMaddox", function(gitHubUser){
		$.ajax({
			type: 'POST',
			url: "http://httpbin.org/post",
			data: gitHubUser,
			success: function(data){
				$container.append("<div><img src='" + data.form.avatar_url + "' width='150px'>" + "<h1>" + data.form.login + "</h1>" + "<h4>" + data.form.name + "</h4></div>");
			}
		});//AJAX POST REQUEST
	});//GET REQUEST
});