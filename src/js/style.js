var page = 1;
var limit = 25;
var news = 1;

const div = document.querySelector('.news_title');

const getData = async () => {

   var res =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${page}`)
   var data = await res.json();

   data.map((item)=>{

       const htmlData = `
       <div class="div_first">
        <div>
          ${news++}
       </div>
       <div>
           <p>Title : ${item.title}</p>
           <p>${item.body}</p>
      </div>
   </div>`;

   div.insertAdjacentHTML('beforeend',htmlData);

   })
}

getData();

const showData = () =>
{
    setTimeout(() => {
        page++;
        getData();
    }, 2000);
}

window.addEventListener('scroll',()=>{

    const {scrollHeight,clientHeight,scrollTop} = document.documentElement;
     if(scrollTop+clientHeight >= scrollHeight)
     {
 
        showData();
     }

});