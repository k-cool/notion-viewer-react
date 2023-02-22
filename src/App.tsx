import { Global } from '@emotion/react';
import Router from 'router';
import reset from 'styles/reset';
import global from 'styles/global';

const App = () => (
	<>
		<Global styles={reset} />
		<Global styles={global} />
		<Router />
	</>
);

export default App;
