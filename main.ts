import inquirer from 'inquirer';

const genratepassword = (length: number): string => {
    const charset = "kfmrwjnfu9934h57ytjejujrtujutjrj@#$%^*&*%$$#$#vvj,njk,.mj.,k23456yhnhgfghjjhgr4567u%";
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

const mainMenuPrompt = async () => {
    const { length } = await inquirer.prompt([
        {
            type: "number",
            name: "length", 
            message: "Enter password length",
            default: 12
        },
    ]);

    const password = genratepassword(length);
    console.log(`Generated password: ${password}`);
};

console.log("Welcome to the Password Generator");
mainMenuPrompt();

