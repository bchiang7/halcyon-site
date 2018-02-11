import React from 'react';
import Helmet from 'react-helmet';
import './index.scss';
import Demo from '../../static/images/demo.png';

export default () => (
  <div className="site">
    <Helmet>
      <title>Halcyon</title>
      <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/bchiang7/halcyon-vscode/master/images/logo.png" hreflang="en-us" />>
      <meta name="description" content="A minimal, dark theme for Sublime Text, Atom, VS Code, and more." />
      <meta name="keywords" content="halcyon, halcyon theme, dark theme, ayu mirage" />
      <meta property="og:title" content="Halcyon Theme" />
      <meta property="og:description" content="A minimal, dark theme for Sublime Text, Atom, VS Code, and more." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://raw.githubusercontent.com/bchiang7/halcyon-site/master/static/images/og.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:type" content="image/png" />
    </Helmet>

    <header>
      <h1>Halcyon</h1>
      <h2>/* A minimal, dark theme for Sublime Text, Atom, VS Code, and more. */</h2>
      <img src={Demo} alt="screenshot" />
    </header>

    <main>
      <a
        href="https://packagecontrol.io/packages/Halcyon%20Theme"
        target="_blank"
        className="platform"
      >
        <div className="logo sublime" />
        <div className="name">Sublime Text</div>
      </a>
      <a
        href="https://atom.io/themes/halcyon-syntax"
        target="_blank"
        className="platform"
      >
        <div className="logo atom" />
        <div className="name">Atom</div>
      </a>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
        target="_blank"
        className="platform"
      >
        <div className="logo vscode" />
        <div className="name">VS Code</div>
      </a>
      <a
        href="https://github.com/bchiang7/halcyon-iterm"
        target="_blank"
        className="platform"
      >
        <div className="logo iterm" />
        <div className="name">iTerm</div>
      </a>
      <a
        href="https://www.npmjs.com/package/hyper-halcyon-theme"
        target="_blank"
        className="platform"
      >
        <div className="logo hyperterm" />
        <div className="name">Hyper</div>
      </a>
    </main>

    <section className="palette">
      <h3>Click to copy!</h3>
      <button
        className="color bg"
        data-hex="#191E27"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color fg"
        data-hex="#212733"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color active"
        data-hex="#343D4A"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color comment"
        data-hex="#607080"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color grey"
        data-hex="#738699"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color light-grey"
        data-hex="#ABB2BF"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color white"
        data-hex="#D9D7CE"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color accent"
        data-hex="#FFCC66"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color blue"
        data-hex="#5CCFE6"
        aria-label="Copied!"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color green"
        data-hex="#BAE67E"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color orange"
        data-hex="#FFAE57"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color yellow"
        data-hex="#FFD580"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color purple"
        data-hex="#C3A6FF"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color red"
        data-hex="#F07178"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color seafoam"
        data-hex="#95E6CB"
        onClick={e => CopyToClipboard(e)}
      />
      <button
        className="color magenta"
        data-hex="#C678DD"
        onClick={e => CopyToClipboard(e)}
      />
    </section>

    <div id="copy" />

    <footer>
      <div>
        Made by <a href="https://brittanychiang.com">Brittany Chiang</a>
      </div>
    </footer>
  </div>
);

function CopyToClipboard(e) {
  const target = e.target;
  const hex = target.dataset.hex;
  const div = document.getElementById('copy');
  if (window.getSelection) {
    let range = document.createRange();
    range.selectNode(div);
    div.innerHTML = hex;
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    target.setAttribute('data-hex', 'Copied!');
    setTimeout(() => {
      target.dataset.hex = hex;
    }, 2000);
  }
}
