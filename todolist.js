let submit=document.getElementById('submit');
let val=document.getElementById('pass');
let dis=document.getElementById('dis');

let tlist=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

submit.addEventListener('submit',function(e)
{   e.preventDefault();
    let vll=val.value;
    //alert(vll);

    tlist.unshift(vll);

    localStorage.setItem('tasks',JSON.stringify(tlist));
    val.value='';

    display(tlist);
})

function display(tt)
{
    if(tlist.length==0) return;

    let view=''
    tlist.forEach((ele,index) => 
        {
            view=view+`<li class="list-group-item list-group-item-dark">
                            <span class="fw-bold">${ele}</span>
                            <button class="btn float-end btn-dark mx-2" onclick='updata(${index})'>
                                <i class="bi bi-x-circle"></i>
                            </button>
                            <button class="btn float-end btn-dark" onclick='updata(${index})' >
                                <i class="bi bi-pencil"></i>
                            </button>
                        </li>`;
        });
        dis.innerHTML=view;
}
display(tlist);

function updata(ind)
{
    //alert(ind)
    //console.log(tlist[ind])
    val.value=tlist[ind];

    tlist.splice(ind,1);
    localStorage.setItem('tasks',JSON.stringify(tlist));
    display(tlist);

    window.location.reload();
}

function deldata()
{
    tlist.splice(ind,1);
    localStorage.setItem('tasks',JSON.stringify(tlist));
    display(tlist);

}