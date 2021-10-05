import oneColLayout from './one-col-layout.twig';

import oneColLayoutData from './one-col-layout.yml';
import oneColLayoutPinkData from './one-col-layout-pink.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Layouts/OneColumn' };

export const oneColumnLayout = () => oneColLayout(oneColLayoutData);

export const oneColumnLayoutPink = () => oneColLayout(oneColLayoutPinkData);
