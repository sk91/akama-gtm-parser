Akamai Gtm
===========

A library for easy manipulation of akamai gtm configurations.


Usage
=====


## Setup

```
npm install sk91/akamai-gtm-parser --save
```

##Include
```javascript
var Gtm = require('akamai-gtm-parser');
```

Usage
=====

```javascript
var gtm = Gtm.fromXml(xml_config);

console.log(gtm.toXml());
```

Api
=====
## Gtm

Gtm is the main library class, it agregates all object that are included in an edge - config.


###fromXml(xml)    //static to class

```javascript
var gtm = Gtm.fromXml(xml);
```


###constructor

```javascript
var gtm = new Gtm(
  "Api token",  //string (required), your application token
);

```

###addProperty(property)

Adds a "Property" object to gtm configuration

###addGeoMap(gep_map)
Adds a "GeoMap" object to gtm configuration

###addDataCenter(data_center)
Adds a "DataCenter" object to gtm configuration

###addCidrMap(cidr_map)
Adds a "CidrMap" object to gtm configuration

###getMap(type,name);
Searches a map in configuration by name and type

###toXml()

Serializes the gtm to xml .


##Gtm.Property
Gtm property object

###constructor(name,map)

Creates a propery object with a name and a map

###addAssignment(assignment)
Adds an Property.Assignment object to property

###addLivenessTest(test)
Adds a  PropertyLivenessTest object to property

###toXml()
Serializes property to xml

###fromXml(xml)   Static to class
Parses property from xml


##Gtm.Property.Assignment
A gtm property's assignment object


###contructor(data_center,status, traffic_weight, alternate_name , servers)
Creates a new assignment, gets the following parameters:

* data_center: A DataCenter Object
* status: string representing the status of the assignment
* traffic_weight
* alternate_name
* servers


##toXml()
Serialize to xml

##fromXml(xml)  Static to class
Parse from xml


##Gtm.Property.LivenessTest
This object represents the liveness test section in the property config.

###constructor(name,protocol)

###toXml()
Serialize the object to xml

###fromXml(xml)  Static to class
Creates the object from xml


##Gtm.PerformanceMap

An object represends performance map.
```javascript
PerformanceMap.TYPE = "performance";
```

##Gtm.GeoMap

An object represending a Geographycal map.

```javascript
GeoMap.TYPE = "geographic";
```

###constructor(name)

Gets only one parameter, map name.

###Attributes
* name
* zones : []
* type: GeoMap.TYPE

###addZone(zone)

Adds a GepMap.Zone object to the map

###toXml()
Serialize the map to xml

###fromXml(xml) Static to class
Deserialize the map from xml

##Gtm.GeoMap.Zone

Represents one zone in a geo-map

###constructor(data_center, countries)

* data_center: A DataCenter object
* countries: List of 2-letter country codes.


###toXml()

Serialize zone to xml

###fromXml(xml)    Static to Class

Deserialize a zone from xml.


##Gtm.FailoverMap

```javascript
FailoverMap.TYPE = "failover";

```

###Attributes
* type: ``FailoverMap.TYPE``
* name: null


##Gtm.DataCenter

A Gtm Data Center object

###constructor(name, nickname)

* name: The name of the datacenter
* nickname: The nickname of the datacenter

### Attributes
* name
* nickname
* editable = true
* score_penalty = 0
* country = "N/A"
* city = "N/A"
* state_or_province = "N/A"
* latitude = "0.0"
* longitude = "0.0"


### toXml()
Serialize to xml

### fromXml(xml)  Static to class

Deserialize from xml


##Gtm.CidrMap
An object represents the cidr map in the gtm configuration.

```javascript
CidrMap.TYPE = "cidrmapping";
```

###constructor(name, default_datacenter)
Creates a new cidr map

* name --- the name of the map
* default_datacener  --- the default data center


###Attributes

* name
* default_datacenter
* type: ``CidrMap.TYPE``
* cidrs: []



###setDefaultDatacenter(data_center)

Sets the default datacenter of the map.

###addCidr(cidr)

Adds a cidr to the map

###toXml()

Serializes the map to xml

###fromXml(xml)  Static to class
Deserializes the map from xml


##Gtm.CidrMap.Cidr

An object that represents one cidr config in the cidr map.

###constructor(data_center,blocks)
Creates a new cidr entry


###Attributes

* data_center
* blocks

###setBlocks(blocks)

Sets the blocks to the Cidr

###setDataCenter(data_center)

Sets the Data center to the cidr

###toXml()
Serializes the object to xml

### fromXml(xml)  Static to class

Deserializes the object from Xml



Development
===========

To run tests:

```
npm test
```
