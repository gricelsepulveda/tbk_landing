function log_in(){$(".cg-log_on").fadeOut("slow",function(){$(".cg-log_off").fadeIn("slow"),$(".cg-bg_popup, .cg-popup, .cg-wrapper_popup").fadeOut("slow")})}function log_off(){$(".cg-log_off").fadeOut("slow",function(){$(".cg-log_on").fadeIn("slow")})}function form_section_a(){$(".cg-wrapper_form_sections").animate({marginLeft:"0%"},1e3),$(".cg-register #cg-popup, .cg-register .cg-flex_pop").animate({height:"29.5rem"},300),$(".cg-li_section_form").removeClass("cg-li_section_form_active"),$(".cg-li_section_form:nth-of-type(1)").addClass("cg-li_section_form_active")}function form_section_b(){$(".cg-wrapper_form_sections").animate({marginLeft:"-100%"},1e3),$(".cg-register #cg-popup, .cg-register .cg-flex_pop").animate({height:"25rem"},300),$(".cg-li_section_form").removeClass("cg-li_section_form_active"),$(".cg-li_section_form:nth-of-type(2)").addClass("cg-li_section_form_active")}function form_section_c(){$(".cg-wrapper_form_sections").animate({marginLeft:"-202%"},1e3),$(".cg-register #cg-popup, .cg-register .cg-flex_pop").animate({height:"24rem"},300),$(".cg-li_section_form").removeClass("cg-li_section_form_active"),$(".cg-li_section_form:nth-of-type(3)").addClass("cg-li_section_form_active")}$(document).ready(function(){$(".cg-bg_welcome").fadeIn("slow"),$(".cg-bg_welcome").css({display:"flex"}),$(".cg-nav_mobile").click(function(){$(".cg-menu_ul").animate({left:"0"},700)}),$(".cg-menu_ul_close").click(function(){$(".cg-menu_ul").animate({left:"-100vw"},350)}),$(".cg-main_li_tool").click(function(){$(".cg-menu_tool").hasClass("cg-display")?$(".cg-menu_tool").removeClass("cg-display"):$(".cg-menu_tool").addClass("cg-display")}),$(".cg-menu_tool").mouseleave(function(){$(".cg-menu_tool").removeClass("cg-display")}),$(".cg-tool_li").click(function(){$(".cg-menu_tool").removeClass("cg-display"),$(".cg-menu_ul").animate({left:"-100vw"},350)}),$(".cg-main_li_out").hover(function(){$(".cg-menu_tool").removeClass("cg-display")}),$(".cg-main_li_out").click(function(){$(".cg-menu_tool").removeClass("cg-display")}),$(".cg-main_li").click(function(){$(".cg-main_li").removeClass("cg-main_li_active"),$(this).addClass("cg-main_li_active"),$(".cg-main_li_tool").removeClass("cg-main_li_active")}),$(".cg-li_section_form").click(function(){$(".cg-li_section_form").removeClass("cg-li_section_form_active"),$(this).addClass("cg-li_section_form_active")}),$(".cg-profile_body_li").click(function(){$(".cg-profile_body_li").removeClass("cg-profile_body_li_active"),$(this).addClass("cg-profile_body_li_active")}),$("#evalua").click(function(){$(".cg-wrapper_profile_section_carousel").animate({marginLeft:"0%"},700),$(".cg_profile_section_integrations").css({visibility:"hidden"}),$(".cg_profile_section_edit_profile").css({visibility:"hidden"}),$(".cg_profile_section_delete").css({visibility:"hidden"}),$(".cg_profile_section_course").css({visibility:"visible"})}),$("#mis_integraciones").click(function(){$(".cg-wrapper_profile_section_carousel").animate({marginLeft:"-100vw"},700),$(".cg_profile_section_course").css({visibility:"hidden"}),$(".cg_profile_section_edit_profile").css({visibility:"hidden"}),$(".cg_profile_section_delete").css({visibility:"hidden"}),$(".cg_profile_section_integrations").css({visibility:"visible"})}),$("#editar_perfil").click(function(){$(".cg-wrapper_profile_section_carousel").animate({marginLeft:"-200vw"},700),$(".cg_profile_section_integrations").css({visibility:"hidden"}),$(".cg_profile_section_course").css({visibility:"hidden"}),$(".cg_profile_section_delete").css({visibility:"hidden"}),$(".cg_profile_section_edit_profile").css({visibility:"visible"})}),$("#eliminar_perfil").click(function(){$(".cg-wrapper_profile_section_carousel").animate({marginLeft:"-300vw"},700),$(".cg_profile_section_integrations").css({visibility:"hidden"}),$(".cg_profile_section_edit_profile").css({visibility:"hidden"}),$(".cg_profile_section_course").css({visibility:"hidden"}),$(".cg_profile_section_delete").css({visibility:"visible"})}),$(".cg-log_on").click(function(){$(".cg-bg_popup").fadeIn("slow"),$(".cg-login").fadeIn("slow"),$(".cg-login").css({display:"flex"})}),$(".cg-pop_trigger").click(function(){var i;i=$(this).attr("id"),$(".cg-bg_popup").fadeIn("slow"),$(".cg-popup").fadeOut("fast"),$(".cg-"+i).fadeIn("slow"),$(".cg-"+i).css({display:"flex"})}),$(".cg-close_pop").click(function(){$(".cg-bg_popup, .cg-popup, .cg-wrapper_popup").css({display:"none"}),$("#cg-popup, .cg-flex_pop").css({height:""}).delay(1e3),$(".cg-wrapper_form_sections").animate({marginLeft:"0%"},1e3),$(".cg-li_section_form").removeClass("cg-li_section_form_active"),$(".cg-li_section_form:first-of-type").addClass("cg-li_section_form_active")})}),$(document).ready(function(){function i(i){var e=!0;$(".cg-popup").each(function(i){if("none"!=$(this).css("display"))return $("html, body").css({"overflow-y":"hidden",height:"100%"}),void(e=!1)}),e&&$("html, body").css({"overflow-y":"auto",height:"auto"})}var e=$(".cg-popup"),o=window.MutationObserver||window.WebKitMutationObserver,c=new o(i),t={attributes:!0,attributeFilter:["style"]};e.each(function(){c.observe(this,t)})}),$(document).ready(function(){var i=$(".cg-fade_effect");$(window).on("scroll",function(){var e=$(this).scrollTop();i.css({opacity:1-e/300})}),0==$(document).find(".cg-views").length||($(".cg-log_on").addClass("cg_button_different"),$(".cg-log_off").addClass("cg_button_different")),0==$(document).find(".cg-wrapper-profile_body").length?$(".cg-nav_mobile").removeClass("cg-mobile_btn_except"):$(".cg-nav_mobile").addClass("cg-mobile_btn_except");var e=new Waypoint({element:document.getElementById("cg-webpoint_tools"),handler:function(i){$(".cg-tools-animation").addClass("animated fadeInDown"),$(".cg-tools-animation_2").css({visibility:"visible"}),$(".wrapper_flex_tools").css({visibility:"visible"}),$(".cg-tools-animation_2").addClass("animated zoomIn")}}),e=new Waypoint({element:document.getElementById("cg-webpoint_video"),handler:function(i){$(".cg-video-animation").addClass("animated fadeInDown"),$(".cg-video-animation").css({visibility:"visible"}),$(".cg-slider_video_ul").css({visibility:"visible"}),$(".cg-video-animation_2").addClass("animated fadeInDown"),$(".cg-slider_video_aside").css({visibility:"visible"}),$(".cg-video-animation_3").addClass("animated fadeInLeft")}}),e=new Waypoint({element:document.getElementById("cg-webpoint_discover"),handler:function(i){$(".cg-discover-animation").addClass("animated fadeInLeft"),$(".cg-discover-animation").css({visibility:"visible"})}});$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=$(this.hash);if(i=i.length?i:$("[name="+this.hash.slice(1)+"]"),i.length)return $("html, body").animate({scrollTop:i.offset().top},1e3),!1}})})}),$(document).ready(function($){$(".my-slider").unslider({keys:!1,dots:!0,fluid:!0,speed:2e3,delay:8e3,autoplay:!0})});