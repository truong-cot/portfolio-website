import React from 'react';

import styles from './Header.module.scss';
import CTA from './CTA';
import Image from 'next/image';
import images from '~/constants/images';
import Link from 'next/link';
import Socials from './Socials';

function Header() {
	return (
		<header className={styles.container}>
			<h5>Xin chào, Tôi là ...</h5>
			<h1>Đặng Bá Trường</h1>
			<h5 className='text-light'>Front End Developer</h5>
			<CTA />

			<div className={styles.me}>
				<div className={styles.box_image}>
					<Image
						src={images.me}
						alt='avatar'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>

			<Link href={'#contact'} className={styles.scroll_down}>
				Scroll Down
			</Link>

			<Socials />
		</header>
	);
}

export default Header;
