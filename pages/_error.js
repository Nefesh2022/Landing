import styles from '@/styles/Error.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorScreen = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [])

  return (
    <main className={styles.container}>
      Lo sentimos, <br />
      ocurrió un error
    </main>
  );
};

export default ErrorScreen;
