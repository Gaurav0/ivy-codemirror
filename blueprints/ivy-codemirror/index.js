/* jshint node:true */

module.exports = {
  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'codemirror', target: '~4.8.0' },
      { name: 'ember-cli-codemirror-shim' }
    ]);
  },

  normalizeEntityName: function() {
  }
};
