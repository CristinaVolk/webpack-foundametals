import  {memo, useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import colorsPng from '@/assets/colors.png';
import dnaJPG from '@/assets/dna.jpg';
import TimSvg from '@/assets/about.svg';

interface AppProps {
	className?: string;
}

export const App = memo((props: AppProps) => {
	const {className} = props;
	const [count, setCount] = useState<number>(0);

	const decrement = () => {
		setCount(prev => prev - 1);
	}

	const increment = () => {
		setCount(prev => prev + 1);
	}

	if (__PLATFORM__ === 'desktop') {
		return <div>IsDesktopPlatform</div>
	}

	if (__PLATFORM__ === 'mobile') {
		return <div>IsMobilePlatform</div>
	}

	return (
		<div data-testid='App.DataTestId'>
			<h1 data-testid='Platform.DataTestId'>Platform={__PLATFORM__}</h1>
			<img src={colorsPng} width={100} height={100} alt="" />
			<img src={dnaJPG} width={100} height={100} alt="" />

			<TimSvg className={classes.icon} height={100} />

			<nav>
				<ul>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/shop'}>Shop</Link>
					</li>
				</ul>

			</nav>
			<main>
				Hello, counter:
				<h1>{count}</h1>
				<div>
					<button className={classes.decrement} onClick={decrement}>Decrement</button>
					<button className={classes.increment} onClick={increment}>Increment</button>
				</div>
			</main>

			<Outlet />
		</div>
	);
})

