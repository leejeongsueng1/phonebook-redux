import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import {ContactForm} from "./components/ContractForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContactList} from "./components/ContactList";

 // TODO:
 //  1. 왼쪽에는 연락처를 등록하는 폼이, 오른쪽에는 연락처 리스트와 search 창이 있다.
 //  2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
 //  3. 리스트에 아이템이 몇개 있는지 보인다.
 //  4. 사용자가 유저를 이름 검색으로 찾을 수 있다.

function App() {
  return (
    <div>
        <Container>
            <hr/>
                  <h1 className="title">Phone Book</h1>
                  <hr/>
            <Row>
                <Col>
                    <ContactForm />
                </Col>
                <Col>
                    <ContactList />
                </Col>
            </Row>
        </Container>


    </div>
  );
}

export default App;
