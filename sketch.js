// dP/dt = rP(1 - P/M) = rP - (rP/M) P
// dengan r merupakan konstanta pertumbuhan
// dan M adalah carrying capacity

let t = [];
let P = [];
let M;
let r;
let rInput;
let P0; // kondisi awal

let tMax = 10;
let dt = 0.1;

let grafik

function setup() {
  createCanvas(400, 400);
  
  P0 = 20;
  M = 300;
  rInput = createInput("0.8");
  rInput.position(20,410)
  let p = createP('konstanta pertumbuhan');
  p.style('font-size', '14px');
  p.position(20, 380);

  solve();
  grafik = new Chart(this, config);
  
  rInput.changed(solve)
}

function draw() {
  // background(220);
  
  grafik.update()
}

function solve(){
  
  P[0] = P0;
  t[0] = 0;
  r = float(rInput.value());
  let iterNum = int(tMax/dt);
  for (let i=0; i < iterNum; i++){
    P[i+1] = P[i] + dt*r*P[i]*(1 - P[i]/M);
    t[i+1] = round((i+1)*dt,3);
  }
}
