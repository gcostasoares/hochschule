async function fetchLatLng(address, maps) {
    const geocodingApiKey = maps[0].getAttribute('data-geolocation-api-key');
    console.log('geocodingApiKey:', geocodingApiKey);
    const response = await fetch(
		`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${geocodingApiKey}`
	);
    // const response = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBMJ4enSButhGdMpYErkFGaycG0O6rYRUc");
    const data = await response.json();

    if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
    }
    console.error('Geocoding API error:', data);
    return null;
}

async function initMap(maps) {
	const locations = [];
	for (const location of maps) {
		const address = `${location.getAttribute('data-street')} ${location.getAttribute('data-number')}, ${location.getAttribute('data-postal-code')} ${location.getAttribute('data-city')}`;
		// let lat = parseFloat(location.getAttribute("data-lat"));
		// let lng = parseFloat(location.getAttribute("data-long"));

		let lat;
		let lng;

		if (isNaN(lat) || isNaN(lng)) {
			const latLng = await fetchLatLng(address, maps);
			if (latLng) {
				lat = latLng.lat;
				lng = latLng.lng;
			} else {
				continue; // Skip this location if geocoding fails
			}
		}

		locations.push({
			id: location.getAttribute('data-map-id'),
			lat: lat,
			lng: lng,
			location: location.getAttribute('data-location'),
			street: location.getAttribute('data-street'),
			number: location.getAttribute('data-number'),
			postalCode: location.getAttribute('data-postal-code'),
			city: location.getAttribute('data-city'),
			email: location.getAttribute('data-email'),
			phone: location.getAttribute('data-phone'),
			favicon: location.getAttribute('data-favicon'),
		});
	}

	locations.forEach((location) => {
		const getMapID = document.querySelectorAll(
			`[data-map-colors-id="${location.id}"]`
		);
		const mapStyles = generateMapStyles(getMapID[0]);

		const map = new google.maps.Map(
			document.querySelector(`[data-map-id="${location.id}"]`),
			{
				center: { lat: location.lat, lng: location.lng },
				zoom: 15,
				styles: mapStyles,
			}
		);

		const icon = {
			url: location.favicon,
			size: new google.maps.Size(40, 40),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(20, 20),
			scaledSize: new google.maps.Size(40, 40),
		};

		const marker = new google.maps.Marker({
			position: { lat: location.lat, lng: location.lng },
			map: map,
			icon: icon,
		});

		const formattedPhoneNumber = location.phone.replace(/\s+/g, '');
		const detailWindow = new google.maps.InfoWindow({
			content: `<h5 class="map-title">${location.location}</h5><br><p><span class="map-text">${location.street}&nbsp;${location.number}</span><br><span class="map-text">${location.postalCode}&nbsp;${location.city}</span><br><br><a class="link-text" href="mailto:${location.email}">${location.email}</a><br><a class="link-text" href="tel:${formattedPhoneNumber}">${location.phone}</a></p>`,
		});

		marker.addListener('click', () => {
			detailWindow.open(map, marker);
		});
		map.addListener('click', () => {
			detailWindow.close();
		});
	});
}

function loadGoogleMaps(maps) {
	const script = document.createElement('script');
	const apiKey = maps[0].getAttribute('data-api-key');

	// Ensure the Google Maps API script is loaded with the correct callback
	script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=marker`;
	script.async = true;
	script.defer = true;

	// Append the script to the document head
	document.head.appendChild(script);

	// Listen for the script to finish loading
	script.onerror = function () {
		console.error('Failed to load the Google Maps API script.');
	};
}

// Expose initMap globally for the callback
window.initMap = function () {
	const maps = document.querySelectorAll('[data-map]');
	if (maps.length > 0) {
		initMap(maps); // Call the local initMap function
	}
};

// Call initGoogleMaps when needed
export function initGoogleMaps() {
	const maps = document.querySelectorAll('[data-map]');

	if (maps.length === 0) {
		return;
	}

	// Ensure the script is loaded only once
	if (!window.google) {
		loadGoogleMaps(maps);
	} else {
		initMap(maps);
	}
}

function generateMapStyles(mapElement) {
	return [
		{
			featureType: 'landscape.natural',
			elementType: 'geometry',
			stylers: [
				{ color: mapElement.getAttribute('data-map-colors-landscape') },
			],
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [
				{ color: mapElement.getAttribute('data-map-colors-road') },
			],
		},
		{
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [
				{ color: mapElement.getAttribute('data-map-colors-water') },
			],
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry.fill',
			stylers: [
				{ color: mapElement.getAttribute('data-map-colors-poi-park') },
			],
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [
				{ color: mapElement.getAttribute('data-map-colors-poi') },
			],
		},
		{
			featureType: 'all',
			elementType: 'labels',
			stylers: [{ visibility: 'off' }],
		},
	];
}
