import Juice from './Juice'
import NavBar from "./NavBar";

function JuicePage({juices}){
    const juiceComponet = juices.map((juice)=>{
        return <Juice key={juice.id} juice={juice}/>
    })
return (
    <>
    <NavBar />
    <div className="juice-page">
        {juiceComponet}
    </div>
    </>
)
}

export default JuicePage