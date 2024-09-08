import React from "react";
import { Card ,Button,CardSubtitle,CardBody,CardTitle,CardText} from "reactstrap";
import "../index.css"
const ProductCard=()=>{
return(
    <>
    <div className="productCard">

<Card
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      View More
    </Button>
  </CardBody>
</Card>
</div>
    </>
)
}
export default ProductCard