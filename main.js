#! /usr/bin/env node
import inquirer from "inquirer";
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
//step 02 hero object
async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter your Hero Name:"
        }
    ]);
    //enemy object
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["alien", "witch", "zombie"],
            message: "Select the enemy you fight with:"
        }
    ]);
    //step 03 battle field
    const hero = new Hero(heroName);
    const enemy = new Enemy(enemyType);
    console.log(`${enemy.name} V/s ${hero.name}`);
    //step 04 action
    do {
        const { action } = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                choices: ["attack", "defend", "run"],
                message: "choose the action",
            }
        ]);
        //step 05 switch case
        switch (action) {
            case "attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("you loss ! Try Again");
                        return;
                    }
                }
                else {
                    // enemy health decrese
                    enemy.decreaseHealth();
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("Congratulation! you won");
                        return;
                    }
                }
                break;
        }
    } while (true);
}
main();
