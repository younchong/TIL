import React from 'react';
import styles from "./card-table.module.css";
const CardTable = ({onHandle}) => {
  const formRef = React.useRef();
  const handleInput = (e) => {
    e.preventDefault();
    const information = {
      Name: null,
      Company: null,
      Light: null,
      Title: null,
      Email: null,
      Message: null
    }
    for (let i = 0; i < 6; i++) {
      const type = formRef.current[i].placeholder || formRef.current[i].name 
      information[type] = formRef.current[i].value;
    }
    onHandle(information)
    formRef.current.reset();
  }
  const handleImage = (e) => {
    e.preventDefault();

  }

  return (
    <form className={styles.form} ref={formRef}>
        <table className={styles.table}>
      <thead>
        <tr>
        <th>
          <input type="text" placeholder="Name" />
        </th>
        <th colSpan={2}>
          <input type="text" placeholder="Company"/></th>
        <th>
          <select name="Light">
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="Colorful">Colorful</option>
          </select>
        </th>
        </tr>
        
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
            <input type="text" placeholder="Message"/>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
        <td className={styles.label} colSpan={2}>
          <label>
            <span>No File</span>
          <input type="file" name="image_uploads" accept="image/png, image/jpeg" className={styles.file} />
          </label>
          
        </td>
        <td colSpan={2}> 
          <button className={styles.add} onClick={handleInput}>Add</button>
        </td>
        </tr>
      </tfoot>
    </table>
    </form>
    
  )
}

export default CardTable;