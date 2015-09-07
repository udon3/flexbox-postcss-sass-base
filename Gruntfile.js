module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

    //concatenate scss files in order
    // concat: {
    //   options: {
    //     sourceMap: true
    //   },
    //   dist: {
    //     src: [
    //       'src/scss/_normalize.scss',
    //       'src/scss/_base.scss',
    //       'src/scss/_flexbox.scss'
    //     ],
    //     dest: 'src/scss/all.scss'
    //   }
    // },

    //compile CSS
    sass: {
      options: {
        
      },
      dist: {
        src: 'src/scss/import-all.scss',
        dest: 'src/scss/_pre-postcss.css', //postCSS wont see a scss file - needs to be css
      },
    },
    //postCSS runs on the concatenated, compiled CSS file in /src/css/, 
    //and generates new (and final) css file in /dist/css/
    postcss: {
      options: {
        map: true, // inline sourcemaps

        processors: [
          //require('postcss-mixins'),
          //require('postcss-simple-vars'),
          //require('postcss-nested'),
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'src/scss/_pre-postcss.css', 
        dest: 'src/css/all.css'
      }
    },

		connect: {
			server: {
				options: {
					port: 8000,
					base: 'src/',
					livereload: true
				}
			}
		},

		watch: {
      options: {
        livereload: true
      },
			scss: {
				files: 'src/scss/**/*.scss',
				tasks: ['sass', 'postcss'],
				options: {}
			},
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: [],
				options: {
					interrupt: true,
				},
			},
			html: {
				files: ['src/**/*.html']
			}
		},
		

	});
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('css', ['sass', 'postcss']);
};


