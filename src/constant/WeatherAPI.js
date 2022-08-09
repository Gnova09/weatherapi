
    const llave= "ca8261c2e28c4a08958175545220808";
    const Country = "London";
    const aqi = "no";
    const method = "current.json?"

    //DONT CHANGE BELOW//
    const params = `${method}key=${llave}&q=${Country}&aqi=${aqi}`;
    const url = `https://api.weatherapi.com/v1/${params}`;

    export default url;
