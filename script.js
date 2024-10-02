document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // إظهار رسالة نجاح بعد الإرسال
    document.getElementById('success-message').classList.remove('hidden');
    
    // إعادة تعيين الحقول
    document.getElementById('contact-form').reset();
});