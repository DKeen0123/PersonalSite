import $ from 'jquery';

class SkillBarAnimation {
  constructor() {
    this.skillBar = $(".skill-container");
    this.skillBarGrowth();
  }


  skillBarGrowth() {
    this.skillBar.each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      },4000);
    });
  }

}

export default SkillBarAnimation;
