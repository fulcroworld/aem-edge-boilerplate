import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const grid = document.createElement('div');

  [...block.children].forEach((row) => {
    const contentLeft = document.createElement('div');
    contentLeft.className = 'cards-horizontal-content-left';

    const contentRight = document.createElement('div');
    contentRight.className = 'cards-horizontal-content-right';

    [...row.children].forEach((div, index) => {
      if (index < 2) {
        if (div.querySelector('picture')) {
          div.className = 'cards-horizontal-card-image';
        } else {
          div.className = 'cards-horizontal-card-body';
        }

        contentLeft.append(div);
      } else {
        const spanIcon = div.querySelector('.icon');

        if (spanIcon) contentRight.append(spanIcon);
        else contentRight.append(div);
      }
    });

    const gridItem = document.createElement('a');

    gridItem.append(contentLeft, contentRight);

    grid.append(gridItem);
  });

  grid.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  block.textContent = '';
  block.append(grid);
}
