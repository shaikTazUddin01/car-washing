
import { TOrder } from "./order.initerface";
import { order } from "./order.model";


const createOrder=async(data:TOrder)=>{
  console.log(data);
    const result=await order.create(data)

    return result
}

  
  


export const orderService = {
  createOrder,
  
};
