const aboutOnClickHandler = function () {
  gsap.to('#about_container', { opacity: 1, duration: 1, scale: 1, display: 'flex' });
  gsap.to('#tech_stack', { opacity: 0, display: 'none', scale: 0, duration: 1 });
  gsap.to('#experience', { opacity: 0, display: 'none', scale: 0, duration: 1 });
  gsap.to('#my_story', { opacity: 0, duration: 1, scale: 0, display: 'none' });
  gsap.to('.main_container', { margin: '85px 0', duration: 1 });

  gsap.to('#experience_header', { fontWeight: 100 });
  gsap.to('#about', { fontWeight: 600 });
  gsap.to('#my_story_header', { fontWeight: 100 });
  gsap.to('#skills', { fontWeight: 100 });
};


const myStoryOnClickHandler = function () {
  gsap.to('#my_story', { opacity: 1, duration: 1, scale: 1, display: 'flex' });

  gsap.to('#about_container', { opacity: 0, scale: 0, display: 'none', duration: 1 });
  gsap.to('#experience', { opacity: 0, display: 'none', scale: 0, duration: 1 });
  gsap.to('#tech_stack', { opacity: 0, display: 'none', scale: 0, duration: 1 });
  gsap.to('.main_container', { margin: 0, duration: 1 });

  gsap.to('#experience_header', { fontWeight: 100 });
  gsap.to('#about', { fontWeight: 100 });
  gsap.to('#my_story_header', { fontWeight: 600 });
  gsap.to('#skills', { fontWeight: 100 });
};

const techStackOnClickHandler = function () {
  gsap.to('#tech_stack', { opacity: 1, display: 'flex', scale: 1, duration: 1 });

  gsap.to('#about_container', { opacity: 0, scale: 0, display: 'none', duration: 1 });
  gsap.to('#my_story', { opacity: 0, duration: 1, scale: 0, display: 'none' });
  gsap.to('#experience', { opacity: 0, display: 'none', scale: 0, duration: 1 });
  gsap.to('.main_container', { margin: 0, duration: 1 });

  gsap.to('#experience_header', { fontWeight: 100 });
  gsap.to('#about', { fontWeight: 100 });
  gsap.to('#my_story_header', { fontWeight: 100 });
  gsap.to('#skills', { fontWeight: 600 });
};

const experienceOnClickHandler = function () {
  gsap.to('#experience', { opacity: 1, display: 'flex', scale: 1, duration: 1 });

  gsap.to('#about_container', { opacity: 0, scale: 0, display: 'none', duration: 1 });
  gsap.to('#my_story', { opacity: 0, duration: 1, scale: 0, display: 'none' });
  gsap.to('#tech_stack', { opacity: 0, display: 'none', scale: 0, duration: 1 });
  gsap.to('.main_container', { margin: 0, duration: 1 });

  gsap.to('#experience_header', { fontWeight: 600 });
  gsap.to('#about', { fontWeight: 100 });
  gsap.to('#my_story_header', { fontWeight: 100 });
  gsap.to('#skills', { fontWeight: 100 });
};
