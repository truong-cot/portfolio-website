import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';

function CTA() {
	return (
		<div className={styles.cta}>
			<a href='../../public/static/files/cv.pdf' download className='btn'>
				Download CV
			</a>
			<Link className='btn btn-primary' href={'#contact'}>
				Let is Talk
			</Link>
		</div>
	);
}

export default CTA;
