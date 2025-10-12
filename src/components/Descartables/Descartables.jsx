import { useEffect, useState } from "react"
import './Descartables.css'

export const Descartables = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     const sheetUrl =   "https://sheets.googleapis.com/v4/spreadsheets/1K7vM-Yd-D83kHdjBrE07wy70gEV0cqtBjcpYegmjMPc/values/DESCARTABLES-WEB!A:E?alt=json&key=AIzaSyDIkMFGwMkJJ3U7Y1-enbTpt5VdpTEfXS8";
        fetch(sheetUrl)
            .then(response => response.json())
            .then(data => {
                data.values.shift(); // Remove header row
                //ORDENA LOS PRODUCTOS SIN STOCK AL FINAL
                const sortedData = data.values.sort((a, b) => b[4] - a[4]);
                setData(sortedData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [])

    if (loading) {
        return <div className="loading"><div className="honeycomb">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div></div>;
    }

    return (
        <div className="descartables__container">
            <div className="bannerImage-text">
                 <h1>Línea descartables</h1>
            </div>
            <div className="descartables__grid">
                {data && data.map((item, index) => (
                    <div key={index} className={`descartables__item ${item[4] == 0 ? "descartables__item--out-of-stock" : ""}`}>
                        <a href={`https://api.whatsapp.com/send?phone=541138121029&text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20por%20el%20producto%20${item[0]}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <div>
                                <img src={item[3]} alt={item[0]} className="descartables__image" />
                                <h1 className="descartables__title">{item[0]}</h1>
                                <p className="descartables__description">{item[1]}</p>
                            </div>
                            <div>
                                {
                                    item[4] != 0 ? 
                                    <div>
                                        <p className="descartables__price">${item[2]}</p>
                                        <p>Unidades: disponibles {item[4]}</p>
                                        <a className="descartables__button"
                                            href={`https://api.whatsapp.com/send?phone=541138121029&text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20por%20el%20producto%20${item[0]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >Consultar</a>
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        
    )
}
