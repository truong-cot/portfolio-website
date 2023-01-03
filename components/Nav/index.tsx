import React, {useState} from 'react';

import styles from './Nav.module.scss';
import Link from 'next/link';
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai';
import {BsBookmarks} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';
import clsx from 'clsx';

function Nav() {
	const [active, setActive] = useState<String>('');

	return (
		<nav className={styles.container_nav}>
			<Link
				onClick={() => setActive('')}
				className={clsx(styles.item, {[styles.active]: active === ''})}
				href={'#'}
			>
				<AiOutlineHome />
			</Link>
			<Link
				onClick={() => setActive('about')}
				className={clsx(styles.item, {
					[styles.active]: active === 'about',
				})}
				href={'#about'}
			>
				<AiOutlineUser />
			</Link>
			<Link
				onClick={() => setActive('experience')}
				className={clsx(styles.item, {
					[styles.active]: active === 'experience',
				})}
				href={'#experience'}
			>
				<BsBookmarks />
			</Link>
			<Link
				onClick={() => setActive('services')}
				className={clsx(styles.item, {
					[styles.active]: active === 'services',
				})}
				href={'#services'}
			>
				<RiServiceLine />
			</Link>
			<Link
				onClick={() => setActive('contact')}
				className={clsx(styles.item, {
					[styles.active]: active === 'contact',
				})}
				href={'#contact'}
			>
				<AiOutlineMessage />
			</Link>
		</nav>
	);
}

export default Nav;
