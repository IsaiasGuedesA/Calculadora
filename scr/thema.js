const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")
const ball = document.getElementById("ball")
const bt_del = document.querySelector('div.del')


const bt_reset = document.querySelector('div.reset')
const bt_igual = document.querySelector('div.igual')
const keys = document.querySelectorAll('div.bts')

const copy = document.getElementById("copy")


let theme = 1

s1.addEventListener("click" , ()=>{
    theme = 1
    setthema(theme)
    
    
})
s2.addEventListener("click" , ()=>{
    theme = 2
    setthema(theme)
})
s3.addEventListener("click" , ()=>{
    theme = 3
    setthema(theme)
})


function setthema(i) {
    switch (i) {
        case 1:
            // backgroung body
            document.getElementsByTagName('body')[0].style.backgroundColor = "hsl(222, 26%, 31%)"

            //Switch theme
            s1.style.backgroundColor = "hsl(223, 31%, 20%)"
            s2.style.backgroundColor = "hsl(223, 31%, 20%)"
            s3.style.backgroundColor = "hsl(223, 31%, 20%)"

            ball.style.backgroundColor = "hsl(6, 63%, 50%)"
            ball.style.left = "10%"


            //numeber Switch and header
            document.getElementsByTagName('header')[0].style.color = "hsl(0, 0%, 100%)"


            // Display
            document.querySelector('section.display').style.backgroundColor = 'hsl(224, 36%, 15%)'
           
            // Display text
            document.querySelector('section.display').children[0].style.color = "hsl(0, 0%, 100%)"

            // keyboard background

            document.querySelector('section.keypad').style.backgroundColor = "hsl(223, 31%, 20%)"

            // keys
            keys.forEach(element => {
                element.style.backgroundColor = "hsl(30, 25%, 89%)"
                element.style.borderColor = 'hsl(28, 16%, 65%)'
                element.children[0].style.color = 'hsl(221, 14%, 31%)'
            });

            // keys rest del

            bt_del.style.backgroundColor = "hsl(225, 21%, 49%)"
            bt_del.style.borderColor = 'hsl(224, 28%, 35%)'
            bt_del.children[0].style.color = 'hsl(0, 0%, 100%)'

            bt_reset.style.backgroundColor = "hsl(225, 21%, 49%)"
            bt_reset.style.borderColor = 'hsl(224, 28%, 35%)'
            bt_reset.children[0].style.color = 'hsl(0, 0%, 100%)'



            // keys igual
            bt_igual.style.backgroundColor = "hsl(6, 63%, 50%) "
            bt_igual.style.borderColor = 'hsl(6, 70%, 34%)'
            bt_igual.children[0].style.color = 'hsl(0, 0%, 100%)'



            //hovers


            //reset del

            bt_reset.addEventListener('mouseenter',()=>{
                bt_reset.style.backgroundColor = "hsl(223 28.44% 88.24%)"
            })
    
            bt_reset.addEventListener('mouseleave',()=>{
                bt_reset.style.backgroundColor='hsl(225, 21%, 49%)'
            })

            bt_del.addEventListener('mouseenter',()=>{
                bt_del.style.backgroundColor = "hsl(223 28.44% 88.24%)"
            })
    
            bt_del.addEventListener('mouseleave',()=>{
                bt_del.style.backgroundColor='hsl(225, 21%, 49%)'
            })

            //igual

            bt_igual.addEventListener('mouseenter',()=>{

                bt_igual.style.backgroundColor ="rgb(249,108,91)"
            })
            bt_igual.addEventListener('mouseleave',()=>{
                bt_igual.style.backgroundColor="hsl(6, 63%, 50%)"
            })

            //keys
           

            keys.forEach(element => {
                element.addEventListener('mouseenter',()=>{

                    element.style.backgroundColor ="White"
                })
                element.addEventListener('mouseleave',()=>{
                    element.style.backgroundColor="hsl(30, 25%, 89%)"
                })
            });

            copy.style.color="hsl(0, 0%, 100%)"

            
            break;

        case 2:
            // backgroung body
            document.getElementsByTagName('body')[0].style.backgroundColor = "hsl(0, 0%, 90%)"

            //Switch theme
            s1.style.backgroundColor = "hsl(0, 5%, 81%)"   
            s2.style.backgroundColor = "hsl(0, 5%, 81%)"
            s3.style.backgroundColor = "hsl(0, 5%, 81%)"
            ball.style.backgroundColor = "hsl(25, 98%, 40%)"
            ball.style.left = "35%"


            //numeber Switch and header
            document.getElementsByTagName('header')[0].style.color = "hsl(60, 10%, 19%)"


            // Display
            document.querySelector('section.display').style.backgroundColor = 'hsl(0, 0%, 93%)'
            // Display text
            document.querySelector('section.display').children[0].style.color = "hsl(60, 10%, 19%)"

            // keyboard background

            document.querySelector('section.keypad').style.backgroundColor = "hsl(0, 5%, 81%)"

            // keys
          
            keys.forEach(element => {
                element.style.backgroundColor = "hsl(45, 7%, 89%)"
                element.style.borderColor = 'hsl(35, 11%, 61%)'
                element.children[0].style.color = 'hsl(221, 14%, 31%)'
            });

            // keys rest del
            bt_del.style.backgroundColor = "hsl(185, 42%, 37%)"
            bt_del.style.borderColor = 'hsl(185, 58%, 25%)'
            bt_del.children[0].style.color = 'hsl(0, 0%, 100%)'

            bt_reset.style.backgroundColor = "hsl(185, 42%, 37%)"
            bt_reset.style.borderColor = 'hsl(185, 58%, 25%)'
            bt_reset.children[0].style.color = 'hsl(0, 0%, 100%)'



            // keys igual
            bt_igual.style.backgroundColor = "hsl(25, 98%, 40%) "
            bt_igual.style.borderColor = 'hsl(25, 99%, 27%)'
            bt_igual.children[0].style.color = 'hsl(0, 0%, 100%)'





            //hovers


            //reset del

            bt_reset.addEventListener('mouseenter',()=>{
                bt_reset.style.backgroundColor = "rgb(98,181,189)"
            })
    
            bt_reset.addEventListener('mouseleave',()=>{
                bt_reset.style.backgroundColor='hsl(185, 42%, 37%)'
            })

            bt_del.addEventListener('mouseenter',()=>{
                bt_del.style.backgroundColor = "rgb(98,181,189)"
            })
    
            bt_del.addEventListener('mouseleave',()=>{
                bt_del.style.backgroundColor='hsl(185, 42%, 37%)'
            })

            //igual

            bt_igual.addEventListener('mouseenter',()=>{

                bt_igual.style.backgroundColor ="rgb(255,139,56)"
            })
            bt_igual.addEventListener('mouseleave',()=>{
                bt_igual.style.backgroundColor="hsl(25, 98%, 40%)"
            })

            //keys
           

            keys.forEach(element => {
                element.addEventListener('mouseenter',()=>{

                    element.style.backgroundColor ="White"
                })
                element.addEventListener('mouseleave',()=>{
                    element.style.backgroundColor="hsl(45, 7%, 89%)"
                })
            });

            copy.style.color="black"


            break;

        case 3:
            // backgroung body
            document.getElementsByTagName('body')[0].style.backgroundColor = "hsl(268, 75%, 9%)"

            //Switch theme
            s1.style.backgroundColor = "hsl(268, 71%, 12%)"
            s2.style.backgroundColor = "hsl(268, 71%, 12%)"
            s3.style.backgroundColor = "hsl(268, 71%, 12%)"
            ball.style.backgroundColor = "hsl(176, 100%, 44%)"
            ball.style.left = "60%"


            //numeber Switch and header
            document.getElementsByTagName('header')[0].style.color = "hsl(52, 100%, 62%)"


            // Display
            document.querySelector('section.display').style.backgroundColor = 'hsl(268, 71%, 12%)'
            // Display text
            document.querySelector('section.display').children[0].style.color = "hsl(52, 100%, 62%)"

            // keyboard background

            document.querySelector('section.keypad').style.backgroundColor = "hsl(268, 71%, 12%)"

            // keys
           
            keys.forEach(element => {
                element.style.backgroundColor = "hsl(268, 47%, 21%)"
                element.style.borderColor = 'hsl(290, 70%, 36%)'
                element.children[0].style.color = 'hsl(52, 100%, 62%)'
            });

            // keys rest del
            bt_del.style.backgroundColor = "hsl(281, 89%, 26%)"
            bt_del.style.borderColor = 'hsl(285, 91%, 52%)'
            bt_del.children[0].style.color = 'hsl(0, 0%, 100%)'

            bt_reset.style.backgroundColor = "hsl(281, 89%, 26%)"
            bt_reset.style.borderColor = 'hsl(285, 91%, 52%)'
            bt_reset.children[0].style.color = 'hsl(0, 0%, 100%)'



            // keys igual
            bt_igual.style.backgroundColor = "hsl(176, 100%, 44%)"
            bt_igual.style.borderColor = 'hsl(177, 92%, 70%)'
            bt_igual.children[0].style.color = 'hsl(198, 20%, 13%)'


            //hovers


            //reset del

            bt_reset.addEventListener('mouseenter',()=>{
                bt_reset.style.backgroundColor = "rgb(134,49,176)"
            })
    
            bt_reset.addEventListener('mouseleave',()=>{
                bt_reset.style.backgroundColor='hsl(281, 89%, 26%)'
            })

            bt_del.addEventListener('mouseenter',()=>{
                bt_del.style.backgroundColor = "rgb(134,49,176)"
            })
    
            bt_del.addEventListener('mouseleave',()=>{
                bt_del.style.backgroundColor='hsl(281, 89%, 26%)'
            })

            //igual

            bt_igual.addEventListener('mouseenter',()=>{

                bt_igual.style.backgroundColor ="rgb(148,255,249)"
            })
            bt_igual.addEventListener('mouseleave',()=>{
                bt_igual.style.backgroundColor="hsl(176, 100%, 44%)"
            })

            //keys
           

            keys.forEach(element => {
                element.addEventListener('mouseenter',()=>{

                    element.style.backgroundColor ="rgb(107,52,172)"
                })
                element.addEventListener('mouseleave',()=>{
                    element.style.backgroundColor="hsl(268, 47%, 21%)"
                })
            });

            copy.style.color="hsl(0, 0%, 100%)"



            break;
        
    }
    
}


setthema(1)
