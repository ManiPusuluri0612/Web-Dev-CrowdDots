import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { get_data } from './DB'
export default function Home() {
    const [key, setKey] = useState('');
    const [skey, setSKey] = useState('');
    const [data, setData] = useState({ 0: 1 })
    const handleChange = (event) => {
        setKey(event.target.value);
    };
    const handleChangeSkey = (event) => {
        setSKey(event.target.value);
    };
    useEffect(() => {
        get_data().then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        })
    }, [])
    useEffect(() => { console.log(data[Object.keys(data)[0]]) }, [data])
    var y='';
    return (
        <div>
            <h1>Home!</h1>
            {/* {Object.keys(data).map((key) => (<div>
                <p style={{ width: '100vw' }}>Place: <b>{key}</b></p>
                {Object.keys(data[key]).sort().reverse().map((x) => <p>{x}</p>)}
            </div>))} */}
            <Box sx={{ m: 1,minWidth: 120 }}>
                <FormControl style={{minWidth:'120px'}}>
                    <InputLabel id="demo-simple-select-label">Place</InputLabel>
                    <Select
                        value={key}
                        label="Place"
                        onChange={handleChange}
                    >
                        {Object.keys(data).map((x) => (<MenuItem value={x}>{x}</MenuItem>))}
                    </Select>
                </FormControl>
            </Box>
            {(key!='')?(<Box sx={{ m: 1,minWidth: 120 }}>
                <FormControl style={{minWidth:'120px'}}>
                    <InputLabel id="demo-simple-select-label">Select Date: </InputLabel>
                    <Select
                        value={skey}
                        label="Place"
                        onChange={handleChangeSkey}
                    >
                        {Object.keys(data[key]).sort().reverse().map((x) =>{
                            var y= x.toString()
                            y =new Date(y.substr(0,4),y.substr(4,2)-1,y.substr(6,2))
                        return(<MenuItem value={x}>{
                            y.toLocaleDateString()}</MenuItem>)})}
                    </Select>
                </FormControl>
            </Box>):(<></>)}
            
        </div>
    )
}
