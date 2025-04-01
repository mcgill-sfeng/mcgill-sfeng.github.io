import { Modal, Text, FocusTrapInitialFocus } from '@mantine/core';
import { LoadDataModalValueComponent } from './LoadDataModalValueComponent';

import styles from './LoadDataModal.module.css';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropzone } from '@mantine/dropzone';
import { useDataContext } from '../context';

export const LoadDataModal = () => {
  const [error, setError] = useState<string | null>(null);
  const { data, setData } = useDataContext();

  const { t } = useTranslation('rpg');

  const onFileChange = useMemo(
    () => (file: File | null) => {
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        try {
          const json = JSON.parse(content);
          setData(json);
          setError(null);
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message || 'Error parsing JSON');
            setData(null);
          }
        }
      };

      reader.onerror = (e) => {
        console.error('Error reading file:', e.target?.error);
        setError(e.target?.error?.message || 'Error reading file');
        setData(null);
      };

      reader.readAsText(file);
    },
    [setData, setError],
  );

  return (
    <Modal
      className={styles['modal']}
      opened={!data}
      onClose={() => {}}
      centered
      withCloseButton={false}
      size='lg'
      radius='md'
    >
      <FocusTrapInitialFocus />
      <Text size='xl' mb='md'>
        {t('loadDataModal.title')}
      </Text>
      <Dropzone
        maxFiles={1}
        onDrop={(files) => {
          onFileChange(files[0]);
        }}
        onReject={(reject) => {
          setError(reject[0].errors[0].message);
          setData(null);
        }}
      >
        <LoadDataModalValueComponent error={!!error} />
      </Dropzone>
      <Text c='red' className={styles['text']}>
        {error}
      </Text>
    </Modal>
  );
};
