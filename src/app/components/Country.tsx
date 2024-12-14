interface CountryDetails{
    name : string;
    population : number;
    capital : string;
}

interface CountryDetailsProps{

    countryInfo ? : CountryDetails;

    url : string;
}





export default function CountryData (data : CountryDetailsProps) {
  return (
    <div>
        {data.countryInfo ? (
            <div>
                <h1>Country Name : {data.countryInfo.name}</h1>
                <h1>Country Capital : {data.countryInfo.capital}</h1>
                <h1>Country Population : {data.countryInfo.population}</h1>

            </div>
        ) : (
            <div>
                <h1>{data.url} Not Found</h1>
            </div>

        )
        }

        
    </div>
    );
}
