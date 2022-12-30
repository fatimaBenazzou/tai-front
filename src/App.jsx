import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [outputName, setOutputName] = useState("");
  const [progress, setProgress] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("file", file);
    axios({
      method: "post",
      url: "http://localhost:3001/files/",
      data: dataForm,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setFileName(response.data.filename);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const handleExtract = (e) => {
    var last_index = 0;
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3001/" + fileName, true);
    xhr.onprogress = function () {
      var curr_index = xhr.responseText.length;
      if (last_index === curr_index) return;
      setProgress(Number(xhr.responseText.substring(last_index, curr_index).split("\n")[0]));
      last_index = curr_index;
      
    };
    xhr.onload = () => {
      setProgress(undefined)
      setOutputName(fileName);
    };
    xhr.send();
  };
  return (
    <div className="App">
      {fileName ? (
        <div className="videos">
          <div className="input">
            <video
              controls
              width={300}
              height={300}
              src={"http://localhost:3001/public/" + fileName}
            />
            <button onClick={handleExtract}>extract</button>
            {progress!== undefined && <p>{progress}%</p>}
          </div>

          {outputName && (
            <div className="output">
              <video
                controls
                autoPlay
                width={300}
                height={300}
                src={
                  "http://localhost:3001/public/" + outputName + "-Output.mp4"
                }
              />
              <video
                controls
                autoPlay
                width={300}
                height={300}
                src={"http://localhost:3001/public/" + outputName + "-Mask.mp4"}
              />
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name=""
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button type="submit">Click ME :3</button>
        </form>
      )}
    </div>
  );
}

export default App;
