import { useState } from "react";

const TableHead = ({ on, day, setDay, setOn, columns, tableData, setTableData }) => {

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("desc");
 
  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField]?.toString().localeCompare(b[sortField]?.toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
    const handleType = (event) => {
      if (event.target.checked) {
        setOn(false)
        console.log('✅ Checkbox is checked');
      } else {
        setOn(true)
       console.log('⛔️ Checkbox is NOT checked');
      }
      console.log(on)
    }
    const handleType2 = (event) => {
      if (event.target.checked) {
        setDay(false)
        console.log('✅ Checkbox is checked');
      } else {
        setDay(true)
       console.log('⛔️ Checkbox is NOT checked');
      }
      console.log(day)
    }
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };
  return (
    <thead>
      <tr>
      
      <p>Ticket Type:</p>
      <div>
      Overnight!
            <input  
              name="Overnight"
              defaultChecked="true"
              type="checkbox"
              onChange={handleType}
          />
          </div>
          <div>
          &nbsp;&nbsp;Day use!&nbsp;
           <input
             defaultChecked="true"
              name="Day"
              onChange={handleType2}
              type="checkbox"
            />
            </div>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField && sortField === accessor && order === "asc"
              ? "up"
              : sortField && sortField === accessor && order === "desc"
              ? "down"
              : "default"
              : "";
          return (
            <th
              key={accessor}
             
              className={cl}
            > 
             <button className=""  onClick={sortable ? () => handleSortingChange(accessor) : null}>
                 {label}
                 </button> 
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;