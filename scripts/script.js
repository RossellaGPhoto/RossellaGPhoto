document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    let isShown = false;

    menuToggle.addEventListener('click', () => {
        if (!isShown) { 
            navMenu.classList.toggle('show');
            /*document.querySelector('.description-container').style.marginTop = 0;*/
            isShown = true;
        }else{
            navMenu.classList.toggle('show');
            /*document.querySelector('.description-container').style.marginTop = '30px';*/
            isShown = false;
        }
    });
    
    function addHoverEffect(element, elementDes, hoverStyle, normalStyle) {
        element.addEventListener('mouseover', () => {
            Object.assign(elementDes.style, hoverStyle);
        });
      
        element.addEventListener('mouseout', () => {
            Object.assign(elementDes.style, normalStyle);
        });
    }
    
    if (window.innerWidth > 768){
        addHoverEffect(document.querySelector('.submenu-parent'), document.querySelector('.submenu'), { display: 'flex' }, { display: 'none' });
    }

    // Handle submenu toggle for mobile view
    const submenuParent = document.querySelector('.submenu-parent');
    const submenu = submenuParent.querySelector('.submenu');
    let isOpen = false;
    submenuParent.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) { // Ensure functionality is for mobile only
        if (!isOpen) {
            e.stopPropagation();
            submenuParent.style.display = 'block';
            submenu.style.display = 'flex';
            submenu.style.marginTop = '10px';
            isOpen = true;
        }else {
            e.stopPropagation();
            submenu.style.display = 'none';
            submenu.style.margin = 0;
            isOpen = false;
        }
      }
    });
});