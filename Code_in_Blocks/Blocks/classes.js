class Node {
    constructor (name, x, y){
        this.name =name;
        this.position ={x: x, y: y};
        this.mouseOffset ={x: 0, y: 0};
        this.drag =false;
        this.cnv =document.createElement("canvas");
        this.cnv.id ="canvas-webgl";
        this.element =document.createElement("div");
        this.element.id ="node";
        this.element.appendChild(this.cnv);
        
        document.getElementById("editor").appendChild(this.element);

        this.element.onmousedown=()=>{
            this.drag =true;
            // Calcula a distância entre onde o mouse clicou e os cantos da div
            this.mouseOffset = {
                x: e.clientX - this.element.getBoundingClientRect().left, 
                y: e.clientY - this.element.getBoundingClientRect().top
            };
        }
        this.element.onmouseup=()=>{
            this.drag =false;
        }
        this.element.onmouseleave=()=>{
            this.drag =false;
        }
        this.element.onmousemove=(e)=>{
            if (this.drag){
                // Atualiza a posição da div baseada nas coordenadas do mouse
                this.element.style.left =(e.clientX -this.mouseOffset.x) +'px';
                this.element.style.top =(e.clientY -this.mouseOffset.y) +'px';
            }
        }


    }

    Update=()=>{

    }


}