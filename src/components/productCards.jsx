import React from "react";
import {
  Card,
  Button,
  CardSubtitle,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "../index.css"; // Make sure custom styles are defined here

const ProductCard = ({
  title = "Product Title",
  subtitle = "Product Subtitle",
  description = "A brief description of the product goes here.",
  image = "https://picsum.photos/300/200",
  onViewMore,
}) => {
  return (
    <div className="productCard">
      <Card className="custom-card shadow-sm border-0 hover-card">
        <img alt={title} src={image} className="card-img-top" />
        <CardBody>
          <CardTitle tag="h5" className="fw-bold">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {subtitle}
          </CardSubtitle>
          <CardText className="text-secondary small">
            {description}
          </CardText>
          //added descriotion and view more 
          <Button color="primary" onClick={onViewMore}>
            View More
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
