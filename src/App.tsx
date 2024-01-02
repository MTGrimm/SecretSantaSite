import './App.css'
import {useRef} from 'react'
function App() {
    const fileInputRef = useRef(null);

    const handleSubmit = async() => {
        if (fileInputRef.current != null) {
            const selectedFile = fileInputRef.current['files'][0];
            if (!selectedFile) {
                console.log("ya doofus it doesn't do it like that");
                return;
            }

            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                const response = await fetch("https://secretsantahttp-final2.fly.dev/upload", {
				//const response = await fetch("http://localhost:8080/upload", {
                    method: "POST",
                    body: formData,
                });
                
                if (response.ok) {
                    console.log("things work");
                } else {
                    console.error("failed");
                }
            } catch (error) {
                console.error("error occurred: ", error);
            }
        }
    }
    
  return (
    <div className="mainDiv">
        <div className="topHalf">
        </div>
        <div className="bottomHalf">
            <input type="file" name="json file" ref={fileInputRef} accept=".json, application/json"/>
            <button onClick={handleSubmit}>submit:3</button>
        </div>
    </div>
  )
}

export default App
