import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class SkillBarAnimation {
  constructor() {
    this.skillBar = $(".skill-container");
    this.skills = $(".skills");
    this.skillBarWaypoint();
  }

  skillBarWaypoint() {
    var that = this;
    new Waypoint({
      element: that.skillBar[0],
      handler: function(){
        that.skillBar.each(function(){
          $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
          },4000);
        });
      },
      offset: "80%"
    })
  }

}

export default SkillBarAnimation;
