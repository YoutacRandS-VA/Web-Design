import { useState } from "react";
import styles from './styles.module.css'


export const LocationSearch = ({onCityFound}) => {

        // apikey = 'wUKWVAD3SWhHzPhXKIDKbq29iLOinsGQ'
        const [zipcode,setzipcode] = useState('');
        const getLocation = (zip) => {
            
            console.log(zip);
            const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=wUKWVAD3SWhHzPhXKIDKbq29iLOinsGQ&q=${zip}`
            fetch(url)
            .then(res => res.json())
            .then(res => res.find(l => l.Country.ID ==='US'))
            .then(res => onCityFound({
                name:res.LocalizedName,
                key: res.Key,
                state: res.AdministrativeArea.ID,
            }))
        }

    return(
        <div className={styles.main}>
            <input
            value={zipcode}
            onChange = {e => setzipcode(e.target.value)}

            
            />
            <button onClick={() => getLocation(zipcode)}>Search</button>

        </div>
    )
    
}