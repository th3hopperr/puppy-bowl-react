import React from 'react';
import { createRoot } from 'react-dom/client';
import { fetchAllPlayers } from './componets/api.js';
import { AllPuppies } from './componets/AllPuppies.js';
import { Main } from './componets/main.js';

createRoot(document.querySelector('#root')).
render(<Main />);
