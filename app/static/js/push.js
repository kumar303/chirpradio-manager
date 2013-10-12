// async load template
$.ajax({
  url: '/static/hbs/push.html',
  async: false,
  dataType: 'text',
  success: function(response) {
    App.PushView = Em.View.extend({
      template: Em.Handlebars.compile(response),
    });
  }
});

App.PushController = Em.Controller.extend({
  nextPath: 'success',
  status: null,
});