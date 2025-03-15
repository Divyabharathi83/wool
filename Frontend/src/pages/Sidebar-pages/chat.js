import React, { useState, useEffect } from "react";
import SideBar from "../../sidebar";
import '../styles/chat.css';
import chatlist from "../../components/chatlist";
import axios from 'axios';

export default function Chat() {
    const [cartitem, setCartitem] = useState([]);
    const [total, setTotal] = useState(0);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/cart')
            .then(response => response.json())
            .then(data => {
                setCartitem(data);
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, []);

    useEffect(() => {
        let sum = 0;
        cartitem.forEach(item => {
            sum += item.quantity * item.cost;
        });
        setTotal(sum);
    }, [cartitem]);

    const buyItem = async () => {
        try {
            cartitem.forEach(async item=>{
                const res=await axios.post('http://localhost:5000/cart/buy');
                return res.data;  })
            setSuccess(true); 
            setTimeout(() => {
                setSuccess(false); 
                window.location.reload(); 
            }, 2000);
        } catch (error) {
            console.error('Error buying items:', error);
            throw error;
        }
    };

    return (
        <div className="app-container">
            <SideBar activeItem="7" />
            <div className="cart">
                <h1>Communicate Here..</h1>
                <br /><br />
                <div className="inner-cart">
                    {cartitem.map(cartitem => (
                        <chatlist
                            key={cartitem.cartId}
                            cartid={cartitem.cartId}
                            item={cartitem.itemId}
                            quantity={cartitem.quantity}
                            wools={cartitem.wools}
                            cost={cartitem.cost}
                            length={cartitem.length}
                            available={cartitem.available}
                            image={cartitem.image}
                        />
                    ))}
                </div>
                {/* <div className="finaldetails">
                    <h2>Total: ₹ {total}</h2>
                    <button type="button" id="po" onClick={buyItem}>Buy</button>
                </div>
                {success && (
                    <div className="success-popup">
                        <p>Items bought successfully!</p>
                    </div>
                )} */}
                <iframe
    allow="microphone;"
    width="1250"
    height="550"
    src="https://console.dialogflow.com/api-client/demo/embedded/c08ff0c2-2e0d-4230-8d46-2b89870f6fea">
</iframe>
            </div>
        </div>
    );
}
