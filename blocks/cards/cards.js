import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');

    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'cards-card';

    const cardOverlay = document.createElement('div');
    cardOverlay.className = 'cards-card-overlay';

    cardWrapper.append(cardOverlay);

    while (row.firstElementChild) {
      cardWrapper.append(row.firstElementChild);
      li.append(cardWrapper);
    }

    [...cardWrapper.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';

      else if (div.className === '') div.className = 'cards-card-body';
    });

    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  block.textContent = '';
  block.append(ul);
}
