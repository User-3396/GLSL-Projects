Mouse ={
    //position: {x: 0, y: 0},
    click: false,
    nodeDrag: null,
    nodeAnchor: {x: 0, y: 0}, 
    clickPosition: {x: 0, y: 0},
};

window.onmousemove=(e)=>{
    //Mouse.position ={x: e.clientX, y: e.clientY};
    
    if (Mouse.nodeDrag){
        let target =Mouse.nodeDrag;
        //console.log(Mouse.nodeDrag.style.left +": "+e.clientX +", "+e.offsetX);
        Mouse.nodeDrag.style.left =(e.clientX -Mouse.nodeAnchor.x)+'px';
        Mouse.nodeDrag.style.top =(e.clientY -Mouse.nodeAnchor.y)+'px';
        Log.SetText ("[Node:" +Mouse.nodeDrag.name +"] px: " +e.clientX +", py: " +e.clientY);
    }
    
}

window.onmousedown =(e)=>{
    Mouse.click =true;
    //console.log(e);
    //if (e.target.tagName == 'NAV') 
    //NodeList[0].setPos(30, 100, e.x, e.y);

}

window.onmouseup =(e)=>{
    Mouse.click =false; 
    Mouse.nodeDrag =null;
    //
}

window.onmouseleave =()=>{Mouse.click =false; Mouse.nodeDrag =null;}

// 
Log ={
    element: document.getElementById("log"), 
    SetText: (txt)=>{
        console.log(this.element);
    }
}

// 
class Node {
    constructor (name, x, y){
        this.name =name;
        this.position ={x: x, y: y};
        this.mouseOffset ={x: 0, y: 0};
        this.drag =false;
        this.cnv =document.createElement("canvas");
        this.cnv.className ="canvas-webgl";
        this.element =document.createElement("div");
        this.element.className ="draggable";
        this.element.style.left =x+"px";
        this.element.style.top =y+"px";
        this.element.appendChild(this.cnv);
        
        document.getElementById("editor").appendChild(this.element);

        //this.element.addEventListener('mousedown',(e)=>{
        this.element.onmousedown=(e)=>{
            Mouse.nodeDrag =this.element;
            Mouse.nodeAnchor ={x: e.offsetX, y: e.offsetY};

            //header.innerText =e.offsetX+'px';
            //console.log(Mouse);
        };

        /*this.element.onmousedown=(e)=>{
            this.drag =true;
            // Calcula a distância entre onde o mouse clicou e os cantos da div
            this.mouseOffset = {
                x: this.element.offsetLeft -e.clientX , 
                y: this.element.offsetTop -e.clientX
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
                this.element.style.left =(e.clientX +this.mouseOffset.x) +'px';
                this.element.style.top =(e.clientY +this.mouseOffset.y) +'px';
            }

            document.querySelectorAll("p.log")[0].textContent ="client: " +e.clientX +", " +e.clientY +"; offset: " +e.offsetX +", " +e.offsetY +";";
        }*/


    }

    Update=()=>{
    
    }

}

