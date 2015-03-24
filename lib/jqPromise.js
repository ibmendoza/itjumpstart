function jqPromise() {

	var when = require('when');

	function show(x) {
		console.log(x)
	}
	function nonEmpty(x) {
		return x.length > 0
	}
	function setVisibility(element, visible) {
		element.toggle(visible)
	}
	function setEnabled(element, enabled) {
		element.attr("disabled", !enabled)
	}

	var registerButton = $("#register button");
	var unavailabilityLabel = $("#username-unavailable");
	var usernameAjaxIndicator = $("#username .ajax");
	var registerAjaxIndicator = $("#register .ajax");

	//initialize
	setVisibility(usernameAjaxIndicator, false);
	setVisibility(registerAjaxIndicator, false);
	setEnabled(registerButton, false);

	//a deferred's resolve/reject and notify are mutually exclusive

	var fullname = when('');
	var username = when('');
	var usernameEntered = when(false);
	var fullnameEntered = when(false);
	var buttonEnabled = when(false);
	var availabilityRequest = when.defer();
	var jqAvailabilityRequest; //= $.Deferred();
	var availabilityPending = when.defer();
	var usernameAvailable = when(false);

	//no availabilityResponse (less variables, the better)

	function setButtonEnabled() {
		buttonEnabled = when.join(usernameEntered, usernameAvailable, fullnameEntered);

		buttonEnabled.then(function (arrayBool) {
			//alert(arrayBool);

			len = arrayBool.length;
			var result = true;
			for (var i = 0; i < len; i++) {
				result = result && arrayBool[i];
			}
			setEnabled(registerButton, result);

		});
	}

	//promises enable you to get out of the callback shell
	$("#username input").on('keyup', function () {

		var user = $(this).val(); //string
		
		username = when(user);
		
		if (nonEmpty(user)) {
			
			usernameEntered = when(true);

			//simulate availabilityPending
			setVisibility(usernameAjaxIndicator, true);

			//jQuery AJAX calls implement a promise interface
			jqAvailabilityRequest = $.get("/usernameavailable/" + user);
			
			usernameAvailable = when(jqAvailabilityRequest);
			
			usernameAvailable.then(function (bool) {

				setVisibility(usernameAjaxIndicator, false);

				//when usernameavailable is false, show unavailabilityLabel
				setVisibility(unavailabilityLabel, !bool);
			});
			
			

		} else {
			usernameEntered = when(false);
		}
		setButtonEnabled();
	});

	$("#fullname input").on('keyup', function () {
		strFullname = $(this).val(); //string
		fullname = when(strFullname);

		if (nonEmpty(strFullname)) {
			fullnameEntered = when(true);
		} else {
			fullnameEntered = when(false);
		}

		setButtonEnabled();
	});

	registerButton.on('click', function (event) {
		$(this).prop('disabled', true);

		event.preventDefault();

		setVisibility(registerAjaxIndicator, true);

		var input = when.join(username, fullname);

		
		input.then(function (values) {
			$.ajax({
				type : "post",
				url : "/register",
				contentType : "application/json",
				data : JSON.stringify({
					username : values[0],
					fullname : values[1]
				}),
				success : function (data) {
					alert("Username: " + values[0] + " Fullname: " + values[1]);
					
					$("#username input").val('');
					$("#fullname input").val('');

					setVisibility(registerAjaxIndicator, false);
					
					window.open('demo3.html', "_self");  //refresh
				}
			});
		});
		

	});
}
