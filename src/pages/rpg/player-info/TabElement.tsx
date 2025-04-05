import { Box, Container, ContainerProps, Image } from '@mantine/core';
import { useState } from 'react';
import styles from './TabElement.module.css';

type TabProps = {
  icon: string;
  index: number;
} & ContainerProps;

export const TabElement = ({ icon, bg, index, ...restProps }: TabProps) => {
  const [open, setOpen] = useState(false);

  const togglePanel = () => {
    setOpen(!open);
  };

  return (
    <Container className={styles['root']} p={0} {...restProps} w={32} h={32}>
      <Container
        className={styles['inner-container']}
        data-selected={open}
        p={0}
        bg={bg}
        styles={{
          transform: `translateX(-68px) translateY(${index * -33 - 1}px);`,
        }}
      >
        {open ? (
          <Box className={styles['box']} w={100} h={100}>
            <Image src={icon} w={32} p={4} onClick={togglePanel} />
          </Box>
        ) : (
          <Image src={icon} w={32} p={4} onClick={togglePanel} />
        )}
      </Container>
    </Container>
  );
};
