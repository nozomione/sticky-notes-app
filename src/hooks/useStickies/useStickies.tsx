import { useContext } from 'react';
import { stickiesContext, setStickiesContext } from '../../context';

const useStickies = () => useContext(stickiesContext);
const useSetStickies = () => useContext(setStickiesContext);

export { useStickies, useSetStickies };
 