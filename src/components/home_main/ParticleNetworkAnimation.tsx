import React, { useEffect, useRef, useState } from 'react';
import './ParticleNetworkAnimation.css'; 
import AuthModal from '../AuthModal';

interface ParticleOptions {
  velocity: number;
  density: number;
  netLineDistance: number;
  netLineColor: string;
  particleColors: string[];
}

interface ParticleNetworkAnimationProps {
  options?: ParticleOptions; // Optional props for customization
}

const ParticleNetworkAnimation: React.FC<ParticleNetworkAnimationProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showButton, setShowButton] = useState(true); // Состояние для управления видимостью кнопки
  const particles: Particle[] = [];
  let animationFrame: number;
  const options: ParticleOptions = {
    velocity: 1,
    density: 15000,
    netLineDistance: 200,
    netLineColor: '#ffffff',
    particleColors: ['#aaa'],
  };

  class Particle {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    velocity: { x: number; y: number };
    particleColor: string;
    canvasWidth: number;
    canvasHeight: number;

    constructor(canvasWidth: number, canvasHeight: number, x?: number, y?: number) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.particleColor = returnRandomArrayitem(options.particleColors);
      this.radius = getLimitedRandom(1.5, 2.5);
      this.opacity = 0;
      this.x = x || Math.random() * this.canvasWidth;
      this.y = y || Math.random() * this.canvasHeight;
      this.velocity = {
        x: (Math.random() - 0.5) * options.velocity,
        y: (Math.random() - 0.5) * options.velocity,
      };
    }

    update() {
      if (this.opacity < 1) {
        this.opacity += 0.01;
      } else {
        this.opacity = 1;
      }
      if (this.x > this.canvasWidth + 100 || this.x < -100) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.y > this.canvasHeight + 100 || this.y < -100) {
        this.velocity.y = -this.velocity.y;
      }
      this.x += this.velocity.x;
      this.y += this.velocity.y;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.fillStyle = this.particleColor;
      ctx.globalAlpha = this.opacity;
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  const createParticles = (canvas: HTMLCanvasElement) => {
    const quantity = (canvas.width * canvas.height) / options.density;
    for (let i = 0; i < quantity; i++) {
      particles.push(new Particle(canvas.width, canvas.height, Math.random() * canvas.width, Math.random() * canvas.height));
    }
  };

  const drawText = (ctx: CanvasRenderingContext2D, text: string) => {
    ctx.fillStyle = '#ffffff'; // Цвет текста
    ctx.font = '40px Arial'; // Шрифт и размер
    ctx.textAlign = 'center'; // Выравнивание по центру
    ctx.textBaseline = 'middle'; // Вертикальное выравнивание
    ctx.fillText(text, canvasRef.current!.width / 2, canvasRef.current!.height / 3); // Рисуем текст в центре
  };

  const updateParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    ctx.globalAlpha = 1;

    // Рисуем линии между частицами
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Если расстояние между частицами меньше заданного значения, рисуем линию
        if (distance < options.netLineDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = options.netLineColor; // Цвет линий
          ctx.globalAlpha = (1 - distance / options.netLineDistance); // Прозрачность линии
          ctx.lineWidth = 1; // Ширина линии
          ctx.stroke();
        }
      }
    }

    // Обновляем и рисуем частицы
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(ctx);
    }

    // Рисуем текст в центре
    drawText(ctx, "You are welcome!");

    animationFrame = requestAnimationFrame(() => updateParticles(ctx));
  };

  const initCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      createParticles(canvas);
      updateParticles(ctx);
    }
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0; // Clear particles to recreate them
    initCanvas();
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <canvas ref={canvasRef} className="particle-network-canvas" />
      {showButton && ( // Условно отображаем кнопку
        <div 
          style={{ 
            position: 'absolute', // Абсолютное позиционирование
            top: '35%', // Центрируем по вертикали
            left: '50%', // Центрируем по горизонтали
            transform: 'translate(-50%, -50%)', // Смещение для центрирования
            marginTop: '80px', // Расстояние между текстом и кнопкой
            backgroundColor: '#007BFF', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            padding: '0px 20px', 
            cursor: 'pointer' 
          }}
        >
          <AuthModal/>
        </div>
      )}
    </div>
  );
};

const getLimitedRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const returnRandomArrayitem = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

export default ParticleNetworkAnimation;