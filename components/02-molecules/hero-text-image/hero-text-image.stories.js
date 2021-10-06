import heroTextImage from './hero-text-image.twig';

import heroData from './hero-text-image.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero-text-image' };

export const HeroImage = () => heroTextImage(heroData);
