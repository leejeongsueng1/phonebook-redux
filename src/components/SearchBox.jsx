import { Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";

export const SearchBox = () => {

    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const search = () =>{
        dispatch({type:"SEARCH",payload:{searchString}})
    }

    return (
        <Row className="SearchBox" >
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력해 주세요" onChange={(event)=>setSearchString(event.target.value)} />
            </Col>
            <Col lg={2}>
                <Button onClick={search}>찾기</Button>
            </Col>
        </Row>
    )
}