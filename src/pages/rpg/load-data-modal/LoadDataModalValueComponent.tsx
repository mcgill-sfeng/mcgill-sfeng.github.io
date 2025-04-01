import { Anchor, Container, Image, Text } from '@mantine/core';

import FileUpload from '../../../assets/file-upload.svg';
import styles from './LoadDataModalValueComponent.module.css';
import { Trans, useTranslation } from 'react-i18next';

type LoadDataModalValueComponentProps = {
  error: boolean;
};

export const LoadDataModalValueComponent = ({
  error = false,
}: LoadDataModalValueComponentProps) => {
  const { t } = useTranslation('rpg');

  return (
    <Container
      className={styles['root']}
      fluid
      p='md'
      bd={`2px dashed ${error ? 'rgb(255, 0, 0)' : 'rgb(34, 138, 230)'}`}
    >
      <Image src={FileUpload} alt='File Upload' w={48} />
      <Container ta='center'>
        <Text size='xl'>
          <Trans
            t={t}
            i18nKey='loadDataModal.description'
            components={[<Anchor className={styles['anchor']} />]}
          />
        </Text>
        <Text c='gray'>{t('loadDataModal.label')}</Text>
      </Container>
    </Container>
  );
};
