import { Types } from "mongoose";

 
export type TBooking={
    customer: Types.ObjectId;
    service: Types.ObjectId;
    slot: Types.ObjectId;
    paymentStatus:'paid'|'pending'
    // paid:'paid'|'pending'
    // vehicleType: 'car' | 'truck' | 'SUV' | 'van' | 'motorcycle' | 'bus' | 'electricVehicle' | 'hybridVehicle' | 'bicycle' | 'tractor';
    // vehicleBrand: string;
    // vehicleModel: string;
    // manufacturingYear: number;
    // registrationPlate: string;
}