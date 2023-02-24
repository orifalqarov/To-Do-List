window.addEventListener('DOMContentLoaded', ()=>{
    const title=document.querySelector('#title'),
        author=document.querySelector('#author'),
        year=document.querySelector('#year'),
        btn=document.querySelector('.btn'),
        booklist=document.querySelector('#book-list');

        btn.addEventListener('click',(Event)=>{
            Event.preventDefault()
            if(title.value=='' && author.value=='' && year.value==''){
                alert ('please input your information.')
            }
            else{
                const newrow=document.createElement('tr')

                // sd
                const newtitle=document.createElement('th')
                newtitle.innerHTML=title.value
                newrow.appendChild(newtitle)

                
// jkm
                const newauthor=document.createElement('th')
                newauthor.innerHTML=author.value
                newrow.appendChild(newauthor)
// jhbn
                const newdata=document.createElement('th')
                newdata.innerHTML=year.value

                    newrow.appendChild(newdata)
                    
                booklist.appendChild(newrow)
                author.value=''
                year.value=''
                title.value=''
            }
        })
})