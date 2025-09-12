import { css } from '../../styled-system/css';

export const HeaderBar = () => {
	return (
		<header id='top'>
			<div
				className={css({
					fontFamily: 'Monoton',
					fontSize: '2xl',
				})}
			>
				<h1 id='no' data-effect-enabled='true'>
					Matt
				</h1>
				<h1 id='vacancy'>Allen</h1>
			</div>
		</header>
	);
};
