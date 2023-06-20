const Navigation = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn) {
		return (

			<nav style={{textAlign: 'right'}}>
				<p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign Out</p>
			</nav>
		
		);
	};
}

export default Navigation;