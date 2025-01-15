//hands to current time//
function setClock() {
  //current date//
  const now = new Date();
  //current seconds, minutes and hours
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // calculate rotation
  const secondsDegree = ((seconds / 60) * 360) + 270; // 270° for start position
  const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 270; // +6° per second
  const hoursDegree = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 270; // +30° per minute

  //
  document.querySelector('.second-hand').style.transform = `rotate(${secondsDegree}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minutesDegree}deg)`;
  document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegree}deg)`;
}

// Uhr alle 1000ms aktualisieren
setInterval(setClock, 1000);
setClock();
