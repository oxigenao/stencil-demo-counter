import { newSpecPage } from '@stencil/core/testing';
import { AjsCounter } from './ajs-counter';

describe('ajs-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AjsCounter],
      html: `<ajs-counter></ajs-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <ajs-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ajs-counter>
    `);
  });
});
