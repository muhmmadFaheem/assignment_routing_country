import Country from "@/app/components/Country";
import Link from "next/link";



export default function CountryDetails({params} : {params : {country_list : string}}) {


    const countries : {
        name : string;
        population : number;
        capital : string;
    }[] = [
        {
            name : "Australia",
            population : 39822,
            capital : "Sydney",
        },
        {
            name : "India",
            population : 84773322,
            capital : "Delhi",
        },
        {
            name : "Pakistan",
            population : 2654322,
            capital : "Islamabad",
        },
        {
            name : "England",
            population : 83298,
            capital : "London",
        },
        {
            name : "China",
            population : 98422,
            capital : "Bijeng",
        },
    ];

    function serachCountry(name : string) : 
     {name : string , population : number, capital : string

    }  | undefined {
        return countries.find((country) => name.toLowerCase() == country.name.toLowerCase());
    }

    const result = serachCountry(params.country_list);

    return (
      <div>
        <Country countryInfo = {result} url  = {params.country_list} />

        <div>
            <li className="button_new">
                <Link className="" href="/" >Back</Link>

            </li>
        </div>

      </div>

       

    );
  }