# Playing with flexbox in a grunt-sass-postcss dev setup
	
## Set up dev environment

- node and npm
- Grunt CLI 

Install packages (listed in `package.json`)

	npm install

Some flexbox fallbacks depend on [modernizr](http://modernizr.com/download/#-flexbox-flexboxlegacy-shiv-cssclasses-testprop-testallprops-domprefixes-load) (be sure to include the `flexbox` tests)

## Credit where it's due...

### Flexbox

- [Putting Flexbox into Practice](http://www.slideshare.net/zomigi/putting-flexbox-into-practice) - slides from a talk by 
Zoe Gillenwater
- [CSS-Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### PostCSS
- ['Breaking up with Sass'](http://benfrain.com/breaking-up-with-sass-postcss/)
- ['Is PostCSS a Game Changer?'](http://articles.dappergentlemen.com/2015/07/24/postcss/)
- ['Should You Abandon Your Preprocessor?'](http://www.sitepoint.com/build-css-preprocessor-postcss/)


## For Sass 

Make sure Ruby and Sass are installed (globally)


## PostCSS

For now, just using these (actually, not using pixrem, but it's set up):

	autoprefixer

	pixrem

## Task running order

Found that postCSS doesn't read scss files - not sure if I've missed something, but for now I'm running this task order:

- `grunt-contrib-sass` to compile sass (`src/scss/import-all.scss` to single css file `src/css/all-pre-postcss.css`) 
- then running `grunt-postcss` (`autoprefixer-core` and `pixrem`) on the compiled css file and dumping final css into `css/all.css` folder




















