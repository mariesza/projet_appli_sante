
function PhysioPreview({dataphysio}) {

    function onClick(){
        console.log(dataphysio.name);
    }

    return (
        <div className={"Données physiologiques" + dataphysio.name.toLowerCase()}>
        
        <img width="100px" alt={dataphysio.name} />
        <button onClick={() => onClick}>
            Données physiologiques 
        </button>
        
        </div>
);
}

export default PhysioPreview;