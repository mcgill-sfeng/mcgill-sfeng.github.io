import { Stack } from '@mantine/core';
import Dice from '../../../assets/dice.svg';
import Backpack from '../../../assets/backpack.svg';
import Weapons from '../../../assets/weapons.svg';
import styles from './PlayerTabs.module.css';
import { TabElement } from './TabElement';

export const PlayerTabs = () => {
  return (
    // <Tabs color='black' orientation='vertical' defaultValue=''>
    //   <Tabs.List>
    //     <Tabs.Tab
    //       value='roll'
    //       leftSection={<GiInvertedDice6 size={24} />}
    //       bg='#10AC84'
    //       size={20}
    //     />
    //     <Tabs.Tab
    //       value='inventory'
    //       leftSection={<TiClipboard size={24} />}
    //       bg='#FF9F43'
    //     />
    //     <Tabs.Tab
    //       value='weapons'
    //       leftSection={<GiCrossedSwords size={24} />}
    //       bg='#EE5253'
    //     />
    //   </Tabs.List>
    // </Tabs>
    /* Tabs */
    <Stack className={styles['root']} gap={0} w={32}>
      <TabElement icon={Dice} bg='#10AC84' index={0} />
      <TabElement icon={Backpack} bg='#FF9F43' index={1} />
      <TabElement icon={Weapons} bg='#EE5253' index={2} />
    </Stack>
  );
};
