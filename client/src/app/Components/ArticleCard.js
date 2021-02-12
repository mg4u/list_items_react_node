import React from 'react'
import { Button, Card } from 'react-bootstrap';

export const ArticleCard= ({item, click, enableAction}) => (
    <Card>
        <Card.Header as="h5">{item.title}</Card.Header>
        <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
                { item.description }
            </Card.Text>
            {enableAction && ( <Button onClick={()=> click('delete')} className="btn btn-danger float-right mr-3"> Delete</Button> )}
            {enableAction && ( <Button onClick={()=> click('edit')} className="btn btn-info float-right mr-3"> Edit</Button> )}
            <Button onClick={()=> click('view')} className="btn btn-primary float-right mr-3"> Details</Button>
        </Card.Body>
    </Card>
)