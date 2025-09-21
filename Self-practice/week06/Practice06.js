// ให้ chatgpt เจนโจท
// 1
// 📌 โจทย์: ระบบจัดการเลขบัญชีลูกค้า
// ให้เขียนฟังก์ชัน accountManager() ที่ทำงานดังนี้
// ทุกครั้งที่สร้าง account ใหม่ จะได้ เลขบัญชีรันอัตโนมัติ (เริ่มจาก 1, 2, 3, …)
// แต่ละบัญชีจะมี ยอดเงินเริ่มต้น (balance) ที่กำหนดตอนสร้าง
// ฟังก์ชัน accountManager จะต้อง return object ที่มีฟังก์ชันย่อยดังนี้
// createAccount(initialBalance) → สร้างบัญชีใหม่ เก็บเลขบัญชีและ balance
// deposit(accountId, amount) → ฝากเงินเข้าบัญชี
// withdraw(accountId, amount) → ถอนเงิน ถ้าเงินไม่พอให้ return "Insufficient balance"
// getBalance(accountId) → เช็คยอดเงินในบัญชี
// getAllAccounts() → return array ของบัญชีทั้งหมด (เลขบัญชี + ยอดเงิน)

function accountManager() {
    let accounts = []
    let accoutNum = 1

    function createAccount(initialBalance) {
        const account = {
            accountID: accoutNum++,
            balance: initialBalance
        }
        accounts.push(account)
        return account.accountID
    }

    function deposit(accountId, amount) {
        const acc = accounts.find(a => a.accountID === accountId)
        if (!acc) {
            return "account not found"
        }
        acc.balance = acc.balance + amount
        return acc.balance
    }

    function withdraw(accountId, amount) {
        const acc = accounts.find(a => a.accountID === accountId)
        if (!acc) {
            return "account not found"
        }
        acc.balance = acc.balance - amount
        return acc.balance
    }

    function getBalance(accountId) {
        const acc = accounts.find(a => a.accountID === accountId)
        if (!acc) {
            return "account not found"
        }
        return acc.balance
    }

    function getAllAccounts() {
        return accounts.map(acc => ({id: acc.accountID, balance: acc.balance}))
    }

    return {
        createAccount,
        deposit,
        withdraw,
        getBalance,
        getAllAccounts
    }
}

//test code
const bank = accountManager()

const acc1 = bank.createAccount(100) // accountId = 1
const acc2 = bank.createAccount(500) // accountId = 2

console.log("acc1:" ,bank.deposit(1, 50))   // acc1 = 150
console.log('acc2:' ,bank.withdraw(2, 200)) // acc2 = 300

console.log(bank.getBalance(1)) // 150
console.log(bank.getBalance(2)) // 300

console.log(bank.getAllAccounts())
//[ { id: 1, balance: 150 }, { id: 2, balance: 300 } ]
