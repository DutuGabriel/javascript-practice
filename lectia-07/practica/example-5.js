/** 
## Example 5 - Arrow functions

Make the code refactoring using arrow functions.

```js
*/

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Gareth",
  balance: 600,
  withdraw: (amount, onSuccess, onError) => {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > account.balance) {
      onError(
        `Amount can't exceed account balance of ${account.balance} credits`
      );
    } else {
      account.balance -= amount;
      onSuccess(`Account balance: ${account.balance}`);
    }
  },
  deposit: (amount, onSuccess, onError) => {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      account.balance += amount;
      onSuccess(`Account balance: ${account.balance}`);
    }
  },
};

const handleSuccess = (message) => console.log(`✅ Success! ${message}`);
const handleError = (message) => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
account.deposit(1, handleSuccess, handleError);
account.withdraw(201, handleSuccess, handleError);
