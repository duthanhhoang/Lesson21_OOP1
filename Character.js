class Character{
    constructor(name){
        this.name = name;
        this.hp = 100;
        this.damage = 10;
        this.notice = "";

    }

    attack(enemy){ //object -> Character
        // enemy.hp -= this.damage
        let critChance =  this.isCrit();

        this.damage = this.randomDamage(1, 20) * critChance;
        let crit = critChance > 1 ? "!!!CRITICAL" : "";
        enemy.takeHit(this.damage)
        this.notice = `${this.name } attack ${enemy.name} with ${this.damage} damage ${crit}`;
    }

    takeHit(dmg){
        this.hp -= dmg;
        if(this.hp <= 0){
            alert(`Game Over, ${this.name} loseeee!`);
        }
    }

    randomDamage(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    isCrit(){ //trả về hệ số nhân damage
        let chance = Math.random();
        if(chance < 0.3){
            return 2;
        }else if(chance < 0.4){
            return 3;
        }else{
            return 1;
        }
        // return Math.random() > 0.5 ? 2 : 1;

    }
}