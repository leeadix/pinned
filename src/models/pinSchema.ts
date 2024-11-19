import mongoose, { Schema, Document, Model } from "mongoose";


interface IPin extends Document {
   title: string;
   place: string;
   type: string;
   area: string;
   address: string;
   imageUrl: string;
   updated_date: Date;
}


const pinSchema = new Schema<IPin>({
   title: {
       type: String,
       required: true,
   },
   place: {
       type: String,
   },
   type: {
       type: String,
   },
   area: {
       type: String,
   },
   address: {
       type: String,
   },
   imageUrl: {
       type: String,
   },
   updated_date: {
       type: Date,
       default: Date.now,
   },
});

const Pin: Model<IPin> = mongoose.models.Pin || mongoose.model<IPin>("Pin", pinSchema);
export default Pin;
