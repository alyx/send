const html = require('choo/html');
const Component = require('choo/component');

class Footer extends Component {
  constructor(name, state) {
    super(name);
    this.state = state;
  }

  update() {
    return false;
  }

  createElement() {
    const translate = this.state.translate;
    return html`
      <footer
        class="flex flex-col md:flex-row items-start w-full flex-none self-start p-6 md:p-8 font-medium text-xs text-grey-60 dark:text-grey-40 md:items-center justify-between"
      >
        <div class="m-2"></div>
        <ul
          class="flex flex-col md:flex-row items-start md:items-center md:justify-end"
        >
          <li class="m-2">
            <a href="https://www.mozilla.org/about/legal/terms/services/#send">
              ${translate('footerLinkLegal')}
            </a>
          </li>
          <li class="m-2">
            <a href="/legal"> ${translate('footerLinkPrivacy')} </a>
          </li>
          <li class="m-2">
            <a href="https://www.mozilla.org/privacy/websites/#cookies">
              ${translate('footerLinkCookies')}
            </a>
          </li>
          <li class="m-2">
            <a href="https://github.com/alyx/send">GitHub </a>
          </li>
        </ul>
      </footer>
    `;
  }
}

module.exports = Footer;
