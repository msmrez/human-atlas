import {createRoot} from 'react-dom/client';
import Home from '../app/page';
import {LocaleProvider} from '../app/locale';
import {registerServiceWorker} from '../app/install';
import '../app/globals.css';
registerServiceWorker();
createRoot(document.getElementById('root')!).render(<LocaleProvider><Home/></LocaleProvider>);
