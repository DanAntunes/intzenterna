function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000); // Atualiza a cada segundo
updateTime(); // Chama a função para exibir o tempo atual imediatamente


document.addEventListener('DOMContentLoaded', function() {
    const avisoModal = new bootstrap.Modal(document.getElementById('avisoModal'));
    avisoModal.show();
});

const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList').children;
const noResultsMessage = document.getElementById('noResultsMessage');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    let foundItems = false;

    for (const item of itemList) {
        const itemName = item.getAttribute('data-search').toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
            foundItems = true;
        } else {
            item.style.display = 'none';
        }
    }

    noResultsMessage.style.display = foundItems ? 'none' : 'block';
});
