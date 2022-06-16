import React from "react";
import "./Section.css";

const Section = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div className="section-table">
        <table className="table">
          <tr>
            <td>name:</td>
            <td>last name:</td>
            <td>age:</td>
            <td>id:</td>
          </tr>
          {user.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;
