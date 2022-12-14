import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next List | Home</title>
        <meta name='keywords' content='next list' />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Excepteur consectetur pariatur proident excepteur minim commodo ad
          labore voluptate enim cupidatat ea. Adipisicing nulla incididunt
          eiusmod occaecat et ea Lorem laboris fugiat sint ad consequat nostrud
          laborum. Enim qui irure non aliquip consectetur quis aliqua
          exercitation excepteur. Mollit est mollit dolore dolore enim labore
          consectetur in magna. Qui aliqua incididunt ut qui. Id adipisicing
          duis commodo id dolore.
        </p>
        <p className={styles.text}>
          Excepteur consectetur pariatur proident excepteur minim commodo ad
          labore voluptate enim cupidatat ea. Adipisicing nulla incididunt
          eiusmod occaecat et ea Lorem laboris fugiat sint ad consequat nostrud
          laborum. Enim qui irure non aliquip consectetur quis aliqua
          exercitation excepteur. Mollit est mollit dolore dolore enim labore
          consectetur in magna. Qui aliqua incididunt ut qui. Id adipisicing
          duis commodo id dolore.
        </p>
        <Link href='/list'>
          <a className={styles.btn}>List</a>
        </Link>
      </div>
    </>
  );
}
