function jqready() {

	$("#txtData").css('width', 400);

	//<script src="http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js" type="text/javascript" charset="utf-8">
    var edHTML = ace.edit("editor")
    edHTML.getSession().setUseWorker(false)
    edHTML.setTheme("ace/theme/monokai")
    edHTML.getSession().setMode("ace/mode/html")
	edHTML.setValue('<html>html body</html>', -1)
	
    var edJS = ace.edit("editor2")
    edJS.getSession().setUseWorker(false)
    edJS.setTheme("ace/theme/monokai")
    edJS.getSession().setMode("ace/mode/javascript")
	edJS.setValue("var editor = ace.edit('editor')", -1)
	
	function setEditorValue(editor, v) {
		editor.setValue(v, -1)
	}
	
	function hideDiv(obj, b) {
		b ? obj.hide() : obj.show()
	}	
	
	function base64Decode(s) {
		return window.atob(s)
	}
	
	hideDiv($(".divSection"), true) //hide all div with class divSection
	
	
	$("#plOffset").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divHTML"), false)	
		hideDiv($("#divResult"), false)

		$("#labelTitle").text($(this).text())
	
	var div = "CTxkaXYgY2xhc3M9ImRpdkJvb3RPZmZzZXQiPg0KCTxkaXYgY2xhc3M9InJvdy1mbHVpZCI+DQoJCTxkaXYgY2xhc3M9InNwYW40Ij4NCgkJCTxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeSI+U3BhbiA0PC9idXR0b24+ICANCgkJPC9kaXY+DQoJCQ0KCQk8ZGl2IGNsYXNzPSJzcGFuOCI+DQoJCQk8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tYmxvY2sgYnRuLWRhbmdlciI+U3BhbiA4PC9idXR0b24+ICANCgkJPC9kaXY+DQoJPC9kaXY+ICANCg0KCTxicj4NCgkNCgk8ZGl2IGNsYXNzPSJyb3ctZmx1aWQiPgkNCgkJPGRpdiBjbGFzcz0ic3BhbjQiPg0KCQkJPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5Ij5TcGFuIDQ8L2J1dHRvbj4gIA0KCQk8L2Rpdj4NCgkJPGRpdiBjbGFzcz0ic3BhbjUgb2Zmc2V0MyI+DQoJCQk8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tYmxvY2sgYnRuLXdhcm5pbmciPlNwYW4gNSBvZmZzZXQgMzwvYnV0dG9uPiAgDQoJCTwvZGl2PgkJDQoJPC9kaXY+ICANCgkNCgk8YnI+DQoJDQoJPGRpdiBjbGFzcz0icm93LWZsdWlkIj4JDQoJCTxkaXYgY2xhc3M9InNwYW40Ij4NCgkJCTxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeSI+U3BhbiA0PC9idXR0b24+ICANCgkJPC9kaXY+DQoJCTxkaXYgY2xhc3M9InNwYW4yIG9mZnNldDIiPg0KCQkJPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLWJsb2NrIGJ0bi1zdWNjZXNzIj5TcGFuIDIgb2Zmc2V0IDI8L2J1dHRvbj4gIA0KCQk8L2Rpdj4JDQoJCTxkaXYgY2xhc3M9InNwYW4zIG9mZnNldDEiPg0KCQkJPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLWJsb2NrIGJ0bi1pbmZvIj5TcGFuIDMgb2Zmc2V0MTwvYnV0dG9uPiAgDQoJCTwvZGl2PgkJDQoJPC9kaXY+ICANCgkNCgk8L2Rpdj4="
	
		var b64d = base64Decode(div)
		
		setEditorValue(edHTML, b64d)
		
		$("#divResult").html(b64d)
	})
	
	$("#plNesting").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divHTML"), false)		
		hideDiv($("#divResult"), false)

		
		$("#labelTitle").text($(this).text())
	
	var div = "CTxkaXYgY2xhc3M9InJvdy1mbHVpZCI+CgkJPGRpdiBjbGFzcz0ic3BhbjEyIj4KCQkJPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLWJsb2NrIGJ0bi1kYW5nZXIiPlNwYW4gMTI8L2J1dHRvbj4gIAoJCTxkaXYgY2xhc3M9InJvdy1mbHVpZCI+CgkJCTxkaXYgY2xhc3M9InNwYW44Ij4KCQkJCTxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1ibG9jayBidG4taW5mbyI+TGV2ZWwgMiBzcGFuIDgKCQkJCTwvYnV0dG9uPiAKCQkJCTxkaXYgY2xhc3M9InJvdy1mbHVpZCI+CgkJCQkJPGRpdiBjbGFzcz0ic3BhbjMiPgoJCQkJCQk8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tYmxvY2sgYnRuLXN1Y2Nlc3MiPkxldmVsIDMgc3BhbiAzCgkJCQkJCTwvYnV0dG9uPiAJCQoJCQkJCTwvZGl2PgoJCQkJCQoJCQkJCTxkaXYgY2xhc3M9InNwYW45Ij4KCQkJCQkJPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJidG4gYnRuLWJsb2NrIGJ0bi1kZWZhdWx0Ij5MZXZlbCAzIHNwYW4gOQoJCQkJCQk8L2J1dHRvbj4KCQkJCQk8L2Rpdj4gCQkJCQkJCgkJCQk8L2Rpdj4KCQkJPC9kaXY+CgkJCTxkaXYgY2xhc3M9InNwYW40Ij4KCQkJCTxidXR0b24gdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1ibG9jayBidG4td2FybmluZyI+TGV2ZWwgMiBzcGFuIDQKCQkJCTwvYnV0dG9uPiAKCQkJPC9kaXY+CgkJPC9kaXY+CgkJCgkJPC9kaXY+Cgk8L2Rpdj4gIA=="
	
		var b64d = base64Decode(div)
		
		setEditorValue(edHTML, b64d)
		
		$("#divResult").html(b64d)
	})
	
	$("#plDust").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divHTML"), false)	
		hideDiv($("#divJS"), false)	
		hideDiv($("#divDust"), false)
		
		$("#labelTitle").text($(this).text())
			
	var div = "CTxkaXYgaWQ9Im5hbWUtdHBsIj4KCQk8aDE+e25hbWV9IHtsYXN0bmFtZX08L2gxPgoJPC9kaXY+CgkKCTxkaXYgY2xhc3M9InJvdyI+CgkJPGRpdiBjbGFzcz0ic3BhbjQiPgoJCQk8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgY2xhc3M9ImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkiPlNwYW4gNDwvYnV0dG9uPiAgCgkJPC9kaXY+CgkJCgkJPGRpdiBjbGFzcz0ic3BhbjgiPgoJCQk8YnV0dG9uIGlkPSJidG5TcGFuOCIgdHlwZT0iYnV0dG9uIiBjbGFzcz0iYnRuIGJ0bi1ibG9jayBidG4tZGFuZ2VyIj4KCQkJPGRpdiBpZD0iYnRuLXRwbCI+CgkJCQl7YnRubmFtZX0gCgkJCTwvZGl2PgoJCQk8L2J1dHRvbj4gIAoJCTwvZGl2PgoJCQoJPGJyPjwvYnI+CgkKCTxkaXYgY2xhc3M9InNwYW40IiA+CgkJPHNlbGVjdCBpZD0iY291bnRyaWVzLXRwbCI+CgkJCXsjY291bnRyaWVzfQoJCQkJPG9wdGlvbiB2YWx1ZT0ie2lkfSI+e3ZhbHVlfTwvb3B0aW9uPgoJCQl7L2NvdW50cmllc30KCQk8L3NlbGVjdD4KCTwvZGl2PgoJCgk8ZGl2IGNsYXNzPSJzcGFuOCIgPgoJCTx1bCBpZD0iZnJpZW5kcy10cGwiPgoJCQl7I2ZyaWVuZHN9CgkJCQk8bGk+e25hbWV9LCB7YWdlfXt+bn08L2xpPgoJCQl7OmVsc2V9CgkJCQk8cD5Zb3UgaGF2ZSBubyBmcmllbmRzITwvcD4KCQkJey9mcmllbmRzfQoJCTwvdWw+CQoJPC9kaXY+CgkKCTwvZGl2Pg=="
	
		var b64d = base64Decode(div)
		
		setEditorValue(edHTML, b64d)
				
	div = "Ly9jb3VydGVzeSBvZiBOaWFsbCBLYWRlciAoaHR0cDovL3d3dy5yZW13ZWJkZXZlbG9wbWVudC5jb20vYmxvZy9qYXZhc2NyaXB0L2xlYXJuaW5nLWFib3V0LWR1c3Rqcy00Ny5odG1sKQp2YXIgZGF0YSA9IHsKCSJuYW1lIiA6ICJQYXRyaWNrIiwKCSJsYXN0bmFtZSIgOiAiQ29sbGlucyIsCgkiYnRubmFtZSIgOiAiQnV0dG9uTmFtZSBmcm9tIEpTT04iLAoJImNvdW50cmllcyIgOiBbewoJCQlpZCA6IDEsCgkJCXZhbHVlIDogIkFyZ2VudGluYSIKCQl9LCB7CgkJCWlkIDogMiwKCQkJdmFsdWUgOiAiQnJhemlsIgoJCX0sIHsKCQkJaWQgOiAzLAoJCQl2YWx1ZSA6ICJDb2xvbWJpYSIKCQl9CgldLAoJImZyaWVuZHMiIDogW3sKCQkJbmFtZSA6ICJNb2UiLAoJCQlhZ2UgOiAzNwoJCX0sIHsKCQkJbmFtZSA6ICJMYXJyeSIsCgkJCWFnZSA6IDM5CgkJfSwgewoJCQluYW1lIDogIkN1cmx5IiwKCQkJYWdlIDogMzUKCQl9CgldCn0KCi8vIFNldCB1cCBhbmQgY29tcGlsZSB0aGUgRHVzdC5qcyB0ZW1wbGF0ZQp2YXIgbiA9IGR1c3QuY29tcGlsZSgkKCIjbmFtZS10cGwiKS5odG1sKCksICJuIikKZHVzdC5sb2FkU291cmNlKG4pCgp2YXIgYyA9IGR1c3QuY29tcGlsZSgkKCIjY291bnRyaWVzLXRwbCIpLmh0bWwoKSwgImMiKQpkdXN0LmxvYWRTb3VyY2UoYykKCnZhciBiID0gZHVzdC5jb21waWxlKCQoIiNidG4tdHBsIikuaHRtbCgpLCAiYiIpCmR1c3QubG9hZFNvdXJjZShiKQoKdmFyIGYgPSBkdXN0LmNvbXBpbGUoJCgiI2ZyaWVuZHMtdHBsIikuaHRtbCgpLCAiZiIpCmR1c3QubG9hZFNvdXJjZShmKQoKdmFyIHRlbXBsYXRlID0gZnVuY3Rpb24gKHRlbXBsYXRlLCBqc29uKSB7Cgl2YXIgcmVzdWx0CglkdXN0LnJlbmRlcih0ZW1wbGF0ZSwganNvbiwgZnVuY3Rpb24gKGVyciwgcmVzKSB7CgkJcmVzdWx0ID0gcmVzCgl9KQoJcmV0dXJuIHJlc3VsdAp9CgokKCcjbmFtZS10cGwnKS5odG1sKHRlbXBsYXRlKCJuIiwgZGF0YSkpCiQoJyNjb3VudHJpZXMtdHBsJykuaHRtbCh0ZW1wbGF0ZSgiYyIsIGRhdGEpKQokKCcjYnRuLXRwbCcpLmh0bWwodGVtcGxhdGUoImIiLCBkYXRhKSkKJCgnI2ZyaWVuZHMtdHBsJykuaHRtbCh0ZW1wbGF0ZSgiZiIsIGRhdGEpKQ=="
	
		b64d = base64Decode(div)
		
		setEditorValue(edJS, b64d)
		
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
	]}

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

	})
	
	$("#plSpahQL").click(function() {
	
		$("#labelTitle").text($(this).text())
		hideDiv($(".divSection"), true)
		hideDiv($("#divJS"), false)	
		hideDiv($("#divSpahQL"), false)	

		
	var div = "CXZhciBkYiA9IFNwYWhRTC5kYihzYW1wbGVEYXRhKSAgLy9zYW1wbGVEYXRhIGlzIGF0IGRhdGEuanMKCQoJdmFyIGFycmF5U3RyID0gSlNPTi5zdHJpbmdpZnkoc2FtcGxlRGF0YSkKCQoJLy92YXIgcHJvZHVjdHMgPSBkYi5zZWxlY3QoIi8qL25hbWUiKSAvL0NsYXNzaWMgQ2FycywgTW90b3JjeWNsZXMuLi4KCQoJLy92YXIgcHJvZHVjdHMgPSBkYi5zZWxlY3QoIi8qL3Byb2R1Y3RzLyovbmFtZSIpCgkKCS8vdmFyIHByb2R1Y3RzID0gZGIuc2VsZWN0KCIvKi9wcm9kdWN0cy8wL25hbWUiKQoJCgkvL3ZhciBwcm9kdWN0cyA9IGRiLnNlbGVjdCgiLzAvcHJvZHVjdHMvKi9uYW1lIikgIC8vQ2xhc3NpYyBDYXJzCgoJCgkkKCIjdHh0RGF0YSIpLnRleHQoYXJyYXlTdHIpCgkKCSQoIiNidG5QYXRocyIpLmNsaWNrKCBmdW5jdGlvbigpIHsKCQl2YXIgcHJvZHVjdHMgPSBkYi5zZWxlY3QoICQoIiN0eHQiKS52YWwoKSApCgkJYWxlcnQocHJvZHVjdHMucGF0aHMoKSkJCgl9KQoJCgkkKCIjYnRuVmFsdWVzIikuY2xpY2soIGZ1bmN0aW9uKCkgewoJCXZhciBwcm9kdWN0cyA9IGRiLnNlbGVjdCggJCgiI3R4dCIpLnZhbCgpICkKCQlhbGVydChwcm9kdWN0cy52YWx1ZXMoKSkJCgl9KQoJCgkkKCIjYnRuTGVuZ3RoIikuY2xpY2soIGZ1bmN0aW9uKCkgewoJCXZhciBwcm9kdWN0cyA9IGRiLnNlbGVjdCggJCgiI3R4dCIpLnZhbCgpICkKCQlhbGVydChwcm9kdWN0cy5sZW5ndGgpCQoJfSk="
			
		setEditorValue(edJS, base64Decode(div))
		
	var db = SpahQL.db(sampleData)  //sampleData is at data.js
	
	var arrayStr = JSON.stringify(sampleData)
	
	//var products = db.select("/*/name") //Classic Cars, Motorcycles...
	
	//var products = db.select("/*/products/*/name")
	
	//var products = db.select("/*/products/0/name")
	
	//var products = db.select("/0/products/*/name")  //Classic Cars

	
	$("#txtData").text(arrayStr)
	
	$("#btnPaths").click( function() {
		var products = db.select( $("#txt").val() )
		alert(products.paths())	
	})
	
	$("#btnValues").click( function() {
		var products = db.select( $("#txt").val() )
		alert(products.values())	
	})
	
	$("#btnLength").click( function() {
		var products = db.select( $("#txt").val() )
		alert(products.length)	
	})
	
	})
	
	$("#plDataBinding").click(function() {
	
		$("#labelTitle").text($(this).text())
		hideDiv($(".divSection"), true)	
		hideDiv($("#divJS"), false)	
		hideDiv($("#divDataBinding"), false)
		
	var div = "ICAvL2luaXQKICAkKCIjZmxkUXR5IikudmFsKDEpCgogIGZ1bmN0aW9uIGEoKXsKCQoJLy92YXIgcHJvZHVjdHMgPSBkYi5zZWxlY3QoIi8qL25hbWUiKSAvL0NsYXNzaWMgQ2FycywgTW90b3JjeWNsZXMuLi4KCgl2YXIgcHJvZHVjdHMgPSBkYi5zZWxlY3QoIi8qL25hbWUiKQoJLy92YXIgcHJvZHVjdHMgPSBkYi5zZWxlY3QoIi8qWy9uYW1lID09ICdDbGFzc2ljIENhcnMnXS9wcm9kdWN0cy8qLyIpCgkvL2RiLnNlbGVjdCgiLypbL25hbWUgPT0gJ0NsYXNzaWMgQ2FycyddL3Byb2R1Y3RzLypbL25hbWUgPT0gJzIwMDIgQ2hldnkgQ29ydmV0dGUnXS9wcmljZSIpCgoJdmFyIGFyciA9IFtdCglhcnIgPSBwcm9kdWN0cy52YWx1ZXMoKQoJCglQb3B1bGF0ZUNvbWJvQm94KCQoIiNjbWJDYXRlZ29yeSIpLCBhcnIpCgkkKCIjY21iQ2F0ZWdvcnkiKS5jaGFuZ2UoKQoJJCgiI2NtYlZlaGljbGVzIikuY2hhbmdlKCkKICB9CgogIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84MTUxMDMvanF1ZXJ5LWJlc3QtcHJhY3RpY2UtdG8tcG9wdWxhdGUtZHJvcC1kb3duCiAgZnVuY3Rpb24gUG9wdWxhdGVDb21ib0JveChqcU9iaiwgcmVzdWx0KSB7CgkJdmFyIG9wdGlvbnMgPSBqcU9iagoJCWpxT2JqLmVtcHR5KCkKCQkkLmVhY2gocmVzdWx0LCBmdW5jdGlvbihpZHgsIHZhbHVlKSB7CgkJCW9wdGlvbnMuYXBwZW5kKCQoIjxvcHRpb24gLz4iKS52YWwoaWR4KS50ZXh0KHZhbHVlKSkKCQl9KQogIH0KCiAgJCgiI2J0bkNsaWNrIikuY2xpY2soYSkKICAKICAkKCIjY21iQ2F0ZWdvcnkiKS5jaGFuZ2UoZnVuY3Rpb24oKXsKICAgIC8vaHR0cDovL2FwaS5qcXVlcnkuY29tL2NoYW5nZS8KICAgICQoICIjY21iQ2F0ZWdvcnkgb3B0aW9uOnNlbGVjdGVkIiApLmVhY2goZnVuY3Rpb24oKSB7CgkJdmFyIHNlbGVjdG9yID0gcXJ5Q2F0ZWdvcnlTZWxlY3RvciggJCh0aGlzKS50ZXh0KCkgKSAKCQlQb3B1bGF0ZUNvbWJvQm94KCQoIiNjbWJWZWhpY2xlcyIpLCBxcnlWYWx1ZXMoc2VsZWN0b3IpKQoJCSQoIiNjbWJWZWhpY2xlcyIpLmNoYW5nZSgpCgl9KQogIH0pCiAgICAKICAkKCIjY21iVmVoaWNsZXMiKS5jaGFuZ2UoZnVuY3Rpb24oKXsKCgkkKCAiI2NtYlZlaGljbGVzIG9wdGlvbjpzZWxlY3RlZCIgKS5lYWNoKGZ1bmN0aW9uKCkgewoJCXZhciBzZWxlY3RlZFRleHQgPSAnIicgKyAkKCIjY21iQ2F0ZWdvcnkgb3B0aW9uOnNlbGVjdGVkIikudGV4dCgpICsgJyInCgkJdmFyIHRoaXNUZXh0ID0gJyInICsgJCh0aGlzKS50ZXh0KCkgKyAnIicKCQl2YXIgc2VsZWN0b3IgPSBxcnlWZWhpY2xlU2VsZWN0b3Ioc2VsZWN0ZWRUZXh0LCB0aGlzVGV4dCkKCQl2YXIgcHJpY2UgPSBxcnlWYWx1ZShzZWxlY3RvcikKCQkJCgkJJCgiI3R4dFByaWNlIikudGV4dChwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpKQoJCSQoIiNmbGRRdHkiKS5rZXl1cCgpCgl9KQogIH0pCiAgCiAgJCgiI2ZsZFF0eSIpLmtleXVwKGZ1bmN0aW9uKCl7CiAgICB2YXIgc3ViVG90YWwgPSBwYXJzZUZsb2F0KCAkKCIjdHh0UHJpY2UiKS50ZXh0KCkgKSAqIHBhcnNlRmxvYXQoICQodGhpcykudmFsKCkgKQoKICAgICQoIiN0eHRTdWJ0b3RhbCIpLnRleHQoc3ViVG90YWwudG9GaXhlZCgyKSkKICB9KQ=="
			
		setEditorValue(edJS, base64Decode(div))
		
  //init
  $("#fldQty").val(1)

  function a(){
	
	//var products = db.select("/*/name") //Classic Cars, Motorcycles...

	var products = db.select("/*/name")
	//var products = db.select("/*[/name == 'Classic Cars']/products/*/")
	//db.select("/*[/name == 'Classic Cars']/products/*[/name == '2002 Chevy Corvette']/price")

	var arr = []
	arr = products.values()
	
	PopulateComboBox($("#cmbCategory"), arr)
	$("#cmbCategory").change()
	$("#cmbVehicles").change()
  }

  //http://stackoverflow.com/questions/815103/jquery-best-practice-to-populate-drop-down
  function PopulateComboBox(jqObj, result) {
		var options = jqObj
		jqObj.empty()
		$.each(result, function(idx, value) {
			options.append($("<option />").val(idx).text(value))
		})
  }

  $("#btnClick").click(a)
  
  $("#cmbCategory").change(function(){
    //http://api.jquery.com/change/
    $( "#cmbCategory option:selected" ).each(function() {
		var selector = qryCategorySelector( $(this).text() ) 
		PopulateComboBox($("#cmbVehicles"), qryValues(selector))
		$("#cmbVehicles").change()
	})
  })
    
  $("#cmbVehicles").change(function(){

	$( "#cmbVehicles option:selected" ).each(function() {
		var selectedText = '"' + $("#cmbCategory option:selected").text() + '"'
		var thisText = '"' + $(this).text() + '"'
		var selector = qryVehicleSelector(selectedText, thisText)
		var price = qryValue(selector)
			
		$("#txtPrice").text(parseFloat(price).toFixed(2))
		$("#fldQty").keyup()
	})
  })
  
  $("#fldQty").keyup(function(){
    var subTotal = parseFloat( $("#txtPrice").text() ) * parseFloat( $(this).val() )

    $("#txtSubtotal").text(subTotal.toFixed(2))
  })
	
	})
	
	$("#hrefBaconMergeScan").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divJS"), false)		
		hideDiv($("#divBaconMergeScan"), false)	

		$("#labelTitle").text($(this).text())
	
	var div = "CQl2YXIgcGx1cyA9ICQoIiNwbHVzIikuYXNFdmVudFN0cmVhbSgiY2xpY2siKS5tYXAoMSkKCQl2YXIgbWludXMgPSAkKCIjbWludXMiKS5hc0V2ZW50U3RyZWFtKCJjbGljayIpLm1hcCgtMSkKCQl2YXIgYm90aCA9IHBsdXMubWVyZ2UobWludXMpCgkJCgkJZnVuY3Rpb24gYWRkKHgsIHkpIHsgcmV0dXJuIHggKyB5IH0KCQl2YXIgY291bnRlciA9IGJvdGguc2NhbigwLCBhZGQpCgkJY291bnRlci5vblZhbHVlKGZ1bmN0aW9uKHN1bSkgeyAkKCIjc3VtIikudGV4dChzdW0pIH0p"
		
		setEditorValue(edJS, base64Decode(div))
		
		var plus = $("#plus").asEventStream("click").map(1)
		var minus = $("#minus").asEventStream("click").map(-1)
		var both = plus.merge(minus)
		
		function add(x, y) { return x + y }
		var counter = both.scan(0, add)
		counter.onValue(function(sum) { $("#sum").text(sum) })
		
	})
	
	$("#hrefFilter").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divJS"), false)		
		hideDiv($("#divBaconFilter"), false)	

		$("#labelTitle").text($(this).text())
	
	var div = "CQlmdW5jdGlvbiBzaG93QWxlcnQodikgewoJCQlhbGVydCh2KQoJCX0KCSAgCgkJJCgiI2lucHV0MSIpLmFzRXZlbnRTdHJlYW0oImtleXVwIikubWFwKGZ1bmN0aW9uKGV2ZW50KSB7IHJldHVybiAkKGV2ZW50LnRhcmdldCkudmFsKCkgfSkKCQkJLmZpbHRlcihmdW5jdGlvbih2KXsgcmV0dXJuIHYubGVuZ3RoID4gNCB9KQoJCQkub25WYWx1ZShzaG93QWxlcnQpCgkJCQoJCSQoIiNpbnB1dDIiKS5hc0V2ZW50U3RyZWFtKCJrZXl1cCIpLm1hcChmdW5jdGlvbihldmVudCkgeyByZXR1cm4gJChldmVudC50YXJnZXQpLnZhbCgpIH0pCgkJCS5maWx0ZXIoZnVuY3Rpb24odil7IHJldHVybiB2Lmxlbmd0aCA+IDYgJiYgIShpc05hTih2KSkgfSkKCQkJLm9uVmFsdWUoc2hvd0FsZXJ0KQ=="
		
		setEditorValue(edJS, base64Decode(div))
		
		$("#input1").val("")
		$("#input2").val("")
		
		function showAlert(v) {
			alert(v)
		}
	  
		$("#input1").asEventStream("keyup").map(function(event) { return $(event.target).val() })
			.filter(function(v){ return v.length > 4 })
			.onValue(showAlert)
			
		$("#input2").asEventStream("keyup").map(function(event) { return $(event.target).val() })
			.filter(function(v){ return v.length > 6 && !(isNaN(v)) })
			.onValue(showAlert)
		
	})
	
	$("#hrefBus").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divJS"), false)		
		hideDiv($("#divBaconBus"), false)	

		$("#labelTitle").text($(this).text())
	
	var div = "CQl2YXIgYnVzID0gbmV3IEJhY29uLkJ1cygpCgkgIAoJCWZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkgewoJCQlyZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluCgkJfQoJCQoJCSQoIiNidG5TdGFydCIpLmNsaWNrKGZ1bmN0aW9uKCkgewoJCQkvL3B1Ymxpc2gKCQkJZm9yICh2YXIgaT0wOyBpPDEwOyBpKyspIHsKCQkJCXggPSBnZXRSYW5kb21BcmJpdHJhcnkoMSwgOTk5OTkpCgkJCQoJCQkJYnVzLnB1c2goeCkKCQkJfSAJCQoJCX0pCgkJCgkJLy9zdWJzY3JpYmUKCQlidXMub25WYWx1ZShmdW5jdGlvbih2KSB7ICQoIiN0eHRBcmVhIikuYXBwZW5kKHYgKyAnXHJcbicpIH0p"
		
		setEditorValue(edJS, base64Decode(div))
		
		$("#txtArea").empty()
		
		var bus = new Bacon.Bus()
	  
		function getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min
		}
		
		$("#btnStart").click(function() {
			//publish
			for (var i=0; i<10; i++) {
				x = getRandomArbitrary(1, 99999)
			
				bus.push(x)
			} 		
		})
		
		//subscribe
		bus.onValue(function(v) { $("#txtArea").append(v + '\r\n') })
		
	}) //#hrefBus
	
	$("#hrefProperty").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divJS"), false)		
		hideDiv($("#divBaconProperty"), false)	

		$("#labelTitle").text($(this).text())
	
	var div = "CQl2YXIgcmVnaXN0ZXJCdXR0b24gPSAkKCIjYnRuIikKCSAgCgkJZnVuY3Rpb24gc2V0RW5hYmxlZChlbGVtZW50LCBlbmFibGVkKSB7CgkJCWVsZW1lbnQuYXR0cigiZGlzYWJsZWQiLCAhZW5hYmxlZCkKCQl9CgkJCgkJc2V0RW5hYmxlZChyZWdpc3RlckJ1dHRvbiwgZmFsc2UpCgkJCgkgICAgZnVuY3Rpb24gc2hvd0FsZXJ0KHYpIHsKCQkgIHJldHVybiBhbGVydCh2KQoJCX0KCQkgIAoJCWZ1bmN0aW9uIG5vbkVtcHR5KHgpIHsgcmV0dXJuIHgubGVuZ3RoID4gMCB9CgkJCSAgCgkgICAgZnVuY3Rpb24gZWxLZXl1cChlbGVtKSB7CgkJICByZXR1cm4gZWxlbS5hc0V2ZW50U3RyZWFtKCJrZXl1cCIpLmZsYXRNYXBMYXRlc3QoZnVuY3Rpb24oZXZlbnQpIHsgcmV0dXJuICQoZXZlbnQudGFyZ2V0KS52YWwoKSB9ICkKCQl9CgoJCXZhciB1c2VybmFtZUVudGVyZWQgPSBlbEtleXVwKCQoIiNicElucHV0MSIpKSAvLy5vblZhbHVlKHNob3dBbGVydCkKCQkJLm1hcChub25FbXB0eSkKCQkJLnRvUHJvcGVydHkoKQoJCQkKCQl2YXIgZnVsbG5hbWVFbnRlcmVkID0gZWxLZXl1cCgkKCIjYnBJbnB1dDIiKSkgCgkJCS5tYXAobm9uRW1wdHkpCgkJCS50b1Byb3BlcnR5KCkgLy8ub25WYWx1ZShzaG93QWxlcnQpCgoJCXZhciBidXR0b25FbmFibGVkID0gdXNlcm5hbWVFbnRlcmVkLmFuZChmdWxsbmFtZUVudGVyZWQpCgkJCQoJCWJ1dHRvbkVuYWJsZWQub25WYWx1ZShzZXRFbmFibGVkLCByZWdpc3RlckJ1dHRvbik="
		
		setEditorValue(edJS, base64Decode(div))
		
		var registerButton = $("#btn")
	  
		function setEnabled(element, enabled) {
			element.attr("disabled", !enabled)
		}
		
		setEnabled(registerButton, false)
		
	    function showAlert(v) {
		  return alert(v)
		}
		  
		function nonEmpty(x) { return x.length > 0 }
			  
	    function elKeyup(elem) {
		  return elem.asEventStream("keyup").flatMapLatest(function(event) { return $(event.target).val() } )
		}

		var usernameEntered = elKeyup($("#bpInput1")) //.onValue(showAlert)
			.map(nonEmpty)
			.toProperty()
			
		var fullnameEntered = elKeyup($("#bpInput2")) 
			.map(nonEmpty)
			.toProperty() //.onValue(showAlert)

		var buttonEnabled = usernameEntered.and(fullnameEntered)
			
		buttonEnabled.onValue(setEnabled, registerButton)
		
	}) //#hrefProperty
	
	$("#hrefFilterProperty").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divJS"), false)		
		hideDiv($("#divBaconFilterProperty"), false)	

		$("#labelTitle").text($(this).text())
	
	var div = "CQl2YXIgcmVnaXN0ZXJCdXR0b24gPSAkKCIjYnRuUmVnaXN0ZXIiKQoJCXZhciB1bmF2YWlsYWJpbGl0eUxhYmVsID0gJCgiI3VzZXJuYW1lLXVuYXZhaWxhYmxlIikKCQkKICAgICAgICBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5KGVsZW1lbnQsIHZpc2libGUpIHsKICAgICAgICAgIGVsZW1lbnQudG9nZ2xlKHZpc2libGUpCiAgICAgICAgfQoJCSAgCgkJZnVuY3Rpb24gc2V0RW5hYmxlZChlbGVtZW50LCBlbmFibGVkKSB7CgkJCWVsZW1lbnQuYXR0cigiZGlzYWJsZWQiLCAhZW5hYmxlZCkKCQl9CgkJCgkJLy9pbml0CgkJc2V0RW5hYmxlZChyZWdpc3RlckJ1dHRvbiwgZmFsc2UpCgkJc2V0VmlzaWJpbGl0eSh1bmF2YWlsYWJpbGl0eUxhYmVsLCBmYWxzZSkKCSAgIAoJICAgIGZ1bmN0aW9uIHNob3dBbGVydCh2KSB7CgkJICByZXR1cm4gYWxlcnQodikKCQl9CgkJICAKCQlmdW5jdGlvbiBub25FbXB0eSh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDAgfQoJCQkgIAoJICAgIGZ1bmN0aW9uIGVsS2V5dXAoZWxlbSkgewoJCSAgcmV0dXJuIGVsZW0uYXNFdmVudFN0cmVhbSgia2V5dXAiKS5mbGF0TWFwTGF0ZXN0KGZ1bmN0aW9uKGV2ZW50KSB7IHJldHVybiAkKGV2ZW50LnRhcmdldCkudmFsKCkgfSApCgkJfQoKCQl2YXIgdXNlcm5hbWVFbnRlcmVkID0gZWxLZXl1cCgkKCIjdXNlcm5hbWUiKSkgCgkJCS5tYXAobm9uRW1wdHkpCgkJCS50b1Byb3BlcnR5KCkKCQkJCgkJdmFyIGZ1bGxuYW1lRW50ZXJlZCA9IGVsS2V5dXAoJCgiI2Z1bGxuYW1lIikpIAoJCQkubWFwKG5vbkVtcHR5KQoJCQkudG9Qcm9wZXJ0eSgpCgkJCQoJCWZ1bmN0aW9uIGRvU2VhcmNoKHVzZXIpCgkJewoJCQkvL2FqYXggY2FsbCByZXR1cm5zIGJvb2xlYW4gaWYgdXNlcm5hbWUgaXMgYXZhaWxhYmxlIChjaGFyYWN0ZXIgbGVuZ3RoIGlzIGV2ZW4sIG5vdCBvZGQpCgkJCXJldHVybiBCYWNvbi5mcm9tUHJvbWlzZSgkLmFqYXgoe3VybDogIi91c2VybmFtZWF2YWlsYWJsZS8iICsgdXNlciB9KSkKCQl9CgoJCXZhciB1c2VybmFtZWF2YWlsYWJsZSA9ICQoIiN1c2VybmFtZSIpLmFzRXZlbnRTdHJlYW0oImtleXVwIikKCQkJLm1hcChmdW5jdGlvbigpeyByZXR1cm4gJCgiI3VzZXJuYW1lIikudmFsKCl9ICkKCQkJLmZsYXRNYXBMYXRlc3QoZG9TZWFyY2gpCgkJCS50b1Byb3BlcnR5KCkgIC8vZWl0aGVyIHRvUHJvcGVydHkgb3Igb25WYWx1ZSBpcyB0aGUgbGFzdCwgZG9lcyBub3Qgd29yayB3aGVuIGJvdGggYXJlIHByZXNlbnQgCQkKCQkJCgkJdmFyIHVuYW1lYXZhaWxhYmxlID0gdXNlcm5hbWVhdmFpbGFibGUKCQkKCQkvL2ZvciBzb21lIHJlYXNvbiwgdXNlcm5hbWVhdmFpbGFibGUubm90KCkub25WYWx1ZShzZXRWaXNpYmlsaXR5LCB1bmF2YWlsYWJpbGl0eUxhYmVsKSBkb2VzIG5vdCB3b3JrCgkJdW5hbWVhdmFpbGFibGUub25WYWx1ZShmdW5jdGlvbihiKXsgc2V0VmlzaWJpbGl0eSh1bmF2YWlsYWJpbGl0eUxhYmVsLCAhYikgfSkgCgoJCXZhciBidXR0b25FbmFibGVkID0gdXNlcm5hbWVFbnRlcmVkLmFuZChmdWxsbmFtZUVudGVyZWQpLmFuZCh1c2VybmFtZWF2YWlsYWJsZSkKCQkKCQkvL3NpZGUtZWZmZWN0cwoJCWJ1dHRvbkVuYWJsZWQub25WYWx1ZShzZXRFbmFibGVkLCByZWdpc3RlckJ1dHRvbikKCQkKCQkvL2h0dHA6Ly9zZWFuLnZvaXNlbi5vcmcvYmxvZy8yMDEzLzA5L2ludHJvLXRvLWZ1bmN0aW9uYWwtcmVhY3RpdmUtcHJvZ3JhbW1pbmcvCgkJdmFyIGJ1dHRvblN0cmVhbSA9ICQoIiNidG5SZWdpc3RlciIpLmFzRXZlbnRTdHJlYW0oImNsaWNrIikJCQoJCQoJCS8vb24gRW50ZXIga2V5CQkKCQl2YXIgdXNlcm5hbWVFbnRlclN0cmVhbSA9ICQoIiN1c2VybmFtZSIpLmFzRXZlbnRTdHJlYW0oImtleXVwIikKCQkJLmZpbHRlcihmdW5jdGlvbihlKSB7IHJldHVybiBlLmtleUNvZGUgPT0gMTMgfSkKCQkJCgkJdmFyIGZ1bGxuYW1lRW50ZXJTdHJlYW0gPSAkKCIjZnVsbG5hbWUiKS5hc0V2ZW50U3RyZWFtKCJrZXl1cCIpCgkJCS5maWx0ZXIoZnVuY3Rpb24oZSkgeyByZXR1cm4gZS5rZXlDb2RlID09IDEzIH0pCgkJCQoJCXZhciByZWdpc3RlclN0cmVhbSA9IEJhY29uLm1lcmdlQWxsKGJ1dHRvblN0cmVhbSwgdXNlcm5hbWVFbnRlclN0cmVhbSwgZnVsbG5hbWVFbnRlclN0cmVhbSkKCQkJLm1hcChmdW5jdGlvbigpe3JldHVybiAkKCIjdXNlcm5hbWUiKS52YWwoKX0pCgkJCS8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTE0MzcxNS9iYWNvbi1qcy1ob3ctdG8tZmlsdGVyLWFuLWV2ZW50LXN0cmVhbS1iYXNlZC1vbi1hbm90aGVyLXByb3BlcnR5CgkJCS5maWx0ZXIoYnV0dG9uRW5hYmxlZCkgIAoJCQkub25WYWx1ZShzaG93QWxlcnQpCQ=="
		
		setEditorValue(edJS, base64Decode(div))
		
		var registerButton = $("#btnRegister")
		var unavailabilityLabel = $("#username-unavailable")
		
        function setVisibility(element, visible) {
          element.toggle(visible)
        }
		  
		function setEnabled(element, enabled) {
			element.attr("disabled", !enabled)
		}
		
		//init
		setEnabled(registerButton, false)
		setVisibility(unavailabilityLabel, false)
	   
	    function showAlert(v) {
		  return alert(v)
		}
		  
		function nonEmpty(x) { return x.length > 0 }
			  
	    function elKeyup(elem) {
		  return elem.asEventStream("keyup").flatMapLatest(function(event) { return $(event.target).val() } )
		}

		var usernameEntered = elKeyup($("#username")) 
			.map(nonEmpty)
			.toProperty()
			
		var fullnameEntered = elKeyup($("#fullname")) 
			.map(nonEmpty)
			.toProperty()
			
		function doSearch(user)
		{
			//ajax call returns boolean if username is available (character length is even, not odd)
			return Bacon.fromPromise($.ajax({url: "/usernameavailable/" + user }))
		}

		var usernameavailable = $("#username").asEventStream("keyup")
			.map(function(){ return $("#username").val()} )
			.flatMapLatest(doSearch)
			.toProperty()  //either toProperty or onValue is the last, does not work when both are present 		
			
		var unameavailable = usernameavailable
		
		//for some reason, usernameavailable.not().onValue(setVisibility, unavailabilityLabel) does not work
		unameavailable.onValue(function(b){ setVisibility(unavailabilityLabel, !b) }) 

		var buttonEnabled = usernameEntered.and(fullnameEntered).and(usernameavailable)
		
		//side-effects
		buttonEnabled.onValue(setEnabled, registerButton)
		
		//http://sean.voisen.org/blog/2013/09/intro-to-functional-reactive-programming/
		var buttonStream = $("#btnRegister").asEventStream("click")		
		
		//on Enter key		
		var usernameEnterStream = $("#username").asEventStream("keyup")
			.filter(function(e) { return e.keyCode == 13 })
			
		var fullnameEnterStream = $("#fullname").asEventStream("keyup")
			.filter(function(e) { return e.keyCode == 13 })
			
		var registerStream = Bacon.mergeAll(buttonStream, usernameEnterStream, fullnameEnterStream)
			.map(function(){return $("#username").val()})
			//http://stackoverflow.com/questions/19143715/bacon-js-how-to-filter-an-event-stream-based-on-another-property
			.filter(buttonEnabled)  
			.onValue(showAlert)	
		
	}) //#hrefFilterProperty
	
	$("#hrefCombine").click(function() {
		hideDiv($(".divSection"), true)
		hideDiv($("#divJS"), false)		
		hideDiv($("#divBaconCombine"), false)	

		$("#labelTitle").text($(this).text())
	
	var div = "CWZ1bmN0aW9uIGVsS2V5dXAoZWxlbSkgewoJCXJldHVybiBlbGVtLmFzRXZlbnRTdHJlYW0oImtleXVwIikKCQkJLmZsYXRNYXBMYXRlc3QoCgkJCQlmdW5jdGlvbiAoZXZlbnQpIHsgCgkJCQkJcmV0dXJuIHBhcnNlSW50KCQoZXZlbnQudGFyZ2V0KS52YWwoKSkKCQkJCX0pCgkJCS5maWx0ZXIoZnVuY3Rpb24odil7IHJldHVybiAhaXNOYU4odikgfSkKCgl9CgkKCXZhciBhU3RyZWFtID0gZWxLZXl1cCgkKCIjaW5wdXRBIikpCgkKCXZhciBiU3RyZWFtID0gZWxLZXl1cCgkKCIjaW5wdXRCIikpCgkJCglmdW5jdGlvbiBwbHVzKHgsIHkpIHsgcmV0dXJuIHggKyB5IH0KCQoJZnVuY3Rpb24gbWludXMoeCwgeSkgeyByZXR1cm4geCAtIHkgfQoJCglmdW5jdGlvbiB0aW1lcyh4LCB5KSB7IHJldHVybiB4ICogeSB9CgkKCXZhciBhZGQgPSBhU3RyZWFtLmNvbWJpbmUoYlN0cmVhbSwgcGx1cykgIC8vY29udHJhc3Qgd2l0aCBzY2FuCglhZGQub25WYWx1ZShmdW5jdGlvbih2KSB7IAoJCSQoIiN0b3RhbCIpLnZhbCh2KSAKCQkgCgl9KQoJCgl2YXIgc3VidHJhY3QgPSBhU3RyZWFtLmNvbWJpbmUoYlN0cmVhbSwgbWludXMpCglzdWJ0cmFjdC5vblZhbHVlKGZ1bmN0aW9uKHYpIHsgJCgiI3N1YnRyYWN0IikudmFsKHYpIH0pCgkKCXZhciBjID0gYWRkLmNvbWJpbmUoc3VidHJhY3QsIHRpbWVzKQoJYy5vblZhbHVlKGZ1bmN0aW9uKHYpIHsgJCgiI3RpbWVzIikudmFsKHYpIH0p"
		
	setEditorValue(edJS, base64Decode(div))
		
	function elKeyup(elem) {
		return elem.asEventStream("keyup")
			.flatMapLatest(
				function (event) { 
					return parseInt($(event.target).val())
				})
			.filter(function(v){ return !isNaN(v) })

	}
	
	var aStream = elKeyup($("#inputA"))
	
	var bStream = elKeyup($("#inputB"))
		
	function plus(x, y) { return x + y }
	
	function minus(x, y) { return x - y }
	
	function times(x, y) { return x * y }
	
	var add = aStream.combine(bStream, plus)  //contrast with scan
	add.onValue(function(v) { 
		$("#total").val(v) 
		 
	})
	
	var subtract = aStream.combine(bStream, minus)
	subtract.onValue(function(v) { $("#subtract").val(v) })
	
	var c = add.combine(subtract, times)
	c.onValue(function(v) { $("#times").val(v) })
		
	}) //#hrefCombine
	
} //end of function jqready