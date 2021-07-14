const navigationContainer = document.querySelector('[data-navigation]');
const [...headings] = document.querySelectorAll('h2');

navigationContainer.innerHTML = `
<ul class="navigation">
  ${headings.map(heading => {
  const anchorLink = heading.closest('section[id]').id;

  return `
    <li class="navigation__item">
      <a href="${'#' + anchorLink}">${heading.innerHTML}</a>
    </li>`;
}).join('')}
</ul>`;
