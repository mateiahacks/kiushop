import './FavProduct.css';

const FavProduct = () => {
    return (
        <div className="favproduct">
            <div className='fav__image__container'>
                <img className='fav__image' src="https://s3-alpha-sig.figma.com/img/9739/8ed6/036cd4553a35ae251579c446c66a2d74?Expires=1655078400&Signature=cDvN8uQil8UNzI-j8StRoiftATVSDqhEbgR4GLh6J0zDejtW71TXfYAiKZXC1ptK3oc6u7jFrkX~ZfZZE~SjEkFOurSrhXJQRPe6CZN2fWLEz4VhUf0tGKQWWUN9Ixy9C7PIN-xgwP1kqwROdGdQQHfKSphX~2t81DY3liSG1uFSUElI872ur3AnSkMdTvDqcqiHkjGEpOTTeUbqgCcSIQ8i1KPSboPC7p9tpEBUeDPKup2Ts0ER8HN4L~Ewn3UHFRwI07Sl1xD2l0TPLt5tXicgFQOnEDzKYtT67ejzuzWVhangA20FBIeW~2mxh3tlWJxhtXopc1fjZVC7p-cTgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <div className="bg">
                    <div className="view">View Plant</div>
                </div>
            </div>
            <div className='fav__info'>
                <p style={{fontSize: "22px"}}>Chamaedorea</p>
                <p style={{fontWeight: "600"}}>$12.00</p>
                <div className="fav__remove">
                    <p>REMOVE</p>
                </div>
            </div>
        </div>
    )
}

export default FavProduct;