/**
Question-1:
    Create a function to return the account object in given accountData-array and given account-id

    example-1:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 8765


        If input is accountData and accountId, return:
            {
                name: "Saving Account - 2",
                id: 8765
            }

    example-2:
        accountData = [
            {
                name: "Saving Account - 1",
                id: 9876
            },
            {
                name: "Saving Account - 2",
                id: 8765
            },
            {
                name: "Saving Account - 3",
                id: 7654
            },
            {
                name: "Saving Account - 4",
                id: 6543
            },
            {
                name: "Saving Account - 5",
                id: 5432
            }
        ]
        accountId = 1234


        If input is accountData and accountId, return:
            {}
*/

const findAccount = (accountData, accountId) => {
    let resultObject = {}
    // filter
    let myAccount = accountData.filter(accData => accData.id === accountId);
    // [{}]
    if (myAccount.length > 0) {
        resultObject = myAccount[0];
    }
    return resultObject;
}

const findAccount2 = (accountData, accountId) => {
    let resultObject = {}
    // find
    let myAccount = accountData.find(accData => accData.id === accountId);
    // {}
    if (myAccount) {
        resultObject = myAccount;
    }
    return resultObject;
}


const findAccount3 = (accountData, accountId) => {
    let resultObject = {}
    for (accData of accountData) {
        if (accData.id === accountId) {
            resultObject = accData;
            break;
        }
    }
    return resultObject;
}


let accountData = [
    {
        name: "Saving Account - 1",
        id: 9876
    },
    {
        name: "Saving Account - 2",
        id: 8765
    },
    {
        name: "Saving Account - 3",
        id: 6543
    },
    {
        name: "Saving Account - 4",
        id: 6543
    },
    {
        name: "Saving Account - 5",
        id: 5432
    }
];

// console.log(findAccount(accountData, 1234));

console.log(findAccount3(accountData, 9090));


/**
Question-2:
    Create a function to return the string(s) which contain 'A' (ignoring cases) from a given string array.
        example:
            input -> [hello, laugh, live, peaceful, hopeful]
            ans -> laugh, peaceful

            input -> [hello, laugh, live, king, queen]
            ans -> laugh

            input -> [live, king, queen]
            ans -> 
*/



/**
Question-3:
    Note: Palindrome is when String is same when written backwards.
    eg: level <-> level
    eg: eye <-> eye

    Create a function to find if given string is palindrome (ignore cases).
*/























































