import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'


import './App.css';

function App() {


  useEffect(() => {
    document.body.style.backgroundColor = "#282c34"

  }, [])

  const schoolImage = "https://www.edustoke.com/assets/uploads-new/nagarjuna-high-school-1495169986-1.png"
  const interImage = "https://hyderabadboss.com/wp-content/uploads/2016/10/Narayana-Junior-College.jpg"
  const engineeringImage = "https://4.bp.blogspot.com/-MJf6pZABTPY/Wju-yqeuU-I/AAAAAAAAArE/pkyJJBqPdgsLVnvsxyn1xtJytrqCRH8KgCLcBGAs/s1600/logo%2Bnew.jpg"
  const userPicture = "/Nikhil picture.jpg"
  return (
    <div className="container-fluid w-75 resume-block p-4 mb-4" >
      <div className="card" >
        <div style={{ overflow: "hidden" }}>
          <img src={userPicture} alt="User" style={{ padding: "20px", marginLeft: "20px", height: "250px", width: "180px", float: "left" }} />
          <h5 className="name p-2" style={{ float: "right", display: "block" }} >Velakurthy Nikhil</h5>
        </div>
        <div className="card-body">

          <div className="card row mt-2 ">
            <div className="card col">
              <h5 className="card-title">PROFILE SUMMARY:</h5>
              <p className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">Over 2.2  years of IT experience in Object Oriented Programming Testing,
                    and Implementation of Client - Server, Distributed Multi-tiered and Large Scale Enterprise
                    applications in Waterfall  methodology using JAVA and JEE technologies.</li>
                  <li className="list-group-item">Expertise in Java programming and have a good understanding on OOPs, Collections,
                    Exceptions Handling,  Multi-Threading and Lambda Expressions.</li>
                  <li className="list-group-item">Experience in understanding and implementing Design Patterns such as Singleton, Prototype,
                    Factory etc.</li>
                  <li className="list-group-item">Experience in developing Web and Enterprise applications using technologies JDBC, JSP and
                    Java Persistence API (JPA).</li>
                  <li className="list-group-item">Experience in Developing Application using frameworks Spring Dependency Injection (DI),
                    IOC, MVC, Boot .</li>
                  <li className="list-group-item">Experience in building flexible, reliable, efficient and secured Enterprise and Web-based
                    applications using Spring MVC and Spring BOOT Web Flow frameworks.</li>
                  <li className="list-group-item">Experience in writing SQL queries in Relational Database management systems like Oracle, MySQL.</li>
                  <li className="list-group-item">Expertise in using Version control Systems likes Git</li>
                  <li className="list-group-item">Having very strong interpersonal skills and ability to work independently and within the group,
                    can learn quickly and easily adaptable to the working environment.</li>
                  <li className="list-group-item">Good exposure in interacting with clients and solving application environment issues and can
                    communicate effectively with people at different levels including stakeholders, internal teams, and
                    the senior management.</li>
                </ul>
              </p>
            </div>

            <div className="card mt-2">
              <h5 className="card-title">TECHNICAL SKILLS:</h5>
              <p className="card-body">
                <ul className="list-group">
                  <li className="list-group-item mb-1"><b>Languages	:</b>	<span className="float-right">Java  and SQL</span></li>
                  <li className="list-group-item mb-1"><b>Java/JEE Technologies	:</b>	<span className="float-right">Java EE, JDBC, JPA</span></li>
                  <li className="list-group-item mb-1"><b>Web Technologies	:</b>	<span className="float-right">HTML5, CSS3, JavaScript,</span></li>
                  <li className="list-group-item mb-1"><b>Web Services	:</b>	<span className="float-right">Restful Web Services</span></li>
                  <li className="list-group-item mb-1"><b>Frameworks	:</b>	<span className="float-right">Spring MVC, Spring Boot</span></li>
                  <li className="list-group-item mb-1"><b>RDBMS	:</b>	<span className="float-right">ORACLE 11g, MySQL</span></li>
                  <li className="list-group-item mb-1"><b>Web/Application Servers	:</b>	<span className="float-right">Apache Tomcat</span></li>
                  <li className="list-group-item mb-1"><b>IDE s	:</b>	<span className="float-right">STS, Eclipse</span ></li>
                  <li className="list-group-item mb-1"><b>Design Patterns	:</b>	<span className="float-right">Singleton, Factory, Prototype Version Controls	:	GIT</span></li>
                </ul>
              </p>
            </div>

            <div className="card mt-2">
              <h5 className="card-title">PROFESSIONAL EXPERIENCE:</h5>
              <p className="card-body">
                <div className="card w-50 border-0" style={{}}>
                  <dl>
                    <div>
                      <dt style={{ float: "left" }}>Project Name  :</dt>
                      <dd style={{ textAlign: "right" }}>OLBB ID Payments</dd><br />
                      <dt style={{ float: "left" }}>Role	:</dt>
                      <dd style={{ textAlign: "right" }}>Java/React Full Stack Developer</dd><br />
                      <dt style={{ float: "left" }}>Client	:</dt>
                      <dd style={{ textAlign: "right" }}>BMO</dd>
                    </div>
                  </dl>
                </div>
                <hr />
                <span style={{ float: "center" }} className="mb-2 mt-1 p-2"><b>Responsibilities:</b></span>
                <ul className="list-group">
                  <li className="list-group-item mb-1">Participated in Waterfall methodology and involved in Design, development, Implementation, and testing of the enterprise applications.</li>
                  <li className="list-group-item mb-1">Used Hibernate, Object/relational mapping (ORM) solution, the technique of mapping data representation from MVC model to Oracle relational data model with a SQL-based schema.</li>
                  <li className="list-group-item mb-1">Created and injected Spring services, Spring controllers, and DAOs to achieve dependency injection and to wire objects of business classes.</li>
                  <li className="list-group-item mb-1">Worked extensively on developing controllers, Interfaces and implementation classes using Spring MVC framework & used Spring Boot based web service through REST.</li>
                  <li className="list-group-item mb-1">Developed, debugged, integrated and deployed applications using STS and used GIT as a Version Control.</li>
                  <li className="list-group-item mb-1">Used Log4j for tracking errors and debugging the code and Resolved bugs and Change Requests to already existing code.</li>
                </ul>
                <div className="card">
                  <p className="card-body">
                    <dl>
                      <dt>Environment:</dt>
                      <dd>Java 1.8, STS, Gitlab 7.0, Oracle 11g, SQL, HTML5, CSS3, JavaScript, Restful,
                        JSON,  JUnit 5, Spring 4.2, Spring Boot, Spring JPA, Hibernate 4, Log4j,Lombok, Tomcat.
                      </dd>
                    </dl>
                  </p>

                </div>
              </p>

            </div>

            <div className="row">
              <div className="card col w-25">
                <img className="card-img-top" src={schoolImage} alt="School" />
                <div className="card-body">
                  <h5 className="card-title">Naagarjuna Model School</h5>
                  <dl>
                    <dt>Passed Out</dt>
                    <dd>2013</dd>
                    <dt>Board</dt>
                    <dd>State</dd>
                    <dt>Marks Obtained</dt>
                    <dd>8.7</dd>
                    <dt>Total Marks</dt>
                    <dd>10</dd>
                  </dl>
                </div>
              </div>
              <div className="card col w-25">
                <img className="card-img-top" src={interImage} alt="College" />
                <div className="card-body">
                  <h5 className="card-title">Narayana Junior College</h5>
                  <dl>
                    <dt>Passed Out</dt>
                    <dd>2015</dd>
                    <dt>Board</dt>
                    <dd>State</dd>
                    <dt>Marks Obtained</dt>
                    <dd>917</dd>
                    <dt>Total Marks</dt>
                    <dd>1000</dd>
                    <dt>Percentage</dt>
                    <dd>91.7</dd>
                  </dl>
                </div>
              </div>
              <div className="card col w-25">
                <img className="card-img-top" src={engineeringImage} alt="Engineering" />
                <div className="card-body">
                  <h5 className="card-title">Sphoorthy Engineering College</h5>
                  <dl>
                    <dt>Passed Out</dt>
                    <dd>2019</dd>
                    <dt>University</dt>
                    <dd>Jawaharlal Nehru Technological University, Hyderabad</dd>
                    <dt>Percentage</dt>
                    <dd>66.8</dd>
                  </dl>
                </div>

              </div>
            </div>



            <div>
              <div className="row">
                <h4>React Samples</h4>
                <div className="d-flex">
                  <div className="card col">

                    <button className="card-title btn btn-primary">
                      <Link to="/expenseTracker" className="a">ExpenseTrackerComponent</Link>
                    </button>
                  </div>
                  <div className="card col">
                    <button className="card-title btn btn-primary">
                      <Link to="/calc" className="a">Calculator</Link>
                    </button>
                  </div>
                  <div className="card col">
                    <button className="card-title btn btn-primary">
                      <Link to="/TictactoeComponent" className="a">Tictactoe</Link>
                    </button>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="d-flex">
                  <div className="card col">
                    <button className="card-title btn btn-primary">
                      <Link to="/weatherapp" className="a">Weather App</Link>
                    </button>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>



      </div>
    </div >
  );
}

export default App;
