import { Text } from "@mantine/core";

import { DataContextProvider, useDataContext } from "./context";
import { LoadDataModal } from "./load-data-modal";

const PlaceHolderComponent = () => {
  const { data } = useDataContext();
  return (
    <Text size="xl" mb="md">
      {data ? JSON.stringify(data, null, 2) : ""}
    </Text>
  );
};

export const RpgPage = () => (
  <DataContextProvider>
    <LoadDataModal />
    <PlaceHolderComponent />
  </DataContextProvider>
);
