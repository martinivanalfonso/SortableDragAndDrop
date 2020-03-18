const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
});
draggables.forEach(draggable => {
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
});

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
        sort(container) 
        
    })
})

function sort(container) {  
     const elements = [...container.children]
     .sort(function(a, b) {return a.innerText - b.innerText})
     container.innerHTML = ""
     elements.forEach(child => {
         container.appendChild(child)
     })
    }

// Mobile Support

const containerFirst = document.querySelector('.first')
const containerSecond = document.querySelector('.second')

draggables.forEach(draggable => {
    draggable.addEventListener('touchstart', () => {
        draggable.classList.add('dragging')
    })
});
draggables.forEach(draggable => {
    draggable.addEventListener('touchend', () => {
        draggable.classList.remove('dragging')
        if (draggable.parentElement.classList.contains('first')) {
            containerSecond.appendChild(draggable)
            sort(containerSecond)
        } else {
            containerFirst.appendChild(draggable)
            sort(containerFirst)
        }
    })
});