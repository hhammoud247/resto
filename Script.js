document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
});

function loadMenu() {
    fetch('menu.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const menuList = document.getElementById('menuList');
            menuList.innerHTML = ''; // Clear previous menu items
            for (const category in data) {
                const categoryHeader = document.createElement('h3');
                categoryHeader.textContent = category;
                menuList.appendChild(categoryHeader);

                const itemsList = document.createElement('ul');
                for (const item in data[category]) {
                    const listItem = document.createElement('li');
                    const price = data[category][item];
                    listItem.innerHTML = `<input type="checkbox" value="${item}"> ${item} - $${price.toFixed(2)}`;
                    itemsList.appendChild(listItem);
                }
                menuList.appendChild(itemsList);
            }
        })
        .catch(error => {
            console.error('Error loading the menu:', error);
            const menuList = document.getElementById('menuList');
            menuList.innerHTML = '<p>Error loading menu. Please try again later.</p>';
        });
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

// Update button functions to call toggleSection
function callWaiter() {
    alert("A waiter has been called to your table.");
}

function reserveTable() {
    const selectedTables = getSelectedItems('tableList');
    if (selectedTables.length > 0) {
        alert(`Table(s) reserved: ${selectedTables.join(', ')}`);
    } else {
        alert("Please select a table to reserve.");
    }
}

function sendReceipt() {
    const selectedItems = getSelectedItems('takeawayList');
    if (selectedItems.length > 0) {
        alert(`Receipt sent for: ${selectedItems.join(', ')}`);
    } else {
        alert("Please select items for takeaway.");
    }
}

function confirmSelection(listId) {
    const selectedItems = getSelectedItems(listId);
    if (selectedItems.length > 0) {
        alert(`You have selected: ${selectedItems.join(', ')}`);
    } else {
        alert("No items selected.");
    }
}

function getSelectedItems(listId) {
    const checkboxes = document.querySelectorAll(`#${listId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

// Update button clicks in the HTML to call toggleSection
document.querySelector('button[onclick="showSection(\'menu\')"]').onclick = () => toggleSection('menu');
document.querySelector('button[onclick="showSection(\'reserve\')"]').onclick = () => toggleSection('reserve');
document.querySelector('button[onclick="showSection(\'takeaway\')"]').onclick = () => toggleSection('takeaway');

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

// Update button functions to call toggleSection
function callWaiter() {
    alert("A waiter has been called to your table.");
}

function reserveTable() {
    const selectedTables = getSelectedItems('tableList');
    if (selectedTables.length > 0) {
        alert(`Table(s) reserved: ${selectedTables.join(', ')}`);
    } else {
        alert("Please select a table to reserve.");
    }
}

function sendReceipt() {
    const selectedItems = getSelectedItems('takeawayList');
    if (selectedItems.length > 0) {
        alert(`Receipt sent for: ${selectedItems.join(', ')}`);
    } else {
        alert("Please select items for takeaway.");
    }
}

function confirmSelection(listId) {
    const selectedItems = getSelectedItems(listId);
    if (selectedItems.length > 0) {
        alert(`You have selected: ${selectedItems.join(', ')}`);
    } else {
        alert("No items selected.");
    }
}

function getSelectedItems(listId) {
    const checkboxes = document.querySelectorAll(`#${listId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

// Update button clicks in the HTML to call toggleSection
document.querySelector('button[onclick="showSection(\'menu\')"]').onclick = () => toggleSection('menu');
document.querySelector('button[onclick="showSection(\'reserve\')"]').onclick = () => toggleSection('reserve');
document.querySelector('button[onclick="showSection(\'takeaway\')"]').onclick = () => toggleSection('takeaway');
