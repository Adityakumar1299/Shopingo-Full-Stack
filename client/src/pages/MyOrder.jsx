import React from 'react';
import { useSelector } from 'react-redux';
import NoData from '../components/NoData';
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees';


const MyOrders = () => {
  const orders = useSelector(state => state.orders.order);
    

  return (
    <div>
      <div className='bg-white shadow-md p-3 font-semibold'>
        <h1>Order</h1>
      </div>

      {!orders?.length && <NoData />}

      {orders?.map((order, index) => {
        const totalQty = order?.totalQty || 1; // assuming 'qty' is provided
        const subTotal = order?.subTotalAmt || 0; // fallback to 0 if undefined
        const total = order?.total_Amt || 0; // fallback to 0 if undefined
        const totalPrice = subTotal - total;

        return (
          <div key={order._id + index + "order"} className='bg-white rounded p-4 text-sm mb-4 shadow'>
            <p className='mb-2 font-medium'>Order No : {order?.orderId}</p>
            <div className='flex gap-3 mb-3 items-center'>
              <img
                src={order?.product_details?.image?.[0] || ""}
                className='w-14 h-14 object-cover border'
                alt="product"
              />
              <p className='font-semibold'>{order?.product_details?.name}</p>
            </div>

            <div className='grid gap-1 text-sm bg-blue-50 p-2 rounded'>
              <div className='flex justify-between'>
                <p>Items Total</p>
                <p>{DisplayPriceInRupees(subTotal)}</p>
              </div>
              {/* <div className='flex justify-between'>
                <p>Quantity total</p>
                <p className='flex items-center gap-2'>{totalQty} item</p>
              </div> */}
              <div className='flex justify-between font-semibold'>
                <p>Grand Total</p>
                <p>{DisplayPriceInRupees(totalPrice)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrders;