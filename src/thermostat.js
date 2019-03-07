'use termostat';

function Thermostat() {
     this.temperature = 20;
     this.minimumTemperature = 10;

  };

  Thermostat.prototype.up = function() {
     this.temperature +=1;
     console.log(this.temperature)
 }

 Thermostat.prototype.down = function() {
   if (this.temperature > this.minimumTemperature) {
     this.temperature--
   } else {
     return this.temperature
   }
   console.log(this.temperature)
 }
