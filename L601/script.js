let studentId = prompt('შეიტანე სტუდენტის ID', '');
document.querySelectorAll('[data-student-id = "' + studentId + '"]').forEach(el => el.style.background = 'green');