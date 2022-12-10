const Items =[
    {
        name:'Pizza Tuna',
        price:180,
        image:'https://imgs.search.brave.com/D3-_mBegkAemi_Bd0g0NvF-tdF8tZcdHFc9VDRMAqr4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/YWxyYW05eWN4cUhw/cnMwX0FnSEt3SGFF/OCZwaWQ9QXBp',
        category:'pizza',
    },
    {
        name:'Coca Cola',
        price:10,
        image:'https://imgs.search.brave.com/wJgicMxRk9h7GrIcVAPD2TbSnsHRxyJJ2YBUpfFjjEc/rs:fit:670:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/T1p1VjF2TENRa3pl/TV9VanFnZGJBSGFG/UCZwaWQ9QXBp',
        category:'drinks',
    },
    {
        name:'Pizza Margarita',
        price:180,
        image:'https://imgs.search.brave.com/L6XA8bwbyqOBThj45rig3FN-xQivBwLjXr8aAITIJzc/rs:fit:645:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/QTRqWE5ULVkzaEZS/M3pvV0lmMk53SGFG/YyZwaWQ9QXBp',
        category:'pizza',
    },
    {
        name:'Grill Steak',
        price:700,
        image:'https://imgs.search.brave.com/cxAe5iwB6KRlJmKLxSV32t28lKPZ6JkXDIF187IwnoI/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/ajVOSU5UZGRqSXRP/bU5WLXlpWEx3SGFF/OCZwaWQ9QXBp',
        category:'grill',
    },
    {
        name:'Croasant',
        price:250,
        image:'https://imgs.search.brave.com/dIBw1Kbk8AVult1a46jyfzLlrjbLn3PtDTNVRtKeUM8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/VVo1WEN1VFBhTHNj/SGNtdkJDeDdnSGFF/OCZwaWQ9QXBp',
        category:'breakfast',
    },
]


function filterItems(obj){
    const container=document.getElementById('container1');
    container.innerHTML='';
    const filteredItems=Items.filter(item => item.category == obj.id)
console.log(  Items.filter(item => item.category == obj.id));

    
 
    if (filteredItems == '') {
        const p=document.createElement('p').innerText='no items shown';
        container.append(p)
    } else {
        
    for(let i=0;i < filteredItems.length;i++){
        const div=document.createElement('div');
        div.classList.add('item1')

        const img=document.createElement('img');
        img.src=filteredItems[i].image;

        const div1=document.createElement('div');
        div1.classList.add('text-container')

        const h1=document.createElement('h1');
        h1.innerText=filteredItems[i].name;

        const h12=document.createElement('h1');
        h12.innerText=filteredItems[i].price +' Den';

        div1.append(h1) 
        div1.append(h12) ;


        div.append(img);
div.append(div1)
    container.append(div)
}
    }
}

{/* <div class="item1">
<img src="https://imgs.search.brave.com/D3-_mBegkAemi_Bd0g0NvF-tdF8tZcdHFc9VDRMAqr4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/YWxyYW05eWN4cUhw/cnMwX0FnSEt3SGFF/OCZwaWQ9QXBp" alt="">
<div class="text-container">
    <h1>Pizza Tuna</h1>
    <h1>180 Den</h1>
</div>
</div> */}