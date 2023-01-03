import React from 'react';

import styles from './About.module.scss';
import Image from 'next/image';
import images from '~/constants/images';
import {FaAward} from 'react-icons/fa';

function About() {
	return (
		<section id='about'>
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className={styles.container}>
				<div className={styles.about_me}>
					<div className={styles.box_image}>
						<Image
							className={styles.image}
							src={images.me}
							alt='image me'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</div>
				<div className={styles.about_content}>
					<div className={styles.about_carts}>
						<article className={styles.cart}>
							<FaAward className={styles.icon_about} />
							<h5>Project</h5>
							<small>100+ Compeleted</small>
						</article>
						<article className={styles.cart}>
							<FaAward className={styles.icon_about} />
							<h5>Project</h5>
							<small>100+ Compeleted</small>
						</article>
						<article className={styles.cart}>
							<FaAward className={styles.icon_about} />
							<h5>Project</h5>
							<small>100+ Compeleted</small>
						</article>
					</div>
					<p className={styles.des}>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Sequi velit aliquam maiores repellat laborum!
						Illum tenetur pariatur, nemo earum provident ducimus
						corporis consectetur eos enim deserunt incidunt quae
						inventore cupiditate.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
