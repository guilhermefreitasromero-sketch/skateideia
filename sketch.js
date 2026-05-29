// p5.js sketch para animação no hero
let particles = [];
const particleCount = 50;

function initSketch() {
    const container = document.getElementById('p5-container');
    if (!container) return;

    const sketch = (p) => {
        p.setup = function() {
            const width = container.clientWidth;
            const height = container.clientHeight;
            let canvas = p.createCanvas(width, height);
            canvas.parent('p5-container');

            // Criar partículas
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(p, width, height));
            }
        };

        p.draw = function() {
            p.background(102, 126, 234, 25); // Fundo semi-transparente com cor do tema

            // Desenhar e atualizar partículas
            for (let particle of particles) {
                particle.update();
                particle.display(p);
                particle.checkEdges(p.width, p.height);
            }

            // Desenhar conexões entre partículas próximas
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let distance = p.dist(
                        particles[i].pos.x,
                        particles[i].pos.y,
                        particles[j].pos.x,
                        particles[j].pos.y
                    );
                    if (distance < 150) {
                        p.stroke(255, 100 - (distance / 150) * 100);
                        p.line(
                            particles[i].pos.x,
                            particles[i].pos.y,
                            particles[j].pos.x,
                            particles[j].pos.y
                        );
                    }
                }
            }
        };

        p.windowResized = function() {
            if (container && container.offsetParent !== null) {
                const width = container.clientWidth;
                const height = container.clientHeight;
                p.resizeCanvas(width, height);
            }
        };
    };

    new p5(sketch);
}

// Classe de Partícula
class Particle {
    constructor(p, width, height) {
        this.p = p;
        this.pos = p.createVector(p.random(width), p.random(height));
        this.vel = p.createVector(p.random(-2, 2), p.random(-2, 2));
        this.acc = p.createVector(0, 0);
        this.size = p.random(2, 6);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    display(p) {
        p.fill(255, 200);
        p.noStroke();
        p.ellipse(this.pos.x, this.pos.y, this.size);
    }

    checkEdges(width, height) {
        if (this.pos.x > width || this.pos.x < 0) {
            this.vel.x *= -1;
            this.pos.x = this.p.constrain(this.pos.x, 0, width);
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.vel.y *= -1;
            this.pos.y = this.p.constrain(this.pos.y, 0, height);
        }
    }
}

// Inicializar sketch quando o documento carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSketch);
} else {
    initSketch();
}
