import {dataCPU} from "../../../__mocks__/cpu/cpu";
import {dataGPU} from "../../../__mocks__/gpu/gpu";
import {dataRAM} from "../../../__mocks__/ram/ram";
import {dataHDD} from "../../../__mocks__/hdd/hdd";
import {dataSSD} from "../../../__mocks__/ssd/ssd";
import {dataPower} from "../../../__mocks__/power/power";
import styles from "./InputPc.module.css"
import { useState } from "react";

const InputPC = ({setModal}) => {
    const [value, setValue] = useState("")

    const createPC = (event) => {
        event.preventDefault();

        setModal(true);

        setValue("")
    }

    return(
        <div className={styles.main} onSubmit={createPC}>
            <img src = {"../nexus-tech-react/src/assets/__mocks__/workstation.png"} alt = ""/>
            <form className={styles.create}>
                <input type = "text" id = "name" required minLength={"4"} maxLength={"16"} autoComplete="off" value={value} onChange={(e) => setValue(e.target.value)}/>
                
                <label>Select cpu</label>
                <select name = "cpu" id = "selectCpu">
                    {dataCPU.map(data => <option key = {data.id} value={data.value}>{data.label}</option>)}
                </select>

                <label>Select gpu</label>
                <select name = "gpu" id = "selectGpu">
                    {dataGPU.map(data => <option key = {data.id} value={data.value}>{data.label}</option>)}
                </select>

                <label>Select ram</label>
                <select name = "ram" id = "selectRam">
                    {dataRAM.map(data => <option key = {data.id} value={data.value}>{data.label}</option>)}
                </select>

                <label>Select hdd</label>
                <select name = "hdd" id = "selectHDD">
                    {dataHDD.map(data => <option key = {data.id} value={data.value}>{data.label}</option>)}
                </select>

                <label>Select ssd</label>
                <select name = "ssd" id = "selectSsd">
                    {dataSSD.map(data => <option key = {data.id} value={data.value}>{data.label}</option>)}
                </select>

                <label>Select power</label>
                <select name = "power" id = "selectPower">
                    {dataPower.map(data => <option key = {data.id} value={data.value}>{data.label}</option>)}
                </select>
            
                <button className={styles.button}>Create PC</button>
            </form>
        </div>
    )
}

export default InputPC