module.exports = function(grunt) {
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        uglify: {
            build: {
                src: 'routes/*.js',
                dest: 'routes/min.js'
            }
        },
		watch: {
			scripts: {
			files: ['routes/*.js'],
			tasks: ['uglify']
			}
		}
	
	});
	


 
grunt.registerTask('default', ['uglify','watch'] ); 
};
