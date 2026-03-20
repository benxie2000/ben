// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)';
    }
});

// 表单验证
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            alert('表单提交成功！');
            this.reset();
        } else {
            alert('请填写所有必填字段');
        }
    });
}

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 响应式导航栏
function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// 滚动显示效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
const animatedElements = document.querySelectorAll('.about, .projects, .contact');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// 移动端菜单
const menuToggle = document.createElement('button');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
menuToggle.className = 'menu-toggle';
menuToggle.style.cssText = `
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
`;

const navbar = document.querySelector('.navbar .container');
navbar.appendChild(menuToggle);

menuToggle.addEventListener('click', toggleNav);

// 响应式菜单样式
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
        }
        
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #333;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            display: none;
        }
        
        .nav-links.active {
            display: flex;
        }
        
        .nav-links li {
            margin: 0.5rem 0;
        }
    }
`;
document.head.appendChild(style);