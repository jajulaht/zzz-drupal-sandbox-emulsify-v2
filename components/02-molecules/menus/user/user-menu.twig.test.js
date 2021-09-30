import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../../util/loadYaml';
import { setupTwig, namespaces } from '../../../../.storybook/setupTwig';

setupTwig(Twig);

describe('user-menu', () => {
  it('can render an user menu', async () => {
    const { container } = await render(
      join(__dirname, 'user-menu.twig'),
      loadYaml(join(__dirname, 'user-menu.yml')),
      namespaces,
    );

    expect(container).toMatchUserSnapshot(`
      <div>
        




          
          
                            
          


        <ul
          class="user-menu"
        >
          
                  


          <li
            class="user-menu__item"
          >
            
            
                


            <a
              class="user-menu__link"
              href="#"
            >
              
            Test
        
            </a>
            
                
          </li>
          
                


          <li
            class="user-menu__item"
          >
            
            
                


            <a
              class="user-menu__link"
              href="#"
            >
              
            Number 2
        
            </a>
            
                
          </li>
          
                


          <li
            class="user-menu__item"
          >
            
            
                


            <a
              class="user-menu__link"
              href="#"
            >
              
            Item Number 3
        
            </a>
            
                
          </li>
          
            
        </ul>
        
        

      </div>
    `);
  });
});
