//courtesy of Niall Kader (http://www.remwebdevelopment.com/blog/javascript/learning-about-dustjs-47.html)
var data = {
	"name" : "Patrick",
	"lastname" : "Collins",
	"btnname" : "ButtonName from JSON",
	"countries" : [{
			id : 1,
			value : "Argentina"
		}, {
			id : 2,
			value : "Brazil"
		}, {
			id : 3,
			value : "Colombia"
		}
	],
	"friends" : [{
			name : "Moe",
			age : 37
		}, {
			name : "Larry",
			age : 39
		}, {
			name : "Curly",
			age : 35
		}
	]
}

// Set up and compile the Dust.js template
var n = dust.compile($("#name-tpl").html(), "n")
dust.loadSource(n)

var c = dust.compile($("#countries-tpl").html(), "c")
dust.loadSource(c)

var b = dust.compile($("#btn-tpl").html(), "b")
dust.loadSource(b)

var f = dust.compile($("#friends-tpl").html(), "f")
dust.loadSource(f)

var template = function (template, json) {
	var result
	dust.render(template, json, function (err, res) {
		result = res
	})
	return result
}

$('#name-tpl').html(template("n", data))
$('#countries-tpl').html(template("c", data))
$('#btn-tpl').html(template("b", data))
$('#friends-tpl').html(template("f", data))
