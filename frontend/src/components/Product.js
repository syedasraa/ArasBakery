import { Card, CardText, CardTitle, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Product(props) {
  const { product } = props;
  return (
    <Card className="product">
      <Link to={`/product/ ${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/ ${product.slug}`}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <CardText>${product.price}</CardText>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
