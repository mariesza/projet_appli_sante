
function PhysioPreview({dataphysio}) {

    function onClick(){
        console.log(dataphysio.date);
    }

    return (
        <div className={"Données physiologiques" + dataphysio.date.toLowerCase()}>
        
        <img width="100px" alt={dataphysio.date} />
        <button onClick={() => onClick}>
            Données physiologiques 
        </button>
        
        </div>
);
}

export default PhysioPreview;