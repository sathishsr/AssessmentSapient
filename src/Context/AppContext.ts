import {createContext} from 'react';
import {NavigationSupport} from '../navigation/NavigationSupport';

const AccessorContext = createContext<Partial<NavigationSupport>>({});

export default AccessorContext;
