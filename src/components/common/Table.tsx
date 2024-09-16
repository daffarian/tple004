import clsx from "clsx";
import { Column } from "@/types/Column";
import { TableProps } from "@/types/TableProps";

const Table = <T extends object>({
  columns,
  data,
  className,
  type,
}: TableProps<T>) => {
  const formatValue = (value: any) => {
    if (value instanceof Date) {
      return value.toLocaleDateString(); // Format tanggal menjadi string
    }
    return value; // Return value as is if not a Date
  };

  return (
    <table className={`w-full text-sm text-left text-zinc-300 ${className}`}>
      <thead className="uppercase bg-zinc-800 font-bold text-zinc-200">
        <tr>
          {columns?.map((column) => (
            <th scope="col" className="px-6 py-3 text-nowrap" key={column.key}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr
            className={clsx("", {
              "bg-zinc-800": (rowIndex + 1) % 2 == 0,
            })}
            key={rowIndex}
          >
            {columns?.map((column, index) => (
              <td className="px-6 py-4 text-nowrap" key={index}>
                {formatValue(row[column.key as keyof T])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
