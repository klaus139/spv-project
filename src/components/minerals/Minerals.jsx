import * as React from 'react';
import Heading from '../common/Heading';
import { useTable } from "react-table";
import { tableData } from '../data/Data';
import '../table/table.css'


const Minerals = () => {

    const data = React.useMemo(() => tableData, []);
    const columns = React.useMemo(
        () => [
          {
            Header: "S/N",
            accessor: "id",
          },
          {
            Header: "CLASSIFICATION",
            accessor: "classification",
          },
          {
            Header: "MINERAL NAME",
            accessor: "MineralName",
          },
          {
            Header: "LOCATION",
            accessor: "Location",
          },
          {
            Header: "APPLICATION", // Corrected casing here
            accessor: "Application",
          },
        ],
        []
      );
      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });


  return (
    <div className='container'>
        <Heading title='EDO STATE MINERAL RESOURCES' subtitle='Explore our vast solid minerals and their locations' />
        <div className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <Link to='/minerals'>
      <button className='btn7'>More Minerals</button>
      </Link> */}
      
      

    </div>
  )
}

export default Minerals