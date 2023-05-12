import './Banner.css'

function Banner() {
    const title = 'Health Tracker'
    return (
        <div className='ht-banner'>
            <h1 className='ht-title'>{title}</h1>
            <p>Ton application santé qui te suit au quotidien 🤗 </p>
            <img src='/images/logo1.png' width= {100} height= {100} className="logo" alt="logo de l'application" />
        </div>
    )
}

export default Banner