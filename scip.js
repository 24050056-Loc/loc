document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Lấy ID của phần cần cuộn tới
        const targetId = this.getAttribute('href');
        
        // Tìm element và cuộn mượt
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});