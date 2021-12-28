import React from 'react';
import styles from "./card-table.module.css";
const CardTable = (props) => {

  return (
    <table className={styles.table}>
      <thead>
        <th>
          <input type="text" placeholder="Name" />
        </th>
        <th colSpan={2}>
          <input type="text" placeholder="Company" /></th>
        <th>
          <select name="light">
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="Colorful">Colorful</option>
          </select>
        </th>
      </thead>
      <tbody>
        <tr height={20}>
          <td colSpan={2}>
            <input type="text" placeholder="Title" />
          </td>
          <td colSpan={2}>
            <input type="text" placeholder="Email" />
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <input type="text" placeholder="Message" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <td colSpan={2}>
          <button className={styles.file}>No File</button>
        </td>
        <td colSpan={2}> 
          <button className={styles.add}>Add</button>
        </td>
      </tfoot>
    </table>
  )
}

export default CardTable;