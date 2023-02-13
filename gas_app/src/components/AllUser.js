import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function AllUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const datas = await axios.get("/api/users/getAllUsers");
        const response = datas.data;
        setUsers(response);
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <div className="row justify-content-center align-item-center">
        <h1>All User's List</h1>
        {loading && <Loader />}
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <Card
                className="card-css"
                style={{
                  width: "30rem",
                  marginRight: "20px",
                  marginBottom: "20px",
                  alignItems: "center",
                }}
              >
                <Card.Body className="">
                  <Card.Title>
                    <span className="titleCss" style={{ color: "orange" }}>
                      User Name:
                    </span>
                    <span className="detailCss"> {user.name}</span>
                  </Card.Title>
                  <Card.Text>
                    <span className="titleCss">User Id: </span>
                    <span className="detailCss">{user._id}</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="titleCss">Email Id: </span>
                    <span className="detailCss"> {user.email}</span>
                  </Card.Text>

                  <Card.Text>
                    <span className="titleCss">Phone No.: </span>
                    <span className="detailCss">{user.phoneNo}</span>
                  </Card.Text>
                  <Card.Text>
                    <span className="titleCss">isAdmin:</span>{" "}
                    <span className="detailCss">
                      {user.isAdmin == false ? (
                        <Badge>No</Badge>
                      ) : (
                        <Badge>Yes</Badge>
                      )}
                    </span>
                  </Card.Text>
                  {/* <Card.Text>
                    <span className="titleCss">Status: </span>
                    <span className="detailCss">
                      {user.status == "cancelled" ? (
                        <Badge bg="danger">Cancelled</Badge>
                      ) : (
                        <Badge bg="success">Confirmed</Badge>
                      )}
                    </span>
                  </Card.Text> */}
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <div>No booking available</div>
        )}
      </div>
    </div>
  );
}

export default AllUser;
