import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';

import {BsFacebook} from 'react-icons/bs';

function Socials() {
	return (
		<div className={styles.socaials_container}>
			<Link href={'/'} target='_blank'>
				<BsFacebook />
			</Link>
			<Link href={'/'} target='_blank'>
				<BsFacebook />
			</Link>
			<Link href={'/'} target='_blank'>
				<BsFacebook />
			</Link>
			<Link href={'/'} target='_blank'>
				<BsFacebook />
			</Link>
		</div>
	);
}

export default Socials;
