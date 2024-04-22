import React, { useEffect, useState } from 'react';

function DailyStreak() {
  const [connectionCount, setConnectionCount] = useState<number>(0);

  function is1MinutePassed(lastConnectionDate: string | null): boolean {
    if (!lastConnectionDate) return true;
    const ONE_MINUTE = 60 * 1000;
    const now = new Date().getTime();
    const lastConnectionTime = new Date(lastConnectionDate).getTime();
    return now - lastConnectionTime >= ONE_MINUTE;
  }

  function updateCounterAndDate() {
    let lastConnectionDate = localStorage.getItem('lastConnectionDate');
    let connectionCount = localStorage.getItem('connectionCount');

    if (!lastConnectionDate || is1MinutePassed(lastConnectionDate)) {
      // Si une minute est passée ou s'il n'y a pas de dernière connexion enregistrée,
      // nous réinitialisons le compteur à 1.
      connectionCount = '1';
      lastConnectionDate = new Date().toISOString();
    } else {
      // Sinon, nous incrémentons le compteur de connexion.
      connectionCount = String(parseInt(connectionCount || '0') + 1);
    }

    localStorage.setItem('lastConnectionDate', lastConnectionDate);
    localStorage.setItem('connectionCount', connectionCount);

    setConnectionCount(parseInt(connectionCount || '0'));
    console.log("Nombre de connexions successives : ", connectionCount);
  }

  useEffect(() => {
    updateCounterAndDate();
  }, []);

  return (
    <div>
      <p>{connectionCount}</p>
    </div>
  );
}

export default DailyStreak;
