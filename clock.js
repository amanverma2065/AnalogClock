      let hr =document.querySelector('#hour');
      let mn =document.querySelector('#min');
      let sc =document.querySelector('#sec');

      setInterval(()=>{
      let day = new Date();
      let hh = day.getHours()*30;
      let mm = day.getMinutes()*6;
      let ss =day.getSeconds()*6;

      hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;

      })
      let hours =document.getElementById('hours');
      let minutes =document.getElementById('minutes');
      let second =document.getElementById('seconds');
      let ampm =document.getElementById('ampm');
  
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s =new Date().getSeconds();
  
     