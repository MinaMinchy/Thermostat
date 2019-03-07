'use termostat';

function Thermostat() {
     this.temperature = 20;

  };

  Thermostat.prototype.up = function() {
     this.temperature +=1;
     console.log(this.temperature)
 }

 Thermostat.prototype.down = function() {
   this.temperature -=1;
   console.log(this.temperature)
 }
