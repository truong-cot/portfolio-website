import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import {Fragment} from 'react';
import About from '~/components/About';
import Contact from '~/components/Contact';
import Header from '~/components/Header';
import Nav from '~/components/Nav';
import Experience from '~/components/Experience';
import Services from '~/components/Services';

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Đặng Bá Trường</title>
				<meta
					name='description'
					content='Portfolio Website Đặng Bá Trường'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/portfolio.ico' />
			</Head>
			<div className={styles.container}>
				<Header />
				<About />
				<Experience />
				<Services />
				<Contact />
				<Nav />
			</div>
		</Fragment>
	);
}
