import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const PostCard = () => {
	const videoRef = useRef(null); // Reference to the video element

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".post-card", // Section trigger for the animation
				start: "top center", // Animation starts when the top of the section hits the center of the viewport
				end: "bottom center", // Animation ends when the bottom of the section hits the center of the viewport
				scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
			},
		});

		// Animate the video playback based on scroll position
		videoRef.current.onloadedmetadata = () => {
			tl.to(
				videoRef.current, // Target the video element
				{
					currentTime: videoRef.current.duration, // Animate to the end of the video
					duration: 3, // Duration of the video playback animation
					ease: "power1.inOut",
				},
				"<",
			);
		};
	});
	return (
		<section className='post-card'>
			<div className='animated-gradient-bg' />

			<div className='post-card-wrapper group hover:rotate-1 hover:scale-[1.02] transition duration-700'>
				<img
					src='/images/overlay.webp'
					alt='Overlay Image'
				/>
				<video
					ref={videoRef}
					muted
					playsInline
					preload='auto'
					autoPlay
					src='/videos/postcard-vd.mp4'
				/>
			</div>

			<button className='group-hover:bg-yellow transition duration-700'>
				Explore Leonida Keys
			</button>
		</section>
	);
};

export default PostCard;
