var bunt = require('bunt');

module.exports = function(grunt) {
  grunt.registerTask('bunt', function() {
    var cb = this.async();
    bunt.build(process.cwd(), cb);
  });
};
