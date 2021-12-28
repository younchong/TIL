import React from 'react';
import styles from "./card-table.module.css";
const CardTable = (props) => {

  return (
    <table>
      <th>Name</th><th>Company</th><th>Light</th>
      <tbody>
        <tr>
          <td>Title</td><td>Email</td>
        </tr>
        <tr>
          <td>Message</td>
        </tr>
      </tbody>
      <tr>
        <td>No file</td><td>Add</td>
      </tr>
    </table>
  )
}

export default CardTable;