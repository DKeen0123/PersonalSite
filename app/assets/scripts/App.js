import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import SkillBarAnimation from './modules/SkillBarGrowth';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".about"), "60%");
var stickyHeader = new StickyHeader();
var skillBarAnimation = new SkillBarAnimation();
