module.exports = function() {

        if (this.source=='client') {
          this.page = 1;
          return;
        }

        var elapsed;

        this.lastKeyStrokeAt = new Date();

        setTimeout(function() {
          elapsed = new Date() - this.lastKeyStrokeAt;

          if (elapsed>=this.options.delay) {
            this.page = 1;
            this.loading = true;
            this.getData().done(function(data) {
              this.setData(data);
              this.loading = false;
            }.bind(this));
          }
        }.bind(this),this.options.delay);

}
