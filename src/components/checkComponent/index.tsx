import { Box, IconButton } from "@mui/material";
import { CheckCircleOutline, HighlightOff, CircleOutlined } from "@mui/icons-material";
import { TableComponentProps, useTableContext } from "../../lib/formio-table";
import { Pet } from "../../types";
import { useMemo } from "react";

enum ActionButtons {
  Active = "active",
  Cancel = "cancel",
}
export const CheckComponent: React.FC<TableComponentProps<Pet>> = ({ row, rowItems }) => {
  const key = rowItems[0];
  const { rows, setRows } = useTableContext<Pet>();

  const actionsIcons = useMemo(() => {
    return {
      active: !!row[key as keyof Pet] ? <CheckCircleOutline color="success" /> : <CircleOutlined />,
      cancel: !!row[key as keyof Pet] ? <HighlightOff color="error" /> : <CircleOutlined />,
    };
  }, [row, rowItems]);

  const hasActions = useMemo(
    () => ({
      active: rowItems.includes(ActionButtons.Active),
      cancel: rowItems.includes(ActionButtons.Cancel),
    }),
    [rowItems]
  );

  const changeStatus = () => {
    const newRows: Pet[] = rows.map((item) => {
      if (item.name === row.name) return { ...item, [key]: !item[key as keyof Pet] };
      return item;
    });
    setRows(newRows);
  };
  const handleView = () => {
    console.log("Activar Mascota", row);
    changeStatus();
  };
  const handleEdit = () => {
    console.log("Cancelar Mascota", row);
    changeStatus();
  };

  return (
    <Box>
      {hasActions.active && <IconButton onClick={handleView}>{actionsIcons.active}</IconButton>}
      {hasActions.cancel && <IconButton onClick={handleEdit}>{actionsIcons.cancel}</IconButton>}
    </Box>
  );
};
