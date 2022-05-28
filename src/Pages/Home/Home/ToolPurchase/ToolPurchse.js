import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const ToolPurchse = props => {
    const { _id, name, stock, minimumOrder, price, img } = props.obj;
    let miniOrder = parseInt(minimumOrder);
    const [user] = useAuthState(auth)
    const handleOrder = event => {
        event.preventDefault();
        const order = parseInt(event.target.quantity.value);
        const address = event.target.address.value;
        const phonNO = event.target.phonNo.value;

        const purchseOrder = {
            purchseId: _id,
            productName: name,
            productImg: img,
            clintName: user.displayName,
            clintEmail: user.email,
            clintAddress: address,
            clintPhon: phonNO,
            ClintOrder: order


        }
        console.log(purchseOrder)
        if (order < miniOrder) {
            return alert(`minimum order : ${miniOrder}`)
        }
        fetch(`https://aqueous-chamber-57990.herokuapp.com/orders`, {
            method: 'POST',
            body: JSON.stringify(purchseOrder),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                toast('item addded')

            });

    }

    return (
        <div className='mt-3'>

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <div class="card-body">



                    <form onSubmit={handleOrder}>
                        <div class="form-control">
                            <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered my-2" />
                            <input name='email' type="email" disabled value={user?.email || ''} class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-1xl">Order details</span>
                            </label>
                            <label class="label mb-0">
                                <span class="label-text">minimum order : </span>
                            </label>
                            <input name='quantity' type="number" placeholder={`${miniOrder}`} class="input input-bordered mb-1" />
                            <input name='address' type="text" placeholder="enter your address" class="input input-bordered" />
                            <input name='phonNo' type="number" placeholder="enter your phone number" class="input input-bordered my-1" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">having trouble ?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">

                            <button type='submit' class="btn btn-primary px-2">Order</button>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToolPurchse;