import refLogos from './ref-logos.twig';

import refLogosData from './ref-logos.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/refLogos' };

export const refLogosExample = () => refLogos(refLogosData);
