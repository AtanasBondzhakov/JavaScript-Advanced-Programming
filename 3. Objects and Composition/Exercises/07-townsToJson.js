function townsToJson(data) {
    const result = [];
    const headings = data.shift();

    data.forEach(el => {
        let [waste, town, latitude, longitude] = el.split('|');
        town = town.trim();
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push({ Town: town, Latitude: Number(latitude), Longitude: Number(longitude) });
    })
    return JSON.stringify(result);
}