module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		browserify: {
			main: {
				files: {
					'build/out.js':  ['src/main.js']
				}
			}
		},

		clean: {
			build: ['build']
		}
	});

	grunt.registerTask('grep', function() {
		var pattern = /_.VERSION/;
		require('fs')
			.readFileSync('./build/out.js')
			.toString()
			.split("\n")
			.forEach(function(l) {
				if (l.match(pattern)) {
					console.log(l);
				}
			});
	});

	grunt.registerTask('default', ['clean', 'browserify', 'grep']);
};
