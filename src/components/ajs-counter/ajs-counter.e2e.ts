import { newE2EPage } from '@stencil/core/testing';

describe('ajs-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ajs-counter></ajs-counter>');

    const element = await page.find('ajs-counter');
    expect(element).toHaveClass('hydrated');
  });
});
