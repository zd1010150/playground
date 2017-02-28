const dest = 'dist';
const src = 'src';

module.exports = {
  src,
  dest,
  browserSync: {
    port: 3000,
    open: false,
    server: {
      baseDir: [dest, './'],
    },
  },
  clean: {
    dest: [`${dest}/**/*`],
  },
  static: {
    src: [
      `${src}/**/*`,
      `!${src}/**/*.js`,
    ],
    dest,
  },
  rollup: {
    src: `${src}/**/main.js`,
    dest,
  },
};
