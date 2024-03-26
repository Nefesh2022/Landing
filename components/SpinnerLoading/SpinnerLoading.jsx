import styles from './SpinnerLoading.module.css'
import PropTypes from 'prop-types';

const SpinnerLoading = ({ width, height }) => {
    return (
        <main className={styles.container}>
            <span className={styles.loading} style={{ width: width, height: height }} />
        </main>
    )
}

SpinnerLoading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};

SpinnerLoading.defaultProps = {
    width: '1rem',
    height: '1rem'
};

export default SpinnerLoading
