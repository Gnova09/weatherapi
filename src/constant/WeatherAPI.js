
    const llave= "3ca6614042e54a98a8a163036220508";
    const Country = "London";
    const aqi = "no";
    const method = "current.json?"

    //DONT CHANGE BELOW//
    const params = `${method}key=${llave}&q=${Country}&aqi=${aqi}`;
    const url = `http://api.weatherapi.com/v1/${params}`;

    export default url;
