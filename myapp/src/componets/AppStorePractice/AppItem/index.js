const AppItem = props => {
    const {appDetails} = props
    const {appId, appName, imageUrl, category} = appDetails
    return(
        <div>
            <img src={imageUrl}/>
        </div>
    )
}

export default AppItem;