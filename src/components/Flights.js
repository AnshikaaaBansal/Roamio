import React from "react";
import { useState } from "react";
import "./styles.css";

function Flights() {
    var fhrs1 = Math.ceil(Math.random() * 12);
    var fmins1 = Math.ceil(Math.random() * 60);
    var fhrs2 = Math.ceil(Math.random() * 12);
    var fmins2 = Math.ceil(Math.random() * 60);
    var fhrs3 = Math.ceil(Math.random() * 12);
    var fmins3 = Math.ceil(Math.random() * 60);

    var thrs1 = Math.ceil(Math.random() * 12);
    var tmins1 = Math.ceil(Math.random() * 60);
    var thrs2 = Math.ceil(Math.random() * 12);
    var tmins2 = Math.ceil(Math.random() * 60);
    var thrs3 = Math.ceil(Math.random() * 12);
    var tmins3 = Math.ceil(Math.random() * 60);

    var diffhrs1 = Math.abs(fhrs1 - thrs1);
    var diffmins1 = Math.abs(fmins1 - tmins1);
    var diffhrs2 = Math.abs(fhrs2 - thrs2);
    var diffmins2 = Math.abs(fmins2 - tmins2);
    var diffhrs3 = Math.abs(fhrs3 - thrs3);
    var diffmins3 = Math.abs(fmins3 - tmins3);

    var price = (diffhrs1 + 1) * 1210;

    var farr = [
        "Indigo",
        "Air France",
        "Ethiad",
        "Qatar Airways",
        "Singapore Airlines",
    ];
    var fimgarr = [
        require("../images/indigo.png"),
        require("../images/air_france.png"),
        require("../images/ethiad.jpeg"),
        require("../images/qatar.png"),
        require("../images/singapore_airways.jpeg"),
    ];

    var fran1 = Math.floor(Math.random() * 5);
    var fran2 = Math.floor(Math.random() * 5);
    var fran3 = Math.floor(Math.random() * 5);

    const [result, setStyle] = useState("result1");
    const [hrs, sethrs] = useState(false);
    const [btn, setbtn] = useState(false);
    const handleClick = () => {
        sethrs(!hrs);
        setbtn(!btn);
        if (result !== "result1") setStyle("result1");
        else setStyle("result2");
    };
    const [value, setValue] = useState("");
    const options = [
        { label: "Somewhere", value: "Somewhere" },
        { label: "India", value: "India" },
    ];
    function handleSelect(event) {
        setValue(event.target.value);
    }

    const [valueto, setValueto] = useState("");
    const optionsto = [
        { label: "Anywhere", value: "Somewhere" },
        { label: "Havelock Island", value: "Havelock Island" },
        { label: "Paris", value: "Paris" },
        { label: "Queenstown", value: "Queenstown" },
        { label: "Rio de Janeiro", value: "Rio de Janeiro" },
        { label: "Helsinki", value: "Helsinki" },
        { label: "Tokyo", value: "Tokyo" },
        { label: "New York", value: "New York" },
        { label: "Interlaken", value: "Interlaken" },
        { label: "Istanbul", value: "Istanbul" },
        { label: "Cape Town", value: "Cape Town" },
        { label: "Doha", value: "Doha" },
        { label: "Krabi", value: "Krabi" },
    ];

    function handleSelectto(event) {
        setValueto(event.target.value);
    }
    return (
        <div>
            <section className="where">
                <div className="bookbox">
                    <div className="fromto">
                        <div className="from">
                            <label for="from">FROM</label>
                            <select onChange={handleSelect} className="form-select" id="from">
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="to">
                            <label for="to">TO</label>
                            <select onChange={handleSelectto} id="to">
                                {optionsto.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="details">
                        <div className="fdate">
                            <label for="fdate">DEPARTURE</label>
                            <input type="date" id="fdate" name="fdate" />
                        </div>
                        <div className="tdate">
                            <label for="tdate">ARRIVAL</label>
                            <input type="date" id="tdate" name="tdate" />
                        </div>
                        <div className="persons">
                            <label for="persons">TRAVELLERS</label>
                            <input
                                type="number"
                                id="persons"
                                name="persons"
                                placeholder="1"
                            />
                        </div>
                    </div>
                    <div className="search">
                        <button onClick={handleClick}>Search</button>
                    </div>
                </div>
            </section>
            <section className={result}>
                <div className="results1">
                    <img src={hrs ? fimgarr[fran1] : require("../images/indigo.png")} alt="Icon" />
                    <div className="flightnn">
                        <h4>{hrs ? farr[fran1] : "IndiGo"}</h4>
                        <p>{hrs ? Math.floor(price / 7) : "0000"}</p>
                    </div>
                    <div className="fromt">
                        <h4>{hrs ? fhrs1 + ":" + fmins1 : "00:00"}</h4>
                        <p>{value}</p>
                    </div>
                    <div className="jtime">
                        <h5>{hrs ? diffhrs1 + " hr " + diffmins1 + " m" : "00:00"}</h5>
                        <p>Non Stop</p>
                    </div>
                    <div className="tot">
                        <h4>{hrs ? thrs1 + ":" + tmins1 : "00:00"}</h4>
                        <p>{valueto}</p>
                    </div>
                    <div className="price">
                        <h4>{hrs ? price + " USD" : "0 USD"}</h4>
                    </div>
                </div>
                <div className="results2">
                    <img src={hrs ? fimgarr[fran2] : require("../images/indigo.png")} alt="Icon" />
                    <div className="flightnn">
                        <h4>{hrs ? farr[fran2] : "IndiGo"}</h4>
                        <p>{hrs ? Math.floor(price / 7) : "0000"}</p>
                    </div>
                    <div className="fromt">
                        <h4>{hrs ? fhrs2 + ":" + fmins2 : "00:00"}</h4>
                        <p>{value}</p>
                    </div>
                    <div className="jtime">
                        <h5>{hrs ? diffhrs2 + " hr " + diffmins2 + " m" : "00:00"}</h5>
                        <p>Non Stop</p>
                    </div>
                    <div className="tot">
                        <h4>{hrs ? thrs2 + ":" + tmins2 : "00:00"}</h4>
                        <p>{valueto}</p>
                    </div>
                    <div className="price">
                        <h4>{hrs ? price + " USD" : "0 USD"}</h4>
                    </div>
                </div>
                <div className="results3">
                    <img src={hrs ? fimgarr[fran3] : require("../images/indigo.png")} alt="Icon" />
                    <div className="flightnn">
                        <h4>{hrs ? farr[fran3] : "IndiGo"}</h4>
                        <p>{hrs ? Math.floor(price / 7) : "0000"}</p>
                    </div>
                    <div className="fromt">
                        <h4>{hrs ? fhrs3 + ":" + fmins3 : "00:00"}</h4>
                        <p>{value}</p>
                    </div>
                    <div className="jtime">
                        <h5>{hrs ? diffhrs3 + " hr " + diffmins3 + " m" : "00:00"}</h5>
                        <p>Non Stop</p>
                    </div>
                    <div className="tot">
                        <h4>{hrs ? thrs3 + ":" + tmins3 : "00:00"}</h4>
                        <p>{valueto}</p>
                    </div>
                    <div className="price">
                        <h4>{hrs ? price + " USD" : "0 USD"}</h4>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Flights;