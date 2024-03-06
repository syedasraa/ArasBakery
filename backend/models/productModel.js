import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    slug: { type: String, unique: true },
    // brand: { type: String, required: true },
    category: { type: String },
    image: { type: String },
    price: { type: Number },
    countInStock: { type: Number },
    rating: { type: Number },
    description: { type: String },
    incredients: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
