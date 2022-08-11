
    const llave= "ca8261c2e28c4a08958175545220808";
    const Country = "07112";
    const days = "4";
    const method = "forecast.json?";//forecast, current, etc...

    //DONT CHANGE BELOW//
    const params = `${method}key=${llave}&q=${Country}&days=${days}`;
    const url = `https://api.weatherapi.com/v1/${params}`;

    export default url;
