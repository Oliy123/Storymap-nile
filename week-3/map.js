let data = [
	{
		'title': '<span>&#8470;</span>1 Grand Renaissance Dam in Ethiopia',
		'lat': 11.21638,
		'lon': 35.093026,
		'description': 'The Grand Renaissance Dam in Ethiopia is currently the biggest dam in Africa and was previously known as the Millennium Dam. It is located close to the border with Sudan on the Blue Nile. Construction started in 2011 and the dam currently generates 6,000 megawatts annually.',
		'image': "images/GERD.jpeg"
	},
	{
		'title': '<span>&#8470;</span>2 The Aswan High Dam, Egypt',
		'lat': 23.9709,
		'lon': 32.8773,
		'description': "The Aswan Dan Dam is located close to the city of the same name In southern Egypt. It holds back 169 square kilometers (62 square miles) of a lake called Lake Nasser. The turbines produce 2,100 MW and due to the high production capacity, the Aswan High Dam ranks as Africa's second largest. It took eleven years to build and was opened in 1971.",
		'image': 'https://static.dw.com/image/18410833_303.jpg'
	},
	{
		'title': '<span>&#8470;</span>3 The Cahora Bassa Dam in Mozambique',
		'lat': 15.6920,
		'lon': 31.7651,
		'description': "One of the world's biggest dams is located in Mozambique. The Cahora Bassa Dam has a capacity of 2075 megawatts and ranks after the Aswan High Dam. The major part of electricity produced is exported to South Africa. But sabotage during the civil war in 1981 prevented the generation of electricity for ten years.",
		'image' : 'https://static.dw.com/image/37871359_303.jpg'
	},
	{
		'title': '<span>&#8470;</span>4 Merow High Dam',
		'lat': 18.668889,
		'lon': 32.050278,
		'description':'Merowe High Dam, Merowe Multi-Purpose Hydro Project or Hamdab Dam, is a large dam near Merowe Town in northern Sudan, about 350 kilometres (220 mi) north of the capital Khartoum. Its dimensions make it the largest contemporary hydropower project in Africa..',
		'image': 'hhttps://dneegypt.nyc3.digitaloceanspaces.com/2021/07/wl800wp400hl500hp500_2_IMG_0727_low.jpeg.jpg'
	},
	{
		'title': '<span>&#8470;</span>5 Aswan Low Dam',
		'lat': 24.033889,
		'lon': 32.865833,
		'description': 'The Aswan Low Dam or Old Aswan Dam is a gravity masonry buttress dam on the Nile River in Aswan, Egypt. The dam was built at the former first cataract of the Nile, and is located about 1000 km up-river and 690 km (direct distance) south-southeast of Cairo. When initially constructed between 1899 and 1902, nothing of its scale had ever been attempted; on completion,',
		'image' : 'https://www.researchgate.net/profile/Nadhir-Al-Ansari-2/publication/344426649/figure/fig5/AS:941353722736648@1601447625139/Downstream-view-of-the-old-low-Aswan-Dam-13.png'
	},

]
var map = L.map('map').setView([5.258548, 15.350107], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib2xpeWFkIiwiYSI6ImNrdjdsa24wYzI5dW8ycG1zdGY3Nmdlc2kifQ.8CO7mcebHy1ivmhe25EQDg'}).addTo(map);

// create a feature group
let myMarkers = L.featureGroup();

// loop through data
data.forEach(function(item, index){
	let marker = L.marker([item.lat,item.lon])
	.bindPopup("<center><h3>" + item.title + "</h3></center>" +
		"<h4>" + "<center> <img src= ' " + item.image + "'width = 100%'/></center>" +
		 "<p>" + item.description + "</p>")

	myMarkers.addLayer(marker)

	$('.sidebar').append(`<div class = "sidebar-item" onclick = "flyToIndex(${index})">${item.title} </div>`)
});

myMarkers.addTo(map)

//define layers =
let layers = {
	"My Markers": myMarkers
}

// add layer control box
L.control.layers(null, layers).addTo(map) // nulls reserved for base maps

// auto zoom to all markers for user to see all at once.
map.fitBounds(myMarkers.getBounds())

function flyToIndex(index){
	map.flyTo([data[index].lat, data[index].lon], 10)
	myMarkers.getLayers()[index].openPopup() // for having popup open up automatically when flying
}
