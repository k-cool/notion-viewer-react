import { Global } from '@emotion/react';
import Router from 'router';
import reset from 'styles/reset';

const App = () => (
	<>
		<Global styles={reset} />
		<Router />
	</>
);

export default App;
