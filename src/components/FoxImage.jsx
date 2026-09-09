import { useEffect, useState } from "react";
import foxLogo from "../assets/fox-logo.png";

const API_URL = "https://randomfox.ca/floof/";

function FoxImage() {
	const [image, setImage] = useState(foxLogo);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch image");
				}
				return res.json();
			})
			.then((data) => setImage(data.image))
			.catch((e) => console.log(`ERROR: ${e}`));
	}, []);

	return (
		<div>
			<p>Learn more about us!</p>
			<img src={image} alt="fox logo" />
		</div>
	);
}

export default FoxImage;
