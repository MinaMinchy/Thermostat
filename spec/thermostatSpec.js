'use strict';

describe('Thermostat', function() {

  var thermostat;

  it('starts at 20 degrees', function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  it('it can increase the temperature with an up function', function() {
    thermostat = new Thermostat()
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease the temperature with a down function', function() {
    thermostat = new Thermostat()
    thermostat.down()
    expect(thermostat.temperature).toEqual(19);
  });


});
