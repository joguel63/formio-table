import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { ApiColumns, ColumnsComponents, useColumns, useTableContext } from "../../lib/formio-table";
import { Pet } from "../../types";
import { useEffect } from "react";
import { ActionButtonsComponent, CheckComponent } from "..";

type TableMasterProps = Omit<DataGridProps, "columns"> & {
  columns: ApiColumns[];
};

const columnsComponents: ColumnsComponents = {
  ActionsComponent: ActionButtonsComponent,
  CheckComponent: CheckComponent,
};

export const TableMaster: React.FC<TableMasterProps> = (props) => {
  const getColumns = useColumns(columnsComponents);
  const { rows, setRows } = useTableContext<Pet>();

  useEffect(() => setRows(props.rows as Pet[]), [props.rows, setRows]);

  return <DataGrid {...props} rows={rows} columns={getColumns(props.columns)} />;
};
