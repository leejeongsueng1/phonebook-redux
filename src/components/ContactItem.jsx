import {Col, Row} from "react-bootstrap";

export const ContactItem = ({item}) => {
    return (
        <Row className="ContactItem">
            <Col lg={2}>
                <img width={70} src="https://p7.hiclipart.com/preview/691/765/226/computer-icons-person-anonymous.jpg"/>
            </Col>
            <Col lg={10} className="Info">
                <div>이름 : {item?.name}</div>
                <div>전화번호 : {item?.phoneNumber}</div>
            </Col>
        </Row>
    )
}