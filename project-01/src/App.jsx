import React from "react";
const App = () => {
  function click(){
    console.log('button clicked');
  }
return (
     <div>
       <button onClick={click}>clicked</button>
     </div>
);
};
export default App;