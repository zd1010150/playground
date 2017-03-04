const dest = 'dist';
const src = 'src';

module.exports = {
  src,
  dest,
  browserSync: {
    port: 3000,
    open: true,
    server: {
      baseDir: [dest, './'],
      directory: true,
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
};
