import './App.css';
import {useEffect} from "react";
const idb=window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

const createCellectionInIndexDB=()=>{
  if(!idb){
    console.log("This browser does not suppport");
    return;
  }

  console.log(idb);
  const request=idb.open('text-db', 2);

  request.onerror=(event)=>{
    console.log("Error"+event);
    console.log("An Error occured with indexedDB");
  }

  request.onupgradeneeded=(event)=>{
    const db=request.result;
  }

  request.onsuccess=()=>{

  }
}

const  App=()=> {
  useEffect(()=>{
    createCellectionInIndexDB();
  }, [])
  return (
    <div >
      
    </div>
  );
}

export default App;
