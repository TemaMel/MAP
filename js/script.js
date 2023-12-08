const geo1 = document.querySelector('.geo1'),
      geo2 = document.querySelector('.geo2'),
      geo3 = document.querySelector('.geo3'),
      geo4 = document.querySelector('.geo4'),
      geo5 = document.querySelector('.geo5'),
      geo6 = document.querySelector('.geo6'),
      geo7 = document.querySelector('.geo7'),
      geo8 = document.querySelector('.geo8'),
      geo9 = document.querySelector('.geo9'),
      geo10 = document.querySelector('.geo10'),
      btn1 = document.querySelector('.btn1'),
      btn2 = document.querySelector('.btn2'),
      btn3 = document.querySelector('.btn3'),
      btn4 = document.querySelector('.btn4'),
      btn5 = document.querySelector('.btn5'),
      btn6 = document.querySelector('.btn6'),
      btn7 = document.querySelector('.btn7'),
      btn8 = document.querySelector('.btn8'),
      btn9 = document.querySelector('.btn9'),
      btn10 = document.querySelector('.btn10'),
      videoBg = document.querySelector('.video_bg'),
      video = document.querySelector('.video'),
      close = document.querySelector('.close'),
      close2 = document.querySelector('.close2'),
      close3 = document.querySelector('.close3'),
      close4 = document.querySelector('.close4'),
      close5 = document.querySelector('.close5'),
      close6 = document.querySelector('.close6'),
      close7 = document.querySelector('.close7'),
      close8 = document.querySelector('.close8'),
      close9 = document.querySelector('.close9'),
      close10 = document.querySelector('.close10'),
      video1 = document.querySelector('.video1'),
      video2 = document.querySelector('.video2'),
      video3 = document.querySelector('.video3'),
      video4 = document.querySelector('.video4'),
      video5 = document.querySelector('.video5'),
      video6 = document.querySelector('.video6'),
      video7 = document.querySelector('.video7'),
      video8 = document.querySelector('.video8'),
      video9 = document.querySelector('.video9'),
      video10 = document.querySelector('.video10'),
      question = document.querySelector('.question');

videoBg.playbackRate = 0.9;


window.addEventListener('load', function() {
    geo1.classList.add('geo1_active'),
    btn1.classList.add('btn1_active');
})

btn1.addEventListener('click', function() {
    video.classList.add('video_active');
})

btn2.addEventListener('click', function() {
    videoBg.pause();
    video2.classList.add('video2_active')
})

btn3.addEventListener('click', function() {
    videoBg.pause();
    video3.classList.add('video3_active')
})
btn4.addEventListener('click', function() {
    videoBg.pause();
    video4.classList.add('video4_active')
})
btn5.addEventListener('click', function() {
    videoBg.pause();
    video5.classList.add('video5_active');
})
btn6.addEventListener('click', function() {
    videoBg.pause();
    video6.classList.add('video6_active');
})
btn7.addEventListener('click', function() {
    videoBg.pause();
    video7.classList.add('video7_active');
})
btn8.addEventListener('click', function() {
    videoBg.pause();
    video8.classList.add('video8_active');
})
btn9.addEventListener('click', function() {
    videoBg.pause();
    video9.classList.add('video9_active');
})
btn10.addEventListener('click', function() {
    videoBg.pause();
    video10.classList.add('video10_active');
})


close.addEventListener('click', function() {
    video.classList.remove('video_active'),
    videoBg.play();
    video1.pause();
    window.scroll(0, 1000);
    geo2.classList.add('geo2_active'),
    btn2.classList.add('btn2_active');
})
close2.addEventListener('click', function() {
    videoBg.play();
    video2.classList.remove('video2_active');
    geo3.classList.add('geo3_active'),
    btn3.classList.add('btn3_active');
})
close3.addEventListener('click', function() {
    videoBg.play();
    video3.classList.remove('video3_active');
    geo4.classList.add('geo4_active'),
    btn4.classList.add('btn4_active');
})
close4.addEventListener('click', function() {
    videoBg.play();
    video4.classList.remove('video4_active');
    geo5.classList.add('geo5_active'),
    btn5.classList.add('btn5_active');
})
close5.addEventListener('click', function() {
    videoBg.play();
    window.scroll(0, 0);
    video5.classList.remove('video5_active');
    question.classList.add('question_active')
    geo6.classList.add('geo6_active'),
    btn6.classList.add('btn6_active');
})
close6.addEventListener('click', function() {
    videoBg.play();
    video6.classList.remove('video6_active');
    geo7.classList.add('geo7_active'),
    btn7.classList.add('btn7_active');
})
close7.addEventListener('click', function() {
    videoBg.play();
    video7.classList.remove('video7_active');
    geo10.classList.add('geo10_active'),
    btn10.classList.add('btn10_active');
})
close10.addEventListener('click', function() {
    videoBg.play();
    video10.classList.remove('video10_active');
    geo8.classList.add('geo8_active'),
    btn8.classList.add('btn8_active');
})
close8.addEventListener('click', function() {
    video8.classList.remove('video8_active');
    geo9.classList.add('geo9_active'),
    btn9.classList.add('btn9_active');
})
close9.addEventListener('click', function() {
    video9.classList.remove('video9_active');
})



