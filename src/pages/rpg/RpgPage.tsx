import { Button, Text } from '@mantine/core';

import { DataContextProvider, useDataContext } from './context';
import { LoadDataModal } from './load-data-modal';
import { PageOverlay } from './page-overlay';

const PlaceHolderComponent = () => {
  const { data, setData } = useDataContext();

  return (
    <>
      <Text size='xl' mb='md'>
        {data ? JSON.stringify(data, null, 2) : ''}
      </Text>
      <Button onClick={() => setData({ updated: 'updated value' })}>
        Update data
      </Button>
    </>
  );
};

export const RpgPage = () => (
  <DataContextProvider>
    <LoadDataModal />
    <PageOverlay />
    <PlaceHolderComponent />
  </DataContextProvider>
);
