import { TableCell, TableRow } from "flowbite-react";
import { ICrypto } from "@/lib/interface";

const TableRows = ({ data, index } : { data: ICrypto, index: number }) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>{index + 1}</TableCell>
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {data.code}
      </TableCell>
      <TableCell>{data.rate}</TableCell>
      <TableCell>${data.cap}</TableCell>
      <TableCell>${data.volume}</TableCell>
    </TableRow>
  )
};

export default TableRows;