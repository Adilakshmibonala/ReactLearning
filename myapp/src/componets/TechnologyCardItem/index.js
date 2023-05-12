import "./index.css"

const TechnologyCardItem = props => {
    const {TechnologyCardDetails} = props
    const {title, description, imgUrl, className} = TechnologyCardDetails

    // const classes = ['card', {className}];
    // const adi = classNames(classes);
    return(
        <div className='card'>
            <div className="bg-content-container">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <div className="image-container">
                <img className="image" src={imgUrl} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default TechnologyCardItem;