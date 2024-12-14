import Link from "next/link";
import "./globals.css"

export default function Home() {
  return (
    <div >
      <h1>Countries List</h1>
      <h2>Click on Button For Details :</h2>

      <br />

      <ul className="d-flex">

        <li className="button_new"><Link className="" href="./country/pakistan">Pakistan</Link></li>
        <li className="button_new"><Link className="" href="./country/australia">Australia</Link></li>
        <li className="button_new"><Link className="" href="./country/england">England</Link></li>
        <li className="button_new"><Link className="" href="./country/china">China</Link></li>
        <li className="button_new"><Link className="" href="./country/india">India</Link></li>
        
      </ul>
    </div>
  );
}
