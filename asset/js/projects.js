const projects = [
    {name: "Todo",
     image: "https://images.unsplash.com/photo-1679667397342-5a64cdde1805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://unsplash.com/explore",
     desc: "Lorem"

    },
    {name: "Game",
     image: "https://images.unsplash.com/photo-1679667397342-5a64cdde1805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://unsplash.com/explore",
     desc: "Lorem"

    },
    
    {name: "Money",
     image: "https://images.unsplash.com/photo-1679667397342-5a64cdde1805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://unsplash.com/explore",
     desc: "Lorem"

    },
    {name: "red bus",
     image: "https://images.unsplash.com/photo-1679667397342-5a64cdde1805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
     url: "https://unsplash.com/explore",
     desc: "Lorem"

    }
]

let str = ""
for (const item of projects) {
    str +=`
    <div class="card">
            <img src="${item.image}" alt="">
         <div class="card-body">
         
         <h1>${item.name}</h1>
         <p>${item.desc}</p>
         <a href="${item.url}">Visit</a>
         </div>
        </div>
        `
    
        
}

document.getElementById("projects").innerHTML = str

gsap.registerPlugin(ScrollTrigger)
gsap.from(".card",{
    scrollTrigger: 
    {
      trigger: ".card",
      scrub: 1,
    //   start: "top 900px" 
    end: "+=200"
    },

    scale: 0,
     rotation: 360,
      stagger: 0.5

    
}
    )