import './AddProduct.css';
import { useState } from 'react';
import server from './ServerURL';

const AddProduct = ({toggleShowAdd}) => {
    const [title_en, set_title_en] = useState("");
    const [title_ge, set_title_ge] = useState("");
    const [price, set_price] = useState("");
    const [amount, set_amount] = useState("");
    const [color, set_color] = useState("");
    const [size, set_size] = useState("");
    const [desc_en, set_desc_en] = useState("");
    const [desc_ge, set_desc_ge] = useState("");
    const [discount, set_discount] = useState("");
    const [featured, set_featured] = useState(false);

    const addProduct = async () => {
        const link = server + "product";
        const product = {
            title_en: title_en,
            title_ge: title_ge,
            discount: discount,
            price: price,
            size: size,
            amount: amount,
            color: color,
            description_en: desc_en,
            description_ge: desc_ge,
            featured: featured
        }
        const response = await fetch(link, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product) 
        });
        const data = await response.json();
        console.log(data);
    }

    const submit = (e) => {
        e.preventDefault();
        toggleShowAdd();
        addProduct();
    }

    return (
        <div className='addproduct'>
            <div onClick={toggleShowAdd} className="modal__bg"></div>
            <div className='addproduct_modal'>
                <h1>Enter Product Data</h1>
                <form onSubmit={submit}>
                    <label>*title in English</label>
                    <input type="text" placeholder='title' required onChange={(e) => set_title_en(e.target.value)}/>

                    <label>*title in Georgian</label>
                    <input type="text" placeholder='სახელი' required onChange={(e) => set_title_ge(e.target.value)}/>

                    <label>*Price in dollars</label>
                    <input type="text" placeholder='price' required onChange={(e) => set_price(e.target.value)}/>

                    <label>*Amount in stock</label>
                    <input type="text" placeholder='amount' required onChange={(e) => set_amount(e.target.value)}/>

                    <label>Discount</label>
                    <input type="text" placeholder='percentage' onChange={(e) => set_discount(e.target.value)}/>

                    <label>Color</label>
                    <input type="text" placeholder='color' onChange={(e) => set_color(e.target.value)}/>

                    <label>size</label>
                    <input type="text" placeholder='size' onChange={(e) => set_size(e.target.value)}/>

                    <label>Descritpion in English</label>
                    <input type="text" placeholder='description' onChange={(e) => set_desc_en(e.target.value)}/>

                    <label>Descriptoin in Georgian</label>
                    <input type="text" placeholder='აღწერა' onChange={(e) => set_desc_ge(e.target.value)}/>
                    
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '180px'}}>
                        <input type="checkbox" name="" id="featured" onChange={(e) => set_featured(e.currentTarget.checked)}/>
                        <label>Check if featured</label>
                    </div>
                    <button type="submit" id='addproduct_submit'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;