function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

//calling function
describe_city("Karachi")

describe_city("Lahore")

describe_city("Tehran", "Iran")