import Stats from "./Stats.js";

const getStats = (dataP) =>{

    const data = dataP;
    const stats = new Stats();

    for (let i = 0; i < data.length; i++) {
        
        if(i == 0){
            stats.setHP(data[i].base_stat);
        }
        else if (i == 1){
            stats.setAttack(data[i].base_stat);
        }
        else if (i == 2){
            stats.setDefense(data[i].base_stat);
        }
        else if (i == 3){
            stats.setSpecialAttack(data[i].base_stat);
        }
        else if (i == 4){
            stats.setSpecialDefense(data[i].base_stat);
        }
        else {
            stats.setSpeed(data[i].base_stat);
        }
        
    }

    return stats;

}

export default getStats;