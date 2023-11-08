import Card from 'react-bootstrap/Card';

function Store({ store }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={store.image} />
                <Card.Body>
                    <Card.Title>{store.name}</Card.Title>
                    <Card.Text>
                        Store location: {store.address}
                     </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default Store