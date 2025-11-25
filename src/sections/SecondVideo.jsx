import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SecondVideo = () => {
	const videoRef = useRef(null);
	useGSAP(() => {
		gsap.set(".lucia", { marginTop: "-60vh", opacity: 0 }); // Initial state
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".lucia", // Section to trigger the animation
				start: "top top", // When the top of the section hits the top of the viewport
				end: "bottom top", // When the bottom of the section hits the top of the viewport
				scrub: 2, // Smooth scrubbing, takes 2 seconds to "catch up" to the scrollbar
				pin: true, // Pin the section in place during the animation
			},
		});

		tl.to(".lucia", { opacity: 1, duration: 1, ease: "power1.inOut" }); // Fade in the section

		// Animate the video playback based on scroll position
		videoRef.current.onloadedmetadata = () => {
			tl.to(
				videoRef.current, // Target the video element
				{
					currentTime: videoRef.current.duration, // Animate to the end of the video
					duration: 3, // Duration of the video playback animation
					ease: "power1.inOut",
				},
				"<", // Start this animation at the same time as the previous one
			);
		};
	}, []);
	return (
		<section className='lucia'>
			<div className='h-dvh'>
				<video
					ref={videoRef}
					src='/videos/output2.mp4'
					muted
					playsInline
					preload='auto'
					className='second-vd size-full object-cover'
					style={{ objectPosition: "15% 0%" }}
				/>
			</div>
		</section>
	);
};

export default SecondVideo;
