import './FaceRecognitionAPI.css';

const FaceRecognitionAPI = ({imgURL, box}) => {
	if (imgURL !== '') {
		return (
			<div className="center ma">
				<div className="absolute mt2">
					<img id='inputImage' alt="Loading" src={imgURL} width='500px'/>
					<div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} />
				</div>
			</div>
		);
	}
	
}
export default FaceRecognitionAPI;