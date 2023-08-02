import { ApiColumns, TableProvider, ColumnsComponents } from "./lib/formio-table";
import { ActionButtonsComponent, CheckComponent } from "./components";
import Columns from "./columns.json";
import { Pet } from "./types";

const rows: Pet[] = [
  {
    name: "Max",
    breed: "Golden Retriever",
    weight: 25,
    owner: "John Doe",
    city: "New York",
    street: "Main Street",
    active: false,
    cancel: false,
    houseNumber: "123",
  },
  {
    name: "Bella",
    breed: "Siamese",
    weight: 8,
    owner: "Jane Smith",
    city: "Los Angeles",
    street: "Maple Avenue",
    active: false,
    cancel: false,
    houseNumber: "456",
  },
  {
    name: "Charlie",
    breed: "Labrador",
    weight: 30,
    owner: "Mike Johnson",
    city: "Chicago",
    street: "Oak Street",
    active: false,
    cancel: false,
    houseNumber: "789",
  },
  {
    name: "Lucy",
    breed: "Poodle",
    weight: 12,
    owner: "Emily Williams",
    city: "Houston",
    street: "Elm Road",
    active: false,
    cancel: false,
    houseNumber: "1010",
  },
  {
    name: "Rocky",
    breed: "German Shepherd",
    weight: 28,
    owner: "David Brown",
    city: "Miami",
    street: "Palm Boulevard",
    active: false,
    cancel: false,
    houseNumber: "555",
  },
  {
    name: "Luna",
    breed: "Bengal",
    weight: 10,
    owner: "Olivia Lee",
    city: "San Francisco",
    street: "Cedar Lane",
    active: false,
    cancel: false,
    houseNumber: "777",
  },
  {
    name: "Oscar",
    breed: "Dachshund",
    weight: 15,
    owner: "Michael Wilson",
    city: "Dallas",
    street: "Pine Street",
    active: false,
    cancel: false,
    houseNumber: "222",
  },
  {
    name: "Daisy",
    breed: "Beagle",
    weight: 18,
    owner: "Sophia Garcia",
    city: "Seattle",
    street: "Birch Avenue",
    active: false,
    cancel: false,
    houseNumber: "909",
  },
  {
    name: "Simba",
    breed: "Siberian Husky",
    weight: 35,
    owner: "Daniel Martinez",
    city: "Phoenix",
    street: "Spruce Drive",
    active: false,
    cancel: false,
    houseNumber: "333",
  },
  {
    name: "Milo",
    breed: "Ragdoll",
    weight: 9,
    owner: "Ava Rodriguez",
    city: "Denver",
    street: "Willow Street",
    active: false,
    cancel: false,
    houseNumber: "444",
  },
];

const columnsComponents: ColumnsComponents = {
  ActionsComponent: ActionButtonsComponent,
  CheckComponent: CheckComponent,
};

function App() {
  return (
    <TableProvider
      rows={rows}
      columns={Columns.components[0]?.components as ApiColumns[]}
      tableProps={{ getRowId: (row: Pet) => row.name, autoHeight: true }}
      columnsComponents={columnsComponents}
    />
  );
}

export default App;
