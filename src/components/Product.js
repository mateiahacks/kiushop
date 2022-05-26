import './Product.css';
import { BsHeart } from 'react-icons/bs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = ({id, sale, name, price}) => {
    const img = 'https://s3-alpha-sig.figma.com/img/7f77/9e74/387e1535f72c92f17d2aa7e88ab50281?Expires=1654473600&Signature=CISq3zEI0V6hA~kKS8AxEADXreuc30H6qCUfiwXTnDAJIHlUfUBGC6A113372XhxDuY6QFhdvFLJeYp37vGhX-TqJUrA-dVA87kZcAqfHfs9BTtux4yTO9sTVObPRL-Wfp0Eu2lOWj4XzkF3aD582By6JpLFpmf8c8FX9CLL0C7Uu-HWerv9C2uZV~1WrRTkp~40KFsQ-NfGzRYjWWwioNfSdOXy~DFmxZT-mugF15wBJEUaOTnqVZbFbVH4cmnmZDCLKuKYXoWZ1HWKa1BYWNIhMmfk8RtTIUOIp5cSNYs4QUormhBPCa1FHpUHqJfZ-h~ZlDNwj1N4K9jxkLO-7Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

    return (
        <div className="product">
            {sale !== 0 && <div className="sale-pointer">{"-" + sale + "%"}</div>}
            <div className="product__inner">
                <a href={'/en/product/' + id}><div className="prod__img">
                    <img id='product' src={img} alt="product"/>
                    <div className="bg">
                        <div className="view">View Plant</div>
                    </div>
                </div></a>
                <p>{name}</p>
                <p>{"$" + price + ".00"}</p>
                <div className="prod__action">
                    <div className="add-cart">ADD TO CART</div>
                    <BsHeart style={{cursor: 'pointer'}} size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Product;