import twoColLayout from './two-col-layout.twig';

import twoColLayoutData from './two-col-layout.yml';
import twoColLayoutPinkData from './two-col-layout-pink.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Layouts/TwoColumn' };

export const twoColumnLayout = () => twoColLayout(twoColLayoutData);

export const twoColumnLayoutPink = () => twoColLayout(twoColLayoutPinkData);
