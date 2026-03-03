import { useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Masque le splash screen après un délai
    }, 2000); // 3 secondes, ajuste selon besoin

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Fond personnalisable
        zIndex: 9999,
      }}
    >
      <Image
        src="/images/Pictogramme.gif" // Chemin vers ton GIF dans /public
        alt="Splash Screen"
        width={200} // Ajuste la taille
        height={200}
        unoptimized // Pour les GIF animés
      />
    </div>
  );
};

export default SplashScreen;