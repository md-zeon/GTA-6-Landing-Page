import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<div>
				<h1 className='text-3xl text-pink font-bold'>
					Welcome to The World of GTA
				</h1>
			</div>
		</main>
	);
};

export default App;
