var dest = "dist";
var src = 'src';

module.exports = {
  src: src,
  dest: dest,
  browserSync: {
    port: 3000,
    open: false,
    server: {
      baseDir: [dest, './']
    }
  },
  clean: {
    dest: [dest + '/**/*']
  },
  static: {
    src: [
      src + '/**/*',
      '!' + src + '/**/*.js'
    ],
    dest: dest
  },
  rollup: {
    src: src + '/**/main.js',
    dest: dest
  }
};
