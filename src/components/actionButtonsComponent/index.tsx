import { Box, Button } from "@mui/material";
import { TableComponentProps } from "../../lib/formio-table";
import { Pet } from "../../types";
import { useMemo } from "react";

enum ActionButtons {
  View = "view",
  Edit = "edit",
  Delete = "delete",
}
export const ActionButtonsComponent: React.FC<TableComponentProps<Pet>> = ({ row, rowItems }) => {
  const hasActions = useMemo(
    () => ({
      view: rowItems.includes(ActionButtons.View),
      edit: rowItems.includes(ActionButtons.Edit),
      delete: rowItems.includes(ActionButtons.Delete),
    }),
    [rowItems]
  );

  const handleView = () => console.log("ver Mascota", row);
  const handleEdit = () => console.log("editar Mascota", row);
  const handleDelete = () => console.log("eliminar Mascota", row);

  return (
    <Box>
      {hasActions.view && <Button onClick={handleView}>Ver</Button>}
      {hasActions.edit && <Button onClick={handleEdit}>Editar</Button>}
      {hasActions.delete && <Button onClick={handleDelete}>Eliminar</Button>}
    </Box>
  );
};
