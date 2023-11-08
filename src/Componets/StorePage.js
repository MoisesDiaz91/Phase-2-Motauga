import Store from './Store'
import NavBar from "./NavBar";

function StorePage({store}){
    const storeComponet = store.map((store)=>{
        return <Store key={store.id} store={store}/>
    })

    return (
        <>
        <NavBar />
        <div className="store-page">
                {storeComponet}
        </div>
        </>
    )
}

export default StorePage;