import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";


function App() {
  return (
    <div  style={{margin:"auto", marginLeft:"35%"}}>
        <ProfilePhoto/>
        <FullName/>
        <Address/>
    </div>
  );
}

export default App;
