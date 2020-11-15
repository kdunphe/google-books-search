import React from "react";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import API from "../../utils/API";


const Book = ({ volumeInfo }) => {

    function handleBookSubmit(event) {
        event.preventDefault();
        if (volumeInfo.title) {
            API.saveBook(
                {
                    title: volumeInfo.title,
                    authors: volumeInfo.authors,
                    description: volumeInfo.description,
                    image: volumeInfo.imageLinks.thumbnail,
                    link: volumeInfo.infoLink
                }
            )
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    return (

        <Container>
            <Row>
                <Col xs={2}><Card><Card.Img src={volumeInfo.imageLinks.thumbnail} /></Card></Col>
                <Col xs={10}>
                    <Card.Body>
                        <Card.Title>{volumeInfo.title}</Card.Title>
                        <Card.Text>{volumeInfo.authors}</Card.Text>
                        <Card.Text>{volumeInfo.description || "No Description Provided"}</Card.Text>
                        <Button href={volumeInfo.infoLink} size="sm" variant="outline-primary" target="_blank">View</Button>
&nbsp;
<Button className="save-btn" size="sm" variant="outline-primary" onClick={handleBookSubmit}>Save</Button>
                    </Card.Body>
                </Col>
            </Row>
            <br />
        </Container>
    );
}

export default Book;