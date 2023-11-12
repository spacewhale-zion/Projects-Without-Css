let btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
  if(document.querySelector('.input').value.length==0){
    alert('Plese input a task first');
  }
  else{
    document.querySelector('.task').innerHTML+=
    `
    <div class='task'>
    <span id="taskname">
     ${document.querySelector('.input').value}
    </span>
    </div>

    `;
  }
});
