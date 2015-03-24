var db = SpahQL.db(sampleData)
function qryVehicleSelector(selText, thisText) {
	return "/*[/name == " + selText + "]/products/*[/name == " + thisText + "]/price"
}
function qryCategorySelector(v) {
	return '/*[/name == "' + v + '"]/products/*/name'
}

function qryPriceSelector(v) {
	return '/*[/name == "' + v + '"]/products/*/price'
}

function qryValues(selector) {
	var p = db.select(selector)
		var arr = []
		arr = p.values()
		return arr
}
function qryValue(selector) {
	var p = db.select(selector)
		var arr = []
		arr = p.value()
		return arr
}
