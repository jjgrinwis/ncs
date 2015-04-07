// first action test
// no checks whatsoever, NO PRODUCTION!!

var RESTRequest = REST.createRequest()
var response = RESTRequest.execute();
var contentAsString = response.contentAsString;

// result from REST call should be something like this
// <collection xmlns:y="http://tail-f.com/ns/rest">
// <device-group>
//      <name>juniper</name>
//      </device-group>
// <device-group>
//      <name>nexus</name>
//      </device-group>
////</collection>
//
// So some XML output.
// now convert this string as an object from class XMLDocument
var XMLDoc = XMLManager.fromString(contentAsString)

// create an empty array for our found names
var deviceGroupList = [];

// now lookup all XML elements with tag <name>
deviceGroup = XMLDoc.getElementsByTagName('name');

// loop through the XMLNodelist, each item is a XMLElement
// the content can be found using attribute textConent
for (var i = 0; i < deviceGroup.length; i++) {
     XMLElement = deviceGroup.item(i);
     deviceGroupList.push(XMLElement.textContent);
}

// we should have an array with deviceGroupList as outputvalue
System.log(deviceGroupList);
return deviceGroupList;
