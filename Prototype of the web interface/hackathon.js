function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } 
    else {
        dropdown.style.display = 'block';
    }
}

let mytariff = null; 
function selectTariff(tariff) {
    mytariff = tariff;
    const buttons = document.querySelectorAll('.tariff-button');
    buttons.forEach(button => button.classList.remove('active'));

    if (tariff === 'Вместе') {
        const activator = document.getElementById('group')
    }
    else {
        const activator = document.getElementById('solo')
    }
    activator.classList.add('active');
}

function submitForm(event) {
    event.preventDefault();
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const people = document.getElementById('people').value;

    if (!mytariff) {
        alert("Пожалуйста, выберите тариф: 'Вместе' или 'Одиночная поездка'.");
        return;
    }

    if (departure && destination && people) {
        alert('Ваш заказ успешно оформлен!');
    }
}