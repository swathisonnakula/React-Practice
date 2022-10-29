import React from "react";
import { Card, CardBody } from "reactstrap";
import { userApi } from "../Services/users.services";
import { useEffect, useState } from "react";

export const UserList = () => {
  // setting the response into setData and data can be used to map
  const [data, setData] = useState([]);

  // API call using useEffect
  useEffect(() => {
    usersData();
  }, []);

  const usersData = () => {
    userApi().then((res) => {
      //console.log(res);
      setData(res);
    });
  };
  // Mapping Api response to display data
  return (
    <div>
      {data?.map((ele, index) => (
        <Card className="shadow-md mb-1 ms-3 border border-0" key={index}>
          <CardBody key={index}>
            <h6>{ele.name}</h6>
            <small className="text-xs text-muted">Email : {ele.email}</small>
            <br />
            <small className="text-xs text-muted">
              City : {ele.address.city}
            </small>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default UserList;
