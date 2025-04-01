import { FiDownload } from '@react-icons/all-files/fi/FiDownload';
import styles from './DownloadButton.module.css';
import { useDataContext } from '../context';

export const DownloadButton = () => {
  const { data } = useDataContext();
  const onButtonClick = () => {
    const blob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });
    const a = document.createElement('a');

    a.download = 'gameData.json';
    a.href = URL.createObjectURL(blob);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 200);
  };

  return (
    <FiDownload className={styles['root']} size={40} onClick={onButtonClick} />
  );
};
