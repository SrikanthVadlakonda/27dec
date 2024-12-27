// Initial Balance
let initialBalance = 5000;

// DOM Elements
const balanceEl = document.getElementById('balance');
const expenseEl = document.getElementById('expense');
const transactionListEl = document.getElementById('transaction-list');
const transactionForm = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');

// Transactions Array
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Update UI
function updateUI() {
    const totalExpense = transactions.reduce((acc, t) => acc + t.amount, 0);
    const remainingBalance = initialBalance - totalExpense;

    balanceEl.textContent = remainingBalance;
    expenseEl.textContent = totalExpense;

    renderTransactions();
}

// Render Transactions
function renderTransactions() {
    transactionListEl.innerHTML = '';
    transactions.forEach(addTransactionToDOM);
}

// Add Transaction to DOM
function addTransactionToDOM(transaction) {
    const li = document.createElement('li');
    li.className = 'expense';
    li.innerHTML = `
        ${transaction.description} 
        <span>-₹${transaction.amount}</span>
        <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">X</button>
    `;
    transactionListEl.appendChild(li);
}

// Add Transaction
function addTransaction(e) {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = +amountInput.value;

    if (!description || amount <= 0) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const totalExpense = transactions.reduce((acc, t) => acc + t.amount, 0);
    const remainingBalance = initialBalance - totalExpense;

    if (amount > remainingBalance) {
        alert('Not enough balance!');
        return;
    }

    const transaction = {
        id: Date.now(),
        description,
        amount,
    };

    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

    descriptionInput.value = '';
    amountInput.value = '';

    updateUI();
}

// Delete Transaction
function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateUI();
}

// Event Listeners
transactionForm.addEventListener('submit', addTransaction);

// Initialize UI
updateUI();
