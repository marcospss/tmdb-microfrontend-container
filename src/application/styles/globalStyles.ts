import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /**
     * Based on
     *
     *  - reset.css 2.0 by Eric Meyer
         (public domain)
    *    http://meyerweb.com/eric/tools/css/reset/
    *
    *  - normalize.css 8.0.1 by Nicolas Gallagher and Jonathan Neal
    *    (licensed under MIT)
    *    https://github.com/necolas/normalize.css
    *
    *  - Reboot from Bootstrap 4.5.3
    *    (licensed under MIT)
    *    https://github.com/twbs/bootstrap
    */


/**
 * IE10+ doesn't honor "<meta name="viewport">" in some cases
 */

@-ms-viewport {
  width: device-width;
}


/**
 * general reset
 */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, main {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}


/**
 * HTML5 display-role reset for older browsers
 */

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section,
main, summary {
  display: block;
}


/**
 * inherit box model for all elements
 */

*,
*::before,
*::after {
  box-sizing: inherit;
}


/**
 * html root rules
 * 1. set border-box for inheritance
 * 2. avoid 300ms click delay on touch devices that support the "touch-action"
 *    CSS property
 * 3. Prevent adjustments of font size after orientation changes in IE, on
 *    Windows Phone and iOS.
 * 4. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,
 *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.
 * 5. Change the default tap highlight to be completely transparent in iOS.
 */

html {
  /* 1 */
  box-sizing: border-box;
  /* 2 */
  touch-action: manipulation;
  /* 3 */
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  /* 4 */
  -ms-overflow-style: scrollbar;
  /* 5 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  scroll-behavior: smooth;
  background-color: ${({ theme: { colors } }) => colors.body};
}


/**
 * body rules
 * 1. reset line-height to 1
 * 2. set base font-family to sans-serif
 * 3. Set an explicit initial text-align value so that we can later use the
 *    "inherit" value on things like "<th>" elements.
 */

body {
  /* 1 */
  line-height: 1;
  /* 2 */
  font-family: ${({ theme: { fontFamily } }) => fontFamily.join(',')};
  /* 3 */
  text-align: left;
}

/**
 * Future-proof rule: in browsers that support :focus-visible, suppress the focus outline
 * on elements that programmatically receive focus but wouldn't normally show a visible
 * focus outline. In general, this would mean that the outline is only applied if the
 * interaction that led to the element receiving programmatic focus was a keyboard interaction,
 * or the browser has somehow determined that the user is primarily a keyboard user and/or
 * wants focus outlines to always be presented.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
 * and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/
 */

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}


/**
 * Lists
 */

ol, ul {
  list-style: none;
}


/**
 * Quotes
 */

blockquote, q {
  quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
  content: '';
  content: none;
}


/**
 * Tables
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

caption {
  caption-side: bottom;
}


/**
 * Table Headers
 * 1. Matches default "<td>" alignment by inheriting from the "<body>", or the
 *    closest parent with a set "text-align".
 * 2. Fix alignment for Safari
 */

th {
  /* 1 */
  text-align: inherit;
  /* 2 */
  text-align: -webkit-match-parent;
}


/**
 * Horizontal Lines
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  /* 1 */
  box-sizing: content-box;
  height: 0;
  /* 2 */
  overflow: visible;
}


/**
 * Preformatted Text
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Don't allow content to break outside
 * 3. We have @viewport set which causes scrollbars to overlap content in IE11
 *    and Edge, so we force a non-overlapping, non-auto-hiding scrollbar to
 *    counteract.
 */

pre,
code,
kbd,
samp {
  /* 1 */
  font-family: monospace, monospace;
}

pre {
  /* 2 */
  overflow: auto;
  /* 3 */
  -ms-overflow-style: scrollbar;
}


/**
 * Links
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  /* 1 */
  background-color: transparent;
  /* 2 */
  -webkit-text-decoration-skip: objects;
}


/**
 * 1. Remove the bottom border in Chrome 57- and Firefox 39-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 * 3. Add explicit cursor to indicate changed behavior.
 * 4. Prevent the text-decoration to be skipped.
 */

abbr[title] {
  /* 1 */
  border-bottom: 0;
  /* 2 */
  text-decoration: underline;
  text-decoration: underline dotted;
  /* 3 */
  cursor: help;
  /* 4 */
  text-decoration-skip-ink: none;
}

address {
  font-style: normal;
  line-height: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}


/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}


/**
 * Prevent "sub" and "sup" elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/**
 * Prevent "em" being affected from global reset
 */
em {
  font-style: italic;
}


/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}


/**
 * Hide SVG overflow in IE
 */

svg:not(:root) {
  overflow: hidden;
}


/**
 * Remove the default "border-radius" that macOS Chrome adds.
 * Details at https://github.com/twbs/bootstrap/issues/24093
 */

button {
  border-radius: 0;
}


/**
 * Work around a Firefox/IE bug where the transparent "button" background
 * results in a loss of the default "button" focus styles.
 * Credit: https://github.com/suitcss/base/
 */

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}


/**
 * form element resets
 * 1. Remove the margin in Firefox and Safari
 * 2. inherit font rules
 */

input,
button,
select,
optgroup,
textarea {
  /* 1 */
  margin: 0;
  /* 2 */
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}


/**
 * 1. Prevent a WebKit bug where (2) destroys native "audio" and "video"
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="reset"],
[type="submit"],
/* 1 */
[type="button"] {
  /* 2 */
  -webkit-appearance: button;
}


/**
 * Remove the default appearance of temporal inputs to avoid a Mobile Safari
 * bug where setting a custom line-height prevents text from being vertically
 * centered within the input.
 * See https://bugs.webkit.org/show_bug.cgi?id=139848
 * and https://github.com/twbs/bootstrap/issues/11266
 */

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}


/**
 * 1. Remove the default vertical scrollbar in IE.
 * 2. Textareas should really only resize vertically so they don't break their
 *    (horizontal) containers.
 */

textarea {
  overflow: auto;
  resize: vertical;
}


/**
 * Show the overflow in IE.
 */

button,
input {
  overflow: visible;
}


/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 */

button,
select {
  text-transform: none;
}

/**
 * Set the cursor for non-"<button>" buttons
 * Details at https://github.com/twbs/bootstrap/pull/30562
 */

[role="button"] {
  cursor: pointer;
}


/**
 * Remove the inheritance of word-wrap in Safari.
 * See https://github.com/twbs/bootstrap/issues/24990
 */

select {
  word-wrap: normal;
}


/**
 * Remove inner border and padding from Firefox, but don't restore the outline
 * like Normalize.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}


/**
 * 1. Add the correct box sizing in IE 10-
 * 2. Remove the padding in IE 10-
 */

input[type="radio"],
input[type="checkbox"] {
  /* 1 */
  box-sizing: border-box;
  /* 2 */
  padding: 0;
}


/**
 * Suppress the focus outline on elements that cannot be accessed via keyboard.
 * This prevents an unwanted focus outline from appearing around elements that
 * might still respond to pointer events.
 * Credit: https://github.com/suitcss/base
 */

[tabindex="-1"]:focus {
  outline: 0 !important;
}


/**
 * Browsers set a default "min-width: min-content" on fieldsets,
 * unlike e.g. "<div>"s, which have "min-width: 0" by default.
 * So we reset that to ensure fieldsets behave more like a standard block element.
 * See https://github.com/twbs/bootstrap/issues/12359
 * and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
 */

fieldset {
  min-width: 0;
}


/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from fieldset elements in IE.
 * 3. Set display to block for all browsers
 */

legend {
  /* 1 */
  max-width: 100%;
  white-space: normal;
  /* 2 */
  color: inherit;
  /* 3 */
  display: block;
}


/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}


/**
 * 1. Remove the default vertical scrollbar in IE 10+.
 * 2. Textareas should really only resize vertically so they don't break their
 *    (horizontal) containers.
 */

textarea {
  /* 1 */
  overflow: auto;
  /* 2 */
  resize: vertical;
}


/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  /* 1 */
  box-sizing: border-box;
  /* 2 */
  padding: 0;
}


/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}


/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  /* 1 */
  -webkit-appearance: textfield;
  /* 2 */
  outline-offset: -2px;
}


/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}


/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */

::-webkit-file-upload-button {
  /* 1 */
  -webkit-appearance: button;
  /* 2 */
  font: inherit;
}


/**
 * Correct element display for output
 */

output {
  display: inline-block;
}


/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}


/**
 * Always hide an element with the hidden HTML attribute (from PureCSS).
 * Needed for proper display in IE 10-.
 */

[hidden] {
  display: none;
}
/**
 * adds resets for buttons that are not covered by reset-and-normalize base
 */

[role="button"],
input[type="button"],
input[type="reset"],
input[type="submit"],
button {
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 100%;
  color: inherit;
  text-align: inherit;
  background: none;
  appearance: button;
  user-select: none;

  :not(:disabled) {
    cursor: pointer;
  }

  &:-moz-focusring {
    outline: none;
  }

  &:focus {
    outline: none;
  }

}
/**
 * adds resets for links that are not covered by reset-and-normalize base
 */

a {
  color: inherit;
  text-decoration: none;

  &:-moz-focusring {
    outline:none;
  }

  &:focus {
    outline: none;
  }

}
`;
