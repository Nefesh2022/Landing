import styles from './Header.module.css';
import cn from '@/utils/classNames';
import Img from '../Img';
import nefesh from '../../public/assets/Nefesh.jpg'

const Header = () => {

    return (
        <main className={styles.container}>
            <Img
                src={nefesh}
                alt='Nefesh'
                width={250}
                height={250}
            />
        </main>
    );
};

export default Header;