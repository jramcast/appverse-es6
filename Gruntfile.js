'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['clean:dist', 'traceur', 'injector:js'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['traceur']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.app %>/images/{,*/}*'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static(config.dist),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: 'dist'
    },

    traceur: {
      options : {
        experimental : true
      },
      custom: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/scripts',
          src: ['**/*.js'],
          dest: '<%= config.dist %>/scripts'
        }]
      },
    },

    // Automatically include all es6 converted files in demo's html as script tags
    injector: {
      options: {
        relative: false,
        transform: function (path) {
            // Demo server directly mounts .tmp folder so the reference to .tmp is not required
            path = path.replace('<%= config.dist %>/', '');
            return '<script src="'+ path +'"></script>';
        }
      },
      js: {
        files: {
            '<%= config.app %>/index.html': '<%= config.dist %>/scripts/**/*.js',
        }
      }
    },
  });


  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:dist',
      'traceur',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });


  grunt.registerTask('default', ['server']);
};
