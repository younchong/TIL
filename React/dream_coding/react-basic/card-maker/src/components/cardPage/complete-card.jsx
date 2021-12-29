import styles from "./card-table.module.css";
import React from 'react';

const CompleteCard = ({information}) => {

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            {information.Name}
          </th>
          <th colSpan={2}>
            {information.Company}
          </th>
          <th>
            {information.Light}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr height={20}>
          <td colSpan={2}>
            Title
          </td>
          <td colSpan={2}>
            Email
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            Message
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            name
          </td>
          <td colSpan={2}> 
            Delete
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
export default CompleteCard;