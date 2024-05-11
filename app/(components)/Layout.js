import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Content from "./Content";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
            {/* dashbaord sidebar */}
          <Sidebar />
        </Col>
        <Col md={10}>
        <TopBar/>
        {/* dashboard content */}
          <Content />
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
