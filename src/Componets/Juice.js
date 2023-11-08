import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Juice ({juice}){
    return(
        <>
        {/* <div>
            <li className="Juice">
            <img 
            src={juice.image}
            alt={juice.name}/>
            
            <p>Collab with: {juice.collab}</p>
            <p>{juice.name} </p>
            <p>Flavor: {juice.flavor}</p>            
            </li>
        </div> */}

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={juice.image} />
<Card.Body>
  <Card.Title>{juice.name}</Card.Title>
  <Card.Text>
Collab with: {juice.collab}
<br></br>
  Flavor: {juice.flavor}
  </Card.Text>
  <Button variant="primary">Add to cart</Button>
</Card.Body>
</Card>
</>
    )

}

export default Juice