SVIFT.vis.example.sincos = (function (data, container) {
 
  // Module object
  var module = SVIFT.vis.base(data, container);
 
  module.setup = function () {
    module.g.append('circle')
      .attr('r', 5)
      .attr('cy', 20)
      .attr('cx', 0)
      .style('stroke','#000')
      .style('fill','#000');
  };

  module.resize = function () {
    var width = module.container.node().offsetWidth,
      height = module.container.node().offsetHeight;

    module.timeline.circle.obj.interpolate = d3.interpolate(0, height-40);

    if(!module.playState){
      module.draw(module.playHead);
    }
  };

  module.drawCircle = function(t){
    module.g.select('circle').attr('cy', module.timeline.circle.obj.interpolate(
      (Math.sin( (t * Math.PI*20) - (Math.PI/2) ) + 1)/2
    ));
  };

  module.timeline = {
    circle: {start:0, end:10000, func:module.drawCircle, obj:{interpolate:null}}
  };

  return module;
 });