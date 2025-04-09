import {FC} from "react";
import {ProductDummyjsonModel} from "../../models/ProductDummyjsonModel.ts";
import './ProductComponent.css';

type PropType = {
    product: ProductDummyjsonModel;
}

export const ProductComponent: FC<PropType> = ({product}) => {
    return (
        <>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><b>Category: </b> {product.category}</p>
            <p><b>Brand: </b> {product.brand}</p>
            <p><b>Price: </b> {product.price}</p>
            <p><b>Discount percentage: </b> {product.discountPercentage}</p>
            <p><b>Rating: </b> {product.rating}</p>
            <p><b>Stock: </b> {product.stock}</p>
            <p><b>Sku: </b> {product.sku}</p>
            <p>
                <b>Dimensions: </b> {product.dimensions.width} (W), {product.dimensions.height} (H), {product.dimensions.depth} (D)
            </p>
            <p><b>Warranty information: </b> {product.warrantyInformation}</p>
            <p><b>Shipping information: </b> {product.shippingInformation}</p>
            <p><b>Availability status: </b> {product.availabilityStatus}</p>
            <p><b>MinimumOrder quantity: </b> {product.minimumOrderQuantity}</p>
            <p><b>Tags:</b></p>

            <ul>
                {
                    product.tags.map(tag => <li>{tag}</li>)
                }
            </ul>
            <p><b>Thumbnail:</b>{product.thumbnail}</p>
            <p><b>Created at: </b>{product.meta.createdAt}, <b>updated at:</b> {product.meta.updatedAt}</p>
            <p><b>Barcode: </b>{product.meta.barcode}, <b>QR code:</b> {product.meta.qrCode}</p>
            <div className={'galleryBlock'}>
                {
                    product.images.map(image =>
                        <div className={'gallery'} style={{backgroundImage: `url(${image})`}}></div>)
                }
            </div>
            <div className="reviews-block">
                {
                    product.reviews.map(review =>
                        <div className={'review'}>
                            <p><b>Rating:</b> {review.rating}</p>
                            <p><b>Date:</b> {review.date}</p>
                            <p><b>Reviewer email:</b> {review.reviewerEmail}</p>
                            <p><b>Reviewer name:</b> {review.reviewerName}</p>
                            <p><b>Comment:</b> {review.comment}</p>
                        </div>
                    )
                }
            </div>
        </>
    );
};
