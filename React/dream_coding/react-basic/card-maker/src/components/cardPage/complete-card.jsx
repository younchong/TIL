import styles from "./card-table.module.css";
import React from 'react';

const CompleteCard = ({information, onDelete}) => {
  const handleDelete = () => {
    onDelete(information.Name);
  }

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
            {information.Title}
          </td>
          <td colSpan={2}>
            {information.Email}
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            {information.Message}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            name
          </td>
          <td colSpan={2}> 
            <button className={styles.delete} onClick={handleDelete}>Delete</button>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
export default CompleteCard;