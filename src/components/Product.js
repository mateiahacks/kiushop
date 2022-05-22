import './Product.css';
import { BsHeart } from 'react-icons/bs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = ({id, sale, name, price}) => {
    const img = 'https://s3-alpha-sig.figma.com/img/7f77/9e74/387e1535f72c92f17d2aa7e88ab50281?Expires=1653264000&Signature=e5azh8~W3Q8r9aEkvgUeK2cMrpAoEHKr1vGoUmYlJz-a5cGl2N6SEYThunsPOP8oXnUssoacJIpuzM2wACTOzzEMVxdIpN914qnBrMIXgrcYqMRemvHjBxkcF5fsLeJemcZuhkr1txELrnO~BE0~qJrbCfJbOgHDN9~SvfdmPx3su5eSceDf2uwygNafZjUN8gPAluVYAZdqqCMvgEUaVb5AT85LTQSGSTBV2lL5TQffQFSmzQx6cx6jttbmvF-csJx8nUWZVkqkzaVEipj3dxIM9Be7o~8~~REMqc2xMzQ9Kq~oYsjtSHQmJx~ZSzLyn-wPbSbEn2k-4rvR~Ljnxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

    return (
        <div className="product">
            {sale !== 0 && <div className="sale-pointer">{"-" + sale + "%"}</div>}
            <div className="product__inner">
                <Link to={'/en/product/' + id}><div className="prod__img">
                    <img id='product' src={img} alt="product"/>
                    <div className="bg">
                        <div className="view">View Plant</div>
                    </div>
                </div></Link>
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