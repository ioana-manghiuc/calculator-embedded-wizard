import * as si from "systeminformation";

async function getBatteryLevel() {
    try {
        const data = await si.battery();
        return Math.round(data.percent); 
    } catch (error) {
        console.error('Error fetching battery level:', error);
        throw error;
    }
}

async function displayBatteryLevel() {
    try {
        const batteryLevel = await getBatteryLevel();
        console.log('Battery Level:', batteryLevel,'%');
    } catch (error) {
        console.error('Error displaying battery level:', error);
    }
}

displayBatteryLevel()