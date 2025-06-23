import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="mb-4">Projects</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center flex-column flex-md-row flex-wrap"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Project 4</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Project 5</Nav.Link>
                      </Nav.Item><Nav.Item>
                        <Nav.Link eventKey="sixth">Project 6</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <div
                          className="p-4 rounded shadow-lg text-white"
                          style={{
                            // background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            boxshadow: "0 8px 20px rgba(108, 99, 255, 0.5)",
                           background: "linear-gradient(135deg,rgba(49, 14, 248, 0.51),rgb(245, 230, 17))",
                          }}
                        >
                          {/* Title */}
                          <h3 className="fw-bold mb-4 border-bottom border-light pb-2">
                            🚀 Uttar Bihar And Uttar Bangal banks (Development and support)
                          </h3>
                          {/* Summary Row */}
                          <Row className="mb-4">
                            {/* Project Info */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-3 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">📌 Project Info</h5>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Client:</strong> Uttar Bihar And Uttar Bangal banks ,Mumbai (onsite)</div>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Role:</strong>  Developer</div>
                              </div>
                            </Col>
                            {/* Tools */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-4 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">🧰 Technology / Tools</h5>
                                <ul className="mb-0" style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                                  <li>Finacle Scripting</li>
                                  <li>Oracle SQL/PLSQL</li>
                                  <li>IReport Tool</li>
                                </ul>
                              </div>

                            </Col>
                          </Row>

                          {/* Overview */}
                          <div className="bg-white bg-opacity-10 p-4 rounded mb-4 text-white">
                            <h5 className="fw-semibold mb-3 text-info">📄 Project Overview</h5>
                            <div style={{ paddingLeft: "0.5rem", color: "White" }}>
                              Uttar Bihar And Uttar Bangal banks ,one of the leading bank sectors in India using Finacle
                              product. The project involves for (10.2.25) deployment and support.
                            </div>
                          </div>


                          {/* Responsibilities */}
                          <div className="bg-white bg-opacity-10 p-4 rounded text-white">
                            <h5 className="fw-semibold mb-3 text-info">🛠️ Key Responsibilities</h5>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                              <li>Requirement gathering for the Client onsite.</li>
                              <li>Porting 7X To 10x version,</li>
                              <li>Worked on product/custom menu customization in 10X.</li>
                              <li>Analysis 7x script and developed 10x Frontend and script.</li>
                              <li>Worked on SSOADM Customization.</li>
                              <li>Created MRT Report,IReport.</li>
                              <li>Creating custom menu, product customization ,batch job creation ,MRTReport.</li>
                              <li>Debugging the Issues in developed customization and to solve the issues. </li>
                            </ul>
                          </div>

                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div
                          className="p-4 rounded shadow-lg text-white"
                          style={{
                            // background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            boxshadow: "0 8px 20px rgba(108, 99, 255, 0.5)",
                           background: "linear-gradient(135deg,rgba(49, 14, 248, 0.51),rgb(245, 230, 17))",
                          }}
                              >                            

                          {/* Title */}
                          <h3 className="fw-bold mb-4 border-bottom border-light pb-2">
                            🚀 DCB banks (Development and support)
                          </h3>
                          {/* Summary Row */}
                          <Row className="mb-4">
                            {/* Project Info */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-3 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">📌 Project Info</h5>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Client:</strong>  DCB Bank ,Mumbai (onsite)</div>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Role:</strong> Developer</div>
                              </div>
                            </Col>
                            {/* Tools */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-4 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">🧰 Technology / Tools</h5>
                                <ul className="mb-0" style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                                  <li>Finacle Scripting</li>
                                  <li>Oracle SQL/PLSQL</li>
                                  <li>IReport Tool</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>

                          {/* Overview */}
                          <div className="bg-white bg-opacity-10 p-4 rounded mb-4 text-white">
                            <h5 className="fw-semibold mb-3 text-info">📄 Project Overview</h5>
                            <div style={{ paddingLeft: "0.5rem", color: "White" }}>
                              DCB Bank one of the leading bank sectors in India using Finacle product. The project
                              involves for (10.2.25) deployment and support.
                            </div>
                          </div>
                          {/* Responsibilities */}
                          <div className="bg-white bg-opacity-10 p-4 rounded text-white">
                            <h5 className="fw-semibold mb-3 text-info">🛠️ Key Responsibilities</h5>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                              <li>Requirement gathering for the Client onsite.</li>
                              <li>Creating Custom API, Product API.</li>
                              <li>Worked on product/custom menu customization in 10X.</li>
                              <li>Worked on C24 Customization.</li>
                              <li>Creating custom menu, product customization ,batch job creation ,MRT Report.</li>
                              <li>Debugging the Issues in developed customization and to solve the issues. </li>
                            </ul>
                          </div>

                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div
                          className="p-4 rounded shadow-lg text-white"
                          style={{
                            // background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            boxshadow: "0 8px 20px rgba(108, 99, 255, 0.5)",
                           background: "linear-gradient(135deg,rgba(49, 14, 248, 0.51),rgb(245, 230, 17))",
                          }}
                        >
                          {/* Title */}
                          <h3 className="fw-bold mb-4 border-bottom border-light pb-2">
                            🚀 DFCU Bank (Development and support)
                          </h3>
                          {/* Summary Row */}
                          <Row className="mb-4">
                            {/* Project Info */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-3 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">📌 Project Info</h5>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Client:</strong>  DFCU Bank of Uganda, Offsure.</div>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Role:</strong>Senior Developer</div>
                              </div>
                            </Col>
                            {/* Tools */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-4 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">🧰 Technology / Tools</h5>
                                <ul className="mb-0" style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                                  <li>Finacle Scripting</li>
                                  <li>Oracle SQL/PLSQL</li>
                                  <li>IReport Tool</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>

                          {/* Overview */}
                          <div className="bg-white bg-opacity-10 p-4 rounded mb-4 text-white">
                            <h5 className="fw-semibold mb-3 text-info">📄 Project Overview</h5>
                            <div style={{ paddingLeft: "0.5rem", color: "White" }}>
                              DFCU is one of the leading bank sectors in Uganda using Finacle product. The project
                              involves for (10.2.18) deployment and support.
                            </div>
                          </div>
                          {/* Responsibilities */}
                          <div className="bg-white bg-opacity-10 p-4 rounded text-white">
                            <h5 className="fw-semibold mb-3 text-info">🛠️ Key Responsibilities</h5>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                              <li>Requirement gathering for the Client onsite.</li>
                              <li>Developed new custom menu for SSOADM operation</li>
                              <li>Worked on product/custom menu customization in 10X.</li>
                              <li>Automation For Payment suspense Processing (Swift, RTGS)</li>
                              <li>Worked on SSOADM Customization.</li>
                              <li>Worked on charges in 10x.</li>
                              <li>Debugging the Issues in developed customization and to solve the issues. </li>
                            </ul>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="fourth">
                        <div
                          className="p-4 rounded shadow-lg text-white"
                          style={{
                            // background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            boxshadow: "0 8px 20px rgba(108, 99, 255, 0.5)",
                           background: "linear-gradient(135deg,rgba(49, 14, 248, 0.51),rgb(245, 230, 17))",
                          }}
                        >
                          {/* Title */}
                          <h3 className="fw-bold mb-4 border-bottom border-light pb-2">
                            🚀  MayFair Bank of Kenya (Development and support)
                          </h3>
                          {/* Summary Row */}
                          <Row className="mb-4">
                            {/* Project Info */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-3 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">📌 Project Info</h5>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Client:</strong>: MayFair Bank of Kenya, Nairobi Kenya (onsite)</div>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Role:</strong> Senior Developer</div>
                              </div>
                            </Col>
                            {/* Tools */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-4 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">🧰 Technology / Tools</h5>
                                <ul className="mb-0" style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                                  <li>Finacle Scripting</li>
                                  <li>Oracle SQL/PLSQL</li>
                                  <li>IReport Tool</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>

                          {/* Overview */}
                          <div className="bg-white bg-opacity-10 p-4 rounded mb-4 text-white">
                            <h5 className="fw-semibold mb-3 text-info">📄 Project Overview</h5>
                            <div style={{ paddingLeft: "0.5rem", color: "White" }}>
                              MayFair is one of the leading bank sectors in Kenya using Finacle product. The project
                              involves for (10.2.18) deployment and support.
                            </div>
                          </div>
                          {/* Responsibilities */}
                          <div className="bg-white bg-opacity-10 p-4 rounded text-white">
                            <h5 className="fw-semibold mb-3 text-info">🛠️ Key Responsibilities</h5>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                              <li>Requirement gathering for the Client onsite.</li>
                              <li>Create a new custom report For Cif modification deatils to the audit team.</li>
                              <li>Worked on product/custom menu customization in 10X.</li>
                              <li>Worked on I-report.</li>
                              <li>Worked on charges in 10x</li>
                              <li>Debugging the Issues in developed customization and to solve the issues. </li>
                            </ul>
                          </div>

                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="fifth">
                        <div
                          className="p-4 rounded shadow-lg text-white"
                          style={{
                            // background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            boxshadow: "0 8px 20px rgba(108, 99, 255, 0.5)",
                           background: "linear-gradient(135deg,rgba(49, 14, 248, 0.51),rgb(245, 230, 17))",
                          }}
                        >
                          {/* Title */}
                          <h3 className="fw-bold mb-4 border-bottom border-light pb-2">
                            🚀Co-operative bank of Kenya and South Sudan (Development and support)
                          </h3>
                          {/* Summary Row */}
                          <Row className="mb-4">
                            {/* Project Info */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-3 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">📌 Project Info</h5>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Client:</strong>  Co-operative bank of Kenya and South Sudan, Nairobi Kenya (onsite)</div>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Role:</strong> Senior Developer</div>
                              </div>
                            </Col>
                            {/* Tools */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-4 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">🧰 Technology / Tools</h5>
                                <ul className="mb-0" style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                                  <li>Finacle Scripting</li>
                                  <li>Oracle SQL/PLSQL</li>
                                  <li>IReport Tool</li>
                                  <li>FINUX Tool</li>
                                  <li>FIcustomization</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>

                          {/* Overview */}
                          <div className="bg-white bg-opacity-10 p-4 rounded mb-4 text-white">
                            <h5 className="fw-semibold mb-3 text-info">📄 Project Overview</h5>
                            <div style={{ paddingLeft: "0.5rem", color: "White" }}>
                              Corporate bank is one of the leading bank sectors in Kenya using Finacle product. The project
                              involves for (11.11) deployment and support.
                            </div>
                          </div>
                          {/* Responsibilities */}
                          <div className="bg-white bg-opacity-10 p-4 rounded text-white">
                            <h5 className="fw-semibold mb-3 text-info">🛠️ Key Responsibilities</h5>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                              <li>Requirement gathering for the Client onsite.</li>
                              <li>• Create a new custom menu in 11X using FINUX Tool.</li>
                              <li>Worked on product/custom menu customization in 11X.</li>
                              <li>Worked on I-report.</li>
                              <li>Worked on charges in 11x</li>
                              <li>FI – Development and support (Inbound Outbound).</li>
                              <li>C24 Customization.</li>
                              <li>Debugging the Issues in developed customization and to solve the issues. </li>

                            </ul>
                          </div>

                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="sixth">
                        <div
                          className="p-4 rounded shadow-lg text-white"
                          style={{
                            // background: "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
                            boxshadow: "0 8px 20px rgba(108, 99, 255, 0.5)",
                           background: "linear-gradient(135deg,rgba(49, 14, 248, 0.51),rgb(245, 230, 17))",
                          }}
                        >
                          {/* Title */}
                          <h3 className="fw-bold mb-4 border-bottom border-light pb-2">
                            🚀I&M Bank Of Kenya (Development and support)
                          </h3>
                          {/* Summary Row */}
                          <Row className="mb-4">
                            {/* Project Info */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-3 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">📌 Project Info</h5>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Client:</strong>  I&M Bank Of Kenya, Nairobi Kenya (onsite)</div>
                                <div style={{ paddingLeft: "0.5rem", color: "White" }}><strong>Role:</strong>Senior Developer</div>
                              </div>
                            </Col>
                            {/* Tools */}
                            <Col lg={6} className="mb-3">
                              <div className="bg-white bg-opacity-10 p-4 rounded h-100 text-white">
                                <h5 className="fw-semibold mb-3 text-warning">🧰 Technology / Tools</h5>
                                <ul className="mb-0" style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                                  <li>Finacle Scripting</li>
                                  <li>Oracle SQL</li>
                                  <li>IReport Tool</li>
                                  <li>API’S(Inbound, Outbound)</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>

                          {/* Overview */}
                          <div className="bg-white bg-opacity-10 p-4 rounded mb-4 text-white">
                            <h5 className="fw-semibold mb-3 text-info">📄 Project Overview</h5>
                            <div style={{ paddingLeft: "0.5rem", color: "White" }}>
                              I&M Bank Of Kenya one of the leading Bank in Africa using Finacle product. The project
                              involves for 10.2.18 version deployment and support.
                            </div>
                          </div>
                          {/* Responsibilities */}
                          <div className="bg-white bg-opacity-10 p-4 rounded text-white">
                            <h5 className="fw-semibold mb-3 text-info">🛠️ Key Responsibilities</h5>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: 0, color: "White" }}>
                              <li>Requirement gathering for the Client and provide the solution and development support.</li>
                              <li>Creating Custom API, Product API.</li>
                              <li>Worked on product/custom menu customization.</li>
                              <li>Worked on I-report.</li>
                              <li>Worked on charges.</li>
                              <li>FI – Development and support.</li>
                              <li>C24 customization.</li>
                              <li>Debugging the Issues in developed customization and to solve the issues. </li>
                            </ul>
                          </div>

                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
