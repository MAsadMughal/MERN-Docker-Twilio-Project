import { useState } from "react";
import "./App.css";
import axios from "axios";
// import XLSX from 'xlsx';



function App() {
  const [file, setFile] = useState(null);
  const [uniqueMobiles, setUniqueMobiles] = useState([]);
  // const [messagesSent, setMessagesSent] = useState([]);
  // const [messagesFailed, setMessagesFailed] = useState([]);

  const changeFun = (e) => {
    setFile(e.target.files[0]);
  }



  const submitFun = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await axios.post('/upload', formData)
    console.log(data);
    if (data?.data.length >= 1) {
      alert('Successfully Done.');
      // const uniqueValues = [...new Set(data.map(obj => JSON.stringify(obj)))].map(str => JSON.parse(str));
      // console.log(uniqueValues);
      // setUniqueMobiles(uniqueValues);
    }
  }

  return (
    <div className="App">
      <h1>Upload Excel Files Only.</h1>
      <input type="file" accept=".xlsx" onChange={changeFun} />
      <button onClick={file ? submitFun : () => alert('Input an Excel File.')}>submit</button>
      {/* 
      {uniqueMobiles && uniqueMobiles.map((item, ind) => {
        return <h1>{ind + 1} : {Object.values(item)[5]}</h1>
      })} */}
    </div>
  );
}

export default App;
