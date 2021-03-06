module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    recess: {
      options: {
        compile: true
      },
      compileless: {
        options:{
          compress:true
        },
        src: [
        "bower_components/responsive-nav/responsive-nav.css",
        'app/less/app.less'
        ],
        dest: 'app/app.css'
      }
    },

    concat:{
      compilejs:{
        src:[
          "bower_components/jquery/jquery.min.js",
          "bower_components/jquery.scrollTo/jquery.scrollTo.min.js",
          "bower_components/angular/angular.min.js",
          "bower_components/angular-translate/angular-translate.min.js",
          "bower_components/responsive-nav/responsive-nav.js",
          //"bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js",
          //"bower_components/angular-translate-storage-local/angular-translate-storage-local.min.js",
          "app/js/app.js",
          "app/js/i18n/locale.js"
        ],
        dest:"app/js/app.cc.js"
      }
    },
    uglify:{
      doit:{
        src:["app/js/app.cc.js"],
        dest:"app/js/app.min.js"
      }
    },

    watch:{
      recess:{
        files:["app/less/*"], tasks:['recess']
      },
      concat:{
        files:["app/js/**/*.js"], tasks:['concat']
      },
      html:{
        files:"app/**/*.html",
        tasks:[]
      },
      options:{spawn:false, livereload:true}
    }
  });

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('dist-css', ['recess']);
  grunt.registerTask('default', ['recess', 'concat']);

};