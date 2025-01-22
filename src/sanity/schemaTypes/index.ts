import { type SchemaTypeDefinition } from 'sanity';

import hero from './landingPage_sections/hero';
import cards from './landingPage_sections/cards';

import product from './product';
import landingPage from './landingPage';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,landingPage, hero, cards],
};
